import styles from "./styles.module.css";

function GroupPhoto() {
  return (
    <div className={styles.photo_box}>
      <img src="img/group_photo.png" />
    </div>
  );
}

export default function AboutQS() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>About QuantStack</div>
      <div className={styles.description}>
        We are a team of expert of open-source developers, the very same people
        behind a number of technologies that you already use...
      </div>
      <GroupPhoto />
    </div>
  );
}
