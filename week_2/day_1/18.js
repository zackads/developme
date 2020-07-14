let wow = (n) => {
  let oStr = "";
  for (let i = 0; i < n; i += 1) {
    oStr += "o";
  }
  return "W" + oStr + "w";
};

console.log(wow(12)); // "Woooooooooooow"
console.log(wow(4)); // "Woooow"

// Zack's tests
console.log(wow(0)); // "Ww"
console.log(wow(1)); // "Wow"
console.log(wow(-1)); // "Ww"
