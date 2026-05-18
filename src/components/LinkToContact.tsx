import Link from "@docusaurus/Link";

export default function LinkToContact({ label }: { label: string }) {
  return (
    <Link className="link-to-button" href="/contact">
      {label}
    </Link>
  );
}
