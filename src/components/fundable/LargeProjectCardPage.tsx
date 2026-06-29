import React from 'react';
import Layout from '@theme/Layout';
import { useHistory, useLocation } from '@docusaurus/router';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { getCategoryFromProjectPageName } from ".";
import { FundableContent } from "@site/src/pages/sponsor";
import styles from "@site/src/components/about/styles.module.css";
import LargeProjectCard from './LargeProjectCard';

function backToOverview(history, scrollY) {
  const category = new URLSearchParams(window.location.search).get("category");
  const search = category ? `?category=${encodeURIComponent(category)}` : "";
  history.replace({ pathname: '/sponsor', search });
  if (scrollY !== undefined) {
    setTimeout(() => window.scrollTo({ top: scrollY, behavior: 'auto' }), 0);
  }
}

export default function LargeProjectCardPage() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.state?.fromFundable) {
      window.scrollTo({ top: location.state.scrollY ?? 0, behavior: 'auto' });
    }
  }, []);

  const handleOverlayClick = (e) => {
    if (window.getSelection()?.toString()) return;
    if (e.target !== e.currentTarget) return;
    backToOverview(history, location.state?.scrollY);
  };

  const handleClose = () => {
    if (location.state?.fromFundable) {
      backToOverview(history, location.state?.scrollY);
    } else {
      history.goBack();
    }
  }
  return (
    <Layout>
      <FundableContent />
      <Route
        path="/sponsor/:pageName"
        render={({ match }) => {
          const { pageName } = match.params; /* extract the dynamic part from the url i.e. the pageName*/
          const projectsByCategory = getCategoryFromProjectPageName(pageName);
          const project = projectsByCategory.find((project) => project.pageName === pageName);
          if (!project) return null;

          return (
            <div className={styles.project_dialog_overlay} onClick={handleOverlayClick}>
              <div
                className={styles.project_dialog_content}
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
                <LargeProjectCard project={project}/>
              </div>
            </div>
          );
        }}
      />
    </Layout>
  )
}

