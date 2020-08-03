// Create a function, total, that takes an array of shopping item objects and adds their price together.

// Hint: numbers have a .toFixed(n) method which rounds the number to the given number of decimal places and returns a string

let total = (items) =>
  items.reduce((total, item) => total + item.price, 0).toFixed(2);

(() => {
  let shoppingList = [
    {
      name: "coffee",
      price: 3.5,
    },
    {
      name: "tea",
      price: 2.5,
    },
    {
      name: "toblerone",
      price: 3.2,
    },
    {
      name: "newspaper",
      price: 0.1,
    },
  ];

  console.log(
    total(shoppingList) // "9.30"
  );
})();
