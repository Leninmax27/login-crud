const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("error-msg");


const userDB = {
  username: "admin",
  password: "12345"
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === userDB.username && password === userDB.password) {
    // Guardar sesión
    localStorage.setItem("loggedIn", "true");
    window.location.href = "protected/crud.html";
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos";
  }
});
