import styles from "./styles.module.css";
import Section from "../layout/Section";
import { interviewDetails } from "./interviewDetails";
import Interviews from "./Interviews";
import VisitWTJProfile from "./VisitWTJProfile";
import JoinTheTeam from "./JoinTheTeam";
import GroupPhotoJupyterConUrl from "@site/static/img/group/group-photo.png";

export default function Careers() {
  return (
    <>
      <Section pageTop bg="yellow">
        <h1>Join the QuantStack team!</h1>
        <p>Work on open-source software that powers scientific discovery, adopted at global scale by millions of researchers and engineers.</p>
      </Section>
      <Section>
        <div className={styles.group_photo_container + " flex-full-centered"}>
          <img
            src={GroupPhotoJupyterConUrl}
            alt="Picture showing QuantStack people gathered at the Jupytercon in Paris in May 2023."
          />
        </div>
        <div className={styles.join_the_team_container}>
          <JoinTheTeam />
          <div className={styles.interviews_container}>
            <Interviews
              details={interviewDetails}
              description={"Working at QuantStack"}
            />
          </div>
        </div>
      </Section>
      <VisitWTJProfile />
    </>
  );
}
