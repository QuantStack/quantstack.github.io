import RomainMD from "@site/src/components/about/Team/Romain.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Romain() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <RomainMD />
      </div>
    </div>
  );
}
