interface Handler {
  run(): string;
}

export class ErrorMap {
  errors = new Map<string, Function>();

  register(key: string, handler: Handler) {
    this.errors.set(key, handler.run);
  }

  execute(error: Error) {
    if (!this.errors.has(error.name)) {
      return '';
    }
    return this.errors.get(error.name);
  }
}
