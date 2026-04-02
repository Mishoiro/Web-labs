function cacheFor10Seconds(fn) {
  let lastArgs = null;
  let lastResult = null;
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (
      lastArgs &&
      JSON.stringify(args) === JSON.stringify(lastArgs) &&
      now - lastTime < 10000
    ) {
      console.log("Returning cached result");
      return lastResult;
    }

    lastArgs = args;
    lastTime = now;
    lastResult = fn(...args);

    return lastResult;
  };
}

function add(a, b) {
  return a + b;
}

const cachedAdd = cacheFor10Seconds(add);

console.log(cachedAdd(2, 3));
console.log(cachedAdd(2, 3)); 
