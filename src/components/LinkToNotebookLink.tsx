import styles from "./LinkToNotebookLink.module.css";

export default function LinkToNotebookLink({ label }: { label: string }) {
  return (
    <div className="flex-full-centered">
      <a className={`link-to-button ${styles.link_to_notebook_link}`} href="https://notebook.link">
        {label}
      </a>
    </div>
  );
}
