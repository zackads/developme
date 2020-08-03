// Using JavaScript, add a class of list-group-item to each item in the list in list.html.

((d) => {
  let listItems = Array.from(d.getElementById("list").children);
  console.log(listItems);
  listItems.forEach((li) => li.classList.add("list-group-item"));
})(document);
