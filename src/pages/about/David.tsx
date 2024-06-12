import DavidMD from "@site/src/components/about/Team/David.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function David() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <DavidMD />
      </div>
    </div>
  );
}
