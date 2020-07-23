// Using store.html. When the "Store" button is pressed,
// the input field should be cleared and its value stored.
// When the "Display" button is pressed all previously submitted
// values should appear in alphabetical order as a list underneath
// (each <li> should have a class of list-group-item).
// Nothing should be displayed until the "Display" button is pressed.
// This should work for any number of text submissions.

((d, w) => {
  // Elements to interact with
  const input = d.getElementById("input");
  const storeBtn = d.getElementById("store");
  const displayBtn = d.getElementById("display");
  const displayList = d.getElementById("list");

  // State
  let values = [];

  // When storeBtn is clicked
  storeBtn.addEventListener("click", () => {
    values.push(input.value); // Add to state variable
    input.value = input.defaultValue; // Reset to default
    values.sort(); // Sort state variable
  });

  // When displayBtn is clicked
  displayBtn.addEventListener("click", () => {
    const fragment = d.createDocumentFragment();

    values.forEach((value) => {
      const li = d.createElement("li");
      li.textContent = value;
      li.classList.add("list-group-item");
      console.log(li);
      fragment.append(li);
    });

    displayList.append(fragment);
    values = [];
  });
})(document, window);
