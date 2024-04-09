import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "QuantStack",
  tagline: "",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
        src: "img/logo-website.svg",
      },

      items: [
        { to: "/projects", label: "Projects", position: "left" },
        { to: "/services", label: "Services", position: "left" },
        { to: "/about", label: "About us", position: "left" },
        { to: "/careers", label: "Careers", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          to: "/contact",
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
          title: "Twitter",
          position: "right",
          target: "_blank",
          className: "x-icon",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        /*{
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} QuantStack's website, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
