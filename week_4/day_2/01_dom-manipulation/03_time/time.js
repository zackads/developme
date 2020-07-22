((d, window) => {
  let outputCurrentTime = () => {
    let timePara = d.getElementById("time");

    let currentTime = new Date(Date.now());

    let hours =
      (currentTime.getUTCHours() < 10
        ? "0" + currentTime.getUTCHours()
        : currentTime.getUTCHours()) + 1;
    let minutes =
      currentTime.getUTCMinutes() < 10
        ? "0" + currentTime.getUTCMinutes()
        : currentTime.getUTCMinutes();
    let seconds =
      currentTime.getUTCSeconds() < 10
        ? "0" + currentTime.getUTCSeconds()
        : currentTime.getUTCSeconds();

    timePara.textContent = hours + ":" + minutes + ":" + seconds;
  };

  setInterval(outputCurrentTime, 100);

  outputCurrentTime();
})(document, window);
