((d, w) => {
  let display = d.getElementById("picker");

  let sliders = [
    d.getElementById("red"),
    d.getElementById("green"),
    d.getElementById("blue"),
  ];

  sliders.forEach((slider) => {
    slider.addEventListener("input", () => {
      display.style.backgroundColor = `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`;
    });
  });
})(document, window);
