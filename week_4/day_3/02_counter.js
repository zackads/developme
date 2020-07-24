((d, window) => {
  const button = d.getElementById("button");
  const counter = d.getElementById("counter");

  let clickCounter = 0;
  button.addEventListener("click", () => {
    clickCounter += 1;
    counter.textContent = clickCounter;
  });
})(document, window);
