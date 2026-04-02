const user = {
  name: "Oleg",
};

function sayHello(age) {
  console.log(`Hello ${this.name}, age ${age}`);
}

sayHello.call(user, 25);

sayHello.apply(user, [30]);

const boundHello = sayHello.bind(user);
boundHello(35);
