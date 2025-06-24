import React from 'react';
import Layout from '@theme/Layout';
import { useHistory, useLocation} from '@docusaurus/router';
import { Route } from 'react-router-dom';
import { About } from '@site/src/components/about'
import LargePortraitCard from '@site/src/components/about/LargePortraitCard';
import { getTeamByPersonName } from '@site/src/components/about';
import styles from "@site/src/components/about/styles.module.css";

export default function LargePortraitCardPage() {
  const location = useLocation();
  const history = useHistory();

  function handleClose() {
    if (location.state?.fromAbout) {
      history.push('/about');
    } else {
      history.goBack();
    }
  }
  return (
    <Layout>
      <About />
      <Route
        path="/about/:completeName"
        render={({ history, match }) => {
          const { completeName } = match.params;
          const teamMembers = getTeamByPersonName(completeName);
          const person = teamMembers.find(person => person.completeName.replace(/\s+/g, '') === completeName);
          if (!person) return null;

          return (
            <div className={styles.modal_overlay} onClick={() => history.push('/about')}>
              <div
                className={styles.modal_content}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-button"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                  }}
                  onClick={handleClose}
                />
                <LargePortraitCard person={person} />
              </div>
            </div>
          );
        }}
      />
    </Layout>
  )
}

