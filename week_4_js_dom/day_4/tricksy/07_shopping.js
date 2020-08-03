((d, w) => {
  // Elements
  const items = d.getElementById("items");
  let shoppingList = d.getElementById("shopping-list");

  // State variable
  const basket = [];

  // Shopping basket items
  class Item {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  // Helper functions
  const addToBasket = (item) => {
    basket.push(item);
    return basket;
  };

  const tallyBasketContents = () => {
    return basket.reduce((tally, item) => {
      if (tally[item.name]) {
        tally[item.name].quantity += 1;
      } else {
        tally[item.name] = {
          name: item.name,
          quantity: 1,
          price: item.price,
        };
      }
      return tally;
    }, {});
  };

  const createBasketTableBody = (basket) => {
    const tbody = d.createElement("tbody");

    if (basket.length === 0) {
      const tr = d.createElement("tr");

      const td = d.createElement("td");
      td.textContent = "You have nothing in your shopping list";
      tr.append(td);

      tbody.append(tr);
    } else {
      Object.entries(tallyBasketContents(basket)).forEach((item) => {
        const tr = d.createElement("tr");
        const tdName = d.createElement("td");
        const tdQuantity = d.createElement("td");
        const tdPrice = d.createElement("td");

        tdName.textContent = item[1].name; // Why does unnamed Item change to an array so I have to access object with [1]? Hmmm
        tdQuantity.textContent = item[1].quantity;
        tdPrice.textContent = priceStr(item[1].price);

        tr.append(tdName, tdQuantity, tdPrice);
        tbody.append(tr);
      });
    }
    return tbody;
  };

  const priceStr = (number) => {
    return (
      "£" +
      Number.parseFloat(number)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };

  const getTotal = (basket) =>
    priceStr(
      basket.reduce((total, item) => total + Number.parseFloat(item.price), 0)
    );

  // Event listener
  items.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      addToBasket(new Item(e.target.dataset.name, e.target.dataset.price));
      const existingTableBody = shoppingList.children[1];
      let total = d.getElementById("total");

      shoppingList.replaceChild(
        createBasketTableBody(tallyBasketContents(basket)),
        existingTableBody
      );
      total.innerText = getTotal(basket);
    }
  });
})(document, window);
