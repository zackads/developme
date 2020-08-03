// Create a function, sumBoth, that takes two arrays of numbers as arguments.
// Using .reduce() return the sum of all the numbers from both arrays.

let sum = (a, b) => a + b;

let sumBoth = (numsA, numsB) => sum(numsA.reduce(sum), numsB.reduce(sum));

console.log(
  sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
  sumBoth([2, 3, 4, 5, 6], [5, 10, 12]) // 47
);
