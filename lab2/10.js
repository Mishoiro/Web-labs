function callWithLog(callback, ...args) {
  const time = new Date().toLocaleTimeString();
  console.log("Function name:", callback.name);
  console.log("Arguments:", args);
  console.log("Time:", time);

  return callback(...args);
}

function multiply(a, b) {
  return a * b;
}

console.log("Result:", callWithLog(multiply, 3, 4));
