/* ==========================================
   PRINCIPAL PROFILE PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  initializeNoticeButton();

  initializeDepartmentRows();

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});

/* ==========================================
   NOTICE BUTTON
========================================== */

function initializeNoticeButton() {
  const noticeButton = document.querySelector(".notice-icon");

  if (!noticeButton) return;

  noticeButton.addEventListener("click", () => {
    // Return to previous page

    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "./overview.html";
    }
  });
}

/* ==========================================
   DEPARTMENT TABLE
========================================== */

function initializeDepartmentRows() {
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    row.style.cursor = "pointer";

    row.addEventListener("mouseenter", () => {
      row.classList.add("row-hover");
    });

    row.addEventListener("mouseleave", () => {
      row.classList.remove("row-hover");
    });

    row.addEventListener("click", () => {
      const department = row.children[0].textContent.trim();

      console.log("Department:", department);

      // =====================================
      // TODO
      // Navigate to department details
      //
      // window.location.href =
      // `edit-department.html?id=department-id`;
      // =====================================
    });
  });
}

/* ==========================================
   FUTURE PROFILE FUNCTIONS
========================================== */

function loadPrincipalProfile() {
  // Fetch principal details
}

function loadSchoolStatistics() {
  // Fetch dashboard statistics
}

function loadDepartments() {
  // Fetch departments list
}
