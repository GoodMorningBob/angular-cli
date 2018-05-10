import { NamedModulesPlugin } from 'webpack';
const Dotenv = require('dotenv-webpack');

import { WebpackConfigOptions } from '../webpack-config';

export function getDevConfig(_wco: WebpackConfigOptions) {
  return {
    plugins: [new Dotenv(), new NamedModulesPlugin()]
  };
}
