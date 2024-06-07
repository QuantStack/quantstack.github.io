import styles from "./styles.module.css";
import SmallPortraitCard from "./SmallPortraitCard";
import Popup from "reactjs-popup";
import LargePortraitCard from "./LargePortraitCard";

export function SubTeamDesktop({
  description,
  subTeam,
  subTeamAvatarsUrls,
  subTeamBioComponents,
}) {
  return (
    <div className="main-container-with-margins">
      <div className={styles.subteam_component}>
        <h2 style={{ textAlign: "center" }}> {description}</h2>
        <div className={"container" + " " + styles.subteam_container}>
          <ul className={"row" + " " + styles.row_custom}>
            {subTeam.map((person, index) => (
              <li className="cards_list" key={index}>
                <div className="col">
                  <Popup
                    trigger={
                      <div>
                        {" "}
                        <SmallPortraitCard
                          person={person}
                          avatarUrl={subTeamAvatarsUrls[index]}
                        />
                      </div>
                    }
                    overlayStyle={{ backgroundColor: "grey", opacity: "0.4" }}
                    position={"center center"}
                  >
                    <LargePortraitCard
                      person={person}
                      avatarUrl={subTeamAvatarsUrls[index]}
                      BioComponent={subTeamBioComponents[index]}
                    ></LargePortraitCard>
                  </Popup>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SubTeamMobile({ description, subTeamAvatarsUrls, subTeam }) {
  return (
    <div className={styles.subteam_component}>
      <h2 style={{ textAlign: "center" }}> {description}</h2>
      <div className={"container" + " " + styles.subteam_container}>
        <ul className={"row" + " " + styles.row_custom}>
          {subTeam.map((person, index) => (
            <li className="cards_list" key={index}>
              <div className="col">
                <SmallPortraitCard
                  person={person}
                  avatarUrl={subTeamAvatarsUrls[index]}
                ></SmallPortraitCard>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
