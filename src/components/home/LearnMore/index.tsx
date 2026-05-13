import Banner from "../../layout/Banner";
import LinkToContact from "../LinkToContact";

export default function LearnMore() {
  return (
    <Banner
      bg="dark"
      title="Want to learn more?"
      cta={<LinkToContact label={"SCHEDULE A MEETING"} />}
    >
      Schedule a meeting and benefit from our expertise on Jupyter, Conda-forge,
      high-performance computing, and open-source development.
    </Banner>
  );
}
