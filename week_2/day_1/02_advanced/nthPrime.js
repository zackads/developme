let isDivisibleBy = (a, b) => {
  return a % b === 0;
};

let isPrime = (num) => {
  const sqrt = Math.sqrt(num);
  if (num === 1) {
    return false;
  } else {
    for (let i = 2; i <= sqrt; i += 1) {
      if (isDivisibleBy(num, i)) {
        return false;
      }
    }
    return true;
  }
};

let nthPrime = (num) => {
  let primeCounter = 0;
  let i = 1;
  while (primeCounter <= num) {
    if (isPrime(i)) {
      primeCounter += 1;
      if (primeCounter === num) {
        return i;
      }
    }
    i++;
  }
};

console.log(
  nthPrime(1), // 2
  nthPrime(2), // 3
  nthPrime(10), // 29
  nthPrime(100), // 541
  nthPrime(1000) // 7919
);
