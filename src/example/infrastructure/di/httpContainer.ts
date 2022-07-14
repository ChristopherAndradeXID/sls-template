import { ContainerModule, interfaces } from 'inversify';
import { AllExamples } from '../../domain/allExamples';
import { httpTypes } from './httpExample';
import { InMemoryAllExamples } from '../persistence/inMemoryAllExamples';
import { CreateExample } from '../../application/createExample';

const httpContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<AllExamples>(httpTypes.allExamples).to(InMemoryAllExamples);
  bind<CreateExample>(httpTypes.createExample).to(CreateExample);
});

export {
  httpContainer,
};
