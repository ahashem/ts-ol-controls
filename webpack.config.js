const webpack = require('webpack');

module.exports = {
  entry: './main.ts',
  output: {
    filename: './dist/ol-controls.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};