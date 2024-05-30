import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Projects from "@site/src/components/projects";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function ProjectsPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <BrowserOnly>
     {() => <Projects/>}
      </BrowserOnly>
    </Layout>
  );
}
