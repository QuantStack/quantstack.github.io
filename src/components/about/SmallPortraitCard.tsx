import styles from "./styles.module.css";
import { useHistory } from "@docusaurus/router";
import Avatar from "./Avatar";

export function SmallPortraitCard({ person }) {
  const history = useHistory();

  function openDialog() {
    const completeName = person.completeName.replace(/\s+/g, '');
    const completeNameWithoutAccents = completeName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, '');
    history.push({
      pathname: `/about/${completeNameWithoutAccents}`,
      state: { fromAbout: true, scrollY: window.scrollY, },
    });
  }

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
