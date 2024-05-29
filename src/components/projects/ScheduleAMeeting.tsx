import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function ScheduleAMeeting() {
  return (
    <div className={"container" + " " + styles.schedule_a_meeting_container}>
      <div className="row">
        <div className={"col" + " " + styles.col_custom_schedule}>
          <div className={styles.schedule_text}>
            Schedule a meeting and benefit from our experience in Python, C++,
            in-browser data visualization, and high-performance computing.
          </div>
          <div className="link-box">
            <Link
              className={"link-to-button" + " " + styles.link_to_button_custom}
              href="/contact"
            >
              {" CONTACT US! "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
