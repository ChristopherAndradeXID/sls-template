import { ContainerModule, interfaces } from 'inversify';
import { Connection } from '../connection/Connection';
import { sharedTypes } from './sharedTypes';

const sharedContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<Connection>(sharedTypes.connection)
    .to(Connection)
    .inSingletonScope();
});

export {
  sharedContainer,
};
