import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';

const devConfig: Configuration = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 4000
  }
};

module.exports = merge(commonConfig, devConfig);
