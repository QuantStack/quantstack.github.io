import Banner from "../../layout/Banner";
import LinkToNotebookLink from "../Hero/LinkToNotebookLink";
import styles from "./styles.module.css";

export default function NotebookLinkSpotlight() {
  return (
    <Banner
      bg="dark"
      fullHeight
      title="notebook.link"
      cta={<LinkToNotebookLink label="Try it for free" />}
    >
      A full Jupyter environment as a link. Instant setup, no server, no hassle. Sandboxed compute runs in the browser,
      powered by WebAssembly and emscripten-forge. For <span className={styles.accent}>universities</span> replacing JupyterHub, for <span className={styles.accent}>researchers</span> sharing
      reproducible work, for <span className={styles.accent}>enterprise data teams</span>, and for <span className={styles.accent}>public data portals</span> serving
      millions of visitors at near-zero infrastructure cost.
    </Banner>
  );
}
