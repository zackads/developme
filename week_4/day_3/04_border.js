((d) => {
  let element = d.getElementById("border");

  let colour = "blue";
  element.addEventListener(
    "click",
    () =>
      (colour = element.style.borderColor = colour === "blue" ? "red" : "blue")
  );
})(document);
