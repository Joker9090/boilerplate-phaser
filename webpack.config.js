var glob_entries = require('webpack-glob-entries');
var path = require('path');
module.exports = {
    // entry: glob_entries('./src/**/*.js'),
    entry: './src/index.js',
    output: {
      filename: "./app/js/game.js"
    },
    devtool: 'source-map',
    watch: true,
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'jshint-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              presets: ['es2015']
          }
        }
      ],
    }
}
