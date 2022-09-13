import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

export interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export type WebpackMode = 'development' | 'production'

export type WebpackOptions = {
  entry: string;
  htmlTemplate: string;
  paths: {
    src: string,
    dist: string,
  },
  mode: WebpackMode
}