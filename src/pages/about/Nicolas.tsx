import NicolasMD from "@site/src/components/about/Team/Nicolas.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Nicolas() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <NicolasMD />
      </div>
    </div>
  );
}
