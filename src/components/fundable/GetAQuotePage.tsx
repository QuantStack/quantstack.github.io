
import styles from "./styles.module.css";
import GetAQuoteForm from "./GetAQuoteForm"
import { LargeProjectCardContent } from "./LargeProjectCard";
import { useHistory, useLocation } from "@docusaurus/router";
import Layout from "@theme/Layout";
import { Route } from 'react-router-dom';
import { getCategoryFromProjectPageName } from ".";
import FundableProjects from ".";

function GetAQuoteComponent({ project }) {
    return (
        <div className={styles.get_a_quote_dialog}>
            <div className={"row" + " " + "flex-horizontally-centered"}>

                <div className="col col--6">
                    <LargeProjectCardContent project={project} />
                </div>
                <div className="col col--6">
                    <h1 className={"padding-none text--center"}> Get a quote</h1>
                    <div className="flex-horizontally-centered"><GetAQuoteForm /></div>
                </div>
            </div>
        </div>
    )
}
export default function GetAQuotePage() {
    const location = useLocation();
    const history = useHistory();

    const handleClose = () => {
        history.push('/fundable');

    }
    return (
        <Layout>
            <FundableProjects />
            <Route
                path="/fundable/:pageName/GetAQuote"
                render={({ match }) => {
                    const { pageName } = match.params; /* extract the dynamic part from the url i.e. the pageName*/
                    const projectsByCategory = getCategoryFromProjectPageName(pageName);
                    const project = projectsByCategory.find((project) => project.pageName === pageName);
                    if (!project) return null;

                    return (
                        <div className={styles.modal_overlay} >
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
                                <GetAQuoteComponent project={project} />
                            </div>
                        </div>
                    );
                }}
            />
        </Layout>
    )
}