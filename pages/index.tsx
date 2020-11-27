import Head from "next/head";
import Landing from "@ficra/components/landing/landing";
import Nav from "@ficra/components/nav";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ficra | Supercharge your Machine Learning Deployment</title>
      </Head>
      <Nav />
      <Landing />
    </>
  );
}
