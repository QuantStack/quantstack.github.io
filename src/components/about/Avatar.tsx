import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function Avatar({ person }) {
  return (
    <div className="flex-full-centered">
      <div className={styles.avatar}>
        <img
          src={require(person.avatarRoute).default}
          width={"160px"}
          height={"160px"}
          alt={
            "Avatar of " +
            person.CompleteName +
            "working at QuantStack as a " +
            person.position
          }
        ></img>
      </div>
    </div>
  );
}
