import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

function JupyterLogo() {
  return <img src="img/projects/Jupyter.svg" width="197px" height="234px" />;
}

function XTensorLogo() {
  return <img src="img/projects/xtensor.png" width="257px" height="257px" />;
}

function CondaForgeLogo() {
  return <img src="img/projects/conda_forge.svg" width="196px" height="180px" />;
}

function RoboticsLogo() {
  return <img src="img/projects/robostack.png" width="189px" height="210px" />;
}
export function Jupyter() {
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: "var(--ifm-spacing-lg)" }}>
        <div
          className={"col col--7 col--offset-1"}
          style={{
            backgroundColor: "var(--ifm-color-orange-light1)",
            padding: "var(--ifm-spacing-4xl) var(--ifm-spacing-3xl)",
          }}
        >
          <h2>Jupyter</h2>
          <div className="spacing-md"></div>
          <p>
            QuantStack is one of the main organizations supporting the Jupyter
            project, an open-source ecosystem of developer tools meant to
            improve the workflows of scientists and engineers. <br />
            <br />
            In the past years, Jupyter has become a de-facto standard in both
            industry and academia, at the foundation of the main open-source and
            commercial data science platforms, with millions of users. <br />
            <br />
            The team comprises nine core contributors and maintainers the
            project. We are also behind popular extensions for data
            visualization, robotics, and dashboarding. <br />
            <br />
            The QuantStack team is responsible for major evolutions in the
            project, such as the JupyterLab visual debugger, collaborative
            editing, or the development of JupyterLite.
          </p>
        </div>
        <div
          className={"col col--3"}
          style={{
            border: "solid 1px var(--ifm-color-orange-jupyter)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <JupyterLogo />
        </div>
      </div>
    </div>
  );
}

export function XTensorXSIMD() {
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: "var(--ifm-spacing-lg)" }}>
        <div
          className=" col col--4 col--offset-1"
          style={{
            border: "solid 1px  var(--ifm-color-green-xtensor)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <XTensorLogo />
        </div>
        <div
          className="col col--6"
          style={{
            backgroundColor: "var(--ifm-color-orange-light1)",
            padding: "var(--ifm-spacing-4xl) var(--ifm-spacing-3xl)",
          }}
        >
          <h2>xtensor & xsimd</h2>
          <p>
            QuantStack kickstarted the development of the xtensor and xsimd
            projects, popular C++ libraries meant for numerical analysis with
            multi-dimensional array expressions, and accelerated computing.
            <br />
            <br />
            xtensor provides:
            <br />
            - an extensible expression system enabling lazy broadcasting,
            <br />
            - an API following the idioms of the C++ standard library, <br />-
            tools to manipulate array expressions and build upon xtensor.
            <br />
            <br />
            The xsimd project provides a unified API for utilizing SIMD
            instructions of modern microprocessors.XSimd has seen a growing
            adoption in the past years, by projects such as Firefox, Krita,
            Pythran, and Apache Arrow.
          </p>
        </div>
      </div>
    </div>
  );
}

export function CondaForge() {
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: "var(--ifm-spacing-lg)" }}>
        <div
          className="col col--8 col--offset-1"
          style={{
            backgroundColor: "var(--ifm-color-orange-light1)",
            padding: "var(--ifm-spacing-4xl) var(--ifm-spacing-3xl)",
          }}
        >
          <h2>conda-forge</h2>
          <p>
            QuantStack is one of the key organizations supporting the
            conda-forge project, a community-led collection of recipes, build
            infrastructure and distributions for the conda/mamba package
            manager. <br />
            <br />
            Adopted at the global scale, conda-forge has become the reference
            source of build artifacts for the scientific computing ecosystem,
            accounting for over 150 million package downloads monthly. <br />
            <br />
            QuantStack developed key components of the conda-forge
            infrastructure, including the mamba package manager and the
            mamba-build utility, which underlie the build system of conda-forge.
            QuantStack team members also maintain a large number of conda-forge
            packages.
          </p>
        </div>

        <div
          className={"col col--2"}
          style={{
            border: "solid 1px var(--ifm-color-grey-condaforge)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <CondaForgeLogo />
        </div>
      </div>
    </div>
  );
}

export function Robotics() {
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: "var(--ifm-spacing-6xl)" }}>
        <div
          className="col col--5 col--offset-1">
            
          <div style={{
            backgroundColor: "var(--ifm-color-orange-light1)",
            padding: "var(--ifm-spacing-4xl) var(--ifm-spacing-3xl)",
            marginBottom: "var(--ifm-spacing-lg)"
          }}
        >
          <h2>Robotics</h2>
          <p>
            QuantStack supports the open-source robotics ecosystem.
            <br />
            <br />
            We created the RoboStack distribution of ROS, the first conda/mamba
            - based distribution of ROS, and the first cross-platform
            distribution of ROS. We are behind the jupyter-robotics project, a
            collection of JupyterLab and Jupyter extension integrating ROS with
            the Jupyter ecosystem.
          </p>
          </div>
          <div className={styles.image_container}>
            <RoboticsLogo />
          </div>
        </div>

        <div
          className={"col col--5"}
          style={{
            backgroundColor: "var(--ifm-color-secondary-s1",
            padding: "var(--ifm-spacing-7xl) var(--ifm-spacing-5xl)"
       
          }}
        >
          <h3>
            Schedule a meeting and benefit from our experience in Python, C++,
            in-browser data visualization, and high-performance computing.
          </h3>
          <div className="link-box">
            <Link className="link-to-contact" href="/contact">
              {" CONTACT US! "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <div className="container" style={{marginTop:"var(--ifm-spacing-5xl"}}>
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h1>Working in the open</h1>
            <div className={styles.header}>
              Projects developed at QuantStack have reached millions of end
              users, from healthcare to education, from aerospace to
              geosciences, and from data sciences to robotics. Open-source
              development is a unique way to break down collaboration barriers
              and reach users with unexpected use cases. Enabling customisation
              and extensions of the tools enables this diversity of
              applications.
            </div>
          </div>
        </div>
      </div>
      <Jupyter />
      <XTensorXSIMD />
      <CondaForge />
      <Robotics />
    </div>
  );
}
