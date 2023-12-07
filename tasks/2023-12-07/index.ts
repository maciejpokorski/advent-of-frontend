type ChangeTracker = (key: string, value: any) => void;
type Letter = { [key: string]: number };

export function createTrackedLetter(letter: Letter, changeTracker: ChangeTracker): Letter {
  return new Proxy(letter, {
    set(target, key, value) {
      changeTracker(key as string, value);
      target[key as string] = value;
      return true;
    },
  });
}