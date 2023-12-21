export class InjectionToken<T> {
  constructor(public readonly description: string) {}
}

type Factory<T> = { factory: () => T };

export class FactoryInjector {
  private dependencies: Record<string, Factory<any>> = {};

  registerClass<T>(clazz: { new (): T }): void {
    const token = clazz;
    this.dependencies[token.toString()] = {
      factory: () => new clazz(),
    };
  }

  provideValue<T>(token: InjectionToken<T>, value: T): void {
    this.dependencies[token.toString()] = {
      factory: () => value,
    };
  }

  get<T>(token: { new (): T } | InjectionToken<T>): T {
    const dependency = this.dependencies[token.toString()];

    if (!dependency) {
      throw new Error(`Dependency not registered for ${token instanceof InjectionToken ? token.description : token}`);
    }

    return dependency.factory();
  }
}