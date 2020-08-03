// Create an class that represents a shopping basket. It should have a property, items, that keeps track of the items in the basket. It should have an add method to add items to the basket. It should have a total method that returns the value of all the items' prices. It should have a list method that returns an array of item names.

// Hint: basket items will need to be an class too

class Basket {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
    return this;
  }

  total() {
    return (
      "£" +
      this.items
        .reduce((totalPrice, item) => item.price + totalPrice, 0)
        .toFixed(2)
    );
  }

  list() {
    return this.items.map((item) => item.name);
  }
}

class BasketItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let basket = new Basket();

let item1 = new BasketItem("coffee", 3.5);
let item2 = new BasketItem("tea", 2.5);

basket.add(item1);
basket.add(item2);

console.log(
  basket.total(), // £6.00
  basket.list() // ["coffee", "tea"]
);
