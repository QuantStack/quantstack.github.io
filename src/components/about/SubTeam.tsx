import styles from "./styles.module.css";
import { SmallPortraitCard } from "./SmallPortraitCard";
import CardGrid from "../layout/CardGrid";

export default function SubTeam({ subTeamName, subTeam }) {
  return (
    <div className={styles.subteam_container}>
      <h3 className="text--center">{subTeamName}</h3>
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
