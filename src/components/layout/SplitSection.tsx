import clsx from "clsx";
import styles from "./styles.module.css";
import Section from "./Section";
import type { ReactNode } from "react";

type Props = {
  image: ReactNode;
  reverse?: boolean;
  ratio?: "60/40" | "50/50";
  bg?: "white" | "light" | "dark";
  spacing?: "normal" | "tight" | "loose";
  pageTop?: boolean;
  children: ReactNode;
};

export default function SplitSection({
  image,
  reverse = false,
  ratio = "60/40",
  bg = "white",
  spacing = "normal",
  pageTop = false,
  children,
}: Props) {
  return (
    <Section bg={bg} spacing={spacing} pageTop={pageTop}>
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
