// Create a function, palindrome, that take a string as an argument.
// Return true if the given string is a palindrome (i.e. the same forwards as backwards).

// Hint: you turn a string into an array using Array.from(str) and back again using arr.join("")

let palindrome = (str) => Array.from(str).reverse().join("") === str;

console.log(palindrome("fish")); // false
console.log(palindrome("madam")); // true
console.log(palindrome("bolton")); // false
console.log(palindrome("minim")); // true
