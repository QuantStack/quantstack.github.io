import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { About } from "@site/src/components/about";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useLocation } from "@docusaurus/router";

export default function AboutPage(): JSX.Element {
  const location = useLocation().pathname;
  console.log("In components:", location);
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <BrowserOnly>{() => <About/>
    }</BrowserOnly>
    </Layout>
  );
}
