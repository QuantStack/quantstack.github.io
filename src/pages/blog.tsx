import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BlogsComponent from "../components/blog";
import { blogpostsDetails } from "../components/blog/blogpostsDetails";
import Footer from "../components/footer/Footer";


export default function BlogPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <BlogsComponent blogpostsDetails={blogpostsDetails} />
      <Footer/>
    </Layout>
  );
}
