import type { NextApiRequest, NextApiResponse } from "next";

import sendgrid from "@sendgrid/client";

const SENDGRID_EMAIL_TEMPLATE_ID = "d-fd20e2fe121d4351bfce42f25ff512af";
const SENDGRID_EMAIL_FROM = {
  email: "ziyad.edher@getficra.com",
  name: "Ziyad Edher",
};
const SENDGRID_WAITLIST_ID = "e51a66d3-6ad9-4cef-94b9-b7d9d5338b13";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case "POST":
      const reqJson = JSON.parse(req.body);
      if (
        !reqJson ||
        !reqJson["email"] ||
        !reqJson["first_name"] ||
        !reqJson["last_name"]
      ) {
        res.end(
          JSON.stringify({
            success: false,
            reason: "invalid-input",
          }),
        );
        return;
      }
      const body = reqJson as {
        email: string;
        first_name: string;
        last_name: string;
      };

      const searchResponse = (
        await sendgrid.request(
          {
            method: "POST",
            url: "/v3/marketing/contacts/search",
            body: {
              query: `email = '${body.email}'`,
            },
          },
          (err, response) => {
            if (err) {
              res.statusCode = err.code;
              res.end(err.message);
              console.log(err.response.body);
            }
            return response;
          },
        )
      )[1] as { contact_count: number };
      console.log(searchResponse);
      if (!searchResponse) {
        return;
      }
      if (searchResponse.contact_count) {
        res.end(
          JSON.stringify({
            success: false,
            reason: "email-exists",
          }),
        );
        return;
      }

      const contactsResponse = await sendgrid.request(
        {
          method: "PUT",
          url: "/v3/marketing/contacts",
          body: {
            list_ids: [SENDGRID_WAITLIST_ID],
            contacts: [
              {
                email: body.email.toLowerCase(),
                first_name: body.first_name,
                last_name: body.last_name,
              },
            ],
          },
        },
        (err, response) => {
          if (err) {
            res.statusCode = err.code;
            res.statusMessage = err.message;
            res.end();
            console.log(err.response.body);
          }
          return response;
        },
      );
      if (!contactsResponse) {
        return;
      }

      const sendResponse = await sendgrid.request(
        {
          method: "POST",
          url: "/v3/mail/send",
          body: {
            template_id: SENDGRID_EMAIL_TEMPLATE_ID,
            from: SENDGRID_EMAIL_FROM,
            personalizations: [
              {
                to: [
                  {
                    email: body.email,
                  },
                ],
                bcc:
                  body.email !== SENDGRID_EMAIL_FROM.email
                    ? [
                        {
                          email: "ziyad.edher@getficra.com",
                        },
                      ]
                    : null,
              },
            ],
          },
        },
        (err, response) => {
          if (err) {
            res.statusCode = err.code;
            res.end(err.message);
            console.log(err.response.body);
          }
          return response;
        },
      );
      if (!sendResponse) {
        return;
      }

      res.statusCode = 200;
      res.end(JSON.stringify({ success: true }));
      break;

    default:
      res.statusCode = 405;
      res.setHeader("Allow", ["POST"]);
      res.end(`Method ${req.method} Not Allowed`);
  }
}
