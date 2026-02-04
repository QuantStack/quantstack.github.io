import styles from "./styles.module.css";
import SimpleSlider from "./LogosTableBy8";
import Astronaut from "/img/quantstack/astronaut.svg";
import Banner from "./Banner";


export function Hero() {
  return (
    <div className={styles.hero_container}>
      <Banner/>
      <div className={styles.banner_image}>
      </div>
      <div className="main-container-with-margins">
        <div>
          <div className={"row row--no-gutters flex-full-centered"}>
            <div className="col col--6 col--offset-1">
              <h1 className="padding-none">
                Open-source for discovery, science, and education
              </h1>
              <p className={styles.subheader}>
                A team behind major open-source projects of the scientific
                computing ecosystem
              </p>
              <h2 className={styles.h2_custom}>
                Jupyter, Conda-forge, Mamba, Voilà, Xtensor and more.
              </h2>
            </div>

            <div
              className={
                "col col--3 col--offset-1 flex-full-centered" +
                " " +
                styles.astronaut_column
              }
            >
              <Astronaut
                alt={"Astronaut mascot of QuantStack"}
                width={"300px"}
                height={"300px"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-container-with-margins">
        <div className={"container" + " " + styles.logos_carousel}>
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.worked_with}> We have worked with </div>
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
export default Hero;
