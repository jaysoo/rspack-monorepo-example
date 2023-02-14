const { composePlugins, withNx, withReact } = require('@nrwl/rspack');

module.exports = composePlugins(
  withNx(),
  withReact({ style: 'css' }),
  (config) => {
    console.log(config);
    return config;
  }
);
