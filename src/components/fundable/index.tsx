import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import CardGrid from "../layout/CardGrid";
import { fundableProjectsDetails } from "@site/src/pages/sponsor/projectsDetails";
import FundableProjectCard from "./FundableProjectCard";

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
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return "All";
    const param = new URLSearchParams(window.location.search).get("category");
    return CATEGORIES.includes(param) ? param : "All";
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    if (active === "All") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", active);
    }
    window.history.replaceState(null, "", url.toString());
  }, [active]);

  const visible = active === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === active);

  return (
    <>
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
      <CardGrid cols={3}>
        {visible.map((project) => (
          <li key={project.pageName}>
            <FundableProjectCard project={project} />
          </li>
        ))}
      </CardGrid>
    </>
  );
}
