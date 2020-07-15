let times2 = (num) => num * 2;
let add4 = (num) => num + 4;
let divideBy6 = (num) => num / 6;

let silly = (num) => divideBy6(add4(times2(num)));

console.log(
  silly(10), // 4
  silly(22) // 8
);
