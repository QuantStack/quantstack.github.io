import styles from "./styles.module.css";
import Popup from "reactjs-popup";
import SocialMediaContacts from "./SocialMediaContacts";
import { useRef, useState } from "react";
import LargePortraitCard from "./LargePortraitCard";

const contentStyle = {
  background: "white",
  borderRadius: "10px",
};

const overlayStyle = {
  backgroundColor: "var(--ifm-background-color-popup-overlay)",
  opacity: "0.4",
  width: "100%",
  height: "100%",
};

function getCenterOfViewport() {
  let horizontalCenter = Math.floor(window.innerWidth / 2);
  let verticalCenter = Math.floor(window.innerHeight / 2);
  return [horizontalCenter, verticalCenter];
}

function calculateOffsets(elementRef) {
  const rect = elementRef.current.getBoundingClientRect();
  const [xViewportCenter, yViewportCenter] = getCenterOfViewport();
  const [xCardCenter, yCardCenter] = [
    rect.left + rect.width / 2,
    rect.top + rect.height / 2,
  ];
  const offsets = [
    xViewportCenter - xCardCenter,
    yViewportCenter - yCardCenter,
  ];
  return offsets;
}

export function SmallPortraitCard({ person, avatarUrl, setOffsets }) {
  const elementRef = useRef(null);

  return (
    <div
      ref={elementRef}
      className={styles.small_portrait_card}
      id={person.firstName}
      onClick={() => {
        setOffsets(calculateOffsets(elementRef));
      }}
    >
      <div className="flex-full-centered">
        <div className={styles.avatar}>
          <img
            src={avatarUrl}
            width={"160px"}
            height={"160px"}
            alt={
              "Avatar of " +
              person.CompleteName +
              "working at QuantStack as a " +
              person.position
            }
          />
        </div>
      </div>
      <div className={styles.small_card_complete_name}>
        {person.completeName}
      </div>
      <div className={styles.small_card_position}>{person.position}</div>
      <div style={{ marginTop: "var(--ifm-spacing-xl)" }}>
        <SocialMediaContacts person={person}></SocialMediaContacts>
      </div>
    </div>
  );
}
export default function PopupPortrait({
  person,
  avatarUrl,
  subTeamBioComponent,
}) {
  const [offsets, setOffsets] = useState([0, 0]);
  return (
    <div>
      <Popup
        trigger={
          <div>
            <SmallPortraitCard
              person={person}
              avatarUrl={avatarUrl}
              setOffsets={setOffsets}
            />
          </div>
        }
        contentStyle={contentStyle}
        overlayStyle={overlayStyle}
        position={"center center"}
        offsetX={offsets[0]}
        offsetY={offsets[1]}
      >
        <LargePortraitCard
          person={person}
          avatarUrl={avatarUrl}
          BioComponent={subTeamBioComponent}
        ></LargePortraitCard>
      </Popup>
    </div>
  );
}