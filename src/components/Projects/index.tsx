import styles from "./styles.module.css";

function JupyterlabInterface() {
  return (
    <div className={styles.project_image_box}>
      <img src="img/jupyterlab_examples.svg" />
    </div>
  );
}

function MambaConsole() {
  return (
    <div className={styles.project_image_box}>
      <img src="img/mamba_console.png" width="486px" height="330px" />
    </div>
  );
}

function JupyterCad() {
  return (
    <div className={styles.special_project_image_box}>
      <img src="img/jupytercad.svg" />
    </div>
  );
}

function XTensor_XSIMD() {
  return (
    <div className={styles.special_project_image_box}>
      <img src="img/xtensor_xsimd.svg" width="469px" height="227px"/>
    </div>
  );
}

export function JupyterProject() {
  return (
    <div className={styles.project_container}>
      <div className={styles.project_grid_container}>
        <div className={styles.project_text_box}>
          <div className={styles.project_title}>
            Jupyter project
            <div className={styles.project_subtitle}>
              We strive to sustain the project in the long term.
            </div>
            <div className="vertical-spacing-l"></div>
            <div className={styles.project_description}>
              Our team is deeply involved in the development of the Jupyter
              project, at both technical and organizational levels, with several
              members participating in the project governance in various
              capacities. <br />
              <br />
              We are responsible for some of the main innovations of the past
              years (JupyterLite, Collaborative editing in projectLab, the Voilà
              dashboard system, the projectLab visual debugger).
            </div>
          </div>
        </div>
        <JupyterlabInterface />
      </div>
    </div>
  );
}

export function SupplyChain() {
  return (
    <div className={styles.project_container}>
      <div className={styles.project_grid_container}>
        <MambaConsole />
        <div className={styles.project_text_box}>
          <div className={styles.project_title}>
            Software supply chain
            <div className={styles.project_subtitle}>
              We are the main organisation supporting the mamba package manager.
            </div>
            <div className="vertical-spacing-l"></div>
            <div className={styles.project_description}>
              We contribute to the conda-forge project, by maintaining a large
              number of package recipes, and contributing to the underlying
              infrastructure.
              <br />
              <br />
              We created the first conda/mamba-based package distribution for
              WebAssembly, emscripten-forge.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SpecialProjects() {
  return (
    <div className={styles.project_container}>
      <div className={styles.project_grid_container}>
        <div className={styles.project_text_box}>
          <div className={styles.project_title}>
            Special projects
            <div className={styles.project_subtitle}>
              Applications built from the ground up and addressing a complete
              use case.
            </div>
            <div className="vertical-spacing-l"></div>
            <div className={styles.project_description}>
              Special projects leverage the open-source software stack that we
              maintain. Both JupyterCAD and Glue-Web leverage the JupyterLab
              application framework and assemble JupyterLab components to
              produce a different application.
              <br />
              <br />
              Such examples include: <br />
              JupyterCAD <br />
              Glue-Web
            </div>
          </div>
        </div>
        <JupyterCad />
      </div>
    </div>
  );
}

export function Robotics() {
  return (
    <div className={styles.project_container}>
      <div className={styles.project_grid_container}>
        <JupyterCad />
        <div className={styles.project_text_box}>
          <div className={styles.project_title}>
            Robotics
            <div className={styles.project_subtitle}>
              We just kicked off a new initiative to Robotics education.
            </div>
            <div className="vertical-spacing-l"></div>
            <div className={styles.project_description}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Computing() {
  return (
    <div className={styles.project_container}>
      <div className={styles.project_grid_container}>
        <div className={styles.project_text_box}>
          <div className={styles.project_title}>
            Scientific computing
            <div className={styles.project_subtitle}>
              Supporting the development of several C++ scientific computing
              packages.
            </div>
            <div className="vertical-spacing-l"></div>
            <div className={styles.project_description}>
              QuantStack is the main organisation supporting the development of
              several C++ scientific computing packages such as:
              <br />
              <br />
              <li>
                Xsimd, a unified API for SIMD operations, used by projects such
                as Apache Arrow, Firefox, Krita, Pythran, and naturally,
                xtensor.
              </li>
              <br />
              <br />
              <li>
                Xtensor, a multi-dimensional array library in C++, supporting
                NumPy-style API and features, such as universal functions and
                broadcasting, while being lazy-evaluated. Language bindings for
                Python, R, and Julia are also available.
              </li>
            </div>
          </div>
        </div>
        < XTensor_XSIMD />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <JupyterProject />
      <div className="vertical-spacing-xl" />
      <SupplyChain />
      <div className="vertical-spacing-xl" />
      <SpecialProjects />
      <div className="vertical-spacing-xl" />
      <Robotics />
      <div className="vertical-spacing-xl" />
      <Computing />
      <div className="vertical-spacing-xl" />
    </div>
  );
}
