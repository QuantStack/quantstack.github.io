import styles from "./styles.module.css";
import SplitSection from "../layout/SplitSection";
import BackgroundScene from "../layout/BackgroundScene";
import Section from "../layout/Section";
import SectionSeparator from "../layout/SectionSeparator";
import CardGrid from "../layout/CardGrid";
import Card from "../layout/Card";
import Banner from "../layout/Banner";
import Rocket from "/img/notebooklink/rocket.svg";
import LinkToNotebookLink from "../home/Hero/LinkToNotebookLink";

export default function NotebookLinkPage() {
  return (
    <>
      <SplitSection
        bg="dark"
        pageTop
        fullHeight
        background={<BackgroundScene variant="dark" />}
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
        <p className={styles.subtitle}>The future of notebook sharing</p>
        <LinkToNotebookLink label="Get started" />
      </SplitSection>

      <SectionSeparator variant={6} />

      <Section>
        <h2>Share notebooks with a single link</h2>
        <p>
          Notebook.link turns any Jupyter notebook into a shareable URL.
          Paste a link to a notebook on GitHub, Gist, or anywhere on the web —
          get back a stable URL anyone can open in the browser, rendered and interactive,
          no installation required.
        </p>
        <p>
          Built by the team that maintains JupyterLab, JupyterLite, and Voilà.
          The rendering runs entirely in the browser, powered by the same open-source stack
          QuantStack ships upstream.
        </p>
      </Section>

      <SectionSeparator variant={7} />

      <Section>
        <h2 className="text--center">How it works</h2>
        <CardGrid cols={3}>
          <li>
            <Card>
              <span className={styles.feature_icon}>🔗</span>
              <div className={styles.feature_title}>Paste a notebook URL</div>
              <p>Any Jupyter notebook hosted on GitHub, Gist, or accessible on the web.</p>
            </Card>
          </li>
          <li>
            <Card>
              <span className={styles.feature_icon}>⚡</span>
              <div className={styles.feature_title}>Rendered in the browser</div>
              <p>Notebook.link renders the notebook using JupyterLite — no server, no Python environment needed.</p>
            </Card>
          </li>
          <li>
            <Card>
              <span className={styles.feature_icon}>📤</span>
              <div className={styles.feature_title}>Share the link</div>
              <p>Send the URL to anyone. They see the notebook rendered with outputs, instantly.</p>
            </Card>
          </li>
        </CardGrid>
      </Section>

      <Banner
        bg="dark"
        title="Ready to share your first notebook?"
        cta={<LinkToNotebookLink label="Try Notebook.link" />}
      >
        Open any Jupyter notebook in the browser — no setup, no login, just a link.
      </Banner>
    </>
  );
}
