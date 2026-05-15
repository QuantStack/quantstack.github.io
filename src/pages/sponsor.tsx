import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";
import Section from "../components/layout/Section";
import SectionSeparator from "../components/layout/SectionSeparator";
import Banner from "../components/layout/Banner";
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
      </Section>
      <Banner
        bg="dark"
        title="Can't find a project?"
        cta={<LinkToContact label="CONTACT US" />}
      >
        If you have a project in mind that you think would be relevant to our expertise, contact us to discuss it.
      </Banner>
    </>
  );
}

export default function SponsorPage(): JSX.Element {
  return (
    <Layout>
      <BrowserOnly>{() => <FundableContent />}</BrowserOnly>
      <Footer />
    </Layout>
  );
}
