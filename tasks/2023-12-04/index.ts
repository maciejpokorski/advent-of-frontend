export function memoize(complexCalculation: (input: any) => any) {
  if (typeof complexCalculation !== 'function'){
    throw "Function to be memoized must be a function.";
  }

  const cache: Record<string, any> = {};

  return function (input: any) {
    const key = JSON.stringify(input);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = complexCalculation(input);
      cache[key] = result;
      return result;
    }
  };
}