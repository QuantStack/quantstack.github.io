import Link from "@docusaurus/Link";

import ArrowLeft from "@site/static/img/icons/ArrowLeft.svg"

export default function ArrowLeftHeader({ route }) {
  return (
    <div className="header-page-mobile">
      <Link href={route}>
        <ArrowLeft />
      </Link>
    </div>
  );
}
