import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { WebpackOptions } from '../types';
import ESLintPlugin from 'eslint-webpack-plugin'
import Dotenv from 'dotenv-webpack'


export function plugins(options: WebpackOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: options.htmlTemplate,
      title: 'Development',
    }),
    new webpack.ProgressPlugin(),
    new ESLintPlugin(),
    new Dotenv(),
  ]
}