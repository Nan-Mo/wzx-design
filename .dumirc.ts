import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/wzx-design',
  publicPath: '/wzx-design/',
  favicons: [],
  outputPath: 'docs-dist',
  themeConfig: {
    hd: { rules: [] },
    rtl: true,
    name: 'Tst Design',
    nav: [
      {
        title: '',
        link: '/components/export-button',
      },
    ],
    logo: '',
    footer: 'tastaien | Copyright © 2023-present',
    prefersColor: { default: 'light', switch: true },
    socialLinks: {
      github: 'https://github.com/tastien',
    },
  },
  theme: {
    '@c-primary': '#b62021',
    'primary-color': '#b62021',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
