import SplitSection from "../../layout/SplitSection";
import styles from "./styles.module.css";
import SupplyChainMD from "./descriptions/SupplyChain.md";
import MambaPictureUrl from "@site/static/img/projects/mamba_console.png";

export default function SupplyChainProjects() {
  return (
    <SplitSection
      bg="light"
      reverse
      image={<img src={MambaPictureUrl} alt={"Picture showing a terminal in which mamba commands are run."} style={{ maxWidth: "100%" }} />}
    >
      <h1 className="padding-none">Software supply chain</h1>
      <h2 className={styles.h2_custom}>We are the main organization supporting the mamba package manager.</h2>
      <SupplyChainMD />
    </SplitSection>
  );
}
