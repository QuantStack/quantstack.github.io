import styles from "./styles.module.css";
import SimpleSlider from "./LogosTable";
import Astronaut from "@site/static/img/quantstack/astronaut.svg";

export default function Hero() {
  return (
    <div>
      <div className="main-container-with-margins">
        <div className={"container" + " " + styles.hero_desktop}>
          <div className={"row row--no-gutters" + " " + styles.row_custom}>
            <div className={"col col--6 col--offset-1" + " " + styles.col_custom}>
              <div className="header-text">
                <h1 className={styles.h1_custom}>
                  Open-source for discovery, science, and education
                </h1>
                <p className={styles.p_custom}>
                  A team behind major open-source projects of the scientific
                  computing ecosystem
                </p>
                <h2 className={styles.h2_custom}>
                  Jupyter, Conda-forge, Mamba, Voilà, Xtensor and more.
                </h2>
              </div>
            </div>
            <div className={"col col--3 col--offset-1" + " " + styles.astronaut_column}>
              <Astronaut className={styles.astronaut_picture} />
            </div>
          </div>
        </div>
      </div>
      <div className="main-container-with-margins">
        <div className={"container" + " " + styles.logos_carousel}>
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.worked_with}> We have worked with</div>
            </div>
          </div>
          <div className="row">
            <div className="col col--10 col--offset-1">
              <SimpleSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
