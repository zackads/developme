// Write a function, multiply that takes two positive integers and multiplies them together... however, you aren't allowed to use * or / or Math:

let multiply = (x, y) => {
  let product = 0;
  for (let i = 0; i < y; i++) {
    product += x;
  }
  return product;
};

let result = multiply(5, 0);
console.log("Expected: 0, Actual: " + result);

result = multiply(5, 3);
console.log("Expected: 15, Actual: " + result);

result = multiply(9, 6);
console.log("Expected: 54, Actual: " + result);

result = multiply(17, 8);
console.log("Expected: 136, Actual: " + result);

result = multiply(16, 8);
console.log("Expected: 128, Actual: " + result);
