import styles from "./styles.module.css";
import Popup from "reactjs-popup";
import SocialMediaContacts from "./SocialMediaContacts";
import { useRef, useState } from "react";
import LargePortraitCard from "./LargePortraitCard";
import Avatar from "./Avatar";

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

export function SmallPortraitCard({ person, setOffsets }) {
  const elementRef = useRef(null);

  return (
    <div
      ref={elementRef}
      className={"card" + " " + styles.small_portrait_card}
      id={person.firstName}
      onClick={() => {
        setOffsets(calculateOffsets(elementRef));
      }}
    >
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
        <div style={{ marginTop: "var(--ifm-spacing-xl)" }}>
          <SocialMediaContacts person={person}></SocialMediaContacts>
        </div>
      </div>
    </div>
  );
}
export default function PopupPortrait({ person }) {
  const [offsets, setOffsets] = useState([0, 0]);
  let [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <Popup
        open={isPopupOpen}
        closeOnEscape={true}
        closeOnDocumentClick={true}
        onClose={() => setIsPopupOpen(false)}
        trigger={
          <div>
            <SmallPortraitCard person={person} setOffsets={setOffsets} />
          </div>
        }
        onOpen={() => {
          setIsPopupOpen(true);
        }}
        contentStyle={contentStyle}
        overlayStyle={overlayStyle}
        position={"center center"}
        offsetX={offsets[0]}
        offsetY={offsets[1]}
      >
        <div>
          <button
            className="close-button"
            style={{ position: "absolute", right: "0px" }}
            onClick={() => {
              setIsPopupOpen(false);
            }}
          ></button>
          <LargePortraitCard person={person}></LargePortraitCard>
        </div>
      </Popup>
    </div>
  );
}
