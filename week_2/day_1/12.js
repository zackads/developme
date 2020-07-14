let divisibleBy3 = (num) => num % 3 === 0 && num !== 0;

console.log(divisibleBy3(3)); // true
console.log(divisibleBy3(4)); // false

// Zack's tests
console.log(divisibleBy3(0)); // false
console.log(divisibleBy3(-3)); // true
console.log(divisibleBy3(-4)); // false
