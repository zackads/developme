function fizzbuzz() {
  let fizz = 3;
  let buzz = 5;

  for (let i = 1; i <= 100; i++) {
    if (i % fizz === 0 && i % buzz === 0) {
      console.log("FizzBuzz");
    } else if (i % fizz === 0) {
      console.log("Fizz");
    } else if (i % buzz === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();
