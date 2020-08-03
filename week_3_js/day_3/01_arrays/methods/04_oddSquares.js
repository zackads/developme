let isOdd = (n) => n % 2 !== 0;

let square = (n) => n * n;

let oddSquares = (nums) => {
  return nums.filter(isOdd).map(square);
};

console.log(
  oddSquares([2, 3, 4, 5, 6, 7]), // [9, 25, 49]
  oddSquares([2, 3, 4]) // [9]
);
