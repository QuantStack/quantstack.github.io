import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function LinkToWTJ({label}) {
  return (
    <div className="flex-full-centered">
      <Link
        className={"link-to-button" + " " + styles.link_to_WTJ}
        href="https://www.welcometothejungle.com/fr/companies/quantstack"
        aria-label="Learn more by visiting the page dedicated to QuantStack on Welcome to the Jungle platform."
      >
        {label}
      </Link>
    </div>
  );
}
