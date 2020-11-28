import Link from "next/link";
import React from "react";

export default class Pricing extends React.PureComponent {
  public static readonly PRICING_ID = "pricing";

  public render() {
    return (
      <section
        id={Pricing.PRICING_ID}
        className="relative justify-center pt-24 sm:px-12 lg:pt-32"
      >
        {this._renderIntro()}
        {this._renderPricingCards()}
      </section>
    );
  }

  private _renderIntro() {
    return (
      <div className="lg:text-center">
        <h3 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
          Pricing
        </h3>
        <h2 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          Pricing that doesn't hold you back
        </h2>
        <p className="max-w-2xl mt-4 text-base text-gray-500 sm:text-xl lg:mx-auto">
          Reliable ML deployments shouldn't just be in the hands of the big
          players.
        </p>
      </div>
    );
  }

  private _renderPricingCards() {
    return (
      <div className="max-w-3xl mx-auto mt-12 space-y-8 lg:space-y-0 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-12">
        {this._renderPricingCard({
          title: "Starter",
          subtitle:
            "Experience streamlined model deployment and reliable inference with Ficra's free offering.",
          content: [
            ["Access to Ficra's free shared instance", true],
            ["Up to 2 concurrent model deployments", true],
            ["Basic model analytics and reporting", true],
            ["Basic model management tools", true],
            ["Limited model requests and sizes", false],
            ["No GPU inference", false],
          ],
        })}
        {this._renderPricingCard({
          title: "Team",
          subtitle:
            "Revolutionize your team's model deployment pipeline with Ficra.",
          content: [
            ["Access to both shared and dedicated instances", true],
            ["Up to 16 concurrent model deployments", true],
            ["Advanced model analytics and reporting", true],
            ["Advanced model management tools", true],
            ["Unlimited model requests and sizes", true],
            ["GPU-backed instances", true],
          ],
          comingSoon: true,
        })}
      </div>
    );
  }

  private _renderPricingCard({
    title,
    subtitle,
    content,
    comingSoon,
  }: {
    title: string;
    subtitle: string;
    content: [string, boolean][];
    comingSoon?: boolean;
  }) {
    const checkmark = (
      <svg
        className="flex-shrink-0 inline w-6 h-6 text-green-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
    );
    const crossmark = (
      <svg
        className="flex-shrink-0 inline w-6 h-6 text-red-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    );

    function renderList() {
      let key = 0;
      const items = [];
      for (const [stringContent, isChecked] of content) {
        items.push(
          <li key={key}>
            <p className="flex items-center space-x-4 text-base leading-6 text-gray-600">
              {isChecked ? checkmark : crossmark}
              <span className="ml-2">{stringContent}</span>
            </p>
          </li>,
        );
        key += 1;
      }
      return items;
    }

    return (
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div className="px-6 py-6 sm:px-10 bg-gray-50">
          <div className="flex items-center mt-4 text-2xl font-extrabold leading-none sm:text-3xl">
            {title}
            {comingSoon ? (
              <span className="inline-flex ml-4 px-3 py-0.5 -mb-2 rounded-md text-xs sm:text-sm leading-5 font-semibold tracking-wide uppercase bg-blue-100 text-blue-600">
                Coming Soon
              </span>
            ) : null}
          </div>
          <p className="mt-6 text-base leading-7 text-gray-500 sm:text-lg">
            {subtitle}
          </p>
        </div>
        <div className="px-6 pt-6 pb-8 bg-white sm:p-10">
          <ul className="mb-10 space-y-6">{renderList()}</ul>
          <div className="flex items-center mt-6">
            <div className="rounded-md shadow-sm max-w-max-content">
              {comingSoon ? (
                <Link href="mailto:hello@getficra.com">
                  <a
                    target="_blank"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </a>
                </Link>
              ) : (
                <Link href="/get-started">
                  <a className="flex items-center justify-center w-full px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 md:py-4 md:text-lg md:px-8">
                    Get Started for Free
                  </a>
                </Link>
              )}
            </div>
            {comingSoon ? null : (
              <div className="ml-4 text-base font-bold text-gray-600">
                $0/month
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
