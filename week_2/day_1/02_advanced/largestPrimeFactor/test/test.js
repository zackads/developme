let fn = require("../largestPrimeFactor.js");
let largestPrimeFactor = require("../largestPrimeFactor.js").largestPrimeFactor;
let assert = require("chai").assert;

assert(isFactorOf(2, 6) === true, "2 is a factor of 6");
assert(isFactorOf(2, 7) === false, "2 is not a factor of 7");
