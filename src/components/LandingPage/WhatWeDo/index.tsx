import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function WhatWeDo() {
  return (
    <div
      className="container" 
      style={{
        backgroundColor: "var(--ifm-color-primary-p1"
      }}
    >
      <div className="row row--no-gutter">
        <div className="col col--10 col--offset1">
          <h1
            style={{
              marginTop: "var(--ifm-spacing-2xl)",
              marginBottom: "var(--ifm-spacing-2xl)",
            }}
          >
            {" "}
            What we do{" "}
          </h1>
        </div>
      </div>

      <div className="row row--no-gutter">
        <div className="col col--4">
          <div className={"card " + styles.project_card}>
            <div className={"card_header_custom"}>Project Jupyter</div>
            <div className={"card_body_custom"}>
              Our team comprises key maintainers of the Jupyter project. We are
              responsible for a large part of the maintenance and continuous
              improvement of the project, ensuring its long-term sustainability.
            </div>
          </div>
        </div>
        <div className="col col --4">
          <div className={"card " + styles.project_card}>
            <div className={"card_header_custom"}>Software Supply Chain</div>
            <div className={"card_body_custom"}>
              We contribute to the conda-forge project, which provides thousands
              of packages and accounts for billions of downloads. We created the
              mamba package manager, which underlies a lot of conda-forge’s
              infrastructure.
            </div>
          </div>
        </div>
        <div className="col col --4">
          <div className={"card " + styles.project_card}>
            <div className={"card_header_custom"}>Scientific Computing</div>
            <div className={"card_body_custom"}>
              We created several popular scientific computing packages. XSimd,
              an unified API for SIMD opreations, adopted by projects such as
              Apache Arrox, FireFox, Kytra, Pythran... Xtensor, a C++
              n-dimensional array librairy with broadcasting and lazy
              evaluation.
            </div>
          </div>
        </div>
      </div>

      <div className="row row--no-gutter">
        <div className="col col--12" style={{display: "flex", justifyContent: "center"}}>
          <Link
            className={styles.link_to_services}
            href="/services"
          >
            {" DISCOVER OUR SERVICES "}
          </Link>
        </div>
      </div>
    </div>
  );
}
