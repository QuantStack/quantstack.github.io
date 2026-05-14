import SplitSection from "../../layout/SplitSection";
import styles from "./styles.module.css";
import DataAnalysisMD from "./descriptions/DataAnalysis.md";
import ApacheArrowPicture from "@site/static/img/projects/apache_arrow.svg";

export default function DataAnalysisProjects() {
  return (
    <SplitSection
      bg="light"
      reverse
      image={<ApacheArrowPicture style={{ maxWidth: "100%" }} />}
    >
      <h2 className="padding-none">Data Analysis</h2>
      <p className={styles.tagline}>Supporting the development of key data analysis technologies.</p>
      <DataAnalysisMD />
    </SplitSection>
  );
}
