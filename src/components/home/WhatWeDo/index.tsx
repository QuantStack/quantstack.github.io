import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Topics from "./Topics";

export default function WhatWeDo() {
  return (
    <div className={"container" + " " + styles.whatwedo_container}>
      <div className="row">
        <div className={"col col--12" + " " + styles.col_custom}>
          <Topics />
        </div>
      </div>
      <div className="row">
        <div className={"col col--12" + " " + styles.col_custom}>
          <Link
            className={"link-to-button" + " " + styles.link_to_services}
            href="/services"
          >
            {" DISCOVER OUR SERVICES "}
          </Link>
        </div>
      </div>
    </div>
  );
}
