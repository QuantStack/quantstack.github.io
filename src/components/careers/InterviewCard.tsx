import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import InterviewPicture from "./InterviewPicture";
import PlayCircle from "@site/static/img/icons/PlayCircle.svg";

export default function InterviewCard({ person }) {
  return (
    <Link href={person.url}>
      <div className={styles.interview_card}>
        <InterviewPicture person={person} />
        <div className={styles.interview_name}>
          {person.firstName}
        </div>
        <div className={styles.interview_position}>{person.position}</div>
      </div>
    </Link>
  );
}
