import { ProfilePrimitive } from '../../profile/domain/profilePrimitive';

export interface UserPrimitive {
  id: string;
  name: string;
  lastname: string;
  profile: ProfilePrimitive;
}
