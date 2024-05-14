import styles from "./styles.module.css";

export function LogosTable() {
  return (
    <div
      className="container"
      style={{ marginBottom: "var(--ifm-spacing-xl)" }}
    >
      <div className="row row--no-gutters">
        <div className="col col--2 col--offset-1">
          <img src="img/logos/Bloomberg.svg" />
        </div>
        <div className="col col--2">
          <img src="img/logos/Enthought.svg" />
        </div>
        <div className="col col--2">
          <img src="img/logos/Airbus.svg" />
        </div>
        <div className="col col--2">
          <img src="img/logos/Safran.svg" />
        </div>
        <div className="col col--2">
          <img src="img/logos/Harvard.svg" />
        </div>
      </div>
      <div className="row row--no-gutters">
        <div className="col col--2 col--offset-1">
          <img src="img/logos/DEShaw.svg" />
        </div>
        <div className="col col--2">
          <img src="img/logos/Robocorp.svg" />
        </div>
        <div className="col col--2">
          <img src="img/logos/Engie.svg" />
        </div>
        <div className="col col--2">
          <img src="img/logos/TDK.svg" />
        </div>
        <div className="col col--2">
          <img src="img/logos/MaxFordham.png" />
        </div>
      </div>
    </div>
  );
}
export default function Hero() {
  return (
    <div
      className="container"
      style={{ margin: "var(--ifm-spacing-3xl) 0 var(--ifm-spacing-xl) 0 " }}
    >
      <div className="row row--no-gutters">
        <div
          className="col col--5 col--offset-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="header-text">
            <h1>Open-source for discovery, science, and education</h1>
            <p>
              A team behind major open-source projects of the scientific
              computing ecosystem
            </p>
            <h2>Jupyter, Conda-forge, Mamba, Voilà, Xtensor and more.</h2>
          </div>
        </div>
        <div
          className="col col--5"
          style={{
            display: "flex",
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
