function invokeAfterDelay(fn, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, delay);
  });
}

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

invokeAfterDelay(randomNumber, 1000).then((result) => {
  console.log("Random number:", result);
});
