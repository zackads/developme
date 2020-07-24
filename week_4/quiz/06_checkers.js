((d, w) => {
  const blocks = Array.from(d.getElementsByClassName("block"));

  const isOdd = (num) => num % 2 !== 0;
  blocks.forEach((block, index) => {
    if (isOdd(index - 1)) {
      block.style.backgroundColor = "black";
    }
  });
})(document, window);
