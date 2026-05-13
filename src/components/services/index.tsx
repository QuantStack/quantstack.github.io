import styles from "./styles.module.css";
import Support from "./Support";
import SpecialProjects from "./SpecialProjects";
import Header from "./Header";
import LinkToContact from "../home/LinkToContact";

export default function Services() {
  return (
    <div>
      <Header />
      <Support />
      <SpecialProjects />
      <div className="blue-banner-container">
        <div
          className={"flex-full-centered blue-banner-text"}
        >
          Sign a support retainer for QuantStack services in our ecosystem.
        </div>
        <LinkToContact label={"CONTACT US!"} />
      </div>
    </div>
  );
}
