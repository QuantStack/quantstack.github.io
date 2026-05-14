import styles from "./styles.module.css";
import LogoGrid from "./LogosTableBy8";
import Astronaut from "/img/quantstack/astronaut.svg";
import Banner from "./Banner";

export function Hero() {
  return (
    <div className={styles.hero_container}>
      <Banner />
      <div className="page-content">
        <div className={styles.hero_body}>
          <div className={styles.hero_text}>
            <h1 className="padding-none">
              Open-source for discovery, science, and education
            </h1>
            <p className={styles.sub_header}>
              A team behind major open-source projects of the scientific
              computing ecosystem
            </p>
            <h2 className={styles.h2_custom}>
              Jupyter, Conda-forge, Mamba, Voilà, Xtensor and more.
            </h2>
          </div>
          <div className={styles.hero_image}>
            <Astronaut
              alt="Astronaut mascot of QuantStack"
              width="300px"
              height="300px"
            />
          </div>
        </div>
        <div className={styles.worked_with}>We have worked with</div>
        <LogoGrid />
      </div>
    </div>
  );
}
export default Hero;
