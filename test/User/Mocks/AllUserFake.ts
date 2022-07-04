import {AllUsers} from "../../../src/user/domain/AllUsers";
import {User} from "../../../src/user/domain/User";
import {UserId} from "../../../src/user/domain/ValueObject/UserId";

export class AllUserFake implements AllUsers {
    private readonly users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async withId(id: UserId): Promise<User> {
        return this.users.find(user => user.id.value === id.value)!;
    }
}
