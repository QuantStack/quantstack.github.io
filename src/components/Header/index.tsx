import styles from "./styles.module.css";

export function LogosTable() {
  return (
    <div className={styles.logos_box}>
      <img src="img/Logos/Bloomberg.svg" />
      <img src="img/Logos/Enthought.svg" />
      <img src="img/Logos/Airbus.svg" />
      <img src="img/Logos/Safran.svg" />
      <img src="img/Logos/Harvard.svg" />
      <img src="img/Logos/DEShaw.svg" />
      <img src="img/Logos/Robocorp.svg" />
      <img src="img/Logos/Engie.svg" />
      <img src="img/Logos/TDK.svg" />
      <img src="img/Logos/MaxFordham.png" />
      <img src="img/Logos/CalPoly.svg" />
      <div className="vertical-spacing-m"></div>
    </div>
  );
}

export default function Header() {
  return (
    <div className={styles.main_container}>
      <div className={styles.grid_container}>
        <div className={styles.text_box}>
          <div className={styles.main_title}>
            Open-source for discovery, science, and education
          </div>
          <div className="vertical-spacing-l"></div>
          <div className={styles.description}>
            A team behind major open-source projects of the scientific computing
            ecosystem:
          </div>
          <div className="vertical-spacing-sm"></div>
          <div className={styles.projects}>
            Jupyter, Conda-forge, Mamba, Voilà, Xtensor and more.
          </div>
        </div>
        <div className={styles.image_box}>
          <div className={styles.astronaut}>
            <img src="img/astronaut.svg" />
          </div>
        </div>
      </div>
      <LogosTable />
      <div className="vertical-spacing-xxl"></div>
    </div>
  );
}
