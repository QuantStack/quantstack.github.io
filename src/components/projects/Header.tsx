import styles from "./styles.module.css";
import Header from "./descriptions/Header.md";

export default function HeaderComponent() {
    return (
      <div className={"container" + " " + styles.header_container}>
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h1>Working in the open</h1>
            <div className={styles.header_text}>
             <Header/>
            </div>
          </div>
        </div>
      </div>
    );
  }