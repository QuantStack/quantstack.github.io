import LinkToContact from "../LinkToContact";
import styles from "./styles.module.css";

export default function LearnMore() {
  return (
    <div className={"blue-banner-container" + " " + styles.learn_more_container}>
      <div className="blue-banner-header">Want to learn more?</div>
      Schedule a meeting and benefit from our expertise on Jupyter, Conda-forge,
      high-performance computing, and open-source development.
      <LinkToContact label={"SCHEDULE A MEETING"} />
    </div>
  );
}
