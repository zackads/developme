// Create a class that represents a bike

class Bike {
  constructor(make, frameNumber, mileage = 0) {
    this.make = make;
    this.frameNumber = frameNumber;
    this.mileage = mileage;
  }

  getFrameNumber() {
    return this.frameNumber;
  }

  getMake() {
    return this.make;
  }

  getMileage() {
    return this.mileage;
  }

  addRide(miles) {
    miles > 0 ? (this.mileage += miles) : null;
    return this;
  }
}

// you pass in a make and frame number
let bike = new Bike("Bianchi", "1664");

// you can get various bits of information about it
console.log(bike.getFrameNumber()); // "1664"
console.log(bike.getMake()); // "Bianchi"
console.log(bike.getMileage()); // 0

// you can add journey
bike.addRide(100);
console.log(bike.getMileage()); // 100

bike.addRide(200);
console.log(bike.getMileage()); // 300
