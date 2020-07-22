((d, window) => {
  const ulElem = d.createElement("ul");
  let mainElem = d.getElementById("alphabet");

  const fragment = d.createDocumentFragment();

  for (let i = 65; i < 91; i += 1) {
    const li = d.createElement("li");
    li.textContent = String.fromCharCode(i);

    ul.append(li);
  }

  fragment.append(ul);
  mainElem.append(fragment);
})(document, window);
