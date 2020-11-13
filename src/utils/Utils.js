export function getResult(initialNumber, steps) {
  return steps.reduce((result, nextValue) => {
    const sum = result + nextValue;
    if (sum % 3 === 0) {
      return sum / 3;
    }
    return sum;
  }, initialNumber);
}
