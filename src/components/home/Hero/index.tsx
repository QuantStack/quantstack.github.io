import styles from "./styles.module.css";
import SimpleSlider from "./LogosTable";

export default function Hero() {
  return (
    <div className="main-container-with-margins">
      <div className={"container" + " " + styles.hero_desktop}>
        <div className={"row row--no-gutters" + " " + styles.row_custom}>
          <div className={"col col--6" + " " + styles.col_custom}>
            <div className="header-text">
              <h1 className={styles.h1_custom}>Open-source for discovery, science, and education</h1>
              <p className={styles.p_custom}>
                A team behind major open-source projects of the scientific
                computing ecosystem
              </p>
              <h2 className={styles.h2_custom}>Jupyter, Conda-forge, Mamba, Voilà, Xtensor and more.</h2>
            </div>
          </div>
          <div className={"col col--6" + " " + styles.astronaut_column}>
            <img src="img/astronaut.svg" className={styles.astronaut_picture} />
          </div>
        </div>
      </div>
    </div>
  );
}
