import 'reflect-metadata';
import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import { v4 as uuid } from 'uuid';
import { LambdaResponse } from '../../../shared/domain/lambdaResponse';
import { HttpStatusCode } from '../../../shared/domain/httpStatusCode';
import { User } from '../../../user/domain/user';
import { container } from '../../../container';
import { AllExamples } from '../../domain/allExamples';
import { httpTypes } from '../di/httpExample';
import { ConnectionMiddyHandler } from '../../../shared/infrastructure/lambda/connectionMiddyHandler';
import { ProfileModel } from '../../../profile/infrastructure/model/profileModel';
import { Profile } from '../../../profile/domain/profile';
import { ProfileCreator } from '../../../profile/application/create/profileCreator';
import { profileTypes } from '../../../profile/infrastructure/di/profileTypes';

const repository = container.get<AllExamples>(httpTypes.allExamples);
const profileCreator = container.get<ProfileCreator>(profileTypes.profileCreator);

async function CreateExampleHandler(event: any): Promise<LambdaResponse> {
  const profile = Profile.fromPrimitives({
    id: uuid(),
    isPrivate: false,
    username: event.body.username,
    website: '',
    photoUrl: Profile.PROFILE_DEFAULT_PHOTO_URL,
    biography: '',
  });

  await profileCreator.run(profile);

  const user = User.fromPrimitives(
    uuid(),
    event.body.name,
    event.body.lastname,
    ProfileModel.from(profile),
  );

  await repository.createUser(user);

  return {
    statusCode: HttpStatusCode.OK,
    body: JSON.stringify({
      user: user.toPrimitives(),
    }),
  };
}

const webito = middy(CreateExampleHandler)
  .use(httpJsonBodyParser());

const handler = ConnectionMiddyHandler(webito);

export {
  handler,
};
