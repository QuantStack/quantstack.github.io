import styles from "./styles.module.css";
import Topics from "./Topics";
import LinkToServices from "../LinkToServices";
import { useEffect, useState } from "react";

const breakpointValue: number = 996;

export function WhatWeDoDesktop() {
  return (
    <div className={"container" + " " + styles.whatwedo_container}>
       < h1 className = {styles.header}> What we do </h1>
      <div className={"row" + " " + styles.row_custom}>
        <div className={"col col--12" + " " + styles.col_custom}>
          <Topics />
        </div>
      </div>
      <div className={"row" + " " + styles.link_to_services_desktop}>
        <div className={"col col--12" + " " + styles.col_custom}>
          <LinkToServices label={"DISCOVER OUR SERVICES"} />
        </div>
      </div>
    </div>
  );
}

export function WhatWeDoMobile() {
  return (
    <div className={"container" + " " + styles.whatwedo_container}>
      <div className={"row" + " " + styles.row_custom}>
        <div className={"col col--12" + " " + styles.col_custom}>
          <Topics />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <WhatWeDoDesktop /> : <WhatWeDoMobile />}</div>;
}
