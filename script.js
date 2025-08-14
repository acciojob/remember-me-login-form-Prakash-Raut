const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");
const existingBtn = document.getElementById("existingUser");

document.addEventListener("DOMContentLoaded", () => {
  existingBtn.hidden = true;
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = 'block';
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  alert(`Logged in as ${username}`);

  if (rememberCheckbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.hidden = false;
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  if (localStorage.getItem('username')) {
    existingBtn.style.display = 'block';
  } else {
    existingBtn.style.display = 'none';
  }

  form.reset();
});

existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});


