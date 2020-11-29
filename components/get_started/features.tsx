import React from "react";

export default class Component extends React.PureComponent {
  public render() {
    return (
      <section className="relative pt-8 sm:px-12 sm:pt-12">
        {this._renderIntro()}
        {this._renderFeatureList()}
        {this._renderPricingBlurb()}
      </section>
    );
  }

  private _renderIntro() {
    return (
      <div className="lg:text-center">
        <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          Let Ficra handle your ML deployments
        </h1>
        <p className="max-w-2xl mt-4 text-base text-gray-500 sm:text-xl lg:mx-auto">
          Focus on what matters to you and leave the rest to Ficra.
        </p>
      </div>
    );
  }

  private _renderFeatureList() {
    return (
      <div className="max-w-4xl mx-auto mt-12">
        <dl className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-2 md:gap-y-4">
          {this._renderFeatureEntry("Lightning fast deployment and serving")}
          {this._renderFeatureEntry("Pay for inference, not for uptime")}
          {this._renderFeatureEntry("Fine-grained model management tools")}
          {this._renderFeatureEntry("Powerful control and analytics dashboard")}
          {this._renderFeatureEntry("Free model serving with shared instances")}
          {this._renderFeatureEntry("GPU-backed dedicated instances")}
        </dl>
      </div>
    );
  }

  private _renderPricingBlurb() {
    return (
      <div className="pt-8">
        <p className="text-center text-gray-800 text-normal">
          Get started with Ficra for{" "}
          <span className="p-2 mx-1 font-semibold text-gray-600 bg-gray-100 rounded-md">
            $0 / month
          </span>{" "}
          below!
        </p>
      </div>
    );
  }

  private _renderFeatureEntry(title: string) {
    return (
      <div className="flex p-2">
        <div className="flex-shrink-0 text-green-400">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-lg font-medium text-gray-900">{title}</p>
        </div>
      </div>
    );
  }
}
