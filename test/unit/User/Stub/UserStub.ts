import {UserId} from "../../../../src/User/Domain/ValueObject/UserId";
import {UserName} from "../../../../src/User/Domain/ValueObject/UserName";
import {UserLastname} from "../../../../src/User/Domain/ValueObject/UserLastname";
import {User} from "../../../../src/User/Domain/User";
import {UserIdStub} from "./UserIdStub";
import {UserNameStub} from "./UserNameStub";
import {UserLastnameStub} from "./UserLastnameStub";

interface UserWith {
    id?: UserId,
    name?: UserName,
    lastname?: UserLastname,
}

export class UserStub {
    public static create(userId: UserId, name: UserName, lastname: UserLastname) {
        return User.create(userId, name, lastname);
    }

    public static random() {
        User.create(
            UserIdStub.random(),
            UserNameStub.random(),
            UserLastnameStub.random(),
        );
    }

    public static width({
        id = UserIdStub.random(),
        name = UserNameStub.random(),
        lastname = UserLastnameStub.random()
    }: UserWith) {
        return this.create(id, name, lastname);
    }
}
