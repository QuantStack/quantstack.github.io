import SplitSection from "../../layout/SplitSection";
import styles from "./styles.module.css";
import SupplyChainMD from "./descriptions/SupplyChain.md";
import MambaPictureUrl from "@site/static/img/projects/mamba_console.png";

export default function SupplyChainProjects() {
  return (
    <SplitSection
      reverse
      image={<img src={MambaPictureUrl} alt={"Picture showing a terminal in which mamba commands are run."} style={{ maxWidth: "100%" }} />}
    >
      <h2 className="padding-none">Package Management</h2>
      <p className={styles.tagline}>We created Mamba, the fast conda replacement serving 5 million downloads per month.</p>
      <SupplyChainMD />
    </SplitSection>
  );
}
