// Using rhubarb.html. With JavaScript, add 100 paragraphs to the <main>
// that all say "Rhubarb".

((d, window) => {
  let main = d.getElementById("rhubarbs");

  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= 100; i += 1) {
    let p = document.createElement("p");
    p.textContent = "Rhubarb";

    fragment.append(p);
  }

  main.append(fragment);
})(document, window);
