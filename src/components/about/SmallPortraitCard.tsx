import styles from "./styles.module.css";
import { useHistory } from "@docusaurus/router";
import Avatar from "./Avatar";

export function SmallPortraitCard({ person }) {
  const history = useHistory();

  function openDialog () {
    history.push("/about/");
    history.push("/about/" + person.firstName);

  };

  return (
    <div onClick={openDialog}>
      <div className={"card" + " " + styles.small_portrait_card}>
        <div className="card__header">
          <Avatar person={person} />
          <div
            className={
              "flex-full-centered" + " " + styles.small_card_complete_name
            }
          >
            {person.completeName}
          </div>
        </div>
        <div className="card__body">
          <div
            className={"flex-full-centered" + " " + styles.small_card_position}
          >
            {person.position}
          </div>
        </div>
      </div>
    </div>
  );
}
