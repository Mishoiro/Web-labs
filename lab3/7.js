async function showUsers(ids) {
  console.log("loading");

  try {
    const result = await loadUsers(ids);
    console.log("Users:", result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("loading finished");
  }
}

showUsers([0, 1, 2]);
