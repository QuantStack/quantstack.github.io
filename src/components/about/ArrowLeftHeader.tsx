import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import ArrowLeft from "@site/static/img/icons/ArrowLeft.svg"


/*export function ArrowLeft() {
  return (
    <ThemedImage
      alt="Left Arrow to got back on the previous page"
      sources={{
        light: useBaseUrl("/img/icons/ArrowLeft-light.svg"),
        dark: useBaseUrl("/img/icons/ArrowLeft-dark.svg"),
      }}
      width={"32px"}
      height={"32px"}
      style={{ marginTop: "16px", marginLeft: "20px" }}
    />
  );
}*/

export default function ArrowLeftHeader({ route }) {
  return (
    <div className="header-page-mobile">
      <Link href={route}>
        <ArrowLeft />
      </Link>
    </div>
  );
}
