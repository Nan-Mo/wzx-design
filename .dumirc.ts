import { defineConfig } from 'dumi';

export default defineConfig({
  base: 'wzx-design',
  publicPath: 'wzx-design',  
  favicons: [
    'https://shiheng-tech.oss-cn-shanghai.aliyuncs.com/shihengonline//1640835741950/file?Expires=3217635742&OSSAccessKeyId=LTAI4G9rgor8RbRNVjtsLqxi&Signature=rnOyo2IwZ3nzoMnq%2F5Vep1D1rTw%3D',
  ],
  outputPath: 'docs-dist',
  themeConfig: {
    hd: { rules: [] },
    rtl: true,
    name: 'Tst Design',
    nav: [{
      title: '',
      link: '/components/export-button',
    }],
    logo: 'https://shiheng-tech.oss-cn-shanghai.aliyuncs.com/shihengonline//1640835741950/file?Expires=3217635742&OSSAccessKeyId=LTAI4G9rgor8RbRNVjtsLqxi&Signature=rnOyo2IwZ3nzoMnq%2F5Vep1D1rTw%3D',
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
