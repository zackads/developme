((d) => {
  const items = Array.from(d.getElementById("items").children);
  let maxCols = Math.floor(Math.sqrt(items.length));

  let currentCol = 1;
  let currentRow = 1;
  items.forEach((div) => {
    div.classList.add(`col-${currentCol}`, `row-${currentRow}`);

    if (currentCol < maxCols) {
      currentCol += 1;
    } else {
      currentRow += 1;
      currentCol = 1;
    }
  });
})(document);
