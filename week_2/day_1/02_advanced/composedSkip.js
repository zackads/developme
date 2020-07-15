let isFactorOf = (a, b) => a % b === 0;

let skip = (skip, max) => {
  // Are there any more functions I could get out of this?
  let sum = 0;
  for (let i = 1; i <= max; i++) {
    sum += isFactorOf(i, skip) ? 0 : i;
  }
  return sum;
};

console.log(
  skip(4, 20) // 1 + 2 + 3 + 5 + 6 + 7 + 9 + 10 + 11 + 13 + 14 + 15 + 17 + 18 + 19 = 150
);

// Thought this didn't add value so didn't use it
let sum = (a, b) => {
  return a + b;
};
