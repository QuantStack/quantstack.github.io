import Banner from "../../layout/Banner";
import LinkToContact from "../LinkToContact";

export default function LearnMore() {
  return (
    <Banner
      bg="dark"
      fullHeight
      title="Work with the people who built it."
      cta={<LinkToContact label={"SCHEDULE A MEETING"} />}
    >
      Support retainer, custom feature, or a full engineering engagement —
      you work directly with the upstream maintainers of the tools your team depends on.
    </Banner>
  );
}
