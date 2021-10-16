import { defineConfig } from 'umi';

const publicPath = `http://cdn.glossytech.cn:9000/erp_static/`;
export default defineConfig({
  publicPath,
  runtimePublicPath: true,
  webpack5: {},
  mfsu: {
    development: {
      output: './.mfsu-dev',
    },
    production: {
      output: './.mfsu-build',
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  history: {
    type: 'hash',
  },
  hash: true,
  fastRefresh: {},
});
