// Update sameName to return true if the objects have the same name property and false if they have different names.

let sameName = (person1, person2) => person1.name === person2.name;

(() => {
  let a = { name: "Alice", age: 52 };
  let b = { name: "Bob", age: 34 };
  let c = { name: "Charlie", age: 24 };
  let d = { name: "Bob", age: 97 };

  console.log(sameName(a, b)); // false
  console.log(sameName(b, c)); // false
  console.log(sameName(c, d)); // false
  console.log(sameName(b, d)); // true
})();
