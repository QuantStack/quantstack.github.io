import styles from "./styles.module.css";
import Card from "../layout/Card";

export function ValueCard({ value }) {
  return (
    <Card bg="yellow" className={styles.value_card}>
      <div className={styles.value_icon}>
        <value.pictureComponent alt={value.alt} />
      </div>
      <div className={styles.value_header}>{value.name}</div>
      <div className={styles.value_text}>
        <value.DescriptionMD />
      </div>
    </Card>
  );
}
export default ValueCard;
