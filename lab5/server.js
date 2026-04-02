const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use("/gallery", express.static(path.join(__dirname, "gallery")));

const users = Array.from({ length: 20 }, (_, i) => ({
  firstname: "Name" + i,
  lastname: "Surname" + i,
  score: Math.floor(Math.random() * 100),
}));

app.get("/users", (req, res) => {
  let { sort, order } = req.query;

  let result = [...users];

  if (sort) {
    result.sort((a, b) => {
      return order === "desc"
        ? b[sort].localeCompare(a[sort])
        : a[sort].localeCompare(b[sort]);
    });
  }

  result = result.sort(() => 0.5 - Math.random()).slice(0, 10);

  setTimeout(() => res.json(result), 1000);
});

app.get("/new-users", (req, res) => {
  res.json(users.slice(0, 5));
});

app.get("/gallery-list", (req, res) => {
  const fs = require("fs");
  const files = fs.readdirSync(path.join(__dirname, "gallery"));
  res.json(files);
});

app.get("/weather", (req, res) => {
  res.json({
    city: "Kyiv",
    temperature: Math.floor(Math.random() * 31),
  });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});
