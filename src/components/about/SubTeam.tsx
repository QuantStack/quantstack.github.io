import styles from "./styles.module.css";
import PopupPortrait from "./SmallPortraitCard";

export default function SubTeam({
  subTeamName,
  subTeam,
  subTeamAvatarsUrls,
  subTeamBioComponents,
}) {
  return (
    <div className={styles.subteam_container}>
      <h2 className={"text--center"}> {subTeamName}</h2>
      <div className={"container"}>
        <ul
          className={
            "row padding-none flex-full-centered" +
            " " +
            styles.row_with_margin_top
          }
        >
          {subTeam.map((person, index) => (
            <li className="cards-list" key={index}>
              <div className="col">
                <PopupPortrait
                  person={person}
                  avatarUrl={subTeamAvatarsUrls[index]}
                  subTeamBioComponent={subTeamBioComponents[index]}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
