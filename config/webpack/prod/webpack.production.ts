import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { plugins } from './plugins';
import { rules } from './rules';
import { Configuration, WebpackOptions } from '../types';

function production(options: WebpackOptions): Configuration {
  return {
    entry: options.entry,
    mode: 'production',
    output: {
      path: options.paths.dist,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    devtool: 'source-map',
    plugins: plugins(options),
    module: {
      rules: rules(options),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    optimization: {
      runtimeChunk: 'single',
    },
  };
}

export default production;
