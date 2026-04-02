function logCall(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const time = new Date().toLocaleTimeString();
      console.log("Time:", time);
      callback();
      resolve();
    }, 1000);
  });
}

logCall(() => console.log("Call 1"))
  .then(() => logCall(() => console.log("Call 2")))
  .then(() => logCall(() => console.log("Call 3")))
  .then(() => logCall(() => console.log("Call 4")));
