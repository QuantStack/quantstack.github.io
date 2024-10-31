import styles from "./styles.module.css";
import InterviewCard from "./InterviewCard";

export default function Interviews({ details, description }) {
  return (
    <div>
      <h2 className={styles.h2_custom}>{description}</h2>
      <div className="container">
        <ul className={"row" + " "+ "flex-full-centered"}>
          {details.map((person, index) => (
            <li className="cards-list" key={person.firstName}>
              <div className="col col--2">
                <InterviewCard person={person} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
