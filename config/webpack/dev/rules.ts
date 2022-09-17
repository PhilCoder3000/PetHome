import webpack from 'webpack';
import { WebpackOptions } from '../types';

export function rules(options: WebpackOptions): webpack.RuleSetRule[] {
  return [
    {
      test: /\.js$/,
      include: options.paths.src,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ];
}
