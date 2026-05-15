import styles from "./styles.module.css";
import SplitSection from "../layout/SplitSection";
import Section from "../layout/Section";
import SectionSeparator from "../layout/SectionSeparator";
import CardGrid from "../layout/CardGrid";
import Card from "../layout/Card";
import Banner from "../layout/Banner";
import Rocket from "/img/notebooklink/rocket.svg";
import LinkToNotebookLink from "../LinkToNotebookLink";

export default function NotebookLinkPage() {
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
        <p className={styles.product_label}>A QuantStack Product</p>
        <h1 className="padding-none">Notebook.link</h1>
        <p className={styles.subtitle}>Browser-native scientific computing. No server, no setup, no limits.</p>
        <LinkToNotebookLink label="Get started — it's free" />
      </SplitSection>

      <SectionSeparator variant={6} />

      <Section>
        <h2>A complete compute environment in a link.</h2>
        <p>
          Notebook.link delivers a full Jupyter environment running entirely in the browser —
          powered by WebAssembly. No installation, no server spin-up, no IT ticket.
          Click the link, start computing.
        </p>
        <p>
          Built on JupyterLite and emscripten-forge, our open-source stack that brings
          the complete scientific Python ecosystem — NumPy, SciPy, Pandas, Matplotlib,
          and hundreds more — to any modern browser. The compute runs on your users' devices,
          not our servers. That means it scales to any number of users for the cost of file storage.
        </p>
      </Section>

      <SectionSeparator variant={7} />

      <Section bg="dark">
        <h2 className="text--center">Proven at scale.</h2>
        <p className="text--center">
          The French Ministry of Education runs 400,000 students and 40,000 teachers on the same
          open-source stack — on just 2 servers, with 50,000+ concurrent users during national exams.
          Four years of operation. Zero compute infrastructure cost per user.
        </p>
        <CardGrid cols={3}>
          <li>
            <Card bg="transparent">
              <div className={styles.feature_title}>400,000 students</div>
              <p>Capytale, the French national education platform, runs on JupyterLite — the same engine powering notebook.link.</p>
            </Card>
          </li>
          <li>
            <Card bg="transparent">
              <div className={styles.feature_title}>17–170× cheaper</div>
              <p>Compared to JupyterHub or Google Colab. Because users bring their own compute, your infrastructure cost is near zero.</p>
            </Card>
          </li>
          <li>
            <Card bg="transparent">
              <div className={styles.feature_title}>O(0) scaling</div>
              <p>More users don't mean more servers. Browser-based execution means your platform scales without your costs scaling with it.</p>
            </Card>
          </li>
        </CardGrid>
      </Section>

      <SectionSeparator variant={8} />

      <Section>
        <h2 className="text--center">Built for every use case.</h2>
        <CardGrid cols={2}>
          <li>
            <Card>
              <div className={styles.feature_title}>Education</div>
              <p>Replace JupyterHub for your institution. No containers per student, no DevOps burden, no IT tickets. LMS integration via LTI. Gradable notebooks with encrypted solutions.</p>
            </Card>
          </li>
          <li>
            <Card>
              <div className={styles.feature_title}>Research</div>
              <p>Share reproducible work as a link. Byte-identical WASM environments mean your results are reproducible — not just in theory, but in practice. Computational irreproducibility costs science ~€28B annually.</p>
            </Card>
          </li>
          <li>
            <Card>
              <div className={styles.feature_title}>Enterprise data platforms</div>
              <p>Give internal analysts a Jupyter environment without the security overhead of local installs or the cost of per-user cloud kernels. SSO, RBAC, and audit logging on the roadmap.</p>
            </Card>
          </li>
          <li>
            <Card>
              <div className={styles.feature_title}>Public data portals</div>
              <p>Let millions of visitors interact with your data — including geospatial datasets via JupyterGIS — without provisioning a single compute server. Data stays in the browser, GDPR-compliant by architecture.</p>
            </Card>
          </li>
        </CardGrid>
      </Section>

      <Banner
        bg="dark"
        title="Start for free."
        cta={<LinkToNotebookLink label="Try Notebook.link" />}
      >
        Free tier includes unlimited WebAssembly compute, link sharing, and 100 MB storage.
        Enterprise plans for universities and organizations from €5,000/year.
      </Banner>
    </>
  );
}
