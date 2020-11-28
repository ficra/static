import Link from "next/link";
import React from "react";

export default class Footer extends React.PureComponent {
  public render() {
    return (
      <div>
        <div className="mt-12 bg-gradient-to-r from-blue-700 to-blue-500">
          <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="max-w-xl text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10">
              Get Ficra and supercharge your machine learning deployment.
            </h2>
            <div className="flex mt-8 lg:flex-shrink-0 lg:mt-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/get-started"
                  className="inline-flex items-center justify-center px-16 py-4 text-base font-bold leading-6 text-blue-700 bg-white rounded-md hover:text-blue-500"
                >
                  Get Started for Free
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full p-8 space-y-4 text-center bg-gray-100">
          <Link href="mailto:hello@getficra.com">
            <a
              className="px-4 py-2 text-sm text-gray-600 rounded-lg hover:shadow-inner hover:bg-gray-200"
              target="_blank"
            >
              hello@getficra.com
            </a>
          </Link>

          <p className="items-center text-sm text-gray-400">
            With{" "}
            <Link href="https://heroicons.dev/">
              <a target="_blank">
                <svg
                  className="inline w-4 h-4 my-auto -mt-1 hover:text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </a>
            </Link>{" "}
            from Vancouver, Canada
          </p>
          <p className="text-sm text-gray-300">Ficra, Inc.</p>
        </footer>
      </div>
    );
  }
}
