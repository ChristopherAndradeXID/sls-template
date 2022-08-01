import { User } from './user';
import { Criteria } from '../../shared/domain/criteria/criteria';

export interface AllUsers {
  save(user: User): Promise<void>;
  search(id: User['id']): Promise<User | null>;
  remove(id: User['id']): Promise<void>;
  searchByCriteria(criteria: Criteria): Promise<User | null>;
}
