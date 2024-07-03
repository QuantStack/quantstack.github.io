import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import PopupPortrait from "./SmallPortraitCardDesktop";
import SmallPortraitCardMobile from "./SmallPortraitCardMobile";

export function SubTeamDesktop({
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
            "row" + " " + "padding-none" + " " + styles.row_with_margins
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

export function SubTeamMobile({ description, subTeamAvatarsUrls, subTeam }) {
  return (
    <div className={styles.subteam_component}>
      <h2 className="text-centered"> {description}</h2>
      <div className={"container" + " " + styles.subteam_container}>
        <ul
          className={"row" + " " + "flex-full-centered" + " " + "padding-none"}
        >
          {subTeam.map((person, index) => (
            <li className="cards-list" key={index}>
              <div className="col">
                <Link href={"/about/" + person.firstName}>
                  <SmallPortraitCardMobile
                    person={person}
                    avatarUrl={subTeamAvatarsUrls[index]}
                  ></SmallPortraitCardMobile>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
