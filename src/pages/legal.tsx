import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";
import React from "react";
import styles from "./legal.module.css";


function LegalContent() {
    return (
        <div className={styles.legal_container}>
            <div className={styles.legal_title}>Legal Entity </div>
            <p>
                This website is published by QuantStack, a Simplified Joint-Stock Company (SAS) with a share capital of €1,080.00.
            </p>
            <p className="page-tagline">
                Registered Information
            </p>
            <p>
                <b>Address </b>: 16 Avenue Curti, 94100 Saint-Maur-des-Fossés, France
            </p>
            <p>
                <b>VAT Number</b>: FR76 820 717 668
            </p>
            <p>
                <b>SIREN (Company ID)</b>: 820 717 668
            </p>
            <div className={styles.legal_title}>Hosting Provider </div>
            <p>
                This website is hosted by GitHub, Inc.
            </p>

            <p className="page-tagline"> Registered information </p>
            <p><b>Address </b>: 8 Colin P. Kelly Jr Street
                San Francisco, CA 94107
                United States </p>
            <p>
                <b>Email</b> : https://enterprise.github.com/contact
            </p>
        </div>
    )
}



export default function LegalPage(): JSX.Element {
    return (
        <Layout>
            <BrowserOnly>{() => <div>
                <LegalContent />
            </div>}</BrowserOnly>
            <Footer />
        </Layout>
    );
}
