import styles from "./styles.module.css";
import { SmallPortraitCard } from "./SmallPortraitCard";
import CardGrid from "../layout/CardGrid";

export default function SubTeam({ subTeamName, subTeam }) {
  return (
    <div className={styles.subteam_container}>
      <h2 className="text--center">{subTeamName}</h2>
      <CardGrid cols={3}>
        {subTeam.map((person) => (
          <li key={person.pageName}>
            <SmallPortraitCard person={person} />
          </li>
        ))}
      </CardGrid>
    </div>
  );
}
