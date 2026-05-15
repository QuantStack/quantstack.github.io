import styles from "./styles.module.css";
import { useHistory } from "@docusaurus/router";
import ProgressBar from "./ProgressBar";
import Card from "../layout/Card";

export default function FundableProjectCard({ project }) {
  const history = useHistory();

  function open() {
    history.push({
      pathname: `/sponsor/${project.pageName}`,
      state: { fromFundable: true, scrollY: window.scrollY },
    });
  }

  const desc = project.shortDescription.length > 160
    ? project.shortDescription.substring(0, 160) + "…"
    : project.shortDescription;

  return (
    <Card hover onClick={open} className={styles.fund_card}>
      <div className={styles.fund_card_category}>{project.category}</div>
      <div className={styles.fund_card_title}>{project.title}</div>
      <p className={styles.fund_card_desc}>{desc}</p>
      <div className={styles.fund_card_footer}>
        <div className={styles.fund_card_price}>{project.price}</div>
        <ProgressBar value={project.currentFundingPercentage} color="var(--ifm-color-secondary-s1)" />
        <div className={styles.fund_card_pct}>
          {project.currentFundingPercentage}% funded
          {project.currentNbOfFunders > 0 && ` · ${project.currentNbOfFunders} funder${project.currentNbOfFunders > 1 ? "s" : ""}`}
        </div>
      </div>
    </Card>
  );
}
