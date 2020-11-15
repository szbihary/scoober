export function getResult(steps) {
  return steps.reduce((result, step) => {
    const sum = result + step.value;
    if (sum % 3 === 0) {
      return sum / 3;
    }
    return sum;
  }, 0);
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
