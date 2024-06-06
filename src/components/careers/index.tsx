import styles from "./styles.module.css";
import { interviewDetails } from "./interviewDetails";
import Link from "@docusaurus/Link";
import { Interviews } from "./Interviews";
import GroupPhotoJupyterConUrl from "@site/static/img/group/group-photo.png";

export default function Careers() {
  return (
    <div className={"container" + " " + styles.careers_container}>
      <div className={"row" + " " + styles.row_custom}>
        <div className="col col--8 col--offset-2">
          <h1 className={styles.h1_c}>Join the QuantStack team!</h1>
          <div className={styles.group_photo_container}>
            <img src={GroupPhotoJupyterConUrl} />
          </div>
        </div>
      </div>
      <div className={"row" + " " + styles.join_the_team_container}>
        <div className="col col--6 col--offset-3">
          <div className={styles.join_the_team_text}>
            QuantStack is seeking talents in the open-source scientific
            computing community. Join a team committed to open-science and free
            software.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col--10 col--offset-1">
          <div className={styles.interviews_container}>
            <Interviews
              details={interviewDetails}
              description={"Working at QuantStack"}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col--12">
          <div className={styles.WTJ_profile}>
            <h2 className={styles.h2_custom}>
              Check out our profile on Welcome to the jungle for more
              information on our open positions!
            </h2>

            <div className="link-box">
              <Link
                className="link-to-button"
                href="https://www.welcometothejungle.com/fr/companies/quantstack"
              >
                {" OPEN OUR PROFILE "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
