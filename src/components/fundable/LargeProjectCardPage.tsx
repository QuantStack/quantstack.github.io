import { useHistory, useLocation } from "@docusaurus/router";
import { useEffect } from "react";
import styles from "./styles.module.css";
import LargeProjectCard from "./LargeProjectCard";
import { getCategoryFromProjectTitle } from ".";
import FundableProjects from ".";
import Layout from "@theme/Layout";
import { Route } from 'react-router-dom';


export default function LargeProjectCardPage() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.state?.fromFundable) {
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
      history.replace('/fundable');
  };

  const handleClose = () => {
    const scrollY = location.state?.scrollY;
    if (location.state?.fromFundable) {
      history.replace('/fundable');

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
      <FundableProjects />
      <Route
        path="/fundable/:shortTitle"
        render={({ match }) => {
          const { shortTitle } = match.params; /* extract the dynamic part from the url i.e. the shortTitle*/
          const projectsByCategory = getCategoryFromProjectTitle(shortTitle);
          console.log('projectsByCategory:', projectsByCategory);
          const project = projectsByCategory.find((project) => project.shortTitle.replace(/\s+/g, '') === shortTitle);
          if (!project) return null;

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
                <LargeProjectCard project={project} />
              </div>
            </div>
          );
        }}
      />
    </Layout>
  )
}