import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Avatar from "./Avatar";

export default function LargePortraitCard({ person }) {
  return (

    <div className="container">
       <div className="row">
        {person.completeName}
        {person.position}
       </div>
      <div className="row">
        <div className="col col--2">
          <Avatar person={person} />
        </div>
        <div className="col col--2"></div>
      </div>
    </div>
  );
}
