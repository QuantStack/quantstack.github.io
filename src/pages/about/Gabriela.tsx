import GabrielaMD from "@site/src/components/about/Team/Gabriela.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Gabriela() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <GabrielaMD />
      </div>
    </div>
  );
}
