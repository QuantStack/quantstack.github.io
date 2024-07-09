import styles from "./styles.module.css";

export function ValueCard({ value }) {
  return (
    <div className={"card " + styles.value_card}>
      <div
        className={"flex-full-centered"}
        style={{ marginBottom: "var(--ifm-spacing-lg)" }}
      >
        <value.pictureComponent alt={value.alt} />
      </div>
      <div className={styles.value_header}>{value.name}</div>
      <div className={styles.value_text}>
        <value.DescriptionMD className={styles.value_component} />
      </div>
    </div>
  );
}
 export default ValueCard;