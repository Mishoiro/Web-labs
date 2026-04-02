function values(f, low, high) {
  const result = [];
  for (let i = low; i <= high; i++) {
    result.push(f(i));
  }
  return result;
}

console.log(
  "Values:",
  values((x) => x, 1, 5),
);
