import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Services from "../components/services";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";

export default function ServicesPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <BrowserOnly>
     {() => <Services/>}
      </BrowserOnly>
      <Footer/>
    </Layout>
  );
}
