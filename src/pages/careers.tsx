import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Footer from "../components/footer/Footer";
import Section from "../components/layout/Section";
import SectionSeparator from "../components/layout/SectionSeparator";
import Banner from "../components/layout/Banner";
import Link from "@docusaurus/Link";
import styles from "./careers.module.css";
import PlayCircle from "@site/static/img/icons/PlayCircle.svg";

import GroupPhotoUrl from "@site/static/img/group/group-photo.png";
import SylvainPictureUrl from "@site/static/img/interviews/Sylvain_WTJ.png";
import JohanPictureUrl from "@site/static/img/interviews/Johan_WTJ.png";
import MartinPictureUrl from "@site/static/img/interviews/Martin_WTJ.png";
import JeremyPictureUrl from "@site/static/img/interviews/Jeremy_WTJ.png";
import DarianPictureUrl from "@site/static/img/interviews/Darian_WTJ.png";
import DavidPictureUrl from "@site/static/img/interviews/David_WTJ.png";
import GabrielaPictureUrl from "@site/static/img/interviews/Gabriela_WTJ.png";
import TrungPictureUrl from "@site/static/img/interviews/Trung_WTJ.png";
import MeriemPictureUrl from "@site/static/img/interviews/Meriem_WTJ.png";
import MatthiasPictureUrl from "@site/static/img/interviews/Matthias_WTJ.png";
import SandrinePictureUrl from "@site/static/img/interviews/Sandrine_WTJ.png";

const interviews = [
  { completeName: "Sylvain Corlay", firstName: "Sylvain", position: "CEO", pictureUrl: SylvainPictureUrl, url: "https://www.dailymotion.com/video/xa0qmac" },
  { completeName: "Johan Mabille", firstName: "Johan", position: "Technical Director", pictureUrl: JohanPictureUrl, url: "https://www.dailymotion.com/video/x9zl9ta" },
  { completeName: "Martin Renou", firstName: "Martin", position: "Technical Director", pictureUrl: MartinPictureUrl, url: "https://www.dailymotion.com/video/x9zl9t6" },
  { completeName: "Jeremy Tuloup", firstName: "Jeremy", position: "Technical Director", pictureUrl: JeremyPictureUrl, url: "https://www.dailymotion.com/video/x9zl9t8" },
  { completeName: "Afshin Darian", firstName: "Darian", position: "Technical Director", pictureUrl: DarianPictureUrl, url: "https://www.dailymotion.com/video/x9zl9t2" },
  { completeName: "David Brochart", firstName: "David", position: "Technical Director", pictureUrl: DavidPictureUrl, url: "https://www.dailymotion.com/video/x9zl9t4" },
  { completeName: "Gabriela Vives", firstName: "Gabriela", position: "UX Designer and Researcher", pictureUrl: GabrielaPictureUrl, url: "https://www.dailymotion.com/video/x9zl9sw" },
  { completeName: "Trung Le Duc", firstName: "Trung", position: "Scientific Software Developer", pictureUrl: TrungPictureUrl, url: "https://www.dailymotion.com/video/x9zl9t0" },
  { completeName: "Sandrine Pataut", firstName: "Sandrine", position: "Scientific Software Developer", pictureUrl: SandrinePictureUrl, url: "https://www.dailymotion.com/video/xa0qmai" },
  { completeName: "Matthias Meschede", firstName: "Matthias", position: "Chief Operating Officer", pictureUrl: MatthiasPictureUrl, url: "https://www.dailymotion.com/video/xa0qmae" },
  { completeName: "Meriem Ben Ismail", firstName: "Meriem", position: "Scientific Software Developer", pictureUrl: MeriemPictureUrl, url: "https://www.dailymotion.com/video/xa0qmag" },
];

function InterviewCard({ person }) {
  return (
    <Link href={person.url}>
      <div className={styles.interview_card}>
        <div className={styles.picture_container}>
          <div className={styles.interview_picture}>
            <img src={person.pictureUrl} alt={`${person.completeName}, ${person.position} at QuantStack`} />
            <PlayCircle className={styles.play_interview} />
          </div>
        </div>
        <div className={styles.interview_name}>{person.firstName}</div>
        <div className={styles.interview_position}>{person.position}</div>
      </div>
    </Link>
  );
}

function CareersContent() {
  return (
    <>
      <Section pageTop bg="yellow">
        <h1>Join the QuantStack team.</h1>
        <p>We are ~30 researchers and engineers building the infrastructure of scientific computing. Your code will reach millions of users. Your contributions will go upstream. This is not a support role — it's a principal contributor role from day one.</p>
      </Section>

      <SectionSeparator variant={2} />

      <Section>
        <div className={`${styles.group_photo_container} flex-full-centered`}>
          <img src={GroupPhotoUrl} alt="QuantStack team gathered at JupyterCon in Paris, May 2023." />
        </div>
        <div className={styles.join_the_team_container}>
          <div className={styles.join_the_team_text}>
            We're looking for researchers and engineers who want to work at the frontier of open-source scientific computing. If you have strong fundamentals, a taste for hard problems, and care deeply about the impact of your work — we'd like to meet you.
          </div>
          <div className={styles.interviews_container}>
            <h2>Working at QuantStack</h2>
            <div className="container">
              <ul className={`row flex-full-centered`} style={{ listStyle: "none" }}>
                {interviews.map((person) => (
                  <li className="cards-list" key={person.firstName}>
                    <div className="col col--2">
                      <InterviewCard person={person} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Banner
        bg="dark"
        cta={
          <div className="flex-full-centered">
            <Link
              className={`link-to-button ${styles.link_to_WTJ}`}
              href="https://www.welcometothejungle.com/fr/companies/quantstack"
              aria-label="Learn more by visiting the page dedicated to QuantStack on Welcome to the Jungle platform."
            >
              OPEN OUR PROFILE
            </Link>
          </div>
        }
      >
        Learn more on our Welcome to the Jungle web page.
      </Banner>
    </>
  );
}

export default function CareersPage(): JSX.Element {
  return (
    <Layout>
      <BrowserOnly>{() => <CareersContent />}</BrowserOnly>
      <Footer />
    </Layout>
  );
}
