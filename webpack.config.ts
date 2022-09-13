import path from 'path';

import development from './config/webpack/dev/webpack.development';
import production from './config/webpack/prod/webpack.production';
import { WebpackMode } from './config/webpack/types';

export default (_env: any, args: { mode: WebpackMode }) => {
  const options = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
    paths: {
      src: path.resolve(__dirname, 'src'),
      dist: path.resolve(__dirname, 'dist'),
    },
    mode: args.mode
  }
  switch (args.mode) {
    case 'development':
      return development(options);
    case 'production':
      return production(options);
    default:
      throw new Error('No matching configuration was found!');
  }
};
