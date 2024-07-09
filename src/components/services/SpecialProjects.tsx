import styles from "./styles.module.css";
import SpecialProjectsMD from "./descriptions/SpecialProjects.md";
import { useEffect, useState } from "react";
import SpecialProjectsIllustration from "@site/static/img/illustrations/special_projects.svg"


export function SpecialProjects() {
  return (
    <div className="main-container-with-margins">
      <div className={"container" + " " + styles.service_container}>
        <div className="row">
          <div className="col col--4 col--offset-2">
            <h2>Special projects</h2>
            <SpecialProjectsMD />
          </div>
          <div className={"col col--5" + " " + "flex-full-centered"}>
            <SpecialProjectsIllustration
              alt={
                "Picture showing an illustration of a group of people working together in an office."}
                width={"360px"}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProjects;