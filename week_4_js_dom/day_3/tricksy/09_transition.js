((d, w) => {
  const setColour = () => {
    let curYPosition = w.pageYOffset;
    let pageHeight = d.body.offsetHeight - window.innerHeight;

    let colour = (curYPosition / pageHeight) * 360;
    d.body.style.backgroundColor = `hsl(${colour}, 50%, 50%)`;
  };

  w.addEventListener("scroll", setColour);

  setColour();
})(document, window);
