import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";
import SplitSection from "../components/layout/SplitSection";
import Section from "../components/layout/Section";
import SectionSeparator from "../components/layout/SectionSeparator";
import CardGrid from "../components/layout/CardGrid";
import Card from "../components/layout/Card";
import Banner from "../components/layout/Banner";
import Rocket from "/img/notebooklink/rocket.svg";
import LinkToNotebookLink from "../components/LinkToNotebookLink";
import styles from "./notebooklink.module.css";

function NotebookLinkContent() {
  return (
    <>
      <SplitSection
        bg="dark"
        pageTop
        fullHeight
        image={
          <Rocket
            alt="Notebook.link rocket illustration"
            width="280px"
            height="280px"
          />
        }
      >
        <h1 className="padding-none">Our product: Notebook.link</h1>
        <p className={styles.subtitle}>Browser-native scientific computing. Large-scale deployments, no server, no setup, no limits.</p>
        <LinkToNotebookLink label="Get started — it's free" />
      </SplitSection>

      <Section>
        <h2>A complete compute environment in a link.</h2>
        <p>
          Notebook.link delivers a full Jupyter environment running entirely in the browser —
          powered by WebAssembly. No installation, no server spin-up, no IT ticket.
          Click the link, start computing.
        </p>
        <p>
          Built on JupyterLite and emscripten-forge, our open-source stack that brings
          the complete scientific ecosystem — NumPy, SciPy, Pandas, Matplotlib,
          and hundreds more including in C, R, Fortran and other languages — to any modern browser. The compute runs on your users' devices,
          not our servers. That means it scales to any number of users for the cost of file storage.
        </p>
      </Section>

      <Section bg="dark">
        <h2 className="text--center">Proven at scale.</h2>
        <p className="text--center">
          The technology has been tested to deploy notebooks to tens of thousands of concurrent users
          — just from standard static web servers. Zero compute infrastructure cost per user.
        </p>
        <CardGrid cols={3}>
          <li>
            <Card bg="transparent">
              <div className={styles.feature_title}>hundres of thousands of students</div>
              <p>JupyterLite — the same engine powering notebook.link — has been tested with hundreds of thousands of users.</p>
            </Card>
          </li>
          <li>
            <Card bg="transparent">
              <div className={styles.feature_title}>orders of magnitude cheaper</div>
              <p>Compared to JupyterHub, or other commercial platforms. Because users bring their own compute, we only add the comfort layer, your cost remains low.</p>
            </Card>
          </li>
          <li>
            <Card bg="transparent">
              <div className={styles.feature_title}>Order-0 scaling</div>
              <p>More users don't mean more servers. Browser-based execution means your platform scales without your costs scaling with it.</p>
            </Card>
          </li>
        </CardGrid>
      </Section>

      <Section>
        <h2 className="text--center">Built for every use case.</h2>
        <CardGrid cols={3}>
          <li>
            <Card>
              <div className={styles.feature_title}>Education</div>
              <p>Replace JupyterHub for your institution. No containers per student, no DevOps burden, no IT tickets. LMS integration via LTI. Gradable notebooks with encrypted solutions.</p>
            </Card>
          </li>
          <li>
            <Card>
              <div className={styles.feature_title}>Research</div>
              <p>Share reproducible work as a link. Byte-identical WASM environments mean your results are reproducible — not just in theory, but in practice. Computational irreproducibility costs billions annually.</p>
            </Card>
          </li>
          <li>
            <Card>
              <div className={styles.feature_title}>Enterprise data platforms</div>
              <p>Give internal analysts a Jupyter environment without the security overhead of local installs or the cost of per-user cloud kernels. SSO, RBAC, and audit logging on the roadmap. Backend kernels still available on demand.</p>
            </Card>
          </li>
          <li>
            <Card>
              <div className={styles.feature_title}>Public data portals</div>
              <p>Let millions of visitors interact with your data — including geospatial datasets via JupyterGIS or other advanced IDEs — without provisioning a single compute server. Data stays in the browser, GDPR-compliant by architecture.</p>
            </Card>
          </li>
          <li>
            <Card>
              <div className={styles.feature_title}>Agentic AI</div>
              <p>Let AI agents access compute environments and run real calculations right in the browser, like claude code but sandboxed, safe and available on the fly.</p>
            </Card>
          </li>
        </CardGrid>
      </Section>

      <Banner
        bg="dark"
        title="Start for free."
        cta={<LinkToNotebookLink label="Try Notebook.link" />}
      >
        Free tier includes unlimited WebAssembly compute, link sharing, and basic storage.
        Enterprise plans for universities and organizations with advanced storage and user management, on-demand backend kernels, grading + Moodle integration available.
      </Banner>
    </>
  );
}

export default function NotebookLinkPage(): JSX.Element {
  return (
    <Layout>
      <BrowserOnly>{() => <NotebookLinkContent />}</BrowserOnly>
      <Footer />
    </Layout>
  );
}
