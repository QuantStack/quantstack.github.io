import styles from "./styles.module.css";
import LinkToContact from "../home/LinkToContact";

export default function ScheduleAMeeting() {
  return (
    <div className="container blue-banner-container">
      <div className="row">
        <div className="col">
          Schedule a meeting and benefit from our experience in Python, C++,
          in-browser data visualization, and high-performance computing.
          <LinkToContact label={"CONTACT US!"} />
        </div>
      </div>
    </div>
  );
}
