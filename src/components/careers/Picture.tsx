import styles from "./styles.module.css";

export default function Picture({ person }) {
  return (
    <div className={styles.picture_box}>
      <div className={styles.picture}>
        <img src={person.pictureRoute}></img>
      </div>
    </div>
  );
}
