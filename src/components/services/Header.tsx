import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className="main-container-with-margins">
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h1 className={styles.services_header_text}>
              Hire QuantStack to build upon the Jupyter, Mamba, and the PyData
              ecosystem.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
