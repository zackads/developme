((d, window) => {
  const items = Array.from(d.getElementById("items").children);
  let sideLength = Math.floor(Math.sqrt(items.length) * 50) - 50;

  let currentCol = 0;
  let currentRow = 0;
  items.forEach((div) => {
    div.style = `transform: translate(${currentCol}px, ${currentRow}px`;

    if (currentCol < sideLength) {
      currentCol += 50;
    } else {
      currentRow += 50;
      currentCol = 0;
    }
  });
})(document, window);
