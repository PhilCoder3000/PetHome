import webpack from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { WebpackOptions } from '../types';


export function plugins(options: WebpackOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: options.htmlTemplate,
      title: 'Development',
    }),
    new webpack.ProgressPlugin(),
  ]
}