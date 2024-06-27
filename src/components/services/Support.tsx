import styles from "./styles.module.css";
import SupportMD from "./descriptions/Support.md";
import { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

const breakpointValue: number = 996;

export function SupportIllustration() {
  return (
    <ThemedImage
      alt="Astronaut logo of QuantStack"
      sources={{
        light: useBaseUrl("/img/illustrations/support-light.svg"),
        dark: useBaseUrl("/img/illustrations/support-dark.svg"),
      }}
    />
  );
}


export function SupportDesktop() {
  return (
    <div className="main-container-with-margins">
      <div className={"container" + " " + styles.service_container}>
        <div className="row">
          <div className="col col--4 col--offset-1">
            <div className="flex-full-centered">
             <SupportIllustration/>
            </div>
          </div>
          <div className={"col col--6"}>
            <h2>Professional Support</h2>
            <SupportMD />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SupportMobile() {
  return (
    <div className="main-container-with-margins">
      <div className={"container" + " " + styles.service_container}>
        <div className="row">
          <div className="col">
            <div className="flex-full-centered">
             <SupportIllustration/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
             <h2 className={styles.services_title}>Professional Support</h2>
            <div className={styles.services_description}>
              <SupportMD />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Support() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      <div className={styles.all_projects_container}>
        {isDesktop ? <SupportDesktop /> : <SupportMobile />}
      </div>
    </div>
  );
}
