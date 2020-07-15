let odds = (values) => {
  let odds = [];
  let valuesLength = values.length;
  for (let i = 0; i < valuesLength; i += 1) {
    current = values[i];
    if (isOdd(current)) {
      odds.push(current);
    }
  }
  return odds;
};

let isOdd = (num) => num % 2 !== 0;

// Zack's unit tests
console.log(isOdd(3)); // True
console.log(isOdd(1)); // True
console.log(isOdd(4)); // False
console.log(isOdd(0)); // False

console.log(
  odds([1, 2, 3]), // [1, 3]
  odds([1, 2, 3, 4, 5, 6]) // [1, 3, 5]
);
