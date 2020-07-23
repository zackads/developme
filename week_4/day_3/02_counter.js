((d, window) => {
  const button = d.getElementById("button");

  let clickCounter = 0;
  button.addEventListener("click", () => {
    d.getElementById("counter").textContent = clickCounter += 1;
  });
})(document, window);
