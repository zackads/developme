((d, w) => {
  let ul = d.getElementById("animals");

  const animals = [
    "Cat",
    "Lion",
    "Leopard",
    "Panther",
    "Tiger",
    "Tigress",
    "Lioness",
  ];

  animals.forEach((animal) => {
    let li = d.createElement("li");
    li.innerText = animal;
    li.classList.add("list-group-item");

    ul.appendChild(li);
  });

  ul.addEventListener("click", (e) => ul.prepend(e.target));
})(document, window);
