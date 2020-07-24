((d, w) => {
  let main = d.getElementById("main");
  main.addEventListener("click", (e) => {
    let clicked = e.target;
    if (clicked.tagName === "BUTTON") {
      main.append(clicked.cloneNode(true));
    }
  });
})(document, window);
