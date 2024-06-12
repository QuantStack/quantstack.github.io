import KerimMD from "@site/src/components/about/Team/Kerim.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Kerim() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <KerimMD />
      </div>
    </div>
  );
}
