import {UserName} from "../../../../src/User/Domain/ValueObject/UserName";
import {faker} from "@faker-js/faker";

export class UserNameStub {
    public static create(name: string) {
        return new UserName(name);
    }

    public static random() {
        return this.create(faker.name.lastName());
    }
}
