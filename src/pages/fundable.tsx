import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";
import Section from "../components/layout/Section";
import SectionSeparator from "../components/layout/SectionSeparator";
import LinkToContact from "../components/LinkToContact";
import { MainAreaFundableProjects } from "../components/fundable";

export function FundableContent() {
  return (
    <>
      <Section pageTop bg="yellow">
        <h1>Sponsor open-source work</h1>
        <p>High-demand open-source features with detailed plans already in place — the work is scoped, the need is proven, only funding is missing. Back a project and get it shipped.</p>
      </Section>
      <SectionSeparator variant={3} />
      <Section>
        <MainAreaFundableProjects />
        <div style={{ marginTop: "var(--ifm-spacing-3xl)" }}>
          <h2>Can't find a project?</h2>
          <p>If you have a project in mind that you think would be relevant to our expertise, please contact us to discuss it.</p>
          <LinkToContact label="CONTACT US!" />
        </div>
      </Section>
    </>
  );
}

export default function FundableProjectsPage(): JSX.Element {
  return (
    <Layout>
      <BrowserOnly>{() => <FundableContent />}</BrowserOnly>
      <Footer />
    </Layout>
  );
}
