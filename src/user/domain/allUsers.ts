import { User } from './user';

export interface AllUsers {
  save(user: User): Promise<void>;
}
