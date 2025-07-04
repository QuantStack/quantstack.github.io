import styles from "./styles.module.css";
import SocialMediaContacts from "./SocialMediaContacts";
import DistinctionIcon from "@site/static/img/icons/Distinction.svg";
import Link from "@docusaurus/Link";
import React from "react";
import Avatar from "./Avatar";

export function Distinction({ person }) {
  const HasPersonDistinction = person.distinctionTitle.length !== 0;

  return (
    <div>
      {HasPersonDistinction ? (
        <ul style={{paddingLeft: "0px"}}>
          {person.distinctionTitle.map((distinction, index) => (
            <li className="items-list" key={person.pageName}>
              <div>
                <Link href={person.distinctionLink[index]}>
                  <DistinctionIcon className={styles.distinction_icon} />
                  {distinction}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function LargePortraitCard({ person }) {
  return (
    <div className={styles.large_portrait_card}>
      <div className={"container"}>
        <div className={"row padding-none"}>
          <div className="col col--12 col--offset-1">
            <div className={styles.large_card_complete_name}>
              {person.completeName}
            </div>
            <div className={styles.large_card_position}>{person.position}</div>
          </div>
        </div>
        <div className="row">
          <div className={"col col--3 col--offset-1 flex-full-centered"}>
            <div className="flex-full-centered">
              <div style={{ marginBottom: "var(--ifm-spacing-md)" }}>
                <Avatar person={person} />
              </div>
            </div>
          </div>
          <div className="col col--6 col--offset-1">
            <div className={styles.bio_container}>
              <person.BioComponent />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--3 col--offset-1">
            <SocialMediaContacts person={person}></SocialMediaContacts>
          </div>
          <div className="col col--6 col--offset-1">
            <Distinction person={person} />
          </div>
        </div>
      </div>
    </div>
  );
}
