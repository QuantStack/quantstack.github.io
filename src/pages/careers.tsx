import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Careers from '../components/careers';
import Footer from "../components/footer/Footer";


export default function CareersPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <Careers />
      <Footer/>
    </Layout>
  );
}

