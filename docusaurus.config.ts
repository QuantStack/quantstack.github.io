import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "QuantStack",
  tagline: "",

  // Set the production url of your site here
  url: "https://new-quantstack.net/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/quantstack.github.io/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "/HaudinFlorence/", // Usually your GitHub org/user name.
  projectName: "quantstack.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  staticDirectories: ["static"],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: "",
      logo: {
        alt: "QuantStack Logo",
        src: "/img/logo-website.svg",
      },

      items: [
        {
          to: "/projects/",
          className: "custom_navbar_item",
          label: "Projects",
          position: "left",
        },
        {
          to: "/services/",
          className: "custom_navbar_item",
          label: "Services",
          position: "left",
        },
        {
          to: "/about/",
          className: "custom_navbar_item",
          label: "About us",
          position: "left",
        },
        {
          to: "/careers/",
          className: "custom_navbar_item",
          label: "Careers",
          position: "left",
        },
        {
          to: "/blog/",
          className: "custom_navbar_item",
          label: "Blog",
          position: "left",
        },
        {
          to: "/contact/",
          label: "CONTACT US",
          position: "right",
          className: "contact",
        },

        {
          to: "https://github.com/QuantStack",
          title: "GitHub",
          position: "right",
          target: "_blank",
          className: "github-icon",
        },

        {
          to: "https://www.linkedin.com/company/quantstack/mycompany/",
          title: "LinkedIn",
          position: "right",
          target: "_blank",
          className: "linkedin-icon",
        },

        {
          to: "https://twitter.com/QuantStack",
          title: "X",
          position: "right",
          target: "_blank",
          className: "x-icon",
        },
      ],
    },
   
    footer: {
      links: [
        {
          title: " ",
          items: [
            {
              html: `
                      
                      <img src="/img/logo-quantstack.svg" alt="QuantStack logo" width="200px" />
                      <div class="footer-astronaut">
                      <img src="/img/astronaut-footer.svg" alt="Astronaut" />
                      </div>
                    `,
            },
          ],
        },
        {
          title: " ",
          items: [
            {
              label: "Home",
              href: "/home/",
            },
            {
              label: "Projects",
              href: "/projects/",
            },
            {
              label: "Services",
              href: "/services/",
            },
            {
              label: "About",
              href: "/about/",
            },
            {
              label: "Careers",
              href: "/careers/",
            },
            {
              label: "Blog",
              href: "/blog/",
            },
          ],
        },
        {
          title: " ",
          items: [
            {
              html: `
              <div>
              <div class="social-media-links">
                <a href="https://github.com/QuantStack" target="_blank" rel="noreferrer noopener" aria-label="Visit our Github page">
                        <img src="/img/socialmedias/GH.svg" alt="Visit our GitHub page" width="36" height="36" />
                </a>
                <a href="https://www.linkedin.com/company/quantstack/mycompany/" target="_blank" rel="noreferrer noopener" aria-label="Visit our LinkedIn page">
                <img src="/img/socialmedias/LinkedIn.svg" alt="Visit our LinkedIn page" width="36" height="36" />
                </a>
                <a href="https://twitter.com/QuantStack" target="_blank" rel="noreferrer noopener" aria-label="Visit our X page">
                <img src="/img/socialmedias/X.svg" alt="Visit our X page" width="36" height="36" />
                </a>
                </div>
                  <div class="office-address">
                      <b>QuantStack Office </b><br/>
                      16 avenue Curti <br/>
                      94 100 Saint Maur des Fossés <br/>
                      France
                  </div>
                </div>
                    `,
            },
          ],
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
