import { injectable } from 'inversify';
import { AllExamples } from '../../domain/allExamples';
import { Example } from '../../domain/example';

@injectable()
export class InMemoryAllExamples implements AllExamples {
  private readonly examples: Example[] = [];

  save(example: Example): void {
    this.examples.push(example);
  }
}
