import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

function GroupPhoto() {
  return (
    <div className={styles.photo_box}>
      <img src="/img/QuantStack-2000-58.png"></img>
    </div>
  );
}

export default function AboutQS() {
  return (
    <div
      className="container"
      style={{
        margin: "var(--ifm-spacing 2xl 0 var(--ifm-spacing 2xl 0",
        backgroundColor: "var(--ifm-color-primary-p1)",
        height: "600px",
      }}
    >
      <div className="row">
        <div
          className="col col--10 col--offset-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "black",
              textAlign: "center",
              marginBottom: "var(--ifm-spacing-lg)",
            }}
          >
            We are a team of expert of open-source developers, the very same
            people behind a number of technologies that you already use...
          </p>
        </div>
      </div>
      <div className="row">
        <div
          className="col col--10 col--offset-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        </div>
      </div>
      <div className="row">
        <div
          className="col col--10 col--offset-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "var(--ifm-spacing-lg)",
            marginBottom: "var(--ifm-spacing-lg)",
          }}
        >
          <Link className={styles.link_to_about_us} href="/about">
            {" LEARN MORE ABOUT US "}
          </Link>
        </div>
      </div>
    </div>
  );
}
