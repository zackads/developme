((d, w) => {
  // Elements
  const input = d.getElementById("number");
  const button = d.getElementById("button");
  const output = d.getElementById("output");

  // State
  let sum = 0;

  // Event
  button.addEventListener("click", (e) => {
    e.preventDefault();

    sum += Number(input.value);
    output.textContent = sum;
  });
})(document, window);
