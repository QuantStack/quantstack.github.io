import styles from "./styles.module.css";
import SimpleSlider from "./LogosTable";
import Astronaut from "@site/static/img/quantstack/astronaut.svg";
import { useEffect, useState } from "react";

export function HeroDesktop() {
  return (
    <div>
      <div className="main-container-with-margins">
        <div className={"container" + " " + styles.hero_container}>
          <div
            className={"row row--no-gutters" + " " + "row-flex-full-centered"}
          >
            <div className="col col--6 col--offset-1">
              <div className="header-text">
                <h1 className="h1-padding-none">
                  Open-source for discovery, science, and education
                </h1>
                <p className="p-left-aligned-padding-none">
                  A team behind major open-source projects of the scientific
                  computing ecosystem
                </p>
                <h2 className={styles.h2_custom}>
                  Jupyter, Conda-forge, Mamba, Voilà, Xtensor and more.
                </h2>
              </div>
            </div>
            <div
              className={
                "col col--3 col--offset-1" + " " + styles.astronaut_column
              }
            >
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

export function HeroMobile() {
  return (
    <div>
      <div className="main-container-with-margins">
        <div className={"container" + " " + styles.hero_container}>
          <div className={"row row--no-gutters"}>
            <div className={"col" + " " + "col-flex-full-centered"} style={{marginBottom: "var(--ifm-spacing-xl"}}>
              <Astronaut className={styles.astronaut_picture} />
            </div>
          </div>
          <div className={"row row--no-gutters"}>
            <div className="col">
              <div className="header-text" style={{marginBottom: "var(--ifm-spacing-xl"}}>
                <h1 className="h1-centered" style={{marginBottom: "var(--ifm-spacing-xl"}}>
                  Open-source for discovery, science, and education
                </h1>
                <p className="p-centered" style={{marginBottom: "var(--ifm-spacing-xl"}}>
                  A team behind major open-source projects of the scientific
                  computing ecosystem
                </p>
                <h2 className={styles.h2_custom}>
                  Jupyter, Conda-forge, Mamba, Voilà, Xtensor and more.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const breakpointValue: number = 996;

export default function Projects() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <HeroDesktop /> : <HeroMobile />}</div>;
}
