import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Footer from "../components/footer/Footer";
import Section from "../components/layout/Section";
import SectionSeparator from "../components/layout/SectionSeparator";
import SplitSection from "../components/layout/SplitSection";
import Banner from "../components/layout/Banner";
import Card from "../components/layout/Card";
import CardGrid from "../components/layout/CardGrid";
import LogoGrid from "../components/LogoGrid";
import LinkToNotebookLink from "../components/LinkToNotebookLink";
import BlogpostCard from "../components/BlogpostCard";
import { blogpostsDetails } from "./blogs/_blogpostsDetails";
import styles from "./index.module.css";

import Astronaut from "/img/quantstack/astronaut.svg";
import GroupPhotoUrl from "@site/static/img/group/QuantStack-2000-58.png";
import JupyterPictureUrl from "@site/static/img/projects/jupyterlab_examples.png";
import MambaPictureUrl from "@site/static/img/projects/mamba_console.png";
import SpecialProjectsPictureUrl from "@site/static/img/projects/special_projects.png";
import RoboticsPictureUrl from "@site/static/img/projects/robotics.png";
import XTensorXSIMDPicture from "@site/static/img/projects/xtensor_xsimd.svg";
import ApacheArrowPicture from "@site/static/img/projects/apache_arrow.svg";

function HomeContent() {
  const numberOfBlogs = blogpostsDetails.length;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className={styles.hero_container}>
        <div className="page-content" style={{ position: "relative", zIndex: 2 }}>
          <div className={styles.hero_body}>
            <div className={styles.hero_text}>
              <h1 className={`padding-none ${styles.hero_title}`}>QUANTSTACK</h1>
              <p className={styles.tech_tagline}>
                OPEN TOOLS FOR DATA SCIENCE AND SCIENTIFIC COMPUTE
              </p>
              <p className={styles.sub_header}>
                From Jupyter to Mamba to Apache Arrow, we maintain the stack millions of
                researchers, engineers, and students depend on. Today we're also building
                notebook.link to ship entire compute environments right your browser.
              </p>
            </div>
            <div className={styles.hero_image}>
              <Astronaut alt="Astronaut mascot of QuantStack" width="300px" height="300px" />
            </div>
          </div>
        </div>
      </div>

      <SectionSeparator variant={1} />

      {/* ── Trusted By ────────────────────────────────────────────────────── */}
      <Section fullHeight>
        <h2 className="text--center">Trusted by</h2>
        <LogoGrid />
      </Section>

      <SectionSeparator variant={2} />

      {/* ── How we work with you (services) ───────────────────────────────── */}
      <Section fullHeight>
        <div className={styles.services_link_mobile}>
          <Link className={`link-to-button ${styles.link_to_services}`} href="/services/">DISCOVER OUR SERVICES</Link>
        </div>
        <h2 className="text--center">How we work with you</h2>
        <CardGrid cols={3}>
          <li>
            <Card bg="transparent" className={styles.topics_card}>
              <div className={styles.topics_header}>Support Retainer</div>
              <p>Direct access to the upstream maintainers of the tools your team depends on — not a helpdesk.</p>
              <p>We triage issues, review pull requests, advise on architecture, and take ownership of problems your team cannot solve alone. Our clients include AWS, Bloomberg, Safran, and the European Space Agency.</p>
            </Card>
          </li>
          <li>
            <Card bg="transparent" className={styles.topics_card}>
              <div className={styles.topics_header}>Custom Engineering</div>
              <p>We build tools and platforms at the frontier of open-source scientific computing.</p>
              <p>Recent examples: JupyterGIS for ESA, JupyterCAD for Safran Aircraft Engines, notebook.link. Everything we build goes back upstream wherever possible.</p>
            </Card>
          </li>
          <li>
            <Card bg="transparent" className={styles.topics_card}>
              <div className={styles.topics_header}>Funded Development</div>
              <p>Need a specific fix or feature in Mamba, JupyterLab, Arrow, or another project we maintain? We implement it upstream.</p>
              <p>You get the feature. The community maintains it. No fork, no long-term maintenance burden on your team.</p>
            </Card>
          </li>
        </CardGrid>
        <div className={styles.projects_link}>
          <Link className={`link-to-button ${styles.link_to}`} href="/projects">DISCOVER ALL OF OUR PROJECTS</Link>
          <div className={styles.services_link_desktop}>
            <Link className={`link-to-button ${styles.link_to_services}`} href="/services/">DISCOVER OUR SERVICES</Link>
          </div>
        </div>
      </Section>

      <SectionSeparator variant={3} />

      {/* ── What we work on (projects) ────────────────────────────────────── */}
      <div className={styles.projects_overview_container}>
        <Section>
          <h2 className="text--center">What we work on</h2>
        </Section>

        <SplitSection image={<img src={JupyterPictureUrl} alt="JupyterLab interfaces" style={{ maxWidth: "100%" }} />}>
          <h2 className="padding-none">Jupyter Ecosystem</h2>
          <p className={styles.tagline}>Core contributors to JupyterLab, JupyterLite, Voilà, and the broader Jupyter ecosystem.</p>
          <p>We co-founded JupyterLab and JupyterLite — the browser-native Jupyter that runs without a server. Our team drives real-time collaboration, AI integration, and the visual debugger across the Jupyter stack, and maintains Voilà, xeus, JupyterGIS, and JupyterCAD. JupyterLab reaches over 10 million users worldwide; JupyterLite serves hundreds of thousands of students on minimal infrastructure.</p>
        </SplitSection>

        <SplitSection reverse image={<img src={MambaPictureUrl} alt="Mamba terminal" style={{ maxWidth: "100%" }} />}>
          <h2 className="padding-none">Package Management</h2>
          <p className={styles.tagline}>We created Mamba, the fast conda replacement serving 5 million downloads per month.</p>
          <p>We created Mamba, the fast, reliable conda replacement now serving 5 million downloads per month. We co-maintain conda-forge, delivering over 1 billion package downloads per month, and built emscripten-forge — the package forge that brings the full multilingual scientific computing stack to WebAssembly.</p>
        </SplitSection>

        <SplitSection image={<img src={SpecialProjectsPictureUrl} alt="JupyterCAD projects" style={{ maxWidth: "100%", maxHeight: "500px", objectFit: "contain" }} />}>
          <h2 className="padding-none">Bespoke Platforms</h2>
          <p className={styles.tagline}>Platforms built on our open-source stack for clients and the community.</p>
          <ul>
            <li><strong>JupyterCAD</strong> — real-time collaborative 3D CAD editing, built for Safran Aircraft Engines.</li>
            <li><strong>JupyterGIS</strong> — collaborative geospatial platform for ESA and research institutions.</li>
          </ul>
        </SplitSection>

        <SplitSection reverse image={<img src={RoboticsPictureUrl} alt="Robotics in JupyterLab" style={{ maxWidth: "100%" }} />}>
          <h2 className="padding-none">Robotics</h2>
          <p className={styles.tagline}>Creators of RoboStack, the first multi-platform ROS distribution, and maintainers of jupyter-ros.</p>
          <p>We created RoboStack, the first multi-platform distribution of ROS as conda packages, enabling robotics development on Linux, macOS, and Windows without system dependencies. We maintain jupyter-ros, a JupyterLab-based development environment for the ROS ecosystem.</p>
        </SplitSection>

        <SplitSection image={<XTensorXSIMDPicture style={{ maxWidth: "100%" }} />}>
          <h2 className="padding-none">Scientific Computing</h2>
          <p className={styles.tagline}>Authors of xtensor and xsimd, adopted by Apache Arrow, Firefox, and Pythran.</p>
          <p>We authored xtensor, a multi-dimensional array library for C++ with a NumPy-style API, and xsimd, a unified SIMD operations library adopted by Apache Arrow, Firefox, Krita, and Pythran.</p>
        </SplitSection>

        <SplitSection reverse image={<ApacheArrowPicture style={{ maxWidth: "100%" }} />}>
          <h2 className="padding-none">Data Infrastructure</h2>
          <p className={styles.tagline}>Principal maintainers of Apache Arrow's C++ core.</p>
          <p>We are principal maintainers of Apache Arrow's C++ core — the in-memory columnar format underpinning most of the modern data ecosystem. We also maintain Apache Parquet, the dominant columnar storage format for analytics workloads.</p>
        </SplitSection>
      </div>

      {/* ── notebook.link ─────────────────────────────────────────────────── */}
      <Banner
        bg="dark"
        fullHeight
        title="Our product: notebook.link"
        cta={<LinkToNotebookLink label="Try it for free" />}
      >
        A full Jupyter environment as a link. Instant setup, no server, no hassle. Sandboxed
        compute runs in the browser, powered by WebAssembly and emscripten-forge. For{" "}
        <span className={styles.accent}>universities</span> replacing JupyterHub, for{" "}
        <span className={styles.accent}>researchers</span> sharing reproducible work, for{" "}
        <span className={styles.accent}>enterprise data teams</span>, and for{" "}
        <span className={styles.accent}>public data portals</span> serving millions of visitors
        at near-zero infrastructure cost.
      </Banner>

      {/* ── About us ──────────────────────────────────────────────────────── */}
      <Section fullHeight>
        <h2 className="text--center">About us</h2>
        <div className="flex-full-centered">
          <img
            src={GroupPhotoUrl}
            alt="QuantStack team photo"
            style={{ width: "100%", maxWidth: "800px", marginBottom: "var(--ifm-spacing-2xl)" }}
          />
        </div>
        <p className={styles.aboutQS_text}>
          QuantStack was founded in 2016. Today we operate as a collective of about 30 engineers
          contributing remotely or from our offices in Paris to the global open-source stack and
          to our clients' projects. Many of us have PhD-level research experience or deep
          engineering backgrounds. Our team combines decades of senior experience with the fresh
          creativity and energy from more recent contributors.
        </p>
        <div className={styles.learn_more_button_container}>
          <Link className={`link-to-button ${styles.link_to_about_us}`} href="/about">Learn more</Link>
        </div>
      </Section>

      <SectionSeparator variant={6} />

      {/* ── Recent blog posts ─────────────────────────────────────────────── */}
      <div className={styles.news_wrapper}>
        <Section fullHeight>
          <h2 className="text--center">Recent blog contributions</h2>
          <CardGrid cols={3}>
            {[0, 1, 2].map((i) => (
              <li key={i}>
                <BlogpostCard blogpost={blogpostsDetails[i]} timeIndex={numberOfBlogs - i} />
              </li>
            ))}
          </CardGrid>
          <div className="flex-full-centered" style={{ marginTop: "var(--ifm-spacing-xl)" }}>
            <Link className={`link-to-button ${styles.link_to}`} href="/blog">READ MORE POSTS</Link>
          </div>
        </Section>
      </div>

      {/* ── End CTA ───────────────────────────────────────────────────────── */}
      <Banner
        bg="dark"
        fullHeight
        title="Work with the people who built it."
        cta={
          <div className="flex-full-centered">
            <Link className="link-to-button" href="/contact">SCHEDULE A MEETING</Link>
          </div>
        }
      >
        Support retainer, custom feature, or a full engineering engagement —
        you work directly with the upstream maintainers of the tools your team depends on.
      </Banner>
    </>
  );
}

export default function QSWebsite(): JSX.Element {
  return (
    <Layout>
      <BrowserOnly>{() => <HomeContent />}</BrowserOnly>
      <Footer />
    </Layout>
  );
}
