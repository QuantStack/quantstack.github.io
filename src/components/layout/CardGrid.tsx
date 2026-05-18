import clsx from "clsx";
import styles from "./styles.module.css";
import type { ReactNode } from "react";

type Props = {
  cols?: 2 | 3 | 4;
  children: ReactNode;
  className?: string;
};

export default function CardGrid({ cols = 3, children, className }: Props) {
  return (
    <ul
      className={clsx(
        styles.card_grid,
        cols === 2 && styles.card_grid_2,
        cols === 4 && styles.card_grid_4,
        className,
      )}
    >
      {children}
    </ul>
  );
}
