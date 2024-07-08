import Fanny from "@site/src/components/about/Team/Fanny.md";
import styles from "@site/src/components/about/styles.module.css";
import FannyAvatarUrl from "@site/static/img/avatars/Fanny.png";

export default function FannyComponent() {
  return (
    <div className={styles.large_portrait_card}>
      <div className={"container"}>
        <div className="row" style={{ marginBottom: "var(--ifm-spacing-lg)" }}>
          <div className="col col--10 col--offset-1">
            <div className="flex-full-centered">
              <div className={styles.avatar}>
                <img src={FannyAvatarUrl} alt={"Picture of Fanny."} />
                
              </div>
            </div>
            <div className="spacing-2xl"></div>
            <p style={{ textAlign: "center" }}>
              <b>In memoriam: Fanny Loustau-Chartez - 1983 - 2024</b>
            </p>
            <Fanny />
          </div>
        </div>
      </div>
    </div>
  );
}
