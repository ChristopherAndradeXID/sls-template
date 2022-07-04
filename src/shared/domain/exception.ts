export abstract class Exception extends Error {
  protected constructor(
    public readonly message: string,
  ) {
    super(message);
  }
}
