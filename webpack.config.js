const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery","window.jQuery":"jquery","Tether":'tether',
      Popper: ['popper.js', 'default'],
     }),
     new ExtractTextPlugin({
			filename: "css/site.css",
			disable: false,
			allChunks: true
		}),
  ],
  module: {
		loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }
		]
  }
};