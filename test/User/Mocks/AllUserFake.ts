import {AllUsers} from "../../../src/User/Domain/AllUsers";
import {User} from "../../../src/User/Domain/User";
import {UserId} from "../../../src/User/Domain/ValueObject/UserId";

export class AllUserFake implements AllUsers {
    private readonly users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async withId(id: UserId): Promise<User> {
        return this.users.find(user => user.id.value === id.value)!;
    }
}
