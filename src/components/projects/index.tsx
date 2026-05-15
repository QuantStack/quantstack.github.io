import styles from "./styles.module.css";
import Header from "./Header";
import ScheduleAMeeting from "./ScheduleAMeeting";
import AllProjects from "./AllProjects";
import SectionSeparator from "../layout/SectionSeparator";

export default function Projects() {
  return (
    <>
      <Header />
      <SectionSeparator variant={1} />
      <AllProjects />
      <ScheduleAMeeting />
    </>
  );
}
