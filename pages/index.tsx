import Footer from "@ficra/components/footer";
import Head from "next/head";
import Header from "@ficra/components/header";
import Integrations from "@ficra/components/integrations/integrations";
import Landing from "@ficra/components/landing/landing";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ficra | Supercharge your Machine Learning Deployment</title>
      </Head>
      <Integrations />
      <Header />
      <Landing />
      <Footer />
    </>
  );
}
