import styles from "./styles.module.css";
import SocialMediaContacts from "./SocialMediaContacts";
import DistinctionIcon from "@site/static/img/icons/Distinction.svg";
import Link from "@docusaurus/Link";
import React, { useState } from "react";

export function Avatar({ person, avatarUrl }) {
  return (
      <img
        src={avatarUrl}
        className={styles.avatar}
        alt={
          "Avatar of " +
          person.completeName +
          "working at QuantStack as a " +
          person.position
        }
      />
   
  );
}

export function Distinction({ person }) {
  if (person.distinctionTitle.length !== 0) {
    return (
      <ul>
        {person.distinctionTitle.map((distinction, index) => (
          <li className="cards-list" key={index}>
            <div>
              <div>
                <Link href={person.distinctionLink[index]}>
                  <DistinctionIcon />
                  {distinction}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  } else return <div></div>;
}
export default function LargePortraitCard({ person, avatarUrl, BioComponent }) {
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
        <div className={"row" + " " + styles.row_with_margin_bottom}>
          <div className={"col col--3 col--offset-1 flex-full-centered"}>
            <div className="flex-full-centered">
              <div style={{marginBottom:"var(--ifm-spacing-lg)"}}>
              <img
                src={avatarUrl}
                className={styles.avatar}
                alt={
                  "Avatar of " +
                  person.completeName +
                  "working at QuantStack as a " +
                  person.position
                }
              />
              </div>
            </div>
          </div>
          <div className="col col--6 col--offset-1">
            <div className={styles.bio_container}>
              <BioComponent />
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
