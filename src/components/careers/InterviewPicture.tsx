import styles from "./styles.module.css";
import PlayCircle from "@site/static/img/icons/PlayCircle.svg";

export default function InterviewPicture({ person }) {
  return (
    <div className={styles.picture_container}>
      <div className={styles.interview_picture}>
        <img
          src={person.pictureRoute}
          alt={
            "Picture of" +
            person.completeName +
            "working at QuantStack as a" +
            person.position
          }
        />
        <PlayCircle className={styles.play_interview} />
      </div>
    </div>
  );
}
