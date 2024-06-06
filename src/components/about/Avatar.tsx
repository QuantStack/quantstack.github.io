import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function Avatar({ person }) {
    return (
      <div className={styles.avatar_container}>
          <div className={styles.avatar}>
            <img src={require(person.avatarRoute).default} width={"160px"} height={"160px"}></img>
          </div>
      </div>
    );
  }
  