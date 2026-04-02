function init() {
  const root = document.getElementById("main");

  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  root.append(header, main, footer);

  const left = document.createElement("div");
  const content = document.createElement("div");
  const right = document.createElement("div");

  left.id = "leftPanel";
  content.id = "content";
  right.id = "rightPanel";

  main.append(left, content, right);

  const contentInner = document.createElement("div");
  content.append(contentInner);

  let users = [];

  const pages = ["User Rating", "News", "Contacts", "About", "Gallery"];

  pages.forEach((p) => {
    const btn = document.createElement("button");
    btn.textContent = p;
    btn.onclick = () => renderPage(p);
    header.append(btn);
  });

  function renderPage(page) {
    if (page === "User Rating") renderUsers();
    else if (page === "Gallery") renderGallery();
    else contentInner.innerHTML = `<h2>${page}</h2>`;
  }

  function renderUsers(page) {
    contentInner.innerHTML = `
      <button id="loadUsers">Get Users</button>
    `;
  }

  content.addEventListener("click", async (e) => {
    if (e.target.id === "loadUsers") {
      users = await fetchUsers("lastname", "asc");
      renderTable();
    }
  });

  function renderTable() {
    let html = "<table><tr><th id='sort'>Lastname</th><th>Firstname</th></tr>";

    users.forEach((u) => {
      html += `<tr><td>${u.lastname}</td><td>${u.firstname}</td></tr>`;
    });

    html += "</table>";
    contentInner.innerHTML = html;

    document.getElementById("sort").onclick = async () => {
      users = await fetchUsers("lastname", "desc");
      renderTable();
    };
  }

  async function renderGallery() {
    const images = await getGallery();

    let html = `<div class="gallery">`;

    images.forEach((img) => {
      html += `<img src="/gallery/${img}" />`;
    });

    html += "</div>";
    contentInner.innerHTML = html;
  }

  async function updateWeather() {
    const data = await getWeather();
    left.innerHTML = `<p>${data.city}: ${data.temperature}°C</p>`;
  }

  updateWeather();
  setInterval(updateWeather, 60000);

  renderPage("User Rating");
}

window.onload = init;
