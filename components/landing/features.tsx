import Image from "next/image";
import Link from "next/link";
import React from "react";

export default class Features extends React.PureComponent {
  public static readonly FEATURES_ID = "features";

  public render() {
    return (
      <section
        id={Features.FEATURES_ID}
        className="relative pt-24 sm:px-12 lg:pt-32"
      >
        {this._renderIntro()}
        {this._renderFeatures()}
        {this._renderLogos()}
        {this._renderCTA()}
      </section>
    );
  }

  private _renderIntro() {
    return (
      <div className="lg:text-center">
        <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
          Features
        </h2>
        <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          MLOps should be the easy part
        </h1>
      </div>
    );
  }

  private _renderFeatures() {
    return (
      <div>
        {this._renderFirstFeatureList()}
        {this._renderSecondFeatureList()}
      </div>
    );
  }

  private _renderFirstFeatureList() {
    return (
      <div className="mt-6">
        <p className="max-w-2xl mb-8 text-base text-gray-500 sm:text-xl lg:mx-auto lg:text-center">
          Training amazing ML models is hard enough without deployment concerns
          like infrastructure, analytics, availability, and scaling. Let Ficra
          handle that.
        </p>
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {this._renderFeatureEntry(
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>,
            "Lightning fast deployment and serving",
            "Ficra's blazingly quick routing, ultra-optimized ML model runtimes, and intuitive API interfaces help you go from science to service in no-time.",
          )}
          {this._renderFeatureEntry(
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>,
            "Pay for inference, not for uptime",
            "Paying for CPU and GPU that sit idle doing nothing is old-school. Ficra's model runtimes are so optimized that we only need to charge you for the inferences you do.",
          )}
        </div>
      </div>
    );
  }

  private _renderSecondFeatureList() {
    return (
      <div className="mt-12">
        <p className="max-w-2xl mb-8 text-base text-gray-500 sm:text-xl lg:mx-auto lg:text-center">
          Putting ML models into production is more than just spinning up a
          server. Ficra provides you with the tools you need to manage your ML
          deployments.
        </p>
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {this._renderFeatureEntry(
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>,
            "Fine-grained model management tools",
            "A/B testing, automatic scaling, model version control, and automatic rollbacks are just some of the features that Ficra provides right out of the box.",
          )}
          {this._renderFeatureEntry(
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>,
            "Powerful control and analytics dashboard",
            "Easily control and manage your deployments and view model runtime analytics through Ficra's intuitive user interface.",
          )}
        </div>
      </div>
    );
  }

  private _renderLogos() {
    return (
      <div className="mt-12">
        <p className="mx-auto text-lg text-center text-gray-600">
          If your model converts to an{" "}
          <Link href="https://onnx.ai">
            <a className="text-blue-500 hover:text-blue-600" target="_blank">
              ONNX
            </a>
          </Link>{" "}
          format, we support it!
        </p>
        <div className="flex items-center justify-center mt-8 space-x-8">
          {this._renderLogo(
            "https://scikit-learn.org",
            "/images/sklearn-logo.png",
          )}
          {this._renderLogo(
            "https://tensorflow.org",
            "/images/tensorflow-logo.png",
          )}
          {this._renderLogo("https://pytorch.org", "/images/pytorch-logo.png")}
          <div className="hidden md:flex">
            {this._renderLogo("https://keras.io/", "/images/keras-logo.png")}
          </div>
          <div className="hidden md:flex">
            {this._renderLogo(
              "https://mxnet.apache.org/",
              "/images/mxnet-logo.png",
            )}
          </div>
          <div className="hidden md:flex">
            {this._renderLogo(
              "http://www.deeplearning.net/software/theano",
              "/images/theano-logo.png",
            )}
          </div>
        </div>
      </div>
    );
  }

  private _renderCTA() {
    return (
      <div className="mt-12">
        <div className="max-w-xs mx-auto rounded-md shadow-sm">
          <Link href="/get-started">
            <a className="flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-600 bg-transparent border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white md:py-4 md:text-lg md:px-10">
              Get Started for Free
            </a>
          </Link>
        </div>
      </div>
    );
  }

  private _renderFeatureEntry(
    icon: JSX.Element,
    title: string,
    content: string,
  ) {
    return (
      <div className="flex p-8 shadow-sm bg-gray-50 rounded-3xl">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-lg">
            {icon}
          </div>
        </div>
        <div className="ml-4">
          <dt className="text-lg font-medium leading-6 text-gray-900">
            {title}
          </dt>
          <dd className="mt-2 text-base text-gray-500">{content}</dd>
        </div>
      </div>
    );
  }

  private _renderLogo(link: string, logo: string) {
    return (
      <div className="relative flex-shrink-0 w-24 h-24">
        <Link href={link}>
          <a target="_blank">
            <Image src={logo} layout="fill" objectFit="contain"></Image>
          </a>
        </Link>
      </div>
    );
  }
}
