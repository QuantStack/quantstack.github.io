import SmallPortraitCard from "./SmallPortraitCard";
import Popup from "reactjs-popup";
import LargePortraitCard from "./LargePortraitCard";
import styles from "./styles.module.css";

export default function PopupPortrait({
  person,
  subTeamAvatarsUrl,
  subTeamBioComponent,
}) {
  return (
    <div>
      <Popup
        style={{ backgroundColor: "#yellow" }}
        trigger={
          <div>
            <SmallPortraitCard person={person} avatarUrl={subTeamAvatarsUrl} />
          </div>
        }
        overlayStyle={{
          backgroundColor: "var(--ifm-background-color-popup-overlay)",
          opacity: "0.4",
          width: "100%",
          height: "100%",
        }}
      >
        <LargePortraitCard
          person={person}
          avatarUrl={subTeamAvatarsUrl}
          BioComponent={subTeamBioComponent}
        ></LargePortraitCard>
      </Popup>
    </div>
  );
}
