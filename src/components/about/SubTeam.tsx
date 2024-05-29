import styles from "./styles.module.css";
import SmallPortraitCard from "./SmallPortraitCard";

interface IProps {
  description: string;
  subTeamName: Array<Object>;
}

export default function SubTeam({ description, subTeamName }: IProps) {
  return (
    <div className={styles.subteam_component}>
      <h2 style={{ textAlign: "center" }}> {description}</h2>
      <div className={"container" + " " + styles.subteam_container}>
        <ul className={"row" + " " + styles.row_custom}>
          {subTeamName.map((person, index) => (
            <li className="cards_list" key={index}>
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
