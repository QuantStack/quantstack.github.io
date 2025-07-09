import styles from "./styles.module.css";
import BlueCaretIcon from "@site/static/img/icons/BlueCaret.svg";

export function SmallProjectCardWithInputs() {
  return (
    <div className="flex-horizontally-centered">


      <div className={"card" + " " + styles.small_project_card} style={{ marginTop: "var(--ifm-spacing-lg" }}>
        <div className="card__body" style={{ padding: "0" }}>
          <form
            action="https://formspree.io/f/xjvndwdq"
            method="POST"
          >
            <div className="row" >
              <div className={"col col--6" + " " + styles.small_project_card_text_col}>
                <div
                  className={styles.project_title
                  }
                >
                  Contact us for a project to fund
                </div>
                <div className="form-group">
                  <div>
                    <label className={styles.form_label}>Your name/ your organisation</label>
                  </div>
                  <div className={styles.input_container}>
                    <input
                      type="text"
                      className={styles.empty_card_small_input}
                      placeholder="Please provide your name/ your organisation name"
                      name="name"
                      id="name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label className={styles.form_label}>Your email</label>
                  </div>
                  <div className={styles.input_container}>
                    <input
                      type="text"
                      className={styles.empty_card_small_input}
                      placeholder="Please indicate your email"
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label className={styles.form_label}>Project title</label>
                  </div>
                  <div className={styles.input_container}>
                    <input
                      type="text"
                      className={styles.empty_card_small_input}
                      placeholder="Please provide a name for the project"
                      name="project-title"
                      id="project-title"
                    />
                  </div>
                </div>
              </div>


              <div className={"col col--6" + " " + styles.small_project_card_price_col}>
                <div className={styles.project_information_container}>
                  <div className={styles.project_information} style={{ padding: "0px" }}>
                    <div className="form-group">
                      <div>
                        <label className={styles.form_label}>Project description</label>
                      </div>
                      <div>
                        <textarea
                          className={styles.empty_card_large_input}
                          placeholder="Please propose a description of the project"
                          name="message"
                          id="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <div>
                        <label className={styles.form_label} style={{ background: "background-color: rgba(217, 217, 217, 0.25)" }}>Indicative price</label>
                      </div>
                      <div className={styles.input_container}>
                        <input
                          type="text"
                          className={styles.empty_card_small_input}
                          placeholder="Indicative price?"
                          name="project-price"
                          id="project-price"
                        />
                      </div>
                    </div>


                    <div className={"flex-full-centered"}>
                      <input type="submit" value="Submit" className={styles.submit_proposition_button} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div >
  )
}