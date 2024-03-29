import Contact from "./contact";
import Features from "./features";
import Hero from "./hero";
import Pricing from "./pricing";
import React from "react";
import Usage from "./usage";

export default class Landing extends React.PureComponent {
  public render() {
    return (
      <div className="relative mx-auto bg-white max-w-7xl sm:pb-8 md:pb-10 lg:w-full lg:pb-14 xl:pb-16">
        <main className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
          <Hero />
          <Features />
          <Usage />
          <Pricing />
          <Contact />
        </main>
      </div>
    );
  }
}
