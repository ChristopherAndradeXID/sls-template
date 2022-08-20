import { AllUsers } from '../../../src/user/domain/allUsers';
import { User } from '../../../src/user/domain/user';
import { Criteria } from '../../../src/shared/domain/criteria/criteria';

export class AllUsersMock implements AllUsers {
  private readonly mockSave = jest.fn();

  private readonly mockSearchByCriteria = jest.fn();

  private items: User[] = [];

  async save(user: User): Promise<void> {
    this.items.push(user);
    this.mockSave(user);
  }

  public assertSaveHasBeenCalledWidth(user: User) {
    expect(this.mockSave).toHaveBeenCalledWith(user);
  }

  async remove(id: User['id']): Promise<void> {
    this.items = this.items.filter((user) => user.id !== id);
  }

  async search(id: User['id']): Promise<User | null> {
    const userInArray = this.items.find((user) => user.id.value === id.value);

    if (!userInArray) {
      return null;
    }

    return userInArray;
  }

  async searchByCriteria(criteria: Criteria): Promise<User | null> {
    this.mockSearchByCriteria(criteria);
    const user = this.items.pop();

    if (!user) {
      return null;
    }

    return user;
  }
}
