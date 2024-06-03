import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Home from "../components/home/Home";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function HomePage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
      <BrowserOnly>{() => <Home />}</BrowserOnly>
      </main>
    </Layout>
  );
}
