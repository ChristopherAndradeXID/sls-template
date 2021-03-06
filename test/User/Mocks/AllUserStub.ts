import {AllUsers} from "../../../src/User/Domain/AllUsers";
import {User} from "../../../src/User/Domain/User";
import {UserId} from "../../../src/User/Domain/ValueObject/UserId";
import {UserMother} from "../Domain/UserMother";
import {UserIdMother} from "../Domain/UserIdMother";

export class AllUserStub implements AllUsers {

    private readonly users: User[] = [
        UserMother.random(),

        UserMother.with({
            id: UserIdMother.create('c5c9da35-a45c-4c5f-9293-510b0c48dbdb'),
        })
    ];

    async save(user: User): Promise<void> {
        return Promise.resolve(undefined);
    }

    async withId(id: UserId): Promise<User> {
        return this.users.find(user => user.id.value === id.value)!;
    }
}
