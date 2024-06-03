import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import About from "../components/about";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function AboutPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <BrowserOnly>{() => <About />}</BrowserOnly>
    </Layout>
  );
}
