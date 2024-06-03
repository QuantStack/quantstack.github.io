import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function LinkToProjects({label}) {
  return (
    <div className="link-container">
      <Link
        className={"link-to-button" + " " + styles.link_to_projects}
        href="/projects"
      >
        {label}
      </Link>
    </div>
  );
}
