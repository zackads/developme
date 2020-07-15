let fibonacci = (num) => {
  if (num === 1 || num === 2) {
    return 1;
  } else {
    let fibNLess2 = 1;
    let fibNLess1 = 1;
    let fibN;
    for (let i = 3; i <= num; i++) {
      fibN = fibNLess2 + fibNLess1;
      fibNLess2 = fibNLess1;
      fibNLess1 = fibN;
    }
    return fibN;
  }
};

console.time();
fibonacci(100);
console.timeEnd();

// console.log(
//   fibonacci(1), // 1
//   fibonacci(2), // 1
//   fibonacci(3), // 2
//   fibonacci(4), // 3
//   fibonacci(5), // 5
//   fibonacci(6), // 8
//   fibonacci(10) // 55
// );
