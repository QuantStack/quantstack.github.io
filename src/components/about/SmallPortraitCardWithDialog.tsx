import styles from "./styles.module.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { useState } from "react";
import LargePortraitCard from "./LargePortraitCard";
import { SmallPortraitCard } from "./SmallPortraitCard";

export default function SmallPortraitCardWithDialog({ person }) {
  const history = useHistory();
  let [isDialogOpen, setIsDialogOpen] = useState(true);
  const overlay = document.getElementsByClassName("modal_overlay");
  const closeButton = document.getElementsByClassName("close-button");

  function closeDialog() {
    history.goBack();
    console.log("overlay clicked")
  }

  return (
    <Router>
      <div>
        <SmallPortraitCard person={person} />
        <Switch>
          <Route
            path={"/about/" + person.firstName}
            render={() => (
              <>
                <div className={styles.modal_overlay} onClick={closeDialog}>
                  <div className={styles.modal_content}>
                    <button
                      className="close-button"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                      }}
                      onClick={closeDialog}
                    />
                    <LargePortraitCard person={person} />
                  </div>
                </div>
              </>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
