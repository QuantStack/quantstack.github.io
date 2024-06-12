import SylvainMD from "@site/src/components/about/Team/Sylvain.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Sylvain() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <SylvainMD />
      </div>
    </div>
  );
}
