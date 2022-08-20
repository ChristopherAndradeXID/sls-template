import { AllProfiles } from '../../../src/profile/domain/allProfiles';
import { Profile } from '../../../src/profile/domain/profile';
import { Criteria } from '../../../src/shared/domain/criteria/criteria';

export class AllProfilesMock implements AllProfiles {
  private items: Profile[] = [];

  private readonly mockSearchByCriteria = jest.fn();

  async find(id: Profile['id']): Promise<Profile | null> {
    const profileResult = this.items.find((profile) => profile.id.value === id.value);

    if (!profileResult) {
      return null;
    }

    return profileResult;
  }

  async remove(id: Profile['id']): Promise<void> {
    this.items = this.items.filter((profile) => profile.id.value === id.value);
    this.items = this.items.filter((profile) => profile.id.value === id.value);
  }

  async save(profile: Profile): Promise<void> {
    this.items.push(profile);
  }

  async searchByCriteria(criteria: Criteria): Promise<Profile | null> {
    const profile = this.items.pop();
    this.mockSearchByCriteria(criteria);

    this.mockSearchByCriteria.mockImplementation((args) => {
      console.log(this.items, args);
    });

    if (!profile) {
      return null;
    }

    return profile;
  }
}
