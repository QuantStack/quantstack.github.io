import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "../components/home/Hero";
import WhatWeDo from "../components/home/WhatWeDo";
import ProjectsOverview from "../components/home/ProjectsOverview";
import AboutQS from "../components/home/AboutQS";
import News from "../components/home/News";

export default function HomePage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <Hero />
        <WhatWeDo />
        <ProjectsOverview />
        <AboutQS />
        <News />
      </main>
    </Layout>
  );
}
