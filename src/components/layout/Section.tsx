import clsx from "clsx";
import styles from "./styles.module.css";
import type { ReactNode } from "react";

type Props = {
  bg?: "white" | "yellow" | "dark";
  spacing?: "normal" | "tight" | "loose";
  pageTop?: boolean;
  children: ReactNode;
  className?: string;
};

export default function Section({
  bg = "white",
  spacing = "normal",
  pageTop = false,
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        styles.section,
        styles[`section_${bg}`],
        spacing !== "normal" && styles[`section_${spacing}`],
        pageTop && styles.section_page_top,
        className,
      )}
    >
      <div className="page-content">{children}</div>
    </div>
  );
}
