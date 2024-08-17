import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BlogsComponent from "../components/blog";
import blogpostDetails from "@site/src/components/blog/blogpostsDetails.json";
import Footer from "../components/footer/Footer";


export default function BlogPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <BlogsComponent blogpostsDetails={blogpostDetails} />
      <Footer/>
    </Layout>
  );
}
