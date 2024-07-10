import styles from "./styles.module.css";

export function ValueCard({ value }) {
  return (
    <div className={"card" + " " + styles.value_card}>
      <div
        className={"card__header flex-full-centered"}
        style={{ marginBottom: "var(--ifm-spacing-lg)" }}
      >
        <value.pictureComponent alt={value.alt} />
      </div>

      <div className={"card__body"}>
        <div className={styles.value_header}>{value.name}</div>
        <value.DescriptionMD className={styles.value_value_text} />
      </div>
    </div>
  );
}
export default ValueCard;
