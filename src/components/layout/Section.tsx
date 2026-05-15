import clsx from "clsx";
import styles from "./styles.module.css";
import type { ReactNode } from "react";

type Props = {
  bg?: "white" | "yellow" | "dark";
  spacing?: "normal" | "tight" | "loose";
  pageTop?: boolean;
  fullHeight?: boolean;
  background?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Section({
  bg = "white",
  spacing = "normal",
  pageTop = false,
  fullHeight = false,
  background,
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
        fullHeight && styles.section_full_height,
        className,
      )}
    >
      {background && <div className={styles.section_bg_slot}>{background}</div>}
      <div className={background ? styles.section_content : undefined}>
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
}
