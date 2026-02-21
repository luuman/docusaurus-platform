// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '技术文档平台',
  tagline: 'Electron · Tauri · Rust',
  favicon: 'img/favicon.ico',

  url: 'https://docs.yourdomain.com',
  baseUrl: '/',

  organizationName: 'your-org',
  projectName: 'docs-platform',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-org/docs-platform/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '技术文档',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Electron',
            position: 'left',
            items: [
              {
                label: '入门指南',
                to: '/electron/intro',
              },
              {
                label: 'API 参考',
                to: '/electron/api',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Tauri',
            position: 'left',
            items: [
              {
                label: '入门指南',
                to: '/tauri/intro',
              },
              {
                label: '配置',
                to: '/tauri/configuration',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Rust',
            position: 'left',
            items: [
              {
                label: '入门指南',
                to: '/rust/intro',
              },
              {
                label: 'Cargo',
                to: '/rust/cargo',
              },
            ],
          },
          {
            href: 'https://github.com/your-org/docs-platform',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Electron',
                to: '/electron/intro',
              },
              {
                label: 'Tauri',
                to: '/tauri/intro',
              },
              {
                label: 'Rust',
                to: '/rust/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 技术文档平台`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
