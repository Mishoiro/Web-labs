const persons = [
  { name: "John", age: 23, city: "Boston" },
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 19, city: "Chicago" },
  { name: "Charlie", age: 30, city: "Seattle" },
  { name: "Diana", age: 22, city: "Miami" },
];

const textArray = persons.map(
  (p) => `${p.name} from ${p.city} born in ${new Date().getFullYear() - p.age}`,
);

console.log(textArray);
