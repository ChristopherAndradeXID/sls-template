import { Container } from 'inversify';
import { httpContainer } from './example/infrastructure/di/httpContainer';
import { sharedContainer } from './shared/infrastructure/di/sharedContainer';
import { profileContainer } from './profile/infrastructure/di/profileContainer';

const container = new Container();

container.load(...[
  httpContainer,
  sharedContainer,
  profileContainer,
]);

export {
  container,
};
