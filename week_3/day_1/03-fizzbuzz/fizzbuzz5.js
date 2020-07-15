for (let i = 1; i <= 100; i++) {
  let logString = "";
  if (i % 3 === 0) logString += "Fizz";
  if (i % 5 === 0) logString += "Buzz";

  console.log(logString ? logString : i);
}
