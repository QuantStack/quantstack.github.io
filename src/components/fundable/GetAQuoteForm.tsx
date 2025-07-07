import styles from "./styles.module.css";

export default function GetAQuoteForm() {
  return (
    <div className="flex-horizontally-centered">
      <form
        action="https://formspree.io/f/xjvndwdq"
        method="POST"
        className={styles.get_a_quote_form}
      >
        <div className="form-group">
          <div>
            <label className={styles.get_a_quote_form_label}>Project name</label>
          </div>
          <div className={styles.input_container}>
            <input
              type="text"
              className={styles.small_input}
              name="Project name"
              id="Project name"
            />
          </div>
          <div>
            <label className={styles.get_a_quote_form_label}>Your name</label>
          </div>
          <div className={styles.input_container}>
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
            <label className={styles.get_a_quote_form_label}>Your company</label>
          </div>
          <div className={styles.input_container}>
            <input className={styles.small_input} name="company" id="company" />
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className={styles.get_a_quote_form_label}>Your email</label>
          </div>
          <div className={styles.input_container}>
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
            <label className={styles.get_a_quote_form_label}>Your phone number</label>
          </div>
          <div className={styles.input_container}>
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
            <label className={styles.get_a_quote_form_label}>Your message to us</label>
          </div>
          <div>
            <textarea
              className={styles.large_input}
              placeholder="Please explain your interests in funding this project"
              name="message"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className={"flex-full-centered" + " " + styles.send_button_container}>
          <input type="submit" value="SEND" className={"link-to-button" + " " + styles.send_button} />
        </div>
      </form>
    </div>
  );
}