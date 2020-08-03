((d, window) => {
  let grid = d.createDocumentFragment();
  let sideLength = 64;
  let squareSize = 10;
  let squareCount = sideLength * sideLength;

  let [red, green, blue] = [0, 0, 127];
  let colourIncrement = Math.ceil(255 / sideLength);

  let currentCol = 0;
  let currentRow = 0;
  for (let i = 1; i < squareCount; i += 1) {
    let square = d.createElement("span");
    square.style.position = "absolute";
    square.style.transform = `translateX(${currentCol}px) translateY(${currentRow}px)`;
    square.style.height = square.style.width = squareSize + "px";
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    grid.append(square);

    if (currentRow < sideLength * squareSize) {
      currentRow += squareSize;
      green += colourIncrement;
    } else {
      currentRow = 0;
      currentCol += squareSize;
      green = 0;
      red += Math.ceil(255 / sideLength);
    }
  }

  d.getElementById("grid").append(grid);
})(document, window);
