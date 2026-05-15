import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";
import Section from "../components/layout/Section";
import SectionSeparator from "../components/layout/SectionSeparator";
import SplitSection from "../components/layout/SplitSection";
import Banner from "../components/layout/Banner";
import LinkToContact from "../components/LinkToContact";

import SupportIllustration from "/img/illustrations/support.svg";
import SpecialProjectsIllustration from "@site/static/img/illustrations/special_projects.svg";

function ServicesContent() {
  return (
    <>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <Section pageTop bg="yellow">
        <h1>Hire the team that built the tools you depend on.</h1>
        <p>
          Bloomberg, AWS, Safran, ESA, and the Gates Foundation work with us because there is
          no shortcut to deep expertise. Whether you need a support retainer, a custom feature,
          or a long-term engineering partner — you talk to the people who wrote the code.
        </p>
        <LinkToContact label="Get in touch" />
      </Section>

      <SectionSeparator variant={4} />

      {/* ── Support Retainer ──────────────────────────────────────────────── */}
      <SplitSection
        ratio="50/50"
        reverse
        image={
          <SupportIllustration
            height="280px"
            alt="Illustration for the support section."
          />
        }
      >
        <h2>Support Retainer</h2>
        <p>
          We support organizations that build on Jupyter, Mamba, conda-forge, Apache Arrow,
          or the broader PyData stack.
        </p>
        <p>
          A QuantStack support retainer gives you direct access to the upstream maintainers —
          not a helpdesk. We triage issues, review pull requests, advise on architecture, and
          take ownership of problems your team cannot solve alone.
        </p>
        <p>
          Our clients include AWS, Bloomberg, Safran, and the European Space Agency. We have
          supported financial firms running Jupyter at scale, aerospace engineers building
          domain-specific extensions, and research institutions deploying open-source
          infrastructure for thousands of users.
        </p>
      </SplitSection>

      <SectionSeparator variant={5} />

      {/* ── Custom Engineering ────────────────────────────────────────────── */}
      <SplitSection
        ratio="50/50"
        bg="white"
        image={
          <SpecialProjectsIllustration
            alt="Illustration of a group of people working together."
            height="300px"
          />
        }
      >
        <h2>Custom Engineering</h2>
        <p>
          We take on custom engineering projects that push the boundaries of what open-source
          can do.
        </p>
        <p>
          Recent examples: JupyterGIS, a collaborative geospatial platform for ESA and research
          institutions; JupyterCAD, real-time collaborative 3D CAD editing for Safran Aircraft
          Engines; notebook.link, our browser-native Jupyter product built on JupyterLite.
        </p>
        <p>
          These projects are built on our open-source stack and contributed back to the community
          wherever possible. If you have a hard problem at the intersection of open-source,
          scientific computing, and engineering — we want to hear about it.
        </p>
      </SplitSection>

      <SectionSeparator variant={6} />

      {/* ── Funded Development ────────────────────────────────────────────── */}
      <Section>
        <h2>Funded Development</h2>
        <p>
          Need a specific fix or feature in Mamba, JupyterLab, Arrow, or another project we
          maintain? We implement it upstream.
        </p>
        <p>
          You get the feature. The community maintains it going forward. No fork, no long-term
          maintenance burden on your team. This is the most efficient way to get exactly what
          you need from a project you already depend on.
        </p>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <Banner
        bg="dark"
        title="Ready to work together?"
        cta={<LinkToContact label="GET IN TOUCH" />}
      >
        Tell us what you're building. We'll tell you honestly whether and how we can help.
      </Banner>
    </>
  );
}

export default function ServicesPage(): JSX.Element {
  return (
    <Layout>
      <BrowserOnly>{() => <ServicesContent />}</BrowserOnly>
      <Footer />
    </Layout>
  );
}
