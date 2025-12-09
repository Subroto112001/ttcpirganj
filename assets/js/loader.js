// Dynamic function to load header and footer
async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = html;
    }
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

// Mobile Menu Functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    // --- FIX: Force Menu Closed on Load ---
    // This ensures the menu starts hidden, solving the "always open" bug.
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("active");
    // --------------------------------------

    mobileMenuBtn.addEventListener("click", function () {
      // Toggle Tailwind's 'hidden' class to Show/Hide
      mobileMenu.classList.toggle("hidden");

      // Optional: Toggle 'active' if you use it for custom animations
      mobileMenu.classList.toggle("active");

      const isExpanded = !mobileMenu.classList.contains("hidden");
      mobileMenuBtn.setAttribute("aria-expanded", isExpanded);

      // Change icon
      const icon = mobileMenuBtn.querySelector("i");
      if (icon) {
        if (isExpanded) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times");
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden"); // Force hide
        mobileMenu.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");

        const icon = mobileMenuBtn.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });
    });
  }
}

// Language buttons initialization
function initializeLanguageButtons() {
  // desktop button
  const desktopBtn = document.getElementById("lang-btn-desktop");
  if (desktopBtn) {
    desktopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (typeof window.toggleLanguage === "function") {
        window.toggleLanguage();
      }
    });
  }

  // mobile button
  const mobileBtn = document.getElementById("lang-btn-mobile");
  if (mobileBtn) {
    mobileBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (typeof window.toggleLanguage === "function") {
        window.toggleLanguage();
      }
    });
  }
}

// Active nav item
function setActiveNavItem() {
  const currentPage =
    window.location.pathname.split("/").pop().replace(".html", "") || "index";

  // desktop nav links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const pageName = link.getAttribute("data-page");
    link.classList.remove("text-purple-600", "font-bold");

    if (
      pageName === currentPage ||
      (currentPage === "" && pageName === "index") ||
      (currentPage === "index" && pageName === "index")
    ) {
      link.classList.add("text-purple-600", "font-bold");
    }
  });

  // mobile nav links
  const mobileNavLinks = document.querySelectorAll(".nav-link-mobile");
  mobileNavLinks.forEach((link) => {
    const pageName = link.getAttribute("data-page");
    link.classList.remove("text-purple-600", "font-bold", "bg-purple-50");

    if (
      pageName === currentPage ||
      (currentPage === "" && pageName === "index") ||
      (currentPage === "index" && pageName === "index")
    ) {
      link.classList.add("text-purple-600", "font-bold", "bg-purple-50");
    }
  });
}

// Smooth Scroll Initialization
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Load header and footer after page load
document.addEventListener("DOMContentLoaded", async function () {
  // Load header
  await loadComponent("header-placeholder", "./component/header.html");

  // Load footer
  await loadComponent("footer-placeholder", "./component/footer.html");

  // Wait a bit to ensure DOM updates
  setTimeout(() => {
    initializeMobileMenu();
    initializeLanguageButtons();
    initializeSmoothScroll();
    setActiveNavItem();

    // Update language content (runs the function from contact.js)
    if (typeof window.updateContent === "function") {
      window.updateContent();
    }
  }, 100);
});
