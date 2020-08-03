// Create a function, timesBy, that takes an array of numbers and a number as arguments.
//Using .map() return a new array containing each number in the array multiplied by the value of the second argument.

let timesBy = (nums, multiplier) => nums.map((n) => n * multiplier);

let multiply = (a) => (b) => a * b;

let timesBy = (nums, multiplier) => nums.map(multiply(multiplier));

let six = multiply(2)(3);

console.log(
  timesBy([2, 3, 4, 5, 6], 10), // [20, 30, 40, 50, 60]
  timesBy([2, 3, 4, 5, 6], 5), // [10, 15, 20, 25, 30]
  timesBy([2, 3, 4, 5, 6], -5), // [-10, -15, -20, -25, -30]
  timesBy([-2, -3, -4, -5, -6], -5) // [10, 15, 20, 25, 30]
);
