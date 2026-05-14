import SplitSection from "../../layout/SplitSection";
import styles from "./styles.module.css";
import ComputingMD from "./descriptions/Computing.md";
import XTensorXSIMDPicture from "@site/static/img/projects/xtensor_xsimd.svg";

export default function ComputingProjects() {
  return (
    <SplitSection
image={<XTensorXSIMDPicture style={{ maxWidth: "100%" }} />}
    >
      <h2 className="padding-none">Scientific computing</h2>
      <p className={styles.tagline}>Supporting the development of several C++ scientific computing packages.</p>
      <ComputingMD />
    </SplitSection>
  );
}
