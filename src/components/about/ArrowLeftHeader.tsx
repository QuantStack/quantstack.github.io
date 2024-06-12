import Link from "@docusaurus/Link";
import ArrowLeft from "@site/static/img/icons/ArrowLeft.svg";

export default function ArrowLeftHeader({route}) {
  return (
    <div className="header-page-mobile">
      <Link href={route}>
        <ArrowLeft
          width={"32px"}
          height={"32px"}
          style={{ marginTop: "16px", marginLeft: "20px" }}
        />
      </Link>
    </div>
  );
}
