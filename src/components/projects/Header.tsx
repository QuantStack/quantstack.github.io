import styles from "./styles.module.css";
import HeaderMD from "./descriptions/Header.md";

export default function Header() {
  return (
    <div className={"container" + " " + styles.header_container}>
      <div className="row">
        <div className="col padding-none">
          <h1 className={styles.header_title}>Working in the open</h1>
          <div className={styles.header_text}>
            <HeaderMD />
          </div>
        </div>
      </div>
    </div>
  );
}
