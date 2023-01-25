import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';

const devConfig: Configuration = {
  mode: 'production'
};

module.exports = merge(commonConfig, devConfig);
