import styles from "./styles.module.css";
import { useHistory } from "react-router";
import Avatar from "./Avatar";
import { useState } from "react";
import Link from "@docusaurus/Link";

export function SmallPortraitCard({ person }) {
  let [isDialogOpen, setIsDialogOpen] = useState(false);

  const history = useHistory();

  const openDialog = () => {
    history.push("/about/" + person.firstName);
    setIsDialogOpen(true);
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
