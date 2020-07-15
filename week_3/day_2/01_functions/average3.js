let average3 = (firstNum, secondNum, thirdNum) => {
  return (firstNum + secondNum + thirdNum) / 3;
};

console.log(
  average3(1, 2, 3) // 2
);

// let average3 = (...nums) => nums.reduce((acc, cur) => acc + cur) / nums.length;
