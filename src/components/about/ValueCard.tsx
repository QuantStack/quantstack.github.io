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
        <div className={styles.value_text}>
          <value.DescriptionMD />
        </div>
      </div>
    </div>
  );
}
export default ValueCard;
