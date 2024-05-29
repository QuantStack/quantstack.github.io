import styles from "./styles.module.css";


export default function ComputingProjects() {
  return (
    <div className={"container" + " " + styles.project_desktop}>
      <div className="row">
        <div className="col col--5 col--offset-1">
          <h1>Scientific computing </h1>
          <h2 className={styles.h2_custom}>
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
        <div className={"col col--5" + " " + styles.col_custom}>
          <img
            src="img/projects/xtensor_xsimd.svg"
            width="469px"
            height="227px"
          />
        </div>
      </div>
    </div>
  );
}