import styles from "./styles.module.css";
import Header from "./descriptions/Header.md";

export default function HeaderComponent() {
    return (
      <div className={"container" + " " + styles.header_container}>
        <div className="row">
          <div className={"col col--10 col--offset-1" + " " + styles.col_custom_header}>
            <h1 className={styles.h1_custom}>Working in the open</h1>
            <div className={styles.header_text}>
             <Header/>
            </div>
          </div>
        </div>
      </div>
    );
  }