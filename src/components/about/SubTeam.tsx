import styles from "./styles.module.css";
import PopupPortrait from "./SmallPortraitCard";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { IProps } from ".";

export default function SubTeam({ subTeamName, subTeam}) {
  const location = useLocation().pathname;

  return (
    <div className={styles.subteam_container}>
      <h2 className={"text--center"}> {subTeamName}</h2>
      <div className={"container"}>
        <ul className="row padding-none flex-full-centered row-with-margin-top">
          {subTeam.map((person, index) => (
            <li className="cards-list" key={index}>
              <div className="col">
                <Link href={location + person.firstName}>
                 <PopupPortrait person={person}/>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
