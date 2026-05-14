import SplitSection from "../../layout/SplitSection";
import styles from "./styles.module.css";
import SpecialProjectsMD from "./descriptions/SpecialProjects.md";
import SpecialProjectsPictureUrl from "@site/static/img/projects/special_projects.png";

export default function SpecialProjects() {
  return (
    <SplitSection
      image={<img src={SpecialProjectsPictureUrl} alt={"Picture showing examples of Jupyter CAD projects in Jupyterlab."} style={{ maxWidth: "100%", maxHeight: "500px", objectFit: "contain" }} />}
    >
      <h2 className="padding-none">Special projects</h2>
      <p className={styles.tagline}>Applications built from the ground up and addressing a complete use case.</p>
      <SpecialProjectsMD />
    </SplitSection>
  );
}
