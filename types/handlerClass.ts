export type HandlerClass<I, Args extends any[] = any[]> = new(...args: Args) => I;
