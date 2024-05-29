import styles from "./styles.module.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className={"container" + " " + styles.contact_container}>
      <div className="row">
        <div className={"col col--6 col--offset-1" + " " + styles.col_custom_picture}>
         
          <img src="img/illustrations/contact.svg"></img>
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
