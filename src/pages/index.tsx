import Head from "next/head";
import { Inter } from "@next/font/google";

// import components
import Margins from "../components/Layout/Margins";
import Hero from "../components/FlexibleContentRows/Hero";
import Faq from "../components/FlexibleContentRows/Faq";
import Carousel from "../components/FlexibleContentRows/Carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Margins size="lg">
        <main className="">
          <Hero />
          <Faq />
          <Carousel />
        </main>
      </Margins>
    </>
  );
}
