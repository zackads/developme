function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let condition1 = i % 3 === 0;
    let condition2 = i % 5 === 0;

    if (condition1 && condition2) {
      console.log("FizzBuzz");
    } else if (condition1) {
      console.log("Fizz");
    } else if (condition2) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();
