import styles from "./styles.module.css";
import Support from "./Support";
import SpecialProjects from "./SpecialProjects";
import Header from "./Header";
import LinkToContact from "../home/LinkToContact";

export default function Services() {
  return (
    <div className={styles.service_container}>
      <Header />
      <Support />
      <div className={styles.transition}>
      Work with the people behind the technology.
    </div>
      <SpecialProjects />
      <div className={styles.sign_a_support_container}>
        <div className={styles.sign_a_support_text}>
        Sign a support retainer for QuantStack services in our ecosystem.
        </div>
        <LinkToContact label={"CONTACT US!"}/>
      </div>
    </div>
  );
}
