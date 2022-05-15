import {User} from "./User";
import {UserId} from "./UserId";

export interface UserRepository {
    getAll(): Promise<User[]>;
    createUser(user: User): Promise<void>;
    userAlreadyExists(userId: UserId): Promise<boolean>;
}
