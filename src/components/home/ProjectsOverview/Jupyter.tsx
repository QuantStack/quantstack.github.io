import SplitSection from "../../layout/SplitSection";
import styles from "./styles.module.css";
import JupyterMD from "./descriptions/Jupyter.md";
import JupyterPictureUrl from "@site/static/img/projects/jupyterlab_examples.png";

export default function JupyterProject() {
  return (
    <SplitSection
image={<img src={JupyterPictureUrl} alt={"Picture showing two jupyterlab user interfaces"} style={{ maxWidth: "100%" }} />}
    >
      <h2 className="padding-none">Jupyter Ecosystem</h2>
      <p className={styles.tagline}>Core contributors to JupyterLab, JupyterLite, Voilà, and the broader Jupyter ecosystem.</p>
      <JupyterMD />
    </SplitSection>
  );
}
