const persons = [
  { name: "John", age: 23, city: "Boston" },
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 19, city: "Chicago" },
  { name: "Charlie", age: 30, city: "Seattle" },
  { name: "Diana", age: 22, city: "Miami" },
];

const person = persons[0];

const { name, city } = person;
console.log(name, city);

const [firstPerson] = persons;
console.log(firstPerson);
