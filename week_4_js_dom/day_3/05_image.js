((d, window) => {
  let kitten = d.getElementById("image");
  let reset = d.getElementById("reset");

  kitten.addEventListener("click", () => {
    let h = kitten.clientHeight;
    let w = kitten.clientWidth;
    kitten.style.height = h * 2 + "px";
    kitten.style.width = w * 2 + "px";
  });

  reset.addEventListener("click", () => {
    kitten.style.height = "100%";
    kitten.style.width = "auto";
  });
})(document, window);
