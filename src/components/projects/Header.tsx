import styles from "./styles.module.css";
import HeaderMD from "./descriptions/Header.md";

export default function Header() {
    return (
      <div className={"container upper-container-with-margin-top"}>
        <div className="row">
          <div className={"col padding-none"+ " " + styles.header_container}>
            <h1 className={styles.header_title}>Working in the open</h1>
            <div className={styles.header_text}>
             <HeaderMD/>
            </div>
          </div>
        </div>
      </div>
    );
  }