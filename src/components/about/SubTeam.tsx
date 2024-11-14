import styles from "./styles.module.css";
import Example from "./PortraitDialog";
import { SmallPortraitCardWithDialog } from "./SmallPortraitCardWithDialog";


export default function SubTeam({ subTeamName, subTeam }) {
  return (
    <div className={styles.subteam_container}>
      <h2 className={"text--center"}> {subTeamName}</h2>
      <div className={"container"}>
        <ul className="row padding-none flex-full-centered row-with-margin-top">
          {subTeam.map((person, index) => (
            <li className="cards-list" key={person.firstName}>
              <div className="col">
                <SmallPortraitCardWithDialog person={person} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
