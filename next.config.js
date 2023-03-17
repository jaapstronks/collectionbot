const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
};
