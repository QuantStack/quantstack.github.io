import styles from "./styles.module.css";

export function ValueCard({ value }) {
  return (
    <div className={"content-card " + styles.value_card}>
      <div className={styles.value_icon}>
        <value.pictureComponent alt={value.alt} />
      </div>
      <div className={styles.value_header}>{value.name}</div>
      <div className={styles.value_text}>
        <value.DescriptionMD />
      </div>
    </div>
  );
}
export default ValueCard;
