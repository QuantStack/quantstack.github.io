import FlorenceMD from "@site/src/components/about/Team/Florence.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Florence() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <FlorenceMD />
      </div>
    </div>
  );
}
