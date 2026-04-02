const persons = [
  { name: "John", age: 23, city: "Boston" },
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 19, city: "Chicago" },
  { name: "Charlie", age: 30, city: "Seattle" },
  { name: "Diana", age: 22, city: "Miami" },
];

function getUserData(name) {
  const user = persons.find((p) => p.name === name);

  if (!user) {
    throw new Error("Unable to find user");
  }

  return user;
}

function showUserInfo(name) {
  console.log("Loading");

  try {
    const user = getUserData(name);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Loading finished");
  }
}

showUserInfo("John");
showUserInfo("Unknown");
