import styles from "./styles.module.css";

function Astronaut() {
  return (
    <div className={styles.astronaut}>
      <img src="img/astronaut.svg" />
    </div>
  );
}

export default function HeaderTextBox() {
  return (
    <div
      className ={styles.header_yellow}>
      <div className={styles.header_grid_container}>
        <div className={styles.header_text_box}>
          <div className={styles.header_title}>
            Open-source for discovery, science, and education
          </div>
          <div className="{vertical-spacing-s"></div>
          <div className={styles.header_description}>
            A team behind major open-source projects of the scientific computing
            ecosystem:
          </div>
          <div className="{vertical-spacing-s"></div>
          <div className={styles.header_projects}>
            Jupyter, Conda-forge, Mamba, Voilà, Xtensor and more.
          </div>
        </div>
        <Astronaut></Astronaut>
      </div>
    </div>
  );
}
