import styles from "./styles.module.css";
import DataAnalysisMD from "@site/src/components/home/ProjectsOverview/descriptions/DataAnalysis.md";
import ApacheArrowPicture from "@site/static/img/projects/apache_arrow.svg";

export default function DataAnalysisProjects() {
  return (
    <div className={"container" + " "+ styles.project_light_yellow} style={{paddingBottom : "0px"}}>
      <div className="row">
        <div
          className={"col col--5 col--offset-1" + " " + styles.col_project_overview_with_padding}
        >
          <h1 className="padding-none">Data Analysis </h1>
          <h2 className={styles.h2_custom}>
            Supporting the development of Apache Ecosystem
            packages.
          </h2>
          <DataAnalysisMD />
        </div>
        <div className={"col col--5"+ " " + styles.col_project_overview_with_padding}>
  
           <ApacheArrowPicture width={"500px"}/>
        </div>
      </div>
    </div>
  );
}
