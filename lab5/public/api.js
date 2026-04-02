async function fetchUsers(sort, order) {
  const url = `/users?sort=${sort || ""}&order=${order || ""}`;
  const res = await fetch(url);
  return res.json();
}

async function getNewUsers() {
  const res = await fetch("/new-users");
  return res.json();
}

async function getGallery() {
  const res = await fetch("/gallery-list");
  return res.json();
}

async function getWeather() {
  const res = await fetch("/weather");
  return res.json();
}
