// Write a function that takes two object literals and returns true if they have the same value for their name or age properties:

let comparePeople = (a, b) => a.name === b.name || a.age === b.age;

(() => {
  let first = {
    name: "Jamal",
    age: 36,
  };

  let second = {
    name: "Salma",
    age: 56,
  };

  let third = {
    name: "Jamal",
    age: 56,
  };

  let result = comparePeople(first, second);
  console.log("Expected: false, Actual: " + result);

  result = comparePeople(first, third);
  console.log("Expected: true, Actual: " + result);

  result = comparePeople(second, third); // true
  console.log("Expected: true, Actual: " + result);
})();
