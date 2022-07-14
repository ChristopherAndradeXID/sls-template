import { inject, injectable } from 'inversify';
import { Example } from '../domain/example';
import { httpTypes } from '../infrastructure/di/httpExample';
import { AllExamples } from '../domain/allExamples';

@injectable()
export class CreateExample {
  constructor(@inject(httpTypes.allExamples) private readonly allExamples: AllExamples) {
  }

  public run(example: Example) {
    console.log(this.allExamples.save);
    this.allExamples.save(example);
  }
}
