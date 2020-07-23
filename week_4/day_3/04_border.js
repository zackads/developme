((d) => {
  let element = d.getElementById("border");

  let colour = "blue";
  element.addEventListener("click", () => {
    let newColour = colour === "blue" ? "red" : "blue";
    element.style.borderColor = newColour;
    colour = newColour;
  });
})(document);
