import styles from "./styles.module.css";
import LogoGrid from "./LogoGrid";

export default function TrustedBy() {
  return (
    <div className={styles.trusted_by_outer}>
      <div className="page-content">
        <h2 className="text--center">Trusted by</h2>
        <LogoGrid />
      </div>
    </div>
  );
}
