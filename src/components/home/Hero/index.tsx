import styles from "./styles.module.css";
import Astronaut from "/img/quantstack/astronaut.svg";

export function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className="page-content" style={{ position: "relative", zIndex: 2 }}>
        <div className={styles.hero_body}>
          <div className={styles.hero_text}>
            <h1 className="padding-none">
              The team behind open-source scientific computing.
            </h1>
            <p className={styles.sub_header}>
              From interactive environments to package managers to data formats: we build the open-source infrastructure for scientific computing. Today we're building notebook.link, next generation compute environments that run fully in the browser, at any scale.
            </p>
            <p className={styles.tech_tagline}>
              Millions of researchers, engineers, and students use what we ship.
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
