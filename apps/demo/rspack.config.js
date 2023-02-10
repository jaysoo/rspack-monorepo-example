//const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { resolve } = require('path');

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    main: {
      import: ["./src/main.tsx"],
    }
  },
  output: {
    path: '../../dist/apps/demo',
    publicPath: '/',
    filename: isProd ? '[name].[contenthash:8][ext]' : '[name][ext]',
  },
  devServer: {
    port: 4200,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'css/module',
      },
    ],
  },
  resolve: {
    // Manually map paths from tsconfig.
    alias: {
      '@rspack-monorepo-example/ui': '../../libs/ui/src/index.ts'
    },
    // This is not working it seems?
    //plugins: [new TsconfigPathsPlugin({
    //  configFile: resolve(__dirname, 'tsconfig.app.json')
    //})]
  },
  infrastructureLogging: {
    debug: false,
  },
  builtins: {
    html: [{
      template: './src/index.html'
    }],
    define: {
      'process.env.NODE_ENV': isProd ? "'production'" : "'development'"
    },
    progress: {},
    react: {
      runtime: 'automatic',
      development: isDev,
      refresh: isDev,
    }
  },
};

