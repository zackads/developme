function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let printString = "";
    if (i % 3 === 0) printString += "Fizz";
    if (i % 5 === 0) printString += "Buzz";

    printString.length === 0 ? console.log(i) : console.log(printString);
  }
}

fizzbuzz();
