import Link from "next/link";
import React from "react";

export default class Contact extends React.PureComponent {
  public static readonly CLOSER_ID = "contact";

  public render() {
    return (
      <section
        id={Contact.CLOSER_ID}
        className="relative justify-center pt-24 sm:px-12 lg:pt-32"
      >
        {this._renderIntro()}
        {this._renderButton()}
      </section>
    );
  }

  private _renderIntro() {
    return (
      <div className="lg:text-center">
        <h3 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
          Couldn't find what you wanted?
        </h3>
        <h2 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          We want to hear from you!
        </h2>
        <p className="max-w-2xl mt-4 text-base text-gray-500 sm:text-xl lg:mx-auto">
          Our product is constantly evolving, and we want to make sure we get
          your input on how you think Ficra might be able to serve you better.
        </p>
      </div>
    );
  }

  private _renderButton() {
    return (
      <Link href="mailto:hello@getficra.com">
        <a
          target="_blank"
          className="flex px-8 py-3 mx-auto mt-8 text-base font-medium text-gray-600 bg-gray-100 rounded-md max-w-max-content hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
        >
          Send us an email
        </a>
      </Link>
    );
  }
}
