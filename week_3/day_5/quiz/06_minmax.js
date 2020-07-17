// Write a function, minmax, that takes an array of numbers and returns the smallest value plus the largest value in the array. Don't use .sort():

let max = (a, b) => (a > b ? a : b);
let min = (a, b) => (a < b ? a : b);

// Recursive array destructuring.  Similar to `max(max(max(max(a, b), c), d) ...)`
// let maxN = (arr) => {
//   const [head, ...tail] = arr;
//   return arr.length === 1 ? head : max(head, maxN(tail));
// };

// let minN = (arr) => {
//   const [head, ...tail] = arr;
//   return arr.length === 1 ? head : min(head, minN(tail));
// };

// let minmax = (values) => minN(values) + maxN(values);

// .reduce()
let minmax = (values) => values.reduce(max) + values.reduce(min);

let result = minmax([4, 5, 1, 7, 12]); // should work out 1 + 12
console.log("Expected: 13, Actual: " + result);

result = minmax([8, -3, 7, 17, 28]); // should work out -3 + 28
console.log("Expected: 25, Actual: " + result);

result = minmax([-8, -3, -7, -17, -28]); // should work out -3 + -28
console.log("Expected: -31, Actual: " + result);

result = minmax([4]); // should work out 4 + 4
console.log("Expected: 8, Actual: " + result);
