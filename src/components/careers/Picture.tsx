import styles from "./styles.module.css";

export default function Picture({ person }) {
  return (
    <div className={styles.picture_container}>
      <div className={styles.interview_picture}>
        <img src={person.pictureRoute}></img>
      </div>
    </div>
  );
}
