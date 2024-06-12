import IsabelMD from "@site/src/components/about/Team/Isabel.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Isabel() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <IsabelMD />
      </div>
    </div>
  );
}
