import {User} from "./User";
import {UserId} from "./ValueObject/UserId";

export interface UserRepository {
    save(user: User): Promise<void>;
    withId(id: UserId): Promise<User>;
}
