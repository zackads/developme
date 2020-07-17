// Copy the object and update the numbers property to only contain numbers bigger than 10:

let ob = {
  name: "Wombat",
  numbers: [1, 45, 2, 58, 3],
};

let copy = {
  ...ob,
  numbers: ob.numbers.filter((num) => num > 10),
};

console.log("Expected: false\t Actual:", copy === ob);
console.log("Expected: false\t Actual:", copy.numbers === ob.numbers);
console.log("Expected: [45, 58]\t Actual:", copy.numbers);
console.log("Expected: Wombat\t Actual:", copy.name);
