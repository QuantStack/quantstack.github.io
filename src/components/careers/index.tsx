import styles from "./styles.module.css";
import { interviewDetails } from "./interviewDetails";
import Interviews from "./Interviews";
import Header from "./Header";
import VisitWTJProfile from "./VisitWTJProfile";
import JoinTheTeam from "./JoinTheTeam";
import GroupPhotoJupyterConUrl from "@site/static/img/group/group-photo.png";

export default function Careers() {
  return (
    <div>
      <div className="main-container-with-margins">
        <div className="container upper-container-with-margin-top">
          <div
            className={
              "row padding-none flex-full-centered"
            }
          >
            <div className="col">
              <h1 className="text--center">Join the QuantStack team!</h1>
              <div
                className={
                  styles.group_photo_container + " " + "flex-full-centered"
                }
              >
                <img
                  src={GroupPhotoJupyterConUrl}
                  alt={
                    "Picture showing QuantStack people gathered at the Jupytercon in Paris in May 2023."
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={
              "row flex-full-centered" +
              " " +
              styles.join_the_team_container
        
            }
          >
            <div className="col col--10 col--offset-1">
              <JoinTheTeam />
            </div>
            <div className={"row" + " " + "flex-full-container"}>
              <div className="col col--8 col--offset-2">
                <div className={styles.interviews_container}>
                  <Interviews
                    details={interviewDetails}
                    description={"Working at QuantStack"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VisitWTJProfile />
    </div>
  );
}
