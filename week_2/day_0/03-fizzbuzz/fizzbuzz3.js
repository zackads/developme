function fizzbuzz(max) {
  let condition1 = {
    condition: (i) => i % 7 === 0,
    result_if_true: "Fizz",
  };
  let condition2 = {
    condition: (i) => i % 25 === 0,
    result_if_true: "Buzz",
  };

  for (let i = 1; i <= max; i++) {
    if (condition1.condition(i) && condition2.condition(i)) {
      console.log("FizzBuzz");
    } else if (condition1.condition(i)) {
      console.log("Fizz");
    } else if (condition2.condition(i)) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(150);
