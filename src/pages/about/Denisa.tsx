import DenisaMD from "@site/src/components/about/Team/Denisa.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";

export default function Denisa() {
  return (
    <div>
     <ArrowLeftHeader route={"/about"}/>
      <div className={styles.bio_container}>
      <DenisaMD  />
      </div>
    </div>
  );
}
