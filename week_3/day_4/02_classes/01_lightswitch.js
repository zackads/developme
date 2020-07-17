// Create a class that represents a light switch

class Lightswitch {
  constructor(on) {
    this.on = false;
  }

  isOn() {
    return this.on;
  }

  turnOn() {
    this.on = true;
    return this;
  }

  turnOff() {
    this.on = false;
    return this;
  }
}

let lightswitch = new Lightswitch();

// you can check whether it is on or not
console.log(lightswitch.isOn()); // false

// you can turn it on
lightswitch.turnOn();
console.log(lightswitch.isOn()); // true

// you can turn it off
lightswitch.turnOff();
console.log(lightswitch.isOn()); // false
