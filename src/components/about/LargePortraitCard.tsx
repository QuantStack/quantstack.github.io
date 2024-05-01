import styles from "./styles.module.css";
import Avatar from "./Avatar";
import SocialMediaContacts from "./SocialMediaContacts";

export interface IPropsPerson {
  completeName: string;
  firstName: string;
  position: string;
  onGithub: string;
  onLinkedIn: string;
  onX: string;
  githubLink: string;
  linkedInLink: string;
  Xlink: string;
  linkedIn: string;
  githubName: string;
  avatarRoute: string;
  JupyterDistinction: string;
}

interface ILargeCardprops {
  person: IPropsPerson;
  BioComponent: any;
}


export default function LargePortraitCard({ person, BioComponent }: ILargeCardprops) {
  if(person.JupyterDistinction === "true" ) {
  return (
    <div className={styles.large_portrait_card}>
      <div className={"container"}>
        <div className="row" style={{ marginBottom: "var(--ifm-spacing-lg)" }}>
          <div className="col col--8 col--offset-1">
            <div className={styles.large_card_complete_name}>
              {person.completeName}
            </div>
            <div className={styles.large_card_position}>{person.position}</div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "var(--ifm-spacing-4xl)" }}>
          <div
            className="col col--3 col--offset-1"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar person={person} />
          </div>
          <div className="col col--6 col--offset-1">
            <div className={styles.bio_text}>
              <BioComponent></BioComponent>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col col--3 col--offset-1"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SocialMediaContacts person={person}></SocialMediaContacts>
          </div>
          <div className="col col--6 col--offset-1">
            <img src={"/img/distinction.svg"}></img>
            Jupyter distinguished contributor
          </div>
        </div>
      </div>
    </div>
  );
}
else {
    return (
      <div className={styles.large_portrait_card}>
        <div className={"container"}>
          <div className="row" style={{ marginBottom: "var(--ifm-spacing-lg)" }}>
            <div className="col col--8 col--offset-1">
              <div className={styles.large_card_complete_name}>
                {person.completeName}
              </div>
              <div className={styles.large_card_position}>{person.position}</div>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "var(--ifm-spacing-4xl)" }}>
            <div
              className="col col--3 col--offset-1"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar person={person} />
            </div>
            <div className="col col--6 col--offset-1">
              <div className={styles.bio_text}>
                <BioComponent></BioComponent>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col col--3 col--offset-1"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SocialMediaContacts person={person}></SocialMediaContacts>
            </div>
            <div className="col col--6 col--offset-1">
            </div>
          </div>
        </div>
      </div>
    );
}
}


