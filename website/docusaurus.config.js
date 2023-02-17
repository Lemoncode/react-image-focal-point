// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Image Focal Point',
  tagline: 'Image focal point component for React',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // TODO.
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  organizationName: 'lemoncode',
  projectName: 'react-image-focal-point',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO: Update image
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'React Image Focal Point',
        logo: {
          alt: 'React Image Focal Point Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'examples/basic',
            position: 'left',
            label: 'Examples',
          },
          {
            href: 'https://github.com/Lemoncode/react-image-focal-point',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/lemoncoders',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                // TODO: Update blog link
                label: 'Blog',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Lemoncode/react-image-focal-point',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lemoncode S.L.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;