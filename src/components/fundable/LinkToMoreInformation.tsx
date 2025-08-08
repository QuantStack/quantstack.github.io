import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function LinkToMoreInformation({label, pageName}) {
  const pathname = "/fundable/"+ pageName
  return (
    <div className="flex-full-centered">
      <Link
        className={styles.link_to_more_information}
        href={pathname}
      >
        {label}
      </Link>
    </div>
  );
}
