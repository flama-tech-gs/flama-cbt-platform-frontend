/*
=====================================
Teacher Login
Production Ready
=====================================
*/

document.addEventListener("DOMContentLoaded", () => {
  // ============================
  // ELEMENTS
  // ============================

  const form = document.getElementById("loginForm");

  const staffId = document.getElementById("staffId");

  const password = document.getElementById("password");

  const loginBtn = document.getElementById("loginBtn");

  const btnText = loginBtn.querySelector(".btn-text");

  const loader = loginBtn.querySelector(".loader");

  const togglePassword = document.querySelector(".toggle-password");

  const eyeIcon = document.getElementById("eyeIcon");

  const staffError = document.getElementById("staffError");

  const passwordError = document.getElementById("passwordError");

  // ============================
  // PASSWORD TOGGLE
  // ============================

  togglePassword.addEventListener("click", () => {
    const isHidden = password.type === "password";

    password.type = isHidden ? "text" : "password";

    eyeIcon.src = isHidden
      ? "assets/icons/eye-off.svg"
      : "assets/icons/eye.svg";

    eyeIcon.alt = isHidden ? "Hide Password" : "Show Password";
  });

  // ============================
  // VALIDATION
  // ============================

  function clearErrors() {
    staffError.textContent = "";

    passwordError.textContent = "";

    staffId.classList.remove("input-error");

    password.classList.remove("input-error");
  }

  function validateForm() {
    clearErrors();

    let valid = true;

    // Staff ID

    if (staffId.value.trim() === "") {
      staffError.textContent = "Staff ID is required.";

      staffId.classList.add("input-error");

      valid = false;
    }

    // Example format:
    // TCH/2025/014
    else {
      const pattern = /^[A-Za-z]{3}\/\d{4}\/\d+$/;

      if (!pattern.test(staffId.value.trim())) {
        staffError.textContent = "Invalid Staff ID format.";

        staffId.classList.add("input-error");

        valid = false;
      }
    }

    // Password

    if (password.value.trim() === "") {
      passwordError.textContent = "Password is required.";

      password.classList.add("input-error");

      valid = false;
    } else if (password.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";

      password.classList.add("input-error");

      valid = false;
    }

    return valid;
  }

  // ============================
  // LOADING STATE
  // ============================

  function startLoading() {
    loginBtn.disabled = true;

    btnText.textContent = "Signing In...";

    loader.classList.remove("hidden");
  }

  function stopLoading() {
    loginBtn.disabled = false;

    btnText.textContent = "Login →";

    loader.classList.add("hidden");
  }

  // ============================
  // API LOGIN
  // ============================

  async function loginTeacher() {
    /*
        Replace with your backend endpoint.

        Example:

        POST /api/teacher/login
        */

    const payload = {
      staffId: staffId.value.trim(),

      password: password.value,
    };

    try {
      startLoading();

      /*
            Example

            const response = await fetch(
                "/api/teacher/login",
                {
                    method: "POST",

                    headers: {

                        "Content-Type":
                        "application/json"

                    },

                    body: JSON.stringify(payload)

                }
            );

            const data = await response.json();

            if(!response.ok){

                throw new Error(data.message);

            }

            */

      // Temporary demo

      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Payload");

      console.log(payload);

      alert("Login Successful");

      // Redirect later

      // window.location.href =
      // "dashboard.html";
    } catch (error) {
      alert(error.message || "Login failed.");
    } finally {
      stopLoading();
    }
  }

  // ============================
  // FORM SUBMIT
  // ============================

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    await loginTeacher();
  });

  // ============================
  // REMOVE ERRORS
  // ============================

  staffId.addEventListener("input", () => {
    staffError.textContent = "";

    staffId.classList.remove("input-error");
  });

  password.addEventListener("input", () => {
    passwordError.textContent = "";

    password.classList.remove("input-error");
  });

  // ============================
  // ENTER KEY
  // ============================

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      form.requestSubmit();
    }
  });
});

// Backend Integration Notes:
const response = await fetch("/api/teacher/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || "Login failed.");
}

// Example response
// {
//   token: "...",
//   teacher: {
//     id: 14,
//     name: "Mr. John",
//     staffId: "TCH/2025/014"
//   }
// }

localStorage.setItem("token", data.token);
window.location.href = "dashboard.html";
