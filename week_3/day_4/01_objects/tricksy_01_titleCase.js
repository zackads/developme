// Create a function, titleCase, that takes a string and converts it to title case.

// let titleCase = (string) => {
//   return string
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// };

let titleWord = (word) => word.charAt(0).toUpperCase() + word.substring(1);

let titleCase = (string) => string.split(" ").map(titleWord).join(" ");

console.log(
  titleCase("hello, my name is Jim") // "Hello, My Name Is Jim"
);

// Zack's tests
console.log(
  titleCase("testing the poo emoji 💩") // "Testing The Poo Emoji 💩 "
);
