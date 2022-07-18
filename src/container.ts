import { Container } from 'inversify';
// eslint-disable-next-line import/no-cycle
import { httpContainer } from './example/infrastructure/di/httpContainer';
import { sharedContainer } from './shared/infrastructure/di/sharedContainer';

const container = new Container();

container.load(...[
  // httpContainer,
  sharedContainer,
]);

export {
  container,
};
