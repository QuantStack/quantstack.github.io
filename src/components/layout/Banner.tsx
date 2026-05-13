import clsx from "clsx";
import styles from "./styles.module.css";
import type { ReactNode } from "react";

type Props = {
  bg?: "dark" | "light";
  title?: string;
  cta?: ReactNode;
  children: ReactNode;
};

export default function Banner({ bg = "dark", title, cta, children }: Props) {
  return (
    <div className={clsx(styles.banner, styles[`banner_${bg}`])}>
      {title && (
        <div className={clsx(styles.banner_title, styles[`banner_title_${bg}`])}>
          {title}
        </div>
      )}
      <div className={styles.banner_body}>{children}</div>
      {cta && <div>{cta}</div>}
    </div>
  );
}
