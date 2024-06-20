import styles from "./styles.module.css";
import LinkToWTJ from "../home/LinkToWTJ";

export default function VisitWTJProfile() {
    return (
      <div className={styles.WTJ_profile}>
        <div className={styles.learn_more_WTJ}>
        Learn more on our welcome to the jungle web page.
        </div>
        <LinkToWTJ label={"VISIT OUR PROFILE"} />
      </div>
    );
  }