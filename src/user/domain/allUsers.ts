import { User } from './user';
import { UserId } from './valueObject/userId';

export interface AllUsers {
  save(user: User): Promise<void>;
  withId(id: UserId): Promise<User>;
}
