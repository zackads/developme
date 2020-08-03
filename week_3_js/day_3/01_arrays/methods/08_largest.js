// Create a function, largest, that takes an array of numbers.
// Using .reduce() return the largest number.

// Hint: don't try and use .sort() (it won't do what you think) or Math.max() (that's cheating)

let isGreater = (a, b) => a > b;

let largest = (nums) =>
  nums.reduce((acc, cur) => (isGreater(acc, cur) ? acc : cur));

console.log(
  largest([2, 4, 6, 4, 7, 5]), // 7
  largest([-2, 4, 6, 4, -7, 5]), // 6
  largest([-2, -4, -6, -4, -7, -5]) // -2
);
