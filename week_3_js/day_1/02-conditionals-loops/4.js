/* Write some code that outputs any even numbers between 1 and 50 
that are also divisible by 3 */

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(i);
  }
}
