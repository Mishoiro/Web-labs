const users = [
  { name: "ivan", age: 20 },
  { name: "anna", age: 25 },
];

const updatedUsers = users.map((user) => ({
  ...user,
  name: user.name.toUpperCase(),
}));

console.log(updatedUsers);
