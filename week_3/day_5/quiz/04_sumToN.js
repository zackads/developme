// Write a function that takes a number, n, as an argument. Return the sum of all values from 1 to n.

// Range function version.  Creates huge array at larges values of N, resulting in heap overflow for N = 123456789 test
/*
let range = (x, y) => {
  let arr = [];
  for (let i = x; i <= y; i += 1) {
    arr.push(i);
  }
  return arr;
};

let sumToN = (n) => range(1, n).reduce((a, b) => a + b);
*/

let sumToN = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

let result = sumToN(4);
console.log("Expected: 10, Actual: " + result);

result = sumToN(100);
console.log("Expected: 5050, Actual: " + result);

result = sumToN(123456789);
console.log("Expected: 7620789436823655, Actual: " + result);
