((d, window) => {
  // <button id="button" class="btn btn-primary">Click!</button>

  const button = d.getElementById("button");

  button.addEventListener("click", () => {
    let p = d.createElement("p");
    p.textContent = "Clicked!";

    d.getElementById("main").append(p);
  });
})(document, window);
