((d, window) => {
  let kitten = d.getElementById("image");
  let h = kitten.clientHeight;
  let w = kitten.clientWidth;
  kitten.style.height = h * 2 + "px";
  kitten.style.width = w * 2 + "px";

  console.log(h);
})(document, window);
