let odds = (values) => {
  return values.filter((n) => n % 2 !== 0);
};

console.log(
  odds([1, 2, 3]), // [1, 3]
  odds([1, 2, 3, 4, 5, 6]) // [1, 3, 5]
);
