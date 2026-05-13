import { useState } from "react";
import styles from "./styles.module.css";
import { fundableProjectsDetails } from "./projectsDetails";
import FundableProjectCard from "./FundableProjectCard";
import LinkToContact from "../home/LinkToContact";

const ALL_PROJECTS = Object.values(fundableProjectsDetails).flat();
const CATEGORIES = ["All", ...new Set(ALL_PROJECTS.map((p) => p.category))];

export function getCategoryFromProjectPageName(pageName: string) {
  for (const projects of Object.values(fundableProjectsDetails)) {
    const found = projects.find((p) => p.pageName === pageName);
    if (found) return projects;
  }
  return null;
}

export function MainAreaFundableProjects() {
  const [active, setActive] = useState("All");

  const visible = active === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === active);

  return (
    <div>
      <h1>Projects available for funding</h1>

      <div className={styles.filter_tags}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={styles.filter_tag + (active === cat ? " " + styles.filter_tag_active : "")}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.cards_grid}>
        {visible.map((project) => (
          <FundableProjectCard key={project.pageName} project={project} />
        ))}
      </div>

      <div className={styles.propose_section}>
        <h2>Can't find a project?</h2>
        <p>If you have a project in mind that you think would be relevant to our expertise, please contact us to discuss it.</p>
        <LinkToContact label="CONTACT US!" />
      </div>
    </div>
  );
}

export default function FundableProjects() {
  return (
    <div className="page-content upper-container-with-margin-top">
      <MainAreaFundableProjects />
    </div>
  );
}
