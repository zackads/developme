// Using items.html. Using just JavaScript, make it so that if the <main> width
//is less than 400px wide the grid is one item wide, less than 600px two items
//wide, less than 800px three items wide, etc. It should update when the window
//is resized and work for any width screen.

((d, w) => {
  // Elements
  let squares = Array.from(d.getElementById("items").children);

  // Function to render the grid
  let displayGrid = () => {
    const windowWidth = w.innerWidth;
    let squareSize = 200;
    let breakpoint = Math.ceil(windowWidth / squareSize) * squareSize;
    let columns = (breakpoint - squareSize) / squareSize;
    console.log(columns);

    let currentCol = 0;
    let currentRow = 0;
    squares.forEach((square) => {
      square.style.transform = `translate(${currentCol * squareSize}px, ${
        currentRow * squareSize
      }px)`;
      if (currentCol < columns - 1) {
        currentCol += 1;
      } else {
        currentCol = 0;
        currentRow += 1;
      }
    });
  };

  // Render grid as window width changes
  w.addEventListener("resize", () => {
    displayGrid();
  });

  displayGrid();
})(document, window);
