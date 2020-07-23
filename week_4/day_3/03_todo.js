((d, w) => {
  const button = d.getElementById("add");
  const input = d.getElementById("todo");
  const list = d.getElementById("list");

  button.addEventListener("click", () => {
    li = d.createElement("li");
    li.textContent = input.value;
    li.classList.add("list-group-item");

    list.prepend(li);

    input.value = input.defaultValue;
  });
})(document, window);
