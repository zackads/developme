// Create a function, squares, that takes an array of numbers as an argument.
// Using .map() return a new array containing the square of each number.

let squares = (nums) => nums.map((n) => n * n);

console.log(
  squares([2, 3, 4]), // [4, 9, 16]
  squares([2, 3, 4, 5, 6]) // [4, 9, 16, 25, 36]
);
