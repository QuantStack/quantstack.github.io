import MeriemMD from "@site/src/components/about/Team/Meriem.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Meriem() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <MeriemMD />
      </div>
    </div>
  );
}
