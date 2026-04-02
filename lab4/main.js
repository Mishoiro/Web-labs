function init() {
  const root = document.getElementById("main");

  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  root.append(header, main, footer);

  const left = document.createElement("div");
  left.id = "leftPanel";

  const content = document.createElement("div");
  content.id = "content";

  const right = document.createElement("div");
  right.id = "rightPanel";

  main.append(left, content, right);

  const contentInner = document.createElement("div");
  content.append(contentInner);

  [left, contentInner, right].forEach((el) => {
    const loader = document.createElement("div");
    loader.className = "loader";
    el.append(loader);
  });

  let loadedUsers = [];
  let editMode = false;

  const pages = ["User Rating", "News", "Contacts", "About"];

  pages.forEach((name) => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.onclick = () => renderPage(name);
    header.append(btn);
  });

  const currentUsers = document.createElement("div");
  const newUsers = document.createElement("div");

  currentUsers.textContent =
    "Current users: " + Math.floor(Math.random() * 100);
  newUsers.textContent =
    "New users: " +
    getNewUsers()
      .map((u) => u.firstname)
      .join(", ");

  footer.append(currentUsers, newUsers);

  function renderPage(page) {
    if (page === "User Rating") {
      renderUserRating();
    } else {
      contentInner.innerHTML = `<h2>${page}</h2>`;
      right.innerHTML = "";
    }
  }

  function renderUserRating() {
    contentInner.innerHTML = `<div class="loader"></div>`;

    setTimeout(() => {
      contentInner.innerHTML = `
        <p>No users</p>
        <button id="loadUsers">Get Users</button>
      `;
    }, 1000);
  }

  content.addEventListener("click", async (e) => {
    if (e.target.id === "loadUsers") {
      contentInner.innerHTML = `<div class="loader"></div>`;
      loadedUsers = await fetchUsers();
      renderTable();
      updateRightPanel();
    }
  });

  function renderTable() {
    let html = `<table>
      <tr>
        <th id="sortLast">Lastname</th>
        <th>Firstname</th>
        <th>Score</th>
        ${editMode ? "<th>Action</th>" : ""}
      </tr>`;

    loadedUsers.forEach((u, i) => {
      html += `
        <tr>
          <td>${u.lastname}</td>
          <td>${u.firstname}</td>
          <td>${u.score}</td>
          ${
            editMode
              ? `<td><button onclick="deleteUser(${i})">Delete</button></td>`
              : ""
          }
        </tr>`;
    });

    html += "</table>";
    contentInner.innerHTML = html;

    document.getElementById("sortLast").onclick = () => {
      loadedUsers.sort((a, b) => a.lastname.localeCompare(b.lastname));
      renderTable();
    };
  }

  window.deleteUser = function (index) {
    loadedUsers.splice(index, 1);
    renderTable();
    updateRightPanel();
  };

  function updateRightPanel() {
    const sum = loadedUsers.reduce((acc, u) => acc + u.score, 0);

    right.innerHTML = `
      <p>Sum: ${sum}</p>
      <label>
        <input type="checkbox" id="editToggle"/> Edit table
      </label>
    `;

    document.getElementById("editToggle").onchange = (e) => {
      editMode = e.target.checked;
      renderTable();
    };
  }

  setTimeout(() => {
    left.innerHTML = `
      <input type="text" id="search"/>
      <button id="searchBtn">Search</button>
    `;

    document.getElementById("searchBtn").onclick = () => {
      const value = document.getElementById("search").value.toLowerCase();

      document.querySelectorAll("tr").forEach((row) => {
        if (row.innerText.toLowerCase().includes(value)) {
          row.classList.add("highlight");
        } else {
          row.classList.remove("highlight");
        }
      });
    };
  }, 1000);

  renderPage("User Rating");
}

window.onload = init;
