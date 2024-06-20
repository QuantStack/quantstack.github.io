import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import LinkToContact from "../home/LinkToContact";


export default function ScheduleAMeeting() {
  return (
    <div className={"container" + " " + styles.schedule_a_meeting_container}>
      <div className="row">
        <div className={"col" + " " + styles.col_schedule}>
          <div className={styles.schedule_text}>
            Schedule a meeting and benefit from our experience in Python, C++,
            in-browser data visualization, and high-performance computing.
          </div>
          <LinkToContact label={"CONTACT US!"}/>
        </div>
      </div>
    </div>
  );
}
