import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";
import Section from "../components/layout/Section";
import SectionSeparator from "../components/layout/SectionSeparator";
import AtomOrange from "/img/icons/RSSOrange.svg";
import BlogGrid from "../components/Blog";

export default function BlogPage(): JSX.Element {
  return (
    <Layout>
      <Section pageTop fullHeight bg="yellow">
        <h1>Featured posts by QuantStack contributors</h1>
        <p className="page-tagline">From the maintainers, at the source.</p>
        <p>
          Technical deep-dives, release notes, and perspectives from the people who wrote the code. Read about the decisions, trade-offs, and discoveries that go into the tools powering modern science.
        </p>
        <a href={"/atom.xml"} className="link-to-button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <AtomOrange width={"20px"} height={"20px"} />
          Subscribe via RSS
        </a>
      </Section>
      <SectionSeparator variant={1} />
      <Section>
        <BrowserOnly>{() => <BlogGrid />}</BrowserOnly>
      </Section>
      <Footer />
    </Layout>
  );
}
