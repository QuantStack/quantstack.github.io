import styles from "./styles.module.css";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";
import ContactIllustration from "/img/illustrations/contact.svg";

export function Contact() {
  return (
    <div className="container upper-container-with-margin-top">
      <h1 className={"padding-none text--center"}> Contact us</h1>
      <div className={"row"}>
        <div
          className="col col--5 col--offset-1 flex-full-centered"
          style={{
            padding: "var(--ifm-spacing-xl)",
          }}
        >
          <ContactIllustration
            height={"460px"}
            alt={
              "Illustration for the contact page with a woman, a mobile phone and an envelope."
            }
          />
        </div>
        <div
          className={"col col--5 flex-full-centered padding-none margin-none"}
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
export default Contact;
