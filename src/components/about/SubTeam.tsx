import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import PopupPortrait from "./SmallPortraitCard";

export default function SubTeam ({
  description,
  subTeam,
  subTeamAvatarsUrls,
  subTeamBioComponents,
}) {
  return (
    <div className={styles.subteam_component}>
      <h2 className="text-centered"> {description}</h2>
      <div className={"container" + " " + styles.subteam_container}>
        <ul
          className={
            "row" + " " + "padding-none" + " " + styles.row_with_margins+ " "+ "flex-full-centered"
          }
        >
          {subTeam.map((person, index) => (
            <li className="cards-list" key={index}>
              <div className="col">
                <PopupPortrait person={person} avatarUrl={subTeamAvatarsUrls[index]} subTeamBioComponent={subTeamBioComponents[index]}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


