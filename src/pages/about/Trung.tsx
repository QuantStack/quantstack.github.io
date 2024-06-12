import TrungMD from "@site/src/components/about/Team/Trung.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Trung() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <TrungMD />
      </div>
    </div>
  );
}
