function loadUsers(ids) {
  const promises = ids.map((id) =>
    getUser(id).catch((error) => {
      console.log("Error:", error);
      return null;
    }),
  );

  return Promise.all(promises);
}

loadUsers([0, 1, 5]).then((result) => {
  console.log("Loaded users:", result);
});
