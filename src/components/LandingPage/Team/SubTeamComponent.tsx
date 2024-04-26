import styles from "./styles.module.css";
import SmallPortraitCard from "./SmallPortraitCard";

interface IProps {
    description: string
    subTeamName: Array<Object>
}


export default function SubTeamComponent({description, subTeamName} : IProps) {
  return (
    <div className={styles.subteam_component}>
      <h3 style={{textAlign: "center"}}> {description}</h3>
      <div className="container" style={{marginTop:"var(--ifm-spacing-2xl)"}}>
        <ul className="row">
          {subTeamName.map((person, index) => (
            <li className={styles.cards_list} key={index}>
              <div className="col col--2">
                <SmallPortraitCard person={person}></SmallPortraitCard>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
