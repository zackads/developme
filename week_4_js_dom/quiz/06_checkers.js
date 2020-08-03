((d, w) => {
  const cells = Array.from(d.getElementsByClassName("block"));

  const createBoard = (cells) => {
    const sideLength = Math.sqrt(cells.length);

    return cells.reduce((board, cell, index) => {
      let row = Math.floor(index / sideLength);
      (board[row] || (board[row] = [])).push(cell);
      if ((index + 1) % sideLength === 0) {
        row += 1;
      }
      return board;
    }, []);
  };

  const isOdd = (num) => num % 2 !== 0;

  const board = createBoard(cells);

  board.forEach((row, index) => {
    if (isOdd(index)) {
      row.forEach((cell, index) => {
        if (isOdd(index)) {
          cell.style.backgroundColor = "black";
        }
      });
    } else {
      row.forEach((cell, index) => {
        if (!isOdd(index)) {
          cell.style.backgroundColor = "black";
        }
      });
    }
  });
})(document, window);
