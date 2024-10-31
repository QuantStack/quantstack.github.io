import styles from "./styles.module.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "@docusaurus/router";

import LargePortraitCard from "./LargePortraitCard";
import { SmallPortraitCard } from "./SmallPortraitCard";

export function SmallPortraitCardWithDialog({ person }) {
  const history = useHistory();

  function closeDialog() {
    history.goBack()
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
