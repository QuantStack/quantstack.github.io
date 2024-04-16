import styles from "./styles.module.css";
import Link from "@docusaurus/Link";


export default function WhatWeDo() {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_title}> What we do </div>
      <div className="vertical-spacing-l"></div>
      <div className={styles.grid_container}>
        <div className={styles.project_card}>
          <div className={styles.card_title}>
            Project Jupyter
            <div className="vertical-spacing-s"></div>
            <div className={styles.description}>
              Our team comprises key maintainers of the Jupyter project. We are
              responsible for a large part of the maintenance and continuous
              improvement of the project, ensuring its long-term sustainability.
            </div>
          </div>
        </div>

        <div className={styles.project_card}>
          <div className={styles.card_title}>
            Software Supply Chain
            <div className="vertical-spacing-s"></div>
            <div className={styles.description}>
              We contribute to the conda-forge project, which provides thousands
              of packages and accounts for billions of downloads. We created the
              mamba package manager, which underlies a lot of conda-forge’s
              infrastructure.
            </div>
          </div>
        </div>
        <div className={styles.project_card}>
          <div className={styles.card_title}>
            Scientific Computing
            <div className="vertical-spacing-s"></div>
            <div className={styles.description}>
              We created several popular scientific computing packages. XSimd,
              an unified API for SIMD opreations, adopted by projects such as
              Apache Arrox, FireFox, Kytra, Pythran... Xtensor, a C++
              n-dimensional array librairy with broadcasting and lazy
              evaluation.
            </div>
          </div>
        </div>
      </div>
      <div className="vertical-spacing-l"></div>
      <div className={styles.link_container}>
        <Link className={styles.link_to_services} href="/services">
          {" DISCOVER OUR SERVICES "}
        </Link>
      </div>
    </div>
  );
}
