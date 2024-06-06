import styles from "./styles.module.css";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";
import ContactIllustration from "@site/static/img/illustrations/contact.svg";


const breakpointValue: number = 996;

export function ContactDesktop() {
  return (
    <div className={"container" + " " + styles.contact_container}>
      <div className="row">
        <div className={"col col--6 col--offset-1" + " " + styles.col_custom_picture}>
         
          <ContactIllustration/>
        </div>
        <div className={"col col--5" + " " + styles.col_custom_form}>
        <h1 className={styles.h1_custom}> Contact us</h1>
          <div className={styles.form_container}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactMobile() {
  return (
    <div className={"container" + " " + styles.contact_container}>
      <div className={"row" + " " + styles.row_custom}>
        <div className={"col" + " " + styles.col_custom_picture}>
        <h1 className={styles.h1_custom}> Contact us</h1>
          <img src="/img/illustrations/contact.svg"></img>
        </div>
        </div>
        <div className={"row" + " " + styles.row_custom}>
        <div className={"col col--5" + " " + styles.col_custom_form}>
      
          <div className={styles.form_container}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact () {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <ContactDesktop /> : <ContactMobile />}</div>;
}