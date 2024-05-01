import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Contact from "../components/contact";

export default function ContactPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <Contact />
    </Layout>
  );
}
