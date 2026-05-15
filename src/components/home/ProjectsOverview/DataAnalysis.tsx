import SplitSection from "../../layout/SplitSection";
import styles from "./styles.module.css";
import DataAnalysisMD from "./descriptions/DataAnalysis.md";
import ApacheArrowPicture from "@site/static/img/projects/apache_arrow.svg";

export default function DataAnalysisProjects() {
  return (
    <SplitSection
      reverse
      image={<ApacheArrowPicture style={{ maxWidth: "100%" }} />}
    >
      <h2 className="padding-none">Data Infrastructure</h2>
      <p className={styles.tagline}>Principal maintainers of Apache Arrow's C++ core.</p>
      <DataAnalysisMD />
    </SplitSection>
  );
}
