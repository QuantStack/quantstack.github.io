import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

let copyright = `Copyright © ${new Date().getFullYear()} · QuantStack website · Built with Docusaurus`;

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
        src: "img/quantstack/logo-website-light.svg",
        srcDark: "img/quantstack/logo-website-dark.svg"
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
              label: " ",
              className: "quantstack-astronaut-footer",
              href: "/home",
            },
          ],
        },
        
        {
          title: "Follow QuantStack on",
          items: [
            {
              label: "GitHub",
              className: "github-icon",
              href: "https://github.com/QuantStack",
            },
            {
              label: "LinkedIn",
              className: "linkedin-icon",
              href: "https://www.linkedin.com/company/quantstack/mycompany/",
            },
            {
              label: "X",
              className: "x-icon",
              href: "https://twitter.com/QuantStack",
            },
          ],
        },
        {
          title: "Menu ",
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
          title: "QuantStack office ",
          items: [
            {
              html: `
              
               <div class="quantstack-address">
                      16, avenue Curti <br/>
                      94100 Saint-Maur-des-Fossés <br/>
                      France
                  </div>
               
                    `,
            },
          ],
        },
      ],

      copyright: copyright,
    },
    
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      
    },

    prism: {
      theme: prismThemes.github,
      /*darkTheme: prismThemes.oneDark,*/
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
