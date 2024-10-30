import Layout from "@theme/Layout";
import { About } from "@site/src/components/about";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function AboutPage(): JSX.Element {
  return (
    <Layout>
      <BrowserOnly>{() => <About/>}</BrowserOnly>
    </Layout>
  );
}
