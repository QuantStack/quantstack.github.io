import styles from "./styles.module.css";
import { SmallPortraitCard } from "./SmallPortraitCard";

export default function SubTeam({ subTeamName, subTeam }) {
  return (
    <div className={styles.subteam_container}>
      <h2 className={"text--center"}> {subTeamName}</h2>
      <div className={"container"}>
        <ul className="row padding-none flex-full-centered row-with-margin-top">
          {subTeam.map((person, index) => (
            <li className="cards-list" key={person.pageName}>
              <div className="col">
                <SmallPortraitCard person={person} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
