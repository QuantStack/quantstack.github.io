import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export function ValueCardDesktop({ value, ValuePicture, ValueComponent }) {
  return (
    <div className={"card " + styles.value_card}>
      <div className={styles.value_image}>
        <ValuePicture />
      </div>
      <div className={styles.value_header}>{value}</div>
      <div className={styles.value_text}>
        <ValueComponent className={styles.value_component} />
      </div>
    </div>
  );
}

export function ValueCardMobile({
  value,
  ValuePicture,
  ValueComponent,
  color,
}) {
  return (
    <div
      className={
        "card " +
        " " +
        styles.value_card +
        " " +
        (color === "yellow"
          ? styles.value_card_yellow
          : styles.value_card_white)
      }
    >
      <div className={styles.value_image}>
        <ValuePicture />
      </div>
      <div className={styles.value_header}>{value}</div>
      <div className={styles.value_text}>
        <ValueComponent />
      </div>
    </div>
  );
}

const breakpointValue: number = 996;

export default function ValueCard(value, ValuePicture, ValueComponent, color) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <ValueCardDesktop
          value={value}
          ValuePicture={ValuePicture}
          ValueComponent={ValueComponent}
        />
      ) : (
        <ValueCardMobile
          value={value}
          ValuePicture={ValuePicture}
          ValueComponent={ValueComponent}
          color={color}
        />
      )}
    </div>
  );
}
