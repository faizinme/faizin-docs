// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Faizin Notes',
  tagline: 'Hello, Im Faizin, a passionate advocate of lifelong learning, a savvy marketing strategist, and your reliable tech support ally. With an insatiable thirst for knowledge, a knack for crafting compelling campaigns, and a toolbox filled with technical wizardry, Im here to elevate your digital journey.',
  url: 'https://faizin.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'faizinme', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Faizin Notes',
        logo: {
          alt: 'Faizin.net logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {to: '/contact', label: 'Contact', position: 'left'},
          {
            href: 'https://github.com/faizinme',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'social media',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/',
              },
              {
                label: 'Linkedin',
                href: 'https://id.linkedin.com/in/nur-faizin',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com',
              },
            ],
          },
          {
            title: 'resource',
            items: [
              {
                label: 'Developer Roadmaps',
                href: 'https://roadmap.sh',
              },
              {
                label: 'Free Code Camp',
                href: 'https://www.freecodecamp.org',
              },
              {
                label: 'MDN Web',
                href: 'https://developer.mozilla.org',
              },
              {
                label: 'The Odin Project',
                href: 'https://www.theodinproject.com/',
              }
            ],
          },
          {
            title: 'more',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Email',
                href: 'mailto:faizin@kreatifpiksel.com',
              },
              {
                label: 'Kreatif Piksel',
                href: 'https://kreatifpiksel.com',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Faizin dot net.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

module.exports = {
  // ...
  themeConfig: {
    // ...
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID',

      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY',

      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
  },
};
