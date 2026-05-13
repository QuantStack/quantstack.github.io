import Support from "./Support";
import SpecialProjects from "./SpecialProjects";
import Header from "./Header";
import Banner from "../layout/Banner";
import LinkToContact from "../home/LinkToContact";

export default function Services() {
  return (
    <>
      <Header />
      <Support />
      <SpecialProjects />
      <Banner bg="dark" cta={<LinkToContact label={"CONTACT US!"} />}>
        Sign a support retainer for QuantStack services in our ecosystem.
      </Banner>
    </>
  );
}
