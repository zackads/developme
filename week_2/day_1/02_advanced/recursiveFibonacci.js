// fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)

let fibonacci = (num) => {
  if (num === 1 || num === 2) {
    // console.log("Hit the bass case.  BOOM BOOM BOOM WUMP WUMP.");
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
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
