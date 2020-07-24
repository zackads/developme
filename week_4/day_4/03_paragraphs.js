((d, w) => {
  // State variable
  let selected = [];

  // Elements
  let main = d.getElementById("main");
  let removeBtn = d.getElementById("remove");

  // "select" event
  main.addEventListener("click", (e) => {
    let clicked = e.target;

    if (clicked.matches("p")) {
      if (selected.includes(clicked)) {
        clicked.classList.remove("selected");
        selected = selected.filter((item) => item !== clicked);
      } else {
        clicked.classList.add("selected");
        selected.push(clicked);
      }
    }
  });

  // "remove" event
  removeBtn.addEventListener("click", () => {
    selected.forEach((paragraph) => {
      paragraph.remove();
    });
    selected = [];
  });
})(document, window);
