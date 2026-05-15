import Layout from "@theme/Layout";
import NotebookLinkPage from "../components/notebooklink";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";

export default function NotebookLink(): JSX.Element {
  return (
    <Layout>
      <BrowserOnly>{() => <NotebookLinkPage />}</BrowserOnly>
      <Footer />
    </Layout>
  );
}
