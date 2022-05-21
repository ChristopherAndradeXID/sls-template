import {UserLastname} from "../../../../src/User/Domain/ValueObject/UserLastname";
import {faker} from "@faker-js/faker";

export class UserLastnameStub {
    public static create(lastname: string) {
        return new UserLastname(lastname);
    }

    public static random() {
        return this.create(faker.name.firstName());
    }
}
