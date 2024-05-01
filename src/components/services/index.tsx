import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export function Support() {
  return (
    <div className="container" style={{ margin: "var(--ifm-spacing-6xl) 0 var(--ifm-spacing-6xl) 0"}}>
      <div className="row row--no-gutters">
        <div className="col col--4 col--offset-1">
          <img src="img/illustrations/support.svg" width="350px" height="424px" />
        </div>

        <div
          className="col col--6 col--offset-1"
          style={{ padding: "var(--ifm-spacing-2xl)" }}
        >
          <h3>Professional Support</h3>
          <p>
            We support organisations that depend on Jupyter, conda-forge, or the
            broader PyData ecosytem.
            <br />
            <br />
            We help deploy, extend, or customize software of the open-source
            scientific computing ecosystem. <br />
            <br />
            Work with the people behind the technology, and develop your
            strategy around the open-source stack.
          </p>
        </div>
      </div>
    </div>
  );
}

export function SpecialProjects() {
  return (
    <div className="container" style={{ margin: "var(--ifm-spacing-6xl) 0 var(--ifm-spacing-6xl) 0"}}>
      <div className="row row--no-gutters">
        <div className="col col--5 col--offset-1">
          <h3>Special projects</h3>
          <p>
            We develop new packages from the ground up. Such special projects
            built upon our open-source stack include: <br />
            <br />
            - JupyterCAD,
            <br />
            - JupyterLab-ROS, <br />
            - Glue Web, <br />
            - ipygany <br />
            and many more.
            <br />
            <br />
            You can contract with us to leverage the Jupyter, conda and the
            general PyData ecosystem in an optimal way.
          </p>
        </div>
        <div
          className="col col--6"
          style={{
            marginTop: "-100px",
          }}
        >
          <img src="img/illustrations/special_projects.svg" />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="container" style={{marginTop:"var(--ifm-spacing-6xl"}}>
      <h1
      >
        Hire QuantStack to build upon the Jupyter, Mamba, and the PyData
        ecosystem.
      </h1>
      <Support />
      <h2 style={{textAlign:"center"}}>
        Work with the people behind the technology.
      </h2>
      <SpecialProjects />
      <div className={styles.contract}>
        Sign a support retainer for QuantStack services in our ecosystem.
        <div className="link-box">
          <Link className="link-to-contact" href="/contact">
            {" CONTACT US! "}
          </Link>
        </div>
      </div>
    </div>
  );
}
