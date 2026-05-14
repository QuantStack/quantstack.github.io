import Banner from "../layout/Banner";
import LinkToContact from "../home/LinkToContact";

export default function ScheduleAMeeting() {
  return (
    <Banner bg="dark" cta={<LinkToContact label="CONTACT US!" />}>
      Schedule a meeting and benefit from our experience in Python, C++,
      in-browser data visualization, and high-performance computing.
    </Banner>
  );
}
