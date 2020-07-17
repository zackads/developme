// Write function that translates a string to Pig Latin. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
let pigLatinToken = (token) =>
  `${token.substring(1)}${token.charAt(0)}ay`.toLowerCase();

let tokenize = (str) => str.split(" ");

let pigLatin = (str) => tokenize(str).map(pigLatinToken).join(" ");

let result = pigLatin("The quick brown fox");
console.log("Expected: hetay uickqay rownbay oxfay, Actual: " + result);

result = pigLatin("The secret plans are in the bunker");
console.log(
  "Expected: hetay ecretsay lanspay reaay niay hetay unkerbay, Actual: " +
    result
);

result = pigLatin("How now brown cow"); // true
console.log("Expected: owhay ownay rownbay owcay, Actual: " + result);
