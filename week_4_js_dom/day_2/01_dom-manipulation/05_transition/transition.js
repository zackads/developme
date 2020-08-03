((d, window) => {
  let last = 0;
  let backgroundColour = 0;
  let loop = (time) => {
    let dt = time - last;
    last = time;
    // console.log("Total time:", time, "Time since last loop", dt);
    d.body.style.background = `hsl(${backgroundColour},100%,50%)`;
    backgroundColour += 1;

    requestAnimationFrame(loop);
  };

  loop(0);
})(document, window);
