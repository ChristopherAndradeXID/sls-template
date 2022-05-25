import {CreateUser} from "../../../../src/User/Application/Create/CreateUser";
import {SuccessResponse} from "../../../../src/Shared/Domain/Http/SuccessResponse";
import {UserMother} from "../../Domain/UserMother";
import {User} from "../../../../src/User/Domain/User";
import {UserNameMother} from "../../Domain/UserNameMother";
import {AllUserFake} from "../../Mocks/AllUserFake";

describe('Create user should', () => {
    test('persist an user', async () => {

        const createUser = new CreateUser(new AllUserFake());
        const createUserMock = jest.spyOn(createUser, 'run');

        createUserMock.mockName('createUserMock')
            .mockImplementation(async (id, name, lastname) => {
                return new SuccessResponse<User>(UserMother.with({
                    name: UserNameMother.create('Christopher Andrade')
                }));
            });

        const response = await createUser.run('1', '2', '3');

        await expect(response.json().body.userName.value).toEqual('Christopher AndradeX');
    });
});
