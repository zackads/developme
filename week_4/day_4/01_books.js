((d, w) => {
  const main = d.getElementsByTagName("main")[0];
  const output = d.createElement("p");
  output.classList.add("well", "hidden");
  main.append(output);

  // Adding one event listener to the books <ul> and using
  // `event.target` (bubbling) to identify the <li>
  const books = d.getElementById("list");
  books.addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") {
      return;
    }

    let li = event.target;
    output.textContent = `Author: ${li.dataset.author}, Price: £${li.dataset.price}`;
    output.classList.remove("hidden");
  });

  // Adding an event listener to each <li>
  /*
      const books = Array.from(d.getElementById("list").children);  
      books.forEach((book) => {
      book.addEventListener("click", () => {
        const author = book.dataset.author;
        const price = book.dataset.price;

        output.textContent = `Author: ${author}, Price: £${price}`;
        output.classList.remove("hidden");
      });
    }); */
})(document, window);
