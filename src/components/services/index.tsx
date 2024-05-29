import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Support from "./Support";
import SpecialProjects from "./SpecialProjects";
import Header from "./Header";
import Transition from "./Transition";

export default function Services() {
  return (
    <div className={styles.service_container}>
      <Header />
      <Support />
      <Transition />
      <SpecialProjects />
      <div className={styles.contract}>
        Sign a support retainer for QuantStack services in our ecosystem.
        <div className="link-box">
          <Link className="link-to-button" href="/contact">
            {" CONTACT US! "}
          </Link>
        </div>
      </div>
    </div>
  );
}
