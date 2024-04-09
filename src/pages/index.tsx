import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Header from "../components/LandingPage";
import WhatWeDo from "../components/WhatWeDo";
import Projects from "../components/Projects";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <Header />
        <WhatWeDo />
        <Projects/>

      </main>
    </Layout>
  );
}
