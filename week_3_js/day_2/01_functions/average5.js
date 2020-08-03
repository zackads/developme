let average5 = (...nums) => nums.reduce((acc, cur) => acc + cur) / nums.length;

console.log(
  average5(1, 2, 3, 4, 5) // 3
);
