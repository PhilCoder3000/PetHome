import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { WebpackOptions } from '../types';
import Dotenv from 'dotenv-webpack'


export function plugins(options: WebpackOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: options.htmlTemplate,
      title: 'Production',
    }),
    new webpack.ProgressPlugin(),
    new Dotenv(),
  ]
}