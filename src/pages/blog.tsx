import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";
import Section from "../components/layout/Section";
import SectionSeparator from "../components/layout/SectionSeparator";
import AtomOrange from "/img/icons/RSSOrange.svg";
import BlogGrid from "../components/Blog";
import ScrollDownCTA from "../components/layout/ScrollDownCTA";

export default function BlogPage(): JSX.Element {
  return (
    <Layout>
      <Section pageTop fullHeight bg="yellow">
        <h1>Featured posts by QuantStack contributors</h1>
        <p className="page-tagline">From the maintainers, at the source.</p>
        <p>
          Technical deep-dives, release notes, and perspectives from the people who wrote the code. Read about the decisions, trade-offs, and discoveries that go into the tools powering modern science. From Mamba's solver design to JupyterLab's real-time collaboration protocol — these posts come from the engineers who made the calls.
        </p>
        <div style={{ display: "flex", gap: "var(--ifm-spacing-xl)", alignItems: "center", flexWrap: "wrap" }}>
          <a href={"/atom.xml"} className="link-to-button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <AtomOrange width={"20px"} height={"20px"} />
            Subscribe via RSS
          </a>
          <ScrollDownCTA label="Read posts" />
        </div>
      </Section>
      <SectionSeparator variant={1} />
      <Section>
        <BrowserOnly>{() => <BlogGrid />}</BrowserOnly>
      </Section>
      <Footer />
    </Layout>
  );
}
