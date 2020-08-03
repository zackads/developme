// Write a function, longest, that takes an array of strings and returns the longest string:

let longest = (words) =>
  words.reduce((longestWord, currentWord) =>
    longestWord.length > currentWord.length ? longestWord : currentWord
  );

let result = longest(["cow", "wombat", "aardvark"]);
console.log("Expected: aardvark, Actual: " + result);

result = longest(["fish", "fishiest", "fishier"]);
console.log("Expected: fishiest, Actual: " + result);
