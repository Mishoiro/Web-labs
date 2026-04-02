function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(5)(3));
console.log(sum(10)(7));
