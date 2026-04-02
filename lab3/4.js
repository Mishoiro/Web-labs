const users = [
  { id: 0, name: "Ivan", age: 22, city: "Kyiv" },
  { id: 1, name: "Anna", age: 25, city: "Lviv" },
  { id: 2, name: "Oleg", age: 30, city: "Odessa" },
  { id: 3, name: "Maria", age: 28, city: "Kharkiv" },
];

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === id);

      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}
