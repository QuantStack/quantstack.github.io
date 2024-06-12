import ThorstenMD from "@site/src/components/about/Team/Thorsten.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Thorsten() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <ThorstenMD />
      </div>
    </div>
  );
}
