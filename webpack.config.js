const path = require('path');
const webpack = require('webpack');

module.exports = {

  resolve:{
    modules:[
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },

  // entry:['./lib/renderer/dom.js'],
  entry:{
    vendor:[
      'react',
      'react-dom',
      'axios',
      'prop-types',
      'lodash.debounce',
      'lodash.pickby'
    ],
    app:['./lib/renderer/dom.js']
  },
  output: {
    path:path.resolve(__dirname,'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/,exclude:/node_modules/,
         use: {loader:'babel-loader',options:{presets:["@babel/react","@babel/env"]}} }
    ]
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  }
};