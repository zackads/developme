// Create an object literal that represents an address - use different properties for each part of the address. It should have a fullAddress method, which will return the full address as a nicely formatted string.

let address = {
  // houseNumber: "10",
  street1: "10 Guinea Street",
  street2: "",
  postcode: "BS1 6SX",
  town: "Bristol",

  fullAddress() {
    // return `${this.houseNumber} ${this.street1}, ${
    //   this.street2 ? this.street2 + ", " : ""
    // }${this.postcode}, ${this.town}`;
    return [this.street1, this.postcode, this.town].join(", ");
  },
};

console.log(address.postcode); // BS4 8TR
console.log(address.town); // Bristol
console.log(address.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"

// check it works if the variable gets renamed
let renamed = address;
address = 10;
console.log(renamed.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"
