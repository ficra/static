import Features from "@ficra/components/landing/features";
import Hero from "@ficra/components/landing/hero";
import Pricing from "@ficra/components/landing/pricing";
import React from "react";
import Usage from "@ficra/components/landing/usage";

export default class Landing extends React.PureComponent {
  public render() {
    return (
      <div className="relative z-10 mx-auto bg-white max-w-7xl sm:pb-8 md:pb-10 lg:w-full lg:pb-14 xl:pb-16">
        <main className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
          <Hero />
          <Features />
          <Usage />
          <Pricing />
        </main>
      </div>
    );
  }
}
