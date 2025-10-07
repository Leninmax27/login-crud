const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable").querySelector("tbody");
let users = JSON.parse(localStorage.getItem("users")) || [];

function renderTable() {
  userTable.innerHTML = "";
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.nombre}</td>
      <td>${user.correo}</td>
      <td>
        <button onclick="editUser(${index})">Editar</button>
        <button onclick="deleteUser(${index})">Eliminar</button>
      </td>
    `;
    userTable.appendChild(row);
  });
}

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = document.getElementById("userId").value;
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  if (id) {
    // Actualizar
    users[id] = { nombre, correo };
  } else {
    // Crear
    users.push({ nombre, correo });
  }

  localStorage.setItem("users", JSON.stringify(users));
  renderTable();
  userForm.reset();
  document.getElementById("userId").value = "";
});

function editUser(index) {
  const user = users[index];
  document.getElementById("nombre").value = user.nombre;
  document.getElementById("correo").value = user.correo;
  document.getElementById("userId").value = index;
}

function deleteUser(index) {
  if (confirm("¿Seguro que deseas eliminar este usuario?")) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    renderTable();
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "../index.html";
}

renderTable();
