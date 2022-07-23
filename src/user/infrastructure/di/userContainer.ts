import { ContainerModule, interfaces } from 'inversify';
import { AllUsers } from '../../domain/allUsers';
import { userTypes } from './userTypes';
import { PgAllUsers } from '../persistence/pgAllUsers';
import { UserCreator } from '../../application/create/userCreator';

const userContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<AllUsers>(userTypes.allUsers).to(PgAllUsers);
  bind<UserCreator>(userTypes.userCreator).to(UserCreator);
});

export {
  userContainer,
};
