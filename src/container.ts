import { Container } from 'inversify';
import { httpContainer } from './example/infrastructure/di/httpContainer';

const container = new Container();

container.load(...[
  httpContainer,
]);

export {
  container,
};
