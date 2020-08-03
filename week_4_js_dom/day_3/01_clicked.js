((d, window) => {
  const button = d.getElementById("button");

  button.addEventListener("click", () => {
    let p = d.createElement("p");
    p.textContent = "Clicked!";

    d.getElementById("main").append(p);
  });
})(document, window);
