let min = (firstNum, secondNum) =>
  firstNum < secondNum ? firstNum : secondNum;

console.log(
  min(1, 2), // 1
  min(3, -2), // -2
  min(-3, -5), // -5
  min(3, 3) // 3
);
