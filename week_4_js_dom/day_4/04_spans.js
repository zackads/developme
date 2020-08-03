// Using spans.html. Use event delegation to efficiently handle click events
// on the spans. When a <span> is clicked, it's background colour should change
// to green. For bonus points, if it is clicked again, it should change back to
// white.

// Note: Remember, you should use state variables to track changes, rather
// than asking the DOM

((d, w) => {
  let pixels = d.getElementById("pixels");
  let highlighted = [];

  let toggleColor = (element) => {
    let index = highlighted.indexOf(element);
    if (index === -1) {
      element.style.backgroundColor = "green";
      highlighted.push(element);
    } else {
      element.style.backgroundColor = "white";
      highlighted.splice(index, 1);
    }
  };

  pixels.addEventListener("click", (e) => {
    if (e.target.tagName === "span") {
      toggleColor(e.target);
    }
  });
})(document, window);
