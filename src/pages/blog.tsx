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
      <Section pageTop bg="yellow">
        <div className="flex-full-centered">
          <h1 className="padding-none margin-none">
            Featured posts by QuantStack contributors
          </h1>
          <div style={{ padding: "0 10px" }}>
            <a href={"/atom.xml"}>
              <AtomOrange width={"42px"} height={"42px"} />
            </a>
          </div>
        </div>
        <p className="text--center">
          Technical deep-dives, release notes, and perspectives from maintainers at the source. Read about the decisions, trade-offs, and discoveries that go into the tools powering modern science.
        </p>
      </Section>
      <SectionSeparator variant={1} />
      <Section>
        <BrowserOnly>{() => <BlogGrid />}</BrowserOnly>
      </Section>
      <Footer />
    </Layout>
  );
}
