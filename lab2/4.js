function createCounter() {
  let value = 0;

  return {
    increment() {
      value++;
    },
    getValue() {
      return value;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log("Counter value:", counter.getValue());
