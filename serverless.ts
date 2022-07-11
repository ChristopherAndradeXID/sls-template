// eslint-disable-next-line import/no-import-module-exports
import { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'cg-app',

  package: {
    individually: true,
  },

  frameworkVersion: '3',

  plugins: [
    'serverless-plugin-typescript',
    'serverless-offline',
    'serverless-plugin-common-excludes',
    'serverless-plugin-include-dependencies',
  ],

  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
  },

  functions: {
    users: {
      handler: './src/user/infrastructure/lambda/getAllTodos.handler',
      events: [
        {
          http: {
            method: 'get',
            path: '/users/uno',
            cors: true,
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;