((d, w) => {
  let button = d.getElementById("button");
  let counter = 50;
  button.addEventListener("click", () => {
    button.style.transform = `translateY(${counter}px)`;
    counter += 50;
  });
})(document, window);
