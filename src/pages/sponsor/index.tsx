import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { FundableContent as FundableProjects } from '@site/src/pages/sponsor';
import Footer from '@site/src/components/footer/Footer';

export default function FundablePage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <FundableProjects />
      <Footer/>
    </Layout>
  );
}