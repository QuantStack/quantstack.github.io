import Support from "./Support";
import SpecialProjects from "./SpecialProjects";
import Header from "./Header";
import Banner from "../layout/Banner";
import LinkToContact from "../home/LinkToContact";
import SectionSeparator from "../layout/SectionSeparator";

export default function Services() {
  return (
    <>
      <Header />
      <SectionSeparator variant={4} />
      <Support />
      <SectionSeparator variant={5} />
      <SpecialProjects />
      <Banner bg="dark" title="Ready to work together?" cta={<LinkToContact label={"GET IN TOUCH"} />}>
        Tell us what you're building. We'll tell you honestly whether and how we can help.
      </Banner>
    </>
  );
}
