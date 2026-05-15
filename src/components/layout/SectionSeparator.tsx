import clsx from "clsx";
import styles from "./styles.module.css";

type Variant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export default function SectionSeparator({ variant = 1 }: { variant?: Variant }) {
  return <div className={clsx(styles.sep, styles[`sep_v${variant}`])} />;
}
