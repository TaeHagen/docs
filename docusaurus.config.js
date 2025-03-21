// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'OpenBubbles',
    tagline: 'OpenBubbles Documentation',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://OpenBubbles.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/docs/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'OpenBubbles', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    trailingSlash: false,
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs:
                 {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
            blog: {
                     
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'ignore',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    plugins: [[require.resolve("docusaurus-lunr-search"), {
        enableHighlight: true
    }]],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
               
              
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenBubbles',
        logo: {
          alt: 'OpenBubbles Logo',
          src: 'img/logo.svg',
        },
        items: [
       
            { to: 'https://openbubbles.app/', label: 'New Site', position: 'left'},
          {
              href: 'https://openbubbles.app/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Docs',
                    to: 'https://openbubbles.app/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
             
              {
                label: 'Discord',
                    href: 'https://discord.gg/98fWS4AQqN',
                },

              
            ],
          },
          {
            title: 'More',
            items: [
              
                {
                    label: 'Report OpenBubbles Issues',
                    href: 'https://github.com/OpenBubbles/openbubbles-app/issues',
                },
                {
                    label: 'OpenBubbles Docs',
                    href: 'https://github.com/OpenBubbles/docs/',
                },
              {
                label: 'OpenBubbles GitHub',
                  href: 'https://github.com/OpenBubbles/openbubbles-app',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenBubbles Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
