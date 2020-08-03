// Create a function, double, that takes an array of numbers as an argument.
// Using .map() return a new array containing each number doubled.

let double = (nums) => {
  return nums.map((n) => n * 2);
};

console.log(
  double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
  double([1, 2, 5]) // [2, 4, 10]
);
