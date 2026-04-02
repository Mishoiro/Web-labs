function produceRandomAfterDelay(delay) {
  return invokeAfterDelay(() => Math.floor(Math.random() * 11), delay);
}

Promise.all([
  produceRandomAfterDelay(1000),
  produceRandomAfterDelay(1000),
]).then((results) => {
  const sum = results[0] + results[1];
  console.log("Sum:", sum);
});
