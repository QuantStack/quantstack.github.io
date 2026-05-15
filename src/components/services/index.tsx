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
      <Banner bg="dark" cta={<LinkToContact label={"CONTACT US!"} />}>
        Sign a support retainer for QuantStack services in our ecosystem.
      </Banner>
    </>
  );
}
