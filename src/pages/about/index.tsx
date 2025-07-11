import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {About} from "@site/src/components/about";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "@site/src/components/footer/Footer";

export default function AboutPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <BrowserOnly>{() => <About />}</BrowserOnly>
      <Footer/>
    </Layout>
  );
}
