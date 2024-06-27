import styles from "./styles.module.css";
import SupplyChainMD from "./descriptions/SupplyChain.md";
import MambaPictureUrl from "@site/static/img/projects/mamba_console.png";

export default function SupplyChainProjects() {
  return (
    <div className={"container" + " " + styles.project_desktop}>
      <div className={"row" + " " + "row-reverse"}>
        <div
          className={
            "col col--5 col--offset-1 " + " " + styles.col_project_overview_picture
          }
        >
          <img src={MambaPictureUrl} />
        </div>
        <div className={"col col--5" + " " + styles.col_project_overview_with_padding}>
          <h1 className="padding-none">Software supply chain </h1>
          <h2 className={styles.h2_custom}>
            We are the main organisation supporting the mamba package manager.
          </h2>
          <div className="spacing-2xl"></div>
          <SupplyChainMD />
        </div>
      </div>
    </div>
  );
}
