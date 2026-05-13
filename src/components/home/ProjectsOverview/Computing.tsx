import SplitSection from "../../layout/SplitSection";
import styles from "./styles.module.css";
import ComputingMD from "./descriptions/Computing.md";
import XTensorXSIMDPicture from "@site/static/img/projects/xtensor_xsimd.svg";

export default function ComputingProjects() {
  return (
    <SplitSection
      image={<XTensorXSIMDPicture style={{ maxWidth: "100%" }} />}
    >
      <h1 className="padding-none">Scientific computing</h1>
      <h2 className={styles.h2_custom}>Supporting the development of several C++ scientific computing packages.</h2>
      <ComputingMD />
    </SplitSection>
  );
}
