import Link from "next/link";
import React from "react";

export default class Hero extends React.PureComponent {
  public static readonly HERO_ID = "hero";

  public render() {
    return (
      <section
        id={Hero.HERO_ID}
        className="relative flex justify-center space-x-20 overflow-hidden sm:pb-12"
      >
        {this._renderText()}
        {this._renderImage()}
      </section>
    );
  }

  private _renderText() {
    return (
      <div className="flex-auto pt-10 text-left sm:text-center lg:text-left sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28">
        <h1 className="max-w-xl mx-auto text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:mx-0 md:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
            Supercharge
          </span>{" "}
          your <br />
          <span className="sm:block">Machine Learning Deployment</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Say good-bye to expensive and redundant ML model deployment routines!
          Start using <span>Ficra</span> for{" "}
          <span className="font-semibold">free</span> to streamline your
          production ML operations.
        </p>
        <div className="mt-5 space-y-4 sm:space-y-0 sm:space-x-8 sm:flex sm:justify-center sm:mt-12 lg:justify-start">
          <div className="rounded-md shadow-sm">
            <Link href="#">
              <a className="flex items-center justify-center px-8 py-3 text-base font-semibold text-white rounded-md bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-900 hover:to-blue-700 md:py-4 md:text-lg md:px-10">
                Get Started for Free
              </a>
            </Link>
          </div>
          <div className="rounded-md">
            <Link href="#features">
              <a className="flex items-center justify-center px-8 py-3 text-base font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-md hover:bg-gray-200 hover:border-gray-200 md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  private _renderImage() {
    return (
      <div className="absolute right-0 hidden w-1/2 h-full lg:block">
        <svg
          className="absolute inset-y-0 left-0 z-10 w-48 h-full text-white"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="0,0 100,0 50,100 0,100" />
        </svg>
        <img
          className="absolute inset-y-0 right-0 object-cover w-full h-full transform translate-x-24"
          src="/images/bolt.jpeg"
          alt=""
        />
      </div>
    );
  }
}
