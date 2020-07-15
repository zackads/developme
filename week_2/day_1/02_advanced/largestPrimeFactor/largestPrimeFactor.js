let isFactorOf = (a, b) => {
  return a % b === 0;
};

let isPrime = (num) => {
  const sqrt = Math.sqrt(num);
  if (num === 1) {
    return false;
  } else {
    for (let i = 2; i <= sqrt; i += 1) {
      if (isFactorOf(num, i)) {
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

let largestPrimeBelowN = (n) => {
  let i = 1;
  const sqrtN = Math.sqrt(n);
  while (nthPrime(i) < sqrtN) {
    i += 1;
  }
  return nthPrime(i);
};

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

let largestPrimeFactor = (n) => {
  let prime;
  while (true) {
    prime = largestPrimeBelowN(n);
    if (isFactorOf(prime, n)) {
      return prime;
    } else {
      prime = largestPrimeBelowN(prime);
    }
  }
};

// console.log(
//   largestPrimeFactor(2), // 2
//   largestPrimeFactor(12), // 3
//   largestPrimeFactor(257), // 257
//   largestPrimeFactor(100), // 5
//   largestPrimeFactor(3556), // 127
//   largestPrimeFactor(123456789) // 3803
// );
