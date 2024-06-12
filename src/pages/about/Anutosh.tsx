import AnutoshMD from "@site/src/components/about/Team/Anutosh.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Anutosh() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <AnutoshMD />
      </div>
    </div>
  );
}
