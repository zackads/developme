((d, window) => {
  let strings = [
    "katastichophobia",
    "rhabdophobia",
    "eisoptrophobia",
    "papaphobia",
    "hypegiaphobia",
    "odontophobia",
    "ergophobia",
    "pteronophobia",
    "taphephobia",
    "apiphobia",
  ];
  let letters = {};

  strings.forEach((word) => {
    if (letters.hasOwnProperty(word[0].toUpperCase())) {
      letters[word[0].toUpperCase()].push(word);
    } else {
      letters[word[0].toUpperCase()] = [word];
    }
  });

  let ul = d.createElement("ul");

  for (const [letter, words] of Object.entries(letters)) {
    let letterLi = d.createElement("li");
    letterLi.append(letter);

    let wordsUl = d.createElement("ul");
    for (word of words) {
      let wordLi = d.createElement("li");
      wordLi.append(word);
      wordsUl.append(wordLi);
    }

    letterLi.append(wordsUl);
    ul.append(letterLi);
  }

  d.getElementById("phobias").append(ul);
})(document, window);
