// Create a function, daysSince, that you pass a date. It should tell you how many days have passed since that date:

let daysSince = (date) => {
  let now = new Date();
  let then = new Date(date);
  let msInADay = 8.64e7;

  return Math.floor((now - then) / msInADay);
};

console.log(
  daysSince("1984-04-16") // 13 thousand and something
  // why not try *your* date of birth?
);
