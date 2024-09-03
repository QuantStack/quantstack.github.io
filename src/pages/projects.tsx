import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Projects from "@site/src/components/projects";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";

export default function ProjectsPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <BrowserOnly>{() => <Projects />}</BrowserOnly>
      <Footer />
    </Layout>
  );
}
