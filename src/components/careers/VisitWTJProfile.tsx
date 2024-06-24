import styles from "./styles.module.css";
import LinkToWTJ from "../home/LinkToWTJ";

export default function VisitWTJProfile() {
    return (
      <div className={styles.WTJ_profile_container}>
        <h1 className={"h1-centered"+" "+ "h1-padding-none" + " " +"h1-margin-none"+ " "+styles.learn_more_WTJ}>
          LEARN MORE ON OUR WELCOME TO THE JUNGLE WEB PAGE
        </h1>
        <LinkToWTJ label={"OPEN OUR PROFILE"} />
      </div>
    );
  }