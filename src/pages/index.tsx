import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "../components/LandingPage/Hero";
import WhatWeDo from "../components/LandingPage/WhatWeDo";
import ProjectsOverview from "../components/LandingPage/ProjectsOverview";
import AboutQS from "../components/LandingPage/AboutQS";

export default function LandingPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <Hero />
        <WhatWeDo />
        <ProjectsOverview />
        <AboutQS />
      </main>
    </Layout>
  );
}
