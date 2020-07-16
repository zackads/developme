// Create a function, sortNumbers, that takes an array of numbers.
// Return an array so that the values are ordered numerically.

// Hint: look at the documentation for the the array sort() method

let sortNumbers = (nums) => nums.sort((a, b) => a - b);

console.log(
  sortNumbers([1, 11, 3, 4, 34, 58, 9, 7]) // [1, 3, 4, 7, 9, 11, 34, 58]
);
