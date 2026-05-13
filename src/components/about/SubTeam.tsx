import styles from "./styles.module.css";
import { SmallPortraitCard } from "./SmallPortraitCard";

export default function SubTeam({ subTeamName, subTeam }) {
  return (
    <div className={styles.subteam_container}>
      <h2 className={"text--center"}> {subTeamName}</h2>
      <ul className="cards-row">
        {subTeam.map((person, index) => (
          <li key={person.pageName}>
            <SmallPortraitCard person={person} />
          </li>
        ))}
      </ul>
    </div>
  );
}
