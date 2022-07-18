// eslint-disable-next-line import/no-import-module-exports
import { AWS } from '@serverless/typescript';
import * as path from 'path';

const serverlessConfiguration: AWS = {
  service: 'cg-app',

  package: {
    individually: true,
    excludeDevDependencies: true,
  },

  frameworkVersion: '3',

  plugins: [
    'serverless-plugin-typescript',
    'serverless-offline',
    'serverless-plugin-common-excludes',
    'serverless-plugin-include-dependencies',
  ],

  custom: {
    webpack: {
      webpackConfig: 'webpack.config.js',
    },
  },

  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
  },

  functions: {
    users: {
      handler: './src/example/infrastructure/lambda/createExample.handler',
      events: [
        {
          http: {
            method: 'post',
            path: '/users/uno',
            cors: true,
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
