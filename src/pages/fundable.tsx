import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import FundableProjects from '../components/fundable';
import Footer from "../components/footer/Footer";

export default function FundableProjectsPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <FundableProjects />
      <Footer/>
    </Layout>
  );
}