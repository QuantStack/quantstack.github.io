import styles from "./styles.module.css";
import { interviewDetails } from "./interviewDetails";
import { Interviews } from "./Interviews";
import GroupPhotoJupyterConUrl from "@site/static/img/group/group-photo.png";
import LinkToWTJ from "../home/LinkToWTJ";

export function CareersHeader() {
  return (
    <div className={styles.careers_header}>
      <h1 style={{ textAlign: "center" }}>Join the QuantStack team!</h1>
      <div className={styles.group_photo_container}>
        <img src={GroupPhotoJupyterConUrl} />
      </div>
    </div>
  );
}

export function JoinTheTeam() {
  return (
    <div className={styles.join_the_team_text}>
      QuantStack is seeking talents in the open-source scientific computing
      community. Join a team committed to open-science and free software.
    </div>
  );
}

export function InterviewsTable() {
  return (
    <div className={styles.interviews_container}>
      <Interviews
        details={interviewDetails}
        description={"Working at QuantStack"}
      />
    </div>
  );
}

export function VisitWTJProfile() {
  return (
    <div className={styles.WTJ_profile}>
      Learn more on our welcome to the jungle web page.
      <LinkToWTJ label={"VISIT OUR PROFILE"} />
    </div>
  );
}

export default function Careers() {
  return (
    <div>
      <div className="main-container-with-margins">
        <div className={"container" + " " + styles.careers_container}>
          <div className={"row" + " " + styles.row_custom}>
            <div className="col col--10 col--offset-1">
              <CareersHeader />
            </div>
          </div>
          <div className={"row" + " " + styles.join_the_team_container}>
            <div className="col col--10 col--offset-1">
              <JoinTheTeam />
            </div>
            <div className="row">
              <div className="col col--10 col--offset-1">
                <InterviewsTable />
              </div>
            </div>
          </div>
        </div>
      </div>
      <VisitWTJProfile />
    </div>
  );
}
