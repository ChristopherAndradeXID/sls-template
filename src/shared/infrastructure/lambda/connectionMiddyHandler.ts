import middy from '@middy/core';
import { container } from '../../../container';
import { Connection } from '../connection/Connection';
import { sharedTypes } from '../di/sharedTypes';

const connection = container.get<Connection>(sharedTypes.connection);

function openConnection() {
  return {
    async before() {
      await connection.open();
    },
  };
}

function closeConnection() {
  return {
    async after() {
      await connection.close();
    },
  };
}

export const ConnectionMiddyHandler = (handler: any) => middy(handler)
  .use(openConnection())
  .use(closeConnection());
