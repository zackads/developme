// Copy the person object and update the value of the name property to be "Bob" and the value of the postcode property to be BS4 9EE:

let person = {
  name: "Alice",
  age: 38,
  address: {
    city: "Bristol",
    postcode: "BS7 3TG",
  },
};

let copied = {
  ...person,
  name: "Bob",
  address: {
    ...person.address,
    postcode: "BS4 9EE",
  },
};

console.log("Expected: false\t Actual:", copied === person);
console.log("Expected: Bob\t Actual:", copied.name);
console.log("Expected: 38\t Actual:", copied.age);
console.log("Expected: false\t Actual:", copied.address === person.address);
console.log("Expected: BS4 9EE\t Actual:", copied.address.postcode);
console.log("Expected: Bristol\t Actual:", copied.address.city);
