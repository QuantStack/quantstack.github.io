import styles from "./styles.module.css";
import InterviewCard from "./InterviewCard";
import { interviewDetails } from "./interviewDetails";
import Link from "@docusaurus/Link";

export function PeopleTable({ details, description }) {
  return (
    <div className={styles.subteam_component}>
      <h3 style={{ textAlign: "center", marginTop: "var(--ifm-spacing-6xl)" }}>
        {description}
      </h3>
      <div
        className="container"
        style={{ marginTop: "var(--ifm-spacing-2xl)" }}
      >
        <ul className="row">
          {details.map((person, index) => (
            <li className="cards_list" key={index}>
              <div className="col col--2">
                <InterviewCard person={person}></InterviewCard>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Careers() {
  return (
    <div
      className="container"
      style={{ margin: "var(--ifm-spacing-6xl) 0 var(--ifm-spacing-6xl) 0" }}
    >
      <div className="row">
        <div className="col col--10 col--offset-1">
          <h1>Join the QuantStack team!</h1>
          <div className={styles.group_photo_box}>
            <img className={styles.group_photo} src="/img/group-photo.png" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <div className={styles.join_the_team_text}>
            QuantStack is seeking talents in the open-source scientific
            computing community. Join a team committed to open-science and free
            software.
          </div>
        </div>
        <PeopleTable
          details={interviewDetails}
          description={"Join the QuantStack Team"}
        />
      </div>
      <div className="row">
        <div className="col col--10 col--offset-1">
          <h3
            style={{ textAlign: "center", marginTop: "var(--ifm-spacing-6xl)" }}
          >
            Check out our profile on Welcome to the jungle for more information on our open positions!
          </h3>
          <div className="link-box">
          <Link className="link-to-contact" href="https://www.welcometothejungle.com/fr/companies/quantstack">
            {" OPEN OUR PROFILE "}
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
