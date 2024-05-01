import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Services from "../components/services";

export default function ServicesPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <Services />
    </Layout>
  );
}
