import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import TopicsTable from "./TopicsTable";

export default function WhatWeDo() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "var(--ifm-color-primary-p1",
      }}
    >
      <TopicsTable />
      <div className="row row--no-gutter">
        <div
          className="col col--12"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link className={styles.link_to_services} href="/services">
            {" DISCOVER OUR SERVICES "}
          </Link>
        </div>
      </div>
    </div>
  );
}
