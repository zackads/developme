// Create a function, lowest, that takes an array of numbers.
// Using .reduce() return the smallest number.
// Hint: don't try and use .sort() - it won't do what you think

let isLower = (a, b) => a < b;

let lowest = (nums) => {
  return nums.reduce((acc, cur) => (isLower(acc, cur) ? acc : cur));
};

console.log(
  lowest([2, 4, 6, 4, 7, 5]), // 2
  lowest([-2, 4, 6, 4, -7, 5]), // -7
  lowest([-2, -4, -11, -4, -7, -5]) // -11
);
