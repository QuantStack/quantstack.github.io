import styles from "./styles.module.css";
import leadershipTeam from "./leadershipTeam";
import collaborators from "./collaborators";
import coreTeam from "./coreTeam";
import Link from "@docusaurus/Link";
import QuantStackCollaborators from "./collaborators";

export function Avatar({ props }) {
  return (
    <Link href={"About/" + props.firstName}>
      <div className={styles.circle}>
        <img className={styles.avatar} src={props.avatarRoute}></img>
      </div>
    </Link>
  );
}

export function SmallPeopleCard({ props }) {
  if (props.onX === "true") {
    return (
      <div className={styles.portrait_card_small}>
        <div className={styles.top_portrait}></div>
        <Avatar props={props} />
        <div className={styles.complete_name}>
          <Link href={"About/" + props.firstName}>{props.completeName}</Link>
        </div>
        <div className={styles.position}>
          <Link href={"About/" + props.firstName}>{props.position}</Link>
        </div>
        <div>
        <Link href={props.githubLink}>{<img src={"/img/GH.svg"}></img>}</Link>
        <Link href={props.XLink}>{<img src={"/img/X.svg"}></img>}</Link>
        </div>
        <Link href = {props.githubLink} className={styles.avatar}> {props.githubName}</Link>
      </div>
    );
  } else {
    return (
      <div className={styles.portrait_card_small}>
        <div className={styles.top_portrait}></div>
        <Avatar props={props} />
        <Link
          className={styles.complete_name}
          href={"About/" + props.firstName}
        >
          {props.completeName}
        </Link>
        <div className={styles.position}>
          <Link href={"About/" + props.firstName}>{props.position}</Link>
        </div>
        <div className={styles.social_icons}>
        <Link href={props.githubLink}>{<img src={"/img/GH.svg"}></img>}</Link>
        </div>
        <Link href = {props.githubLink} className={styles.avatar}> {props.githubName}</Link>
      </div>
    );
  }
}

export default function Team() {
  return (
    <div className={styles.page}>
      <div className="vertical-spacing-l"></div>
      <div className={styles.section_title}> The leadership team</div>
      <div className={styles.container}>
        {leadershipTeam.map((person, index) => (
          <li className={styles.cards_list} key={index}>
            <SmallPeopleCard props={person}></SmallPeopleCard>
          </li>
        ))}
      </div>
      <div className="vertical-spacing-l"></div>
      <div className={styles.section_title}> The core team</div>
      <div className={styles.container}>
        {coreTeam.map((person, index) => (
          <li className={styles.cards_list} key={index}>
            <SmallPeopleCard props={person}></SmallPeopleCard>
          </li>
        ))}
      </div>
      <div className="vertical-spacing-l"></div>
      <div className={styles.section_title}> QuantStack collaborators</div>
      <div className={styles.container}>
        {QuantStackCollaborators.map((person, index) => (
          <li className={styles.cards_list} key={index}>
            <SmallPeopleCard props={person}></SmallPeopleCard>
          </li>
        ))}
      </div>
    </div>
  );
}
