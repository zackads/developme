let skip = (skip, max) => {
  let sum = 0;
  for (let i = 1; i <= max; i++) {
    sum += i % skip === 0 ? 0 : i;
  }
  return sum;
};

console.log(
  skip(4, 20) // 1 + 2 + 3 + 5 + 6 + 7 + 9 + 10 + 11 + 13 + 14 + 15 + 17 + 18 + 19 = 150
);
