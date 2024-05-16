import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Picture from "./Picture";

export default function InterviewCard({ person }) {
  return (
    <Link>
      <div className={styles.interview_card}>
        <Picture person={person} />
        <div className={styles.interview_card_first_name}>
          {person.firstName}
        </div>
        <div className={styles.interview_card_position}>{person.position}</div>
      </div>
    </Link>
  );
}
