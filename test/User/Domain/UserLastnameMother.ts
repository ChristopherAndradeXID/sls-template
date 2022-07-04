import {UserLastname} from "../../../src/user/domain/ValueObject/UserLastname";
import {faker} from "@faker-js/faker";

export class UserLastnameMother {
    public static create(val: string) {
        return new UserLastname(val);
    }

    public static random() {
        return this.create(faker.name.lastName());
    }
}
