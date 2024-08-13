import styles from "./styles.module.css";
import Header from "./Header";
import ScheduleAMeeting from "./ScheduleAMeeting";
import AllProjects from "./AllProjects";

export default function Projects() {
  return (
    <>
      <div className="horizontally-centered">
        <Header />
        <AllProjects />
      </div>

      <ScheduleAMeeting />
    </>
  );
}
