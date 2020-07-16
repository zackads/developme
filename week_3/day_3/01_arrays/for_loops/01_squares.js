let squares = (values) => {
  let squares = [];
  for (let i = 0; i < values.length; i += 1) {
    squares.push(Math.pow(values[i], 2));
  }
  return squares;
};

console.log(
  squares([2, 3, 4]), // [4, 9, 16]
  squares([2, 3, 4, 5, 6]) // [4, 9, 16, 25, 36]
);
