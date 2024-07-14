import styles from "./styles.module.css";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";
import ContactIllustration from "/img/illustrations/contact.svg"


export function Contact() {
  return (
    <div className="container upper-container-with-margin-top">
      <div className={"row"}>
        <div
          className={
            "col col--6 col--offset-1" + " " + "flex-full-centered" + " "
          }
          style={{
            margin: "var(--ifm-spacing-2xl) 0",
            padding: "var(--ifm-spacing-2xl)",
          }}
        >
          <ContactIllustration alt={"Illustration for the contact page with a woman, a mobile phone and an enveloppe."} />
        </div>
        <div
          className={"col col--5" + " " + "padding-none" + " " + "margin-none"}
        >
          <h1 className={"padding-none"}> Contact us</h1>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
 export default Contact;