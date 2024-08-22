import Layout from "@theme/Layout";
import { About } from "@site/src/components/about";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useRef } from "react";

export default function AboutPage(): JSX.Element {
  const elementRef = useRef(null);
  console.log('elementRef:', elementRef)
  return (
    <Layout>
      <BrowserOnly>{() => <About/>}</BrowserOnly>
    </Layout>
  );
}
