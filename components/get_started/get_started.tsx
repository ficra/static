import Features from "./features";
import Form from "./form";
import React from "react";

export default class Landing extends React.PureComponent {
  public render() {
    return (
      <div className="relative mx-auto bg-white max-w-7xl sm:pb-8 md:pb-10 lg:w-full lg:pb-14 xl:pb-16">
        <main className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
          <Features />
          <Form />
        </main>
      </div>
    );
  }
}
