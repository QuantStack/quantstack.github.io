import JeremyMD from "@site/src/components/about/Team/Jeremy.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Jeremy() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <JeremyMD />
      </div>
    </div>
  );
}
