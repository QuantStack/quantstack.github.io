import AnastasiiaMD from "@site/src/components/about/Team/Anastasiia.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Anastasiia() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <AnastasiiaMD />
      </div>
    </div>
  );
}
