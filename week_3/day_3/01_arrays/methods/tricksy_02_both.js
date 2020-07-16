// Create a function, both, that takes two arrays. Return a new array containing any value that is in both arrays.

// Try doing it with .indexOf()
// Try doing it without .indexOf()

let isInArr1 = (arr, val) => arr.indexOf(val) > 0;
let isInArr2 = (arr, val) => arr.find((item) => item === val);

let both = (arrA, arrB) => arrA.filter((val) => isInArr2(arrB, val));

console.log(
  both([2, 3, 4, 5, 6], [1, 2, 5, 6]) // [2, 5, 6]
);
