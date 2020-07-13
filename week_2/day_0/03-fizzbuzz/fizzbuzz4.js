function fizzbuzz() {
  const condition1 = (i) => i % 3 === 0;
  const condition2 = (i) => i % 5 === 0;

  for (let i = 1; i <= 100; i++) {
    console.log(
      condition1(i) && condition2(i)
        ? "FizzBuzz"
        : condition1(i)
        ? "Fizz"
        : condition2(i)
        ? "Buzz"
        : i
    );
  }
}

fizzbuzz();
