import styles from "./styles.module.css";
import SimpleSlider from "./LogosTableBy8";
import Astronaut from "/img/quantstack/astronaut.svg";
import CiteDesSciencesUrl from "@site/static/img/quantstack/geode-cropped.png";

export function PydataParis() {
  return (
    <div className={styles.pydata_banner}>
      <img
        className={styles.pydata_image}
        src={CiteDesSciencesUrl}
        alt={"Banner to promote Pydata Paris."}
        width={"100%"}
      />
      <p className={styles.pydata_header}>Join QuantStack at PyData Paris</p>
      <p className={styles.pydata_informations}>
        September 25-26 2024
        <br />
        Cité des Sciences, Paris, France
        <br />
        <a>https://pydata.org/paris2024</a>
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <div className={styles.hero_container}>
      <PydataParis />
      <div className="main-container-with-margins">
        <div className="container upper-container-with-margin-top">
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
