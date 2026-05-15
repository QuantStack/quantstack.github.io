import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Section from "../layout/Section";
import SectionSeparator from "../layout/SectionSeparator";
import CardGrid from "../layout/CardGrid";
import BackgroundScene from "../layout/BackgroundScene";
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

      <div className={styles.propose_section}>
        <h2>Can't find a project?</h2>
        <p>If you have a project in mind that you think would be relevant to our expertise, please contact us to discuss it.</p>
        <LinkToContact label="CONTACT US!" />
      </div>
    </>
  );
}

export default function FundableProjects() {
  return (
    <>
      <Section pageTop bg="yellow" background={<BackgroundScene variant="light" />}>
        <h1>Sponsor open-source work</h1>
        <p>High-demand open-source features with detailed plans already in place — the work is scoped, the need is proven, only funding is missing. Back a project and get it shipped.</p>
      </Section>
      <SectionSeparator variant={3} />
      <Section>
        <MainAreaFundableProjects />
      </Section>
    </>
  );
}
