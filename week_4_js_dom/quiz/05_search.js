((d, w) => {
  const links = d.getElementById("links");
  const output = d.getElementById("output");

  links.addEventListener("click", (e) => {
    e.preventDefault();

    let clicked = e.target;

    output.textContent = clicked.textContent;
  });
})(document, window);
