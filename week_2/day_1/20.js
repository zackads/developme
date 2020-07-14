let prime = (num) => {
  const sqrt = Math.sqrt(num);
  if (num === 1) {
    return false;
  } else {
    for (let i = 2; i <= sqrt; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};

console.log(
  prime(2), // true
  prime(3), // true
  prime(4), // false
  prime(7), // true
  prime(15), // false
  prime(85), // false
  prime(257), // true
  prime(5119), // true
  prime(5121), // false
  prime(17523), // false
  prime(15487319), // true
  prime(1) // false - by definition, get it working for the rest first
);
