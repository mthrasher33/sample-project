import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';

const devConfig: Configuration = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, '../../', 'build'),
    compress: false,
    port: 4000,
    hot: true,
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        port: 4000
      }
    }
  },
  watchOptions: {
    poll: true
  }
};

module.exports = merge(commonConfig, devConfig);
