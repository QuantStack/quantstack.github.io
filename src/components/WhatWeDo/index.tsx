import Projects from "@site/src/pages/projects";
import styles from "./styles.module.css";

function handleClick() {
  console.log("You have clicked");
}

export default function WhatWeDo() {
  return (
    <div className={styles.projects_container}>
      <div className={styles.projects_title}> What we do </div>
      <div className="vertical-spacing-l"></div>
      <div className={styles.projects_grid_container}>
        <div className={styles.projects_card}>
        <div className={styles.projects_subtitle}>
          Project Jupyter
          <div className={styles.projects_description}>
            Our team comprises key maintainers of the Jupyter project. We are
            responsible for a large part of the maintenance and continuous
            improvement of the project, ensuring its long-term sustainability.
          </div>
        </div>
        </div>

        <div className={styles.projects_card}>
          <div className={styles.projects_subtitle}>
            Software Supply Chain
            <div className={styles.projects_description}>
              We contribute to the conda-forge project, which provides thousands
              of packages and accounts for billions of downloads. We created the
              mamba package manager, which underlies a lot of conda-forge’s
              infrastructure.
            </div>
          </div>
        </div>
        <div className={styles.projects_card}>
          <div className={styles.projects_subtitle}>
            Scientific Computing
            <div className={styles.projects_description}>
              We created several popular scsientific computing packages. XSimd,
              an unified API for SIMD opreations, adopted by projects such as
              Apache Arrox, FireFox, Kytra, Pythran... Xtensor, a C++
              n-dimensional array librairy with broadcasting and lazy
              evaluation.
            </div>
          </div>
        </div>
      </div>
      <div className="vertical-spacing-l"></div>

      <button className={styles.button_discover} onClick={handleClick}>
        DISCOVER OUR SERVICES
      </button>
    </div>
  );
}
