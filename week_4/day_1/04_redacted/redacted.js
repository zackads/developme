((d) => {
  let main = d.getElementById("main");

  let paras = Array.from(main.children);
  paras.forEach((para) => {
    if (para.innerText.search("secret moon base") !== -1) {
      para.classList.add("redacted");
    }
  });
})(document);
