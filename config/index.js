// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')
const TARGET = process.env.TARGET_APP || 'default';
const PLATFORM = process.env.PLATFORM || 'android';
const isSERVED = typeof process.env.SERVE === 'string' ? process.env.SERVE === 'true' : process.env.SERVE;
const NODE_ENV = process.env.NODE_ENV;
const dFlag = (process.env.PLATFORM && process.env.PLATFORM == 'DESKTOP');
console.log('PLATFORM= ' + PLATFORM);
console.log('isSERVED= ' + typeof isSERVED);

module.exports = {
  build: {
    index: path.resolve(__dirname, `../dist/${TARGET}/${NODE_ENV}/www/index.html`),
    assetsRoot: path.resolve(__dirname, `../dist/${TARGET}/${NODE_ENV}/www/`),
    assetsSubDirectory: 'static',
    assetsPublicPath: (dFlag || PLATFORM === 'browser') ? '/app/' : (isSERVED ? '/' : ''),
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.HOST, if port is in use, a free one will be determined

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: dFlag ? '/app/' : (isSERVED ? '/' : ''), // dejar vacio para compilar cordova
    proxyTable: {},

    // Various Dev Server settings
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enablings this option.
    cssSourceMap: false
  },
}
