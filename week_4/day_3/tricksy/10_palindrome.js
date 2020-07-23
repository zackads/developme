((d, w) => {
  // Elements to interact with
  const input = d.getElementById("text");
  const button = d.getElementById("button");
  const output = d.getElementById("answer");

  // Messages
  const messages = {
    isPalindrome: "Palindrome!",
    notPalindrome: "Not a palindrome :(",
  };

  // Helper function
  let isPalindrome = (word) => Array.from(word).reverse().join("") === word;

  // Driver code
  button.addEventListener("click", () => {
    isPalindrome(input.value)
      ? (output.textContent = messages.isPalindrome)
      : (output.textContent = messages.notPalindrome);
  });
})(document, window);
