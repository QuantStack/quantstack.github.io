import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GetAQuotePage from '@site/src/components/fundable/GetAQuotePage';

export default function FundablePage() {
    const { siteConfig } = useDocusaurusContext();
    return (
      <GetAQuotePage/>
    );
}
