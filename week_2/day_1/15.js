// let max = (firstNum, secondNum) => {
//   return Math.max(firstNum, secondNum);
// };

let max = (firstNum, secondNum) => {
  return firstNum > secondNum ? firstNum : secondNum;
};

console.log(
  max(1, 2), // 2
  max(3, -2), // 3
  max(-3, -5), // -3
  max(3, 3) // 3
);

// Zack's tests
console.log(max(0, 0), max(-2, 0));
