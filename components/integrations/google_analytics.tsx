import React from "react";

export default class GoogleAnalytics extends React.PureComponent {
  public render() {
    return (
      <>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z7CJDE34T4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Z7CJDE34T4');
            `,
          }}
        />
      </>
    );
  }
}
