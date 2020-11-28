import Footer from "@ficra/components/footer";
import GetStarted from "@ficra/components/get_started/get_started";
import Head from "next/head";
import Header from "@ficra/components/header";
import Integrations from "@ficra/components/integrations/integrations";
import React from "react";

export default function Page() {
  return (
    <>
      <Head>
        <title>Ficra | Get Started</title>
      </Head>
      <Integrations />
      <Header />
      <GetStarted />
      <Footer />
    </>
  );
}
