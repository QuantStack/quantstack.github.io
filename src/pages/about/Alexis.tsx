import AlexisMD from "@site/src/components/about/Team/Alexis.md";
import styles from "@site/src/components/about/styles.module.css";
import ArrowLeftHeader from "@site/src/components/about/ArrowLeftHeader";
import PortraitPopup from "@site/src/components/about/mobile/PortraitPopup";

export default function Alexis() {
  return (
    <div>
      <ArrowLeftHeader route={"/about/"} />
      <div className={styles.bio_container}>
        <AlexisMD />
      </div>
    </div>
  );
}
