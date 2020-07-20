// Create a function called frequency that takes a string as an argument.
// It should return an object where each key represents a letter that appears in the string and the value is how many times that letter appears.
// It doesn't need to count spaces and it should ignore whether the letter is uppercase or lowercase.

// let frequency = (string) =>
//   Array.from(string.toLowerCase()) // Important to use `Array.from` rather than split to include letters taking up two or more char spaces
//     .sort()
//     .filter((char) => char !== " ")
//     .reduce((counts, char) => {
//       char in counts ? counts[char]++ : (counts[char] = 1);
//       return counts;
//     }, {});

let frequency = (string) =>
  Array.from(string.toLowerCase()) // Important to use `Array.from` rather than split to include letters taking up two or more char spaces
    .sort()
    .filter((char) => char !== " ")
    .reduce((counts, char) => {
      char in counts ? counts[char]++ : (counts[char] = 1);
      return counts;
    }, {});

console.log(frequency("The quick brown fox jumps over the lazy dog"));

/*
    {
        a: 1, b: 1, c: 1, d: 1, e: 3, f: 1, g: 1, h: 2, i: 1, j: 1, k: 1, l: 1, m: 1,
        n: 1, o: 4, p: 1, q: 1, r: 2, s: 1, t: 2, u: 2, v: 1, w: 1, x: 1, y: 1, z: 1
    }
*/

console.log(frequency("Wkh sdvvzrug lv vhyhq grqw whoo dqbrqh"));

/*
    {
        b: 1, d: 2, g: 2, h: 5, k: 1, l: 1, o: 2,
        q: 4, r: 3, s: 1, u: 1, v: 4, w: 3, y: 1, z: 1
    }
*/
