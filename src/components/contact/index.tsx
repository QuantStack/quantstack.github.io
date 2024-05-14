import styles from "./styles.module.css";

export function ContactForm() {
  return (
    <>
      <h1> Contact us</h1>
      <form
        action="https://formspree.io/info@quantstack.net"
        method="POST"
        className={styles.contact_form}
      >
        <div className="form-group">
          <div>
            <label className={styles.form_label}>Your name</label>
          </div>
          <div>
            <input
              type="text"
              className={styles.small_input}
              name="name"
              id="name"
            />
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className={styles.form_label}>Your company</label>
          </div>
          <div>
            <input className={styles.small_input} name="company" id="company" />
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className={styles.form_label}>Your email</label>
          </div>
          <div>
            <input
              type="text"
              className={styles.small_input}
              name="email"
              id="email"
            />
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className={styles.form_label}>Your phone number</label>
          </div>
          <div>
            <input
              type="text"
              className={styles.small_input}
              name="phone-number"
              id="phone-number"
            />
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className={styles.form_label}>Your message to us</label>
          </div>
          <div>
            <textarea
              className={styles.large_input}
              name="message"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className={styles.send_button_box}>
          <input type="submit" value="SEND" className={styles.send_button} />
        </div>
      </form>
    </>
  );
}

export default function Contact() {
  return (
    <div className="container" style={{ margin: "var(--ifm-spacing-5xl) 0 var(--ifm-spacing-5xl) 0"}}>
      <div className="row">
        <div className="col col--5">
          <img src="img/illustrations/contact.svg"></img>
        </div>
        <div className="col col--6 col--offset-1">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}
