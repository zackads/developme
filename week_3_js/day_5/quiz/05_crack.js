// Find the secret message by writing a function that creates a string from every 7th character of the code:

// Hint: the secret message is not gibberish

let crack = (code) => {
  let string = "";
  let codeLength = code.length;
  for (let i = 7; i < codeLength; i += 7) {
    string += code.charAt(i - 1);
  }
  return string;
};

const cracked = crack(
  "_5X4EjG4Cm9#Eo 8Dd@Cov_6kNhdk6W8_J .hZ3yTwr6JZ#qoD.74mErj7 2Wbk_wEUx8.X7.v_. D9@Hq Y3Nu.7aot5Ay.8u.Z339z T!98NrdzD@7C2iJ.jf 8d.Upf6X r7P@BSi#xN7H t!YGp8h!5_SygM"
);

console.log(cracked);
// "G" "o" "o" "d"
