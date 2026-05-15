import styles from "./styles.module.css";
import Astronaut from "/img/quantstack/astronaut.svg";
import BackgroundScene from "../../layout/BackgroundScene";

export function Hero() {
  return (
    <div className={styles.hero_container}>
      <BackgroundScene variant="light" />
      <div className="page-content" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.hero_body}>
          <div className={styles.hero_text}>
            <h1 className="padding-none">
              Open-source for discovery, science, and education
            </h1>
            <p className={styles.sub_header}>
              A team behind major open-source projects of the scientific
              computing ecosystem
            </p>
            <p className={styles.tech_tagline}>
              Jupyter, Conda-forge, Mamba, Voilà, Xtensor and more.
            </p>
          </div>
          <div className={styles.hero_image}>
            <Astronaut
              alt="Astronaut mascot of QuantStack"
              width="300px"
              height="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
