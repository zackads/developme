// Create a function, oddSquares, that takes an array of numbers as an argument.
// Return a new array containing the squares of each number, but only if the square is odd.

let square = (n) => n * n;

let isOdd = (n) => n % 2 !== 0;

let oddSquares = (nums) => {
  const count = nums.length;
  const squares = [];
  for (let i = 0; i < count; i += 1) {
    if (isOdd(nums[i])) {
      squares.push(square(nums[i]));
    }
  }
  return squares;
};

console.log(
  oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
  oddSquares([2, 3, 4]) // [9]
);
