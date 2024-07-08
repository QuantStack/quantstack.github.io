import styles from "./styles.module.css";
import GroupPhotoJupyterConUrl from "@site/static/img/group/group-photo.png";

export default function Header() {
    return (
      <div className={styles.careers_header}>
        <h1 className="text-centered">Join the QuantStack team!</h1>
        <div className={styles.group_photo_container + " " + "flex-full-centered"}>
          <img src={GroupPhotoJupyterConUrl} alt={"Picture showing QuantStack people gathered at the Jupytercon in Paris in May 2023."}/>
        </div>
      </div>
    );
  }
  