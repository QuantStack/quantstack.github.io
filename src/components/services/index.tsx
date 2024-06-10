import styles from "./styles.module.css";
import Support from "./Support";
import SpecialProjects from "./SpecialProjects";
import Header from "./Header";
import Transition from "./Transition";
import LinkToContact from "../home/LinkToContact";

export default function Services() {
  return (
    <div className={styles.service_container}>
      <Header />
      <Support />
      <Transition />
      <SpecialProjects />
      <div className={styles.contract}>
        Sign a support retainer for QuantStack services in our ecosystem.
        <LinkToContact label={"CONTACT US!"}/>
      </div>
    </div>
  );
}
