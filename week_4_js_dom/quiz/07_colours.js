((d, w) => {
  const colours = ["#C14412", "#EBB31A", "#8F5318", "#009EAD", "#395967"];
  const box = d.getElementById("box");
  let i = 0;

  w.addEventListener("load", () => {
    box.style.backgroundColor = colours[i];
  });

  box.addEventListener("click", () => {
    i += 1;
    box.style.backgroundColor = colours[i % colours.length];
  });
})(document, window);
