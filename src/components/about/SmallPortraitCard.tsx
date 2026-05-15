import styles from "./styles.module.css";
import { useHistory } from "@docusaurus/router";
import Card from "../layout/Card";

export function SmallPortraitCard({ person }) {
  const history = useHistory();

  function openDialog() {
    const completeName = person.completeName.replace(/\s+/g, '');
    const completeNameWithoutAccents = completeName
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, '');
    history.push({
      pathname: `/about/${completeNameWithoutAccents}`,
      state: { fromAbout: true, scrollY: window.scrollY },
    });
  }

  return (
    <Card hover onClick={openDialog} className={styles.small_portrait_card}>
      <div className="flex-full-centered">
        <img
          src={person.avatarUrl}
          className={styles.avatar}
          alt={`Avatar of ${person.completeName} working at QuantStack as a ${person.position}`}
        />
      </div>
      <div className={"flex-full-centered " + styles.small_card_complete_name}>
        {person.completeName}
      </div>
      <div className={"flex-full-centered " + styles.small_card_position}>
        {person.position}
      </div>
    </Card>
  );
}
