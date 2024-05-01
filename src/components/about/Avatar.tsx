import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function Avatar({ person }) {
    return (
      <div className={styles.avatar_box}>
        <Link href={"About/" + person.firstName}>
          <div className={styles.avatar}>
            <img src={person.avatarRoute} width={"160px"} height={"160px"}></img>
          </div>
        </Link>
      </div>
    );
  }
  