import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
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
            <div className={styles.legal_title}>Trademarks </div>
            <p>
                QUANTSTACK® is a registered trademark of QuantStack SAS.
            </p>
            <p>
                <b>United States (USPTO)</b>: <Link href="https://tmsearch.uspto.gov/search/search-results/79291853">Reg. No. 6358534</Link>
            </p>
            <p>
                <b>European Union (EUIPO)</b>: <Link href="https://euipo.europa.eu/eSearch/#details/trademarks/018192786">No. 018192786</Link>
            </p>
            <p>
                <b>France (INPI)</b>: <Link href="https://data.inpi.fr/marques/FR4610708">No. 4610708</Link>
            </p>
            <p>
                <b>United Kingdom (UKIPO)</b>: <Link href="https://trademarks.ipo.gov.uk/ipo-tmcase/page/Results/1/UK00003733739">No. UK00003733739</Link>
            </p>
            <p>
                <b>International registration (WIPO)</b>: <Link href="https://data.inpi.fr/marques/WO1545986">No. 1545986</Link>
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
