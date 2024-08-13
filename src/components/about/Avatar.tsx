import styles from "./styles.module.css";

export default function Avatar({ person }) {
    return (
    <div className="flex-full-centered">
      <img
        src={person.avatarUrl}
        className={styles.avatar}
        alt={
          "Avatar of " +
          person.completeName +
          "working at QuantStack as a " +
          person.position
        }
      />
      </div>
    );
  }