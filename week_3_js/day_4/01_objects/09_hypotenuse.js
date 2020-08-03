// Create a function, hypotenuse, that takes two numbers representing the "leg" sides of a right-angled triangle. Return the length of the hypotenuse. (ES6 added a Math.hypot() method, but try doing it without.)

// Hint: Pythagoras' Theorem

// h^2 = a^2 + b ^2
// h = sqrt(a^2 + b^2)
let hypotenuse = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(
  hypotenuse(3, 4) // 5
);
