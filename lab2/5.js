function getGreeting() {
  let lastName = null;
  let lastResult = null;

  return function (name) {
    if (name === lastName) {
      return lastResult;
    }

    lastName = name;
    lastResult = `Hello ${name}`;
    return lastResult;
  };
}

const greeting = getGreeting();
console.log(greeting("Alex"));
console.log(greeting("Alex")); // кеш
