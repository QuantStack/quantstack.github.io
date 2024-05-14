import styles from "./styles.module.css";

export function JupyterProject() {
  return (
    <div
      className="container"
      style={{
        marginTop: "var(--ifm-spacing-7xl)",
        marginBottom: "var(--ifm-spacing-3xl)",
      }}
    >
      <div className="row">
        <div className="col col--5">
          <h1>Jupyter project </h1>
          <h2>We strive to sustain the project in the long term.</h2>
          <p>
            Our team is deeply involved in the development of the Jupyter
            project, at both technical and organizational levels, with several
            members participating in the project governance in various
            capacities. <br />
            <br />
            We are responsible for some of the main innovations of the past
            years (JupyterLite, Collaborative editing in projectLab, the Voilà
            dashboard system, the projectLab visual debugger).
          </p>
        </div>

        <div
          className="col col--6 col--offset-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="img/projects/jupyterlab_examples.svg" />
        </div>
      </div>
    </div>
  );
}

export function SupplyChainProjects() {
  return (
    <div
      className="container"
      style={{ marginBottom: "var(--ifm-spacing-3xl)" }}
    >
      <div className="row">
        <div
          className="col col--5 "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="img/projects/mamba_console.png"/>
        </div>
        <div className="col col--6 col--offset-1">
          <h1>Software supply chain </h1>
          <h2>
            We are the main organisation supporting the mamba package manager.
          </h2>
          <div className="spacing-2xl"></div>
          <p>
            We contribute to the conda-forge project, by maintaining a large
            number of package recipes, and contributing to the underlying
            infrastructure.
            <br />
            <br />
            We created the first conda/mamba-based package distribution for
            WebAssembly, emscripten-forge.
          </p>
        </div>
      </div>
    </div>
  );
}

export function SpecialProjects() {
  return (
    <div
      className="container"
      style={{marginBottom: "var(--ifm-spacing-3xl)" }}
    >
      <div className="row">
        <div className="col col--6">
          <h1>Special projects</h1>
          <h2>
            Applications built from the ground up and addressing a complete use
            case.
          </h2>
          <p>
            Special projects leverage the open-source software stack that we
            maintain. Both JupyterCAD and Glue-Web leverage the JupyterLab
            application framework and assemble JupyterLab components to produce
            a different application.
            <br />
            <br />
            Such examples include: <br />
            JupyterCAD <br />
            Glue-Web
          </p>
        </div>
        <div
          className="col col--6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="img/projects/jupytercad.svg" />
        </div>
      </div>
    </div>
  );
}

export function RoboticsProjects() {
  return (
    <div className="container" style={{ marginBottom: "var(--ifm-spacing-3xl)" }}>
      <div className="row">
        <div
          className="col col--6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="img/projects/robotics.svg" width="600px" />
        </div>
        <div className="col col--6">
          <h1>Robotics </h1>
          <h2>We just kicked off a new initiative to Robotics education.</h2>
          <p>
            QuantStack created the RoboStack distribution of ROS, the first
            multi-platform distribution of ROS, as conda packages.
            <br />
            <br />
            We are bootstrapping the jupyter-ros project, a
            Jupyterlab-basedrobotics development environment for the ROS
            ecosystem.
            <br />
            <br />
            We just kicked off a new initiative to Robotics education. <br />
            Stay tuned for more on this subject!
          </p>
        </div>
      </div>
    </div>
  );
}

export function ComputingProjects() {
  return (
    <div className="container" style={{ marginBottom: "var(--ifm-spacing-3xl)" }}>
      <div className="row">
        <div className="col col--6">
          <h1>Scientific computing </h1>
          <h2>
            Supporting the development of several C++ scientific computing
            packages.
          </h2>

          <p>
            QuantStack is the main organisation supporting the development of
            several C++ scientific computing packages such as:
            <br />
            <br />
            <li>
              Xsimd, a unified API for SIMD operations, used by projects such as
              Apache Arrow, Firefox, Krita, Pythran, and naturally, xtensor.
            </li>
            <br />
            <br />
            <li>
              Xtensor, a multi-dimensional array library in C++, supporting
              NumPy-style API and features, such as universal functions and
              broadcasting, while being lazy-evaluated. Language bindings for
              Python, R, and Julia are also available.
            </li>
          </p>
        </div>
        <div
          className="col col--6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="img/projects/xtensor_xsimd.svg" width="469px" height="227px" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsOverview() {
  return (
    <div>
      <JupyterProject />
      <SupplyChainProjects />
      <SpecialProjects />
      <RoboticsProjects />
      <ComputingProjects />
    </div>
  );
}
