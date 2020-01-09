const path = require('path')
const webpack = require('webpack')

module.exports = {
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(path.join(__dirname, 'src'))
    return config
  },
}
