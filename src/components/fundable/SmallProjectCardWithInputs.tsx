import styles from "./styles.module.css";
import BlueCaretIcon from "@site/static/img/icons/BlueCaret.svg";

export function SmallProjectCardWithInputs() {
  return (
    <div className="flex-horizontally-centered">
      <section id="suggest-a-project">
        <div className={"card" + " " + styles.small_project_card} style={{ marginTop: "var(--ifm-spacing-lg" }}>
          <div className="card__body" style={{ padding: "0" }}>

            <form
              action="https://formspree.io/f/xjvndwdq"
              method="POST"
            >
              <div className="row" >
                <div style={{ margin: "var(--ifm-spacing-xl) var(--ifm-spacing-xl) 0 var(--ifm-spacing-xl)" }}>
                  <h2 className={styles.project_category_header} > Suggest a project</h2>
                  Do you have a project on the open-source data stack that you would like to fund or advertise for funding? Talk to us about it below!
                </div>
                <div className={"col col--4 col--offset-1" + " " + styles.small_project_card_text_col}>

                  <div className="form-group">
                    <div>
                      <label className={styles.form_label}>Your name/ your organisation</label>
                    </div>
                    <div className={styles.input_container}>
                      <input
                        type="text"
                        className={styles.empty_card_small_input}
                        placeholder=""
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
                        placeholder=""
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
                        placeholder=""
                        name="project-title"
                        id="project-title"
                      />
                    </div>
                  </div>
                </div>
                <div className={"col col--7" + " " + styles.small_project_card_price_col} style={{ backgroundColor: "white" }}>
                  <div className={styles.project_information_container}>
                    <div className={styles.project_information} style={{ padding: "0px" }}>
                      <div className="form-group">
                        <div>
                          <label className={styles.form_label}>Project description</label>
                        </div>
                        <div>
                          <textarea
                            className={styles.empty_card_large_input}
                            placeholder=""
                            name="message"
                            id="message"
                          ></textarea>
                        </div>
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="form-group">
                          <div>
                            <label className={styles.form_label}>Indicative price</label>
                          </div>
                          <div className={styles.input_container}>
                            <input
                              type="text"
                              className={styles.empty_card_small_input}
                              style={{ width: "10vw", height: "24px"}}
                              placeholder=""
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
              </div>
            </form>
          </div>
        </div>
      </section>
    </div >
  )
}