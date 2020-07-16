let me = {
  pk: 1,
  name: "Zack",
  dob: new Date("1991-07-12"), // Not true, y'all ain't getting my real DoB ;-)
  age() {
    let diff_ms = Date.now() - this.dob.getTime();
    let age_date = new Date(diff_ms);

    return Math.abs(age_date.getUTCFullYear() - 1970);
  },
  hair: {
    length: "short",
    colour: "brown",
  },
  hero: true,
  clothesWearing: ["shorts", "t-shirt"],
};

console.log(me);
console.log(me.age());
