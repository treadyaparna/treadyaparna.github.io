import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Aparna Saha",
  tagline: "Personal Website",
  // favicon: 'img/favicon.ico',

  // GitHub Pages user site → served at root
  url: "https://treadyaparna.github.io",
  baseUrl: "/",

  organizationName: "treadyaparna",
  projectName: "treadyaparna.github.io",
  deploymentBranch: "gh-pages",

  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          // 👇 makes docs root route
          routeBasePath: "/",
          editUrl:
            "https://github.com/treadyaparna/treadyaparna.github.io/edit/main/",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/treadyaparna/treadyaparna.github.io/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },

  themeConfig: {
    image: "img/social-card.png",
    navbar: {
      title: "Aparna Saha",
      // logo: {
      //   alt: 'Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/treadyaparna/treadyaparna.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: 'Docs',
        //   items: [{ label: 'Introduction', to: '/' }],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Issues',
        //       href: 'https://github.com/treadyaparna/treadyaparna.github.io/issues',
        //     },
        //   ],
        // },
      ],
      copyright: `© ${new Date().getFullYear()} Aparna Saha.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: {
        light: "default", // 'default' | 'neutral' | 'forest' | etc.
        dark: "dark",
      },
      options: {
        // Any mermaid options you like, e.g.:
        // fontFamily: 'Inter, sans-serif',
        // securityLevel: 'strict',
      },
    },
  },
  stylesheets: [
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
      type: "text/css",
    },
  ],
};

export default config;
