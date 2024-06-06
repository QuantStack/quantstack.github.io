import styles from "./styles.module.css";
import SupplyChainMD from "./descriptions/SupplyChain.md";
import MambaPictureUrl from "@site/static/img/projects/mamba_console.png";

export default function SupplyChainProjects() {
  return (
    <div className={"container" + " " + styles.project_desktop}>
      <div className={"row" + " " + styles.row_custom}>
        <div
          className={
            "col col--5 col--offset-1 " + " " + styles.col_custom_picture
          }
        >
          <img src={MambaPictureUrl} />
        </div>
        <div className={"col col--5" + " " + styles.col_custom_text}>
          <h1>Software supply chain </h1>
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
