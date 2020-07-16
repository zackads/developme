// Create a function, oap, that takes a object with an age property. It should return true if the age property is greater than 65 otherwise it should return false.

let oap = (obj) => obj.age > 65;

(() => {
  let a = { name: "Alice", age: 52 };
  let b = { name: "Bob", age: 67 };
  let c = { name: "Charlie", age: 24 };
  let d = { name: "Bob", age: 97 };

  console.log(
    oap(a), // false
    oap(b), // true
    oap(c), // false
    oap(d) // true
  );
})();
