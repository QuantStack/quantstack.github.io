import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Picture from "./Picture";

export default function InterviewCard({ person }) {
  return (
    <Link href={person.url}>
      <div className={styles.interview_card}>
        <Picture person={person} />
        <div className={styles.interview_name}>
          {person.firstName}
        </div>
        <div className={styles.interview_position}>{person.position}</div>
      </div>
    </Link>
  );
}
