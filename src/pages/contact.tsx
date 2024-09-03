import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Contact from "@site/src/components/contact";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";

export default function ContactPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <BrowserOnly>{() => <Contact />}</BrowserOnly>
      <Footer/>
    </Layout>
  );
}
