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
      <h1 className="padding-none">Data Analysis</h1>
      <h2 className={styles.h2_custom}>Supporting the development of key data analysis technologies.</h2>
      <DataAnalysisMD />
    </SplitSection>
  );
}
