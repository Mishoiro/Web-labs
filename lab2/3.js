function callWithContext(obj, callback) {
  callback.call(obj);
}

const person = {
  name: "Ivan",
  age: 20,
};

function birthdayMessage() {
  const date = new Date().toDateString();
  console.log(`Today is ${date}! Happy birthday ${this.name}`);
}

callWithContext(person, birthdayMessage);
