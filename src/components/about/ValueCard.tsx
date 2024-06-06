import styles from "./styles.module.css";

export default function ValueCard({ value, ValuePicture, ValueComponent }) {
    return (
      <div className={"card " + styles.value_card}>
        <div className={styles.value_image}>
        <ValuePicture/>
        </div>
        <div className={styles.value_header}>{value}</div>
        <div className={styles.value_text}>
          <ValueComponent />
        </div>
      </div>
    );
  }