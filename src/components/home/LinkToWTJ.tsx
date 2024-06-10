import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function LinkToWTJ({label}) {
  return (
    <div className="link-container">
      <Link
        className={"link-to-button" + " " + styles.link_to_contact}
        href="https://www.welcometothejungle.com/fr/companies/quantstack"
      >
        {label}
      </Link>
    </div>
  );
}
