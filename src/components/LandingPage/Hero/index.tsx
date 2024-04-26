import styles from "./styles.module.css";

export function LogosTable() {
  return (
    <div
      className="container"
      style={{ marginBottom: "var(--ifm-spacing-xl)" }}
    >
      <div className="row row--no-gutters">
        <div className="col col--2 col--offset-1">
          <img src="img/Logos/Bloomberg.svg" />
        </div>
        <div className="col col--2">
          <img src="img/Logos/Enthought.svg" />
        </div>
        <div className="col col--2">
          <img src="img/Logos/Airbus.svg" />
        </div>
        <div className="col col--2">
          <img src="img/Logos/Safran.svg" />
        </div>
        <div className="col col--2">
          <img src="img/Logos/Harvard.svg" />
        </div>
      </div>
      <div className="row row--no-gutters">
        <div className="col col--2 col--offset-1">
          <img src="img/Logos/DEShaw.svg" />
        </div>
        <div className="col col--2">
          <img src="img/Logos/Robocorp.svg" />
        </div>
        <div className="col col--2">
          <img src="img/Logos/Engie.svg" />
        </div>
        <div className="col col--2">
          <img src="img/Logos/TDK.svg" />
        </div>
        <div className="col col--2">
          <img src="img/Logos/MaxFordham.png" />
        </div>
      </div>
    </div>
  );
}
export default function Hero() {
  return (
    <div
      className="container"
      style={{ marginBottom: "var(--ifm-spacing-xl)" }}
    >
      <div className="row row--no-gutters">
        <div className="col col--5 col--offset-1">
          <h1 style={{ marginTop: "var(--ifm-spacing-6xl)" }}>
            Open-source for discovery, science, and education
          </h1>
          <p>
            A team behind major open-source projects of the scientific computing
            ecosystem
          </p>
          <h2>Jupyter, Conda-forge, Mamba, Voilà, Xtensor and more.</h2>
        </div>
        <div
          className="col col--5"
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--ifm-spacing-6xl) var(--ifm-spacing-4xl)",
          }}
        >
          <img src="img/astronaut.svg" />
        </div>
      </div>
      <LogosTable />
    </div>
  );
}
