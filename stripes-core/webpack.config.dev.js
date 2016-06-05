var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    root: [
      path.resolve('src'),
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'node_modules/@stripes-experiments')
    ]
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'node_modules/@stripes-experiments')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("global.css", {
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from:"node_modules/bootstrap/dist", to:"bootstrap"},
    ])
  ],
  sassLoader: {
    sourceMap: true,
    indentedSyntax: true,
    outputStyle: 'expanded',
    includePaths: [
      'node_modules/bourbon/app/assets/stylesheets'
    ]
  },
  stripesLoader: require('./modules.json'),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [
              require.resolve("babel-preset-es2015"),
              require.resolve("babel-preset-stage-0"),
              require.resolve("babel-preset-react")
          ]
        },
        // include: [path.join(__dirname, 'src'), /\/\@stripes-experiments\/.*?\/.*?\.js$/]
        // include: [path.join(__dirname, 'src'), /stripes-loader/, /About\.js$/, /stripes-connect/]
        exclude: [/node_modules/]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader")
      }
    ]
  }
};
