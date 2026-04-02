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

console.log("--- Елементи масиву (for...of) ---");
for (let p of persons) {
  console.log(p);
}

console.log("--- Властивості масиву (for...in) ---");
for (let key in persons) {
  console.log(`${key}: ${persons[key]}`);
}
