import styles from "../pages/contact.module.css";

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xjvndwdq"
      method="POST"
      className={styles.contact_form}
    >
      {[
        { label: "Your name", name: "name", type: "text" },
        { label: "Your company", name: "company", type: "text" },
        { label: "Your email", name: "email", type: "text" },
        { label: "Your phone number", name: "phone-number", type: "text" },
      ].map(({ label, name, type }) => (
        <div className="form-group" key={name}>
          <label className={styles.form_label}>{label}</label>
          <div className={styles.input_container}>
            <input type={type} className={styles.small_input} name={name} id={name} />
          </div>
        </div>
      ))}
      <div className="form-group">
        <label className={styles.form_label}>Your message to us</label>
        <textarea className={styles.large_input} name="message" id="message" />
      </div>
      <div className={`flex-full-centered ${styles.send_button_container}`}>
        <input type="submit" value="SEND" className={`link-to-button ${styles.send_button}`} />
      </div>
    </form>
  );
}
