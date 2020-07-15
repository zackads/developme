let odd = (number) => number % 2 !== 0;
let even = (number) => !odd(number);

console.log(even(1)); // false
console.log(even(2)); // true
