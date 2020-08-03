((d, w) => {
  let width = d.getElementById("width");
  let height = d.getElementById("height");

  let update = () => {
    width.textContent = w.innerWidth;
    height.textContent = w.innerHeight;
  };

  w.addEventListener("resize", update);

  update();
})(document, window);
