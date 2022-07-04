import {User} from "../../../src/user/domain/User";
import {UserId} from "../../../src/user/domain/ValueObject/UserId";
import {UserName} from "../../../src/user/domain/ValueObject/UserName";
import {UserLastname} from "../../../src/user/domain/ValueObject/UserLastname";
import {UserIdMother} from "./UserIdMother";
import {UserNameMother} from "./UserNameMother";
import {UserLastnameMother} from "./UserLastnameMother";

interface UserMotherWith {
    id?: UserId,
    name?: UserName,
    lastname?: UserLastname
}

export class UserMother {
    public static create(id: UserId, name: UserName, lastname: UserLastname) {
        return User.create(id, name, lastname);
    }

    public static random() {
        return this.create(
            UserIdMother.random(),
            UserNameMother.random(),
            UserLastnameMother.random(),
        );
    }

    public static with({
        id = UserIdMother.random(),
        name = UserNameMother.random(),
        lastname = UserLastnameMother.random(),
    }: UserMotherWith) {
        return this.create(id, name, lastname);
    }
}
