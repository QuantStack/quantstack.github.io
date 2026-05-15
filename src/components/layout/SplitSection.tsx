import clsx from "clsx";
import styles from "./styles.module.css";
import Section from "./Section";
import type { ReactNode } from "react";

type Props = {
  image: ReactNode;
  reverse?: boolean;
  ratio?: "60/40" | "50/50";
  bg?: "white" | "yellow" | "dark";
  spacing?: "normal" | "tight" | "loose";
  pageTop?: boolean;
  fullHeight?: boolean;
  background?: ReactNode;
  children: ReactNode;
};

export default function SplitSection({
  image,
  reverse = false,
  ratio = "60/40",
  bg = "white",
  spacing = "normal",
  pageTop = false,
  fullHeight = false,
  background,
  children,
}: Props) {
  return (
    <Section bg={bg} spacing={spacing} pageTop={pageTop} fullHeight={fullHeight} background={background}>
      <div
        className={clsx(
          styles.split,
          reverse && styles.split_reverse,
          ratio === "50/50" && styles.split_50,
        )}
      >
        <div className={styles.split_text}>{children}</div>
        <div className={styles.split_image}>{image}</div>
      </div>
    </Section>
  );
}
