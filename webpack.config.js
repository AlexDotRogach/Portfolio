'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  watch: true,

  devtool: "source-map",
  //модули для использования
  // module: {
  //   //правила
  //   rules: [
  //     {
  //       test: /\.m?js$/,
  //       //исключить 
  //       exclude: /(node_modules|bower_components)/,
  //       //использовать
  //       use: {
  //         //связывает webpack c loader
  //         loader: 'babel-loader',
  //         options: {
  //           // Присеты
  //           presets: [['@babel/preset-env', {
  //               debug: true,
  //               corejs: 3,
  //               useBuiltIns: "usage"
  //           }]]
  //         }
  //       }
  //     }
  //   ]
  // }
};
