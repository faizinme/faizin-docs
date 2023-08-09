// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Faizin Notes',
  tagline: 'Im Faizin, a boundless creative spirit on a mission to turn the ordinary into the extraordinary! My world is a canvas of vibrant ideas, a symphony of colors, and a playground for innovation. I breathe, dream, and live creativity in every facet of my life.',
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
        title: 'Faizin Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
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
