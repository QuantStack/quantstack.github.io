import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LargeProjectCardPage from '@site/src/components/fundable/LargeProjectCardPage';

export default function FundablePage() {
    const { siteConfig } = useDocusaurusContext();
    return (
       <LargeProjectCardPage/>
    );
}
