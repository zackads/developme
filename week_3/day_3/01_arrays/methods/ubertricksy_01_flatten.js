// Create a function, flatten, that takes an array containing a mix of values and arrays.
// It should return an array containing all the values from all the arrays.
// It should cope with arrays containing other arrays to any level.
// Don't use the .flat() or .flatMap() array methods
// Hint: you can use Array.isArray(val) to check if a value is an array or not... and you might need recursion

// let flatten = (arr) => {
//   let flatArray = [];
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       console.log("Recursing... : " + item);
//       flatArray.push(...flatten(item));
//     } else {
//       flatArray.push(item);
//       console.log("Adding to flatArray..." + item);
//     }
//   });
//   return flatArray;
// };

let flatten = (arr) =>
  arr.reduce(
    (flat, cur) => flat.concat(Array.isArray(cur) ? flatten(cur) : cur),
    []
  );

console.log(
  // ["a", "b", "c", "d", "e", "f", "g", "h"]
  flatten([
    "a",
    "b",
    ["c", "d"],
    [
      ["e", "f"],
      ["g", "h"],
    ],
  ])
);
