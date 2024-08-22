import styles from "./styles.module.css";
import PopupPortrait from "./SmallPortraitCard";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";

export default function SubTeam({ subTeamName, subTeam }) {
  const firstName = useLocation().pathname.split("/about/")[1];
  return (
    <div className={styles.subteam_container}>
      <h2 className={"text--center"}> {subTeamName}</h2>
      <div className={"container"}>
        <ul className="row padding-none flex-full-centered row-with-margin-top">
          {subTeam.map(
            (person, index) =>
              !void 0 && (
                <li className="cards-list" key={index}>
                  <div className="col">
                    <Link href={`/about/${person.firstName.toLowerCase()}`}>
                      <PopupPortrait
                        person={person}
                        isPopupOpen={
                          firstName === person.firstName.toLowerCase()
                        }
                      />
                    </Link>
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}
