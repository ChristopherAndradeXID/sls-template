import 'reflect-metadata';
import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import { v4 as uuid } from 'uuid';
import { LambdaResponse } from '../../../shared/domain/lambdaResponse';
import { HttpStatusCode } from '../../../shared/domain/httpStatusCode';
import { User } from '../../../user/domain/user';
import { container } from '../../../container';
import { ConnectionMiddyHandler } from '../../../shared/infrastructure/lambda/connectionMiddyHandler';
import { ProfileModel } from '../../../profile/infrastructure/model/profileModel';
import { Profile } from '../../../profile/domain/profile';
import { ProfileCreator } from '../../../profile/application/create/profileCreator';
import { profileTypes } from '../../../profile/infrastructure/di/profileTypes';
import { userTypes } from '../../../user/infrastructure/di/userTypes';
import { UserCreator } from '../../../user/application/create/userCreator';
import { HttpResponse } from '../../../shared/infrastructure/httpResponse';

async function CreateExampleHandler(event: any): Promise<LambdaResponse> {
  try {
    const profileCreator = container.get<ProfileCreator>(profileTypes.profileCreator);
    const userCreator = container.get<UserCreator>(userTypes.userCreator);

    const profile = Profile.fromPrimitives({
      id: uuid(),
      isPrivate: false,
      username: event.body.username,
      website: '',
      photoUrl: Profile.PROFILE_DEFAULT_PHOTO_URL,
      biography: '',
    });

    const user = User.fromPrimitives(
      uuid(),
      event.body.name,
      event.body.lastname,
      ProfileModel.from(profile),
    );

    await profileCreator.run(profile);
    await userCreator.run(user);

    return HttpResponse.json(HttpStatusCode.OK, user.toPrimitives());
  } catch (e: any) {
    return HttpResponse.fromException(e);
  }
}

const webito = middy(CreateExampleHandler)
  .use(httpJsonBodyParser());

const handler = ConnectionMiddyHandler(webito);

export {
  handler,
};
