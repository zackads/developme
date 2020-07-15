// 1 -> 0
// 2 -> 0, 1
// 3 -> 0, 1, 1
// 4 -> 0, 1, 1, 2
// 5 -> 0, 1, 1, 2, 3
// 6 -> 0, 1, 1, 2, 3, 5
// 7 -> 0, 1, 1, 2, 3, 5, 8
// 8 -> 0, 1, 1, 2, 3, 5, 8, 13

// Recursively log fibanocci numbers up to n

let fibonacciToN = (n) => {
  if (n === 1) {
    console.log(1);
  } else {
    console.log(n + fibonacciToN(n - 1));
  }
};

console.log(fibonacciToN(100));
