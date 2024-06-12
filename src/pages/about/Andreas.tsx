import AndreasMD from "@site/src/components/about/Team/Andreas.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Andreas() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <AndreasMD />
      </div>
    </div>
  );
}
