import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Header from "../components/Header";
import WhatWeDo from "../components/WhatWeDo";
import Projects from "../components/Projects";
import AboutQS from "../components/AboutQS";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <Header />
        <WhatWeDo />
        <Projects />
        <AboutQS />
      </main>
    </Layout>
  );
}
