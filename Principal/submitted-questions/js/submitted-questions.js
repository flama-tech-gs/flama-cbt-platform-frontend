/* ==========================================
   SUBMITTED QUESTIONS PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  initializeAccordions();
  initializeSearch();
  initializeFilters();
  initializeViewButtons();

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});

/* ==========================================
   ACCORDIONS
========================================== */

function initializeAccordions() {
  const accordions = document.querySelectorAll(".accordion-toggle");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const parent = accordion.parentElement;

      const content = accordion.nextElementSibling;

      const icon = accordion.querySelector("svg");

      if (!content) return;

      const isOpen = parent.classList.contains("open");

      if (isOpen) {
        parent.classList.remove("open");

        content.style.display = "none";

        icon.setAttribute("data-lucide", "chevron-down");
      } else {
        parent.classList.add("open");

        content.style.display = "block";

        icon.setAttribute("data-lucide", "chevron-up");
      }

      lucide.createIcons();
    });
  });
}

/* ==========================================
   SEARCH
========================================== */

function initializeSearch() {
  const searchInput = document.querySelector(".search-box input");

  const rows = document.querySelectorAll("tbody tr");

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();

    rows.forEach((row) => {
      const subject = row.children[0].textContent.toLowerCase();

      const teacher = row.children[1].textContent.toLowerCase();

      row.style.display =
        subject.includes(keyword) || teacher.includes(keyword) ? "" : "none";
    });
  });
}

/* ==========================================
   FILTERS
========================================== */

function initializeFilters() {
  const filterButton = document.querySelector(".apply-filter-btn");

  filterButton.addEventListener("click", () => {
    const year = document.querySelectorAll(".filter-card select")[0].value;

    const className = document.querySelectorAll(".filter-card select")[1].value;

    const subject = document.querySelectorAll(".filter-card select")[2].value;

    console.log({
      year,

      className,

      subject,
    });

    // ======================================
    // TODO:
    // Backend filtering
    // ======================================
  });
}

/* ==========================================
   VIEW BUTTONS
========================================== */

function initializeViewButtons() {
  const buttons = document.querySelectorAll(".view-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const row = button.closest("tr");

      const subject = row.children[0].textContent.trim();

      const teacher = row.children[1].textContent.trim();

      console.log({
        subject,

        teacher,
      });

      // ======================================
      // TODO:
      // Navigate to Question Details
      // ======================================

      window.location.href = "./review.html";
    });
  });
}

/* ==========================================
   OPTIONAL HELPERS
========================================== */

function expandAllYears() {
  document.querySelectorAll(".year-group").forEach((group) => {
    const content = group.querySelector(".year-content");

    if (content) {
      group.classList.add("open");

      content.style.display = "block";
    }
  });
}

function collapseAllYears() {
  document.querySelectorAll(".year-group").forEach((group) => {
    const content = group.querySelector(".year-content");

    if (content) {
      group.classList.remove("open");

      content.style.display = "none";
    }
  });
}
