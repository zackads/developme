// Create a function, reverse, that takes an array of strings.
// Return a new array where each string is reversed.

// Hint: arrays have a reverse() method and you can turn a string into an array of letters using Array.from(str) and turn it back into a string using arr.join("")

let reverseString = (string) => Array.from(string).reverse().join("");

let reverse = (strings) => strings.map((string) => reverseString(string));

console.log(
  reverse(["fish", "bolton", "green"]) // ["hsif", "notlob", "neerg"]
);
