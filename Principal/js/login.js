/*
==========================================
ELEMENTS
==========================================
*/

const loginForm = document.getElementById("loginForm");

const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

/*
==========================================
PASSWORD TOGGLE
==========================================
*/

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";

  passwordInput.type = isHidden ? "text" : "password";

  togglePassword.innerHTML = `
        <i data-lucide="${isHidden ? "eye" : "eye-off"}"></i>
    `;

  lucide.createIcons();
});

/*
==========================================
LOGIN
(REPLACE WITH API)
==========================================
*/

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();

  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Please fill in all required fields.");

    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters.");

    return;
  }

  const button = loginForm.querySelector(".btn-primary");

  const originalText = button.innerHTML;

  button.disabled = true;

  button.innerHTML = `
        Logging in...
    `;

  /*
    ==========================================
    API CALL GOES HERE
    ==========================================
    */

  setTimeout(() => {
    button.disabled = false;

    button.innerHTML = originalText;

    // Replace with dashboard route

    window.location.href = "../principal-dashboard/overview.html";
  }, 1500);
});

/*
==========================================
INIT
==========================================
*/

lucide.createIcons();
