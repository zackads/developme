// Create a class that represents a Wombat

// You should be able to give the wombat a name when you create it.
// The wombat should have a .getName() method that returns its name
// The wombat should have a .sayHelloTo(wombat) method that you pass another wombat to and it will return a greeting
// The wombat should have a .giveHug() method and a .howManyHugs() method. .howManyHugs() should return the number of hugs the wombat has been given

class Wombat {
  constructor(name) {
    this.name = name;
    this.hugs = 0;
  }

  getName() {
    return this.name;
  }

  sayHelloTo(wombat) {
    return `Hello ${wombat.name}`;
  }

  giveHug() {
    this.hugs += 1;
    return this;
  }

  howManyHugs() {
    return this.hugs;
  }
}

let tish = new Wombat("Tish");
let fonny = new Wombat("Fonny");

let tishName = tish.getName();
console.log("Expected: Tish, Actual: " + tishName);

let greeting = tish.sayHelloTo(fonny);
console.log("Expected: Hello Fonny, Actual: " + greeting);

tish.giveHug();
console.log("Expected: 1, Actual: " + tish.howManyHugs());

fonny.giveHug().giveHug().giveHug();
console.log("Expected: 3, Actual: " + fonny.howManyHugs());
