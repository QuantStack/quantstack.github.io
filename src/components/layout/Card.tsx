import clsx from "clsx";
import styles from "./styles.module.css";
import React from "react";

type Props = {
  bg?: "white" | "yellow" | "transparent";
  hover?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Card({ bg = "white", hover = false, className, onClick, children }: Props) {
  return (
    <div
      className={clsx(
        styles.card,
        bg === "yellow" && styles.card_yellow,
        bg === "transparent" && styles.card_transparent,
        hover && styles.card_hover,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
