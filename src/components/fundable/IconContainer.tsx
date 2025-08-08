import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import GHPicture from "@site/static/img/socialmedias/GH.svg";
import LinkedInPicture from "@site/static/img/socialmedias/LinkedIn.svg";
import BlueskyPicture from "@site/static/img/socialmedias/Bluesky.svg";
import MastodonPicture from "@site/static/img/socialmedias/Mastodon.svg";

export default function IconContainer({ project }) {
    const icons = project.icons
    return (


        <div className={styles.icon_container}>
            {icons.map((Icon, index) => (
                <div key={index} className={styles.iconWrapper}>
                    <Icon height={"42px"} width={"42px"}
                        alt={
                            "Icon for the fundable project."
                        } />
                </div>
            ))}
        </div>
    );


}
