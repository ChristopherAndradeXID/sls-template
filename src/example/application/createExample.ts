import { Service } from 'typedi';
import { Example } from '../domain/example';
import { InMemoryAllExamples } from '../infrastructure/persistence/inMemoryAllExamples';

@Service()
export class CreateExample {
  constructor(private readonly allExamples: InMemoryAllExamples) {
  }

  public run(example: Example) {
    console.log(this.allExamples.save);
    this.allExamples.save(example);
  }
}
