// Create a function, average, that takes an array of numbers as an argument.
// Return the average value of all the numbers.

let average = (nums) => {
  let sum = 0;
  let count = nums.length;
  for (let i = 0; i < count; i += 1) {
    sum += nums[i];
  }
  return sum / count;
};

console.log(
  average([2, 3, 4, 5, 6]), // 4
  average([2, 3]), // 2.5
  average([10, 30]), // 20
  average([-4, -8, -9]) // -7
);
