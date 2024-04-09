import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function Contact(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`QuantStack ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
    </Layout>
  
  );
}
