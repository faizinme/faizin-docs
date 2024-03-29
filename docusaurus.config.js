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
  favicon: 'img/favicon.svg',

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
          //editUrl://
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl://
           //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Faizin Notes.',
        logo: {
          alt: 'Faizin.net logo',
          src: 'img/logome.svg',
          srcDark: 'img/faizinme-logo-dark.svg'
        },
        items: [
          {to: '/about', label: 'About', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/contact', label: 'Contact', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          
          {
            href: 'https://github.com/faizinme',
            label: 'Resume',
            position: 'right',
          },
          {
            href: 'https://github.com/faizinme',
            position: 'right',
            className: 'header-github-link',
            "aria-label": "GitHub repository",
          },
        ],
      },
      algolia: {
        apiKey: '51eb9ca66f365d6326971c40d230837d',
        appId: 'RRLB5GB5XE',
        indexName: 'faizin',
        contextualSearch: true,
        insights: true,
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
            title: 'awesome resource',
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
            title: 'legal',
            items: [
              {
                label: 'Disclaimer',
                href: '/disclaimer',
              },
              {
                label: 'Privacy',
                href: '/privacy-policy',
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
                href: 'mailto:nur@faizin.me',
              },
              {
                label: 'Status',
                href: 'https://stats.uptimerobot.com/WEAmQCz6nL',
              }
            ],
          },
        ],
        logo: {
          alt: 'Kreatif Piksel',
          src: '/img/kreatif-piksel.png',
          href: 'https://kreatifpiksel.com',
        },
        copyright: `Copyright © ${new Date().getFullYear()} N Faizin. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
