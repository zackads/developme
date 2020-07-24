((d, w) => {
  let display = d.getElementById("picker");

  let sliders = [
    d.getElementById("red"),
    d.getElementById("green"),
    d.getElementById("blue"),
  ];

  const setColor = (sliders) => {
    display.style.backgroundColor = `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`;
  };

  sliders.forEach((slider) => {
    slider.addEventListener("input", () => {
      setColor(sliders);
    });
  });

  setColor(sliders);
})(document, window);
