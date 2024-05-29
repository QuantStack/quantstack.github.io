import styles from "./styles.module.css";

export default function ValueCard({ value, ValueComponent }) {
    return (
      <div className={"card " + styles.value_card}>
        <div className={styles.value_image}>
          <img src={value.imageRoute}></img>
        </div>
        <div className={styles.value_header}>{value.name}</div>
        <div className={styles.value_text}>
          <ValueComponent />
        </div>
      </div>
    );
  }