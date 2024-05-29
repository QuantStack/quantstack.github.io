import styles from "./styles.module.css";
import SupplyChainMD from "./descriptions/SupplyChain.md"

export default function SupplyChainProjects() {
    return (
      <div className={"container" + " " + styles.project_desktop}>
        <div className={"row" + " " + styles.row_custom}>
          <div className="col col--5 col--offset-1 ">
            <img src="img/projects/mamba_console.png" />
          </div>
          <div className="col col--5">
            <h1>Software supply chain </h1>
            <h2 className={styles.h2_custom}>
              We are the main organisation supporting the mamba package manager.
            </h2>
            <div className="spacing-2xl"></div>
            <SupplyChainMD/>
          </div>
        </div>
      </div>
    );
  }