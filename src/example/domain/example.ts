import { ExampleName } from './valueObject/exampleName';

export class Example {
  private constructor(public readonly name: ExampleName) {
  }

  public static create(name: ExampleName) {
    return new Example(name);
  }

  public static fromPrimitives(name: string) {
    return new Example(new ExampleName(name));
  }
}
