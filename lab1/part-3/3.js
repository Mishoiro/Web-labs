const persons = [
  { name: "John", age: 23, city: "Boston" },
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 19, city: "Chicago" },
  { name: "Charlie", age: 30, city: "Seattle" },
  { name: "Diana", age: 22, city: "Miami" },
];

persons.groupName = "A";
persons.teacher = "Joan Doe";
persons.year = "2023";

const person = persons[0];

Object.defineProperty(person, "birthYear", {
  get() {
    return new Date().getFullYear() - this.age;
  },
  set() {
    throw new Error("Поле birthYear тільки для читання");
  },
  enumerable: true,
});

console.log("---- for ----");
for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}

console.log("---- for...of ----");
for (let p of persons) {
  console.log(p);
}

console.log("---- властивості масиву ----");
for (let key in persons) {
  if (isNaN(key)) {
    console.log(key, persons[key]);
  }
}

console.log("---- birthYear ----");
console.log(person.name, "->", person.birthYear);

try {
  person.birthYear = 2000;
} catch (e) {
  console.log("Помилка:", e.message);
}
