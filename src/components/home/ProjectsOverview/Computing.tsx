import SplitSection from "../../layout/SplitSection";
import styles from "./styles.module.css";
import ComputingMD from "./descriptions/Computing.md";
import XTensorXSIMDPicture from "@site/static/img/projects/xtensor_xsimd.svg";

export default function ComputingProjects() {
  return (
    <SplitSection
image={<XTensorXSIMDPicture style={{ maxWidth: "100%" }} />}
    >
      <h2 className="padding-none">Scientific Computing</h2>
      <p className={styles.tagline}>Authors of xtensor and xsimd, adopted by Apache Arrow, Firefox, and Pythran.</p>
      <ComputingMD />
    </SplitSection>
  );
}
