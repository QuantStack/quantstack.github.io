import styles from "./styles.module.css";

export default function LinkToNotebookLink({label}) {
  return (
    <div className="flex-full-centered">
      <a className={`link-to-button ${styles.link_to_notebook_link}`} href="https://notebook.link" > {label} </a>
    </div>
  );
}
