import { Html, Head, Main, NextScript } from "next/document";
import LayoutWrapper from "../components/Layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <LayoutWrapper>
          <Main />
          <NextScript />
        </LayoutWrapper>
      </body>
    </Html>
  );
}
