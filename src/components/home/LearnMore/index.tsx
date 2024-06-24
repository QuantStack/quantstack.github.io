import styles from "./styles.module.css";
import LinkToContact from "../LinkToContact";

export default function LearnMore() {
  return (
    <div className={styles.learn_more_container}>
      <h1 className={"h1-centered"+" "+ "h1-padding-none" + " " +"h1-margin-none"+ " "+ styles.learn_more_title}> WANT TO LEARN MORE?</h1>

      <div className={styles.learn_more_text}>
        Schedule a meeting and benefit from our expertise on Jupyter,
        Conda-forge, high-performance computing, and open-source development.
      </div>
      <LinkToContact label={"SCHEDULE A MEETING"} />
    </div>
  );
}
