((d) => {
  const table = d.getElementById("table");
  const rows = Array.from(table.children[0].children);

  for (let i = 0; i < rows.length - 1; i += 2) {
    rows[i].classList.add("alternate");
  }
})(document);
