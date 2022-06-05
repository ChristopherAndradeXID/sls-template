import { User } from './User';
import { UserId } from './ValueObject/UserId';

export interface AllUsers {
  save(user: User): Promise<void>;
  withId(id: UserId): Promise<User>;
}
