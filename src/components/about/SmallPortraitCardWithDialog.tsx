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

const modalOverlay = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: 1000
};
const modalContent = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  backgroundColor: "var(--ifm-color-primary-p0)",
  border: "1px solid #ccc",
  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  borderRadius: "10px",
  zIndex: "4000"
};

export default function PortraitCardsAnchorAndDialog({ person }) {
  const history = useHistory();
  let [isDialogOpen, setIsDialogOpen] = useState(true);
  return (
    <Router>
      <div>
        <SmallPortraitCard person={person} />
        <Switch>
          <Route
            path={"/about/" + person.firstName}
            render={() => (
              <>
                <div style={modalOverlay}>
                  <div style={modalContent}>
                    <button
                      className="close-button"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                      }}
                      onClick={() => {
                        history.goBack();
                        setIsDialogOpen(false);
                      }}
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
