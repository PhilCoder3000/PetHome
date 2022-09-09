const development = require('./config/webpack.development')
const production = require('./config/webpack.production')

module.exports = (env, args) => {
  switch (args.mode) {
    case 'development':
      return development
    case 'production':
      return production
    default:
      throw new Error('No matching configuration was found!');
  }
};

