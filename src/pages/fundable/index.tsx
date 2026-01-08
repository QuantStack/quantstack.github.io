import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import FundableProjects from '@site/src/components/fundable';
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