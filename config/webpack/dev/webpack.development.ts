import path from 'path';
import webpack from 'webpack';
import { Configuration, WebpackOptions } from '../types';
import { plugins } from './plugins';
import { rules } from './rules';

function development(options: WebpackOptions): Configuration {
  return {
    entry: options.entry,
    mode: 'development',
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    devtool: 'eval-source-map',
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

export default development;
