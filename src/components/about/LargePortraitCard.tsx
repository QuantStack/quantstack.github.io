import styles from "./styles.module.css";
import SocialMediaContacts from "./SocialMediaContacts";
import DistinctionIcon from "@site/static/img/icons/Distinction.svg";
import Link from "@docusaurus/Link";

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
        <div
          className={
            "row" + " " + "padding-none" + " " + styles.row_with_margins
          }
        >
          <div className="col col--12 col--offset-1">
            <div className={styles.large_card_complete_name}>
              {person.completeName}
            </div>
            <div className={styles.large_card_position}>{person.position}</div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "var(--ifm-spacing-4xl)" }}>
          <div
            className={"col col--3 col--offset-1" + " " + "flex-full-centered"}
          >
            <div className="flex-full-centered">
              <img src={avatarUrl} className={styles.avatar} />
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
