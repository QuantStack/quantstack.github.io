import Link from "@docusaurus/Link";

export default function LinkToContact({ label }: { label: string }) {
  return (
    <div className="flex-full-centered">
      <Link className="link-to-button" href="/contact">
        {label}
      </Link>
    </div>
  );
}
