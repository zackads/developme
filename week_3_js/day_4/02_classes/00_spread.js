// Copy the person object and update the value of the name property to be "Bob":

let person = {
  name: "Alice",
  age: 38,
};

let copied = {
  ...person,
  name: "Bob",
};

console.log("Expected: false\t Actual:", copied === person);
console.log("Expected: Bob\t Actual:", copied.name);
console.log("Expected: 38\t Actual:", copied.age);
