import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

let copyright = `Copyright © ${new Date().getFullYear()} · QuantStack website · Built with Docusaurus`;

const config: Config = {
  title: "QuantStack",
  favicon: "img/quantstack/favicon.ico",
  tagline: "",

  // Set the production url of your site here
  url: "https://quantstack.net/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "/HaudinFlorence/", // Usually your GitHub org/user name.
  projectName: "quantstack.github.io", // Usually your repo name.

  onBrokenLinks: "warn",
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
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'RSS Feed',
          href: '/rss.xml',
        },
      },
    ],
    navbar: {
      title: "",
      logo: {
        alt: "QuantStack Logo",
        src: "img/quantstack/logo-website.svg",
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
          to: "/fundable/",
          className: "custom_navbar_item",
          label: "Fundable projects",
          position: "right",
          className:"fundable_projects"
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
          to: "https://bsky.app/profile/quantstack.bsky.social",
          title: "Bluesky",
          position: "right",
          target: "_blank",
          className: "bluesky-icon",
        },

        {
          to: "https://mastodon.social/@QuantStack",
          title: "Mastodon",
          position: "right",
          target: "_blank",
          className: "mastodon-icon",
        },

        {
          to: "rss.xml",
          title: "RSS",
          position: "right",
          target: "_blank",
          className: "rss-circle-icon",
        },
      ],
    },

    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    prism: {
      theme: prismThemes.github,
      /*darkTheme: prismThemes.oneDark,*/
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
