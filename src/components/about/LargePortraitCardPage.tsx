import React from 'react';
import Layout from '@theme/Layout';
import { useHistory, useLocation } from '@docusaurus/router';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { About } from '@site/src/components/about'
import LargePortraitCard from '@site/src/components/about/LargePortraitCard';
import { getTeamByPersonName } from '@site/src/components/about';
import styles from "@site/src/components/about/styles.module.css";

export default function LargePortraitCardPage() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.state?.fromAbout) {
      window.scrollTo({ top: location.state.scrollY ?? 0, behavior: 'auto' });
    }
  }, []);

  const handleOverlayClick = () => {
    const scrollY = location.state?.scrollY;
    setTimeout(() => {
      if (scrollY !== undefined) {
        window.scrollTo({ top: scrollY, behavior: 'auto' });
      }
    }, 0);
      history.replace('/about');
  };

  const handleClose = () => {
    const scrollY = location.state?.scrollY;
    if (location.state?.fromAbout) {
      history.replace('/about');

      setTimeout(() => {
        if (scrollY !== undefined) {
          window.scrollTo({ top: scrollY, behavior: 'auto' });
        }
      }, 0);
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
          const { completeName } = match.params; /* extract the dynamic part from the url i.e. the completeName*/
          const teamMembers = getTeamByPersonName(completeName);
          const person = teamMembers.find((person) => person.completeName.replace(/\s+/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, '') === completeName);
          if (!person) return null;

          return (
            <div className={styles.modal_overlay} onClick={handleOverlayClick}>
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

