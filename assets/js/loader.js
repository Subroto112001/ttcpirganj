// ডায়নামিকভাবে হেডার এবং ফুটার লোড করার ফাংশন
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

// মোবাইল মেনু ফাংশনালিটি
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      const isExpanded = mobileMenu.classList.contains("active");
      mobileMenuBtn.setAttribute("aria-expanded", isExpanded);

      // আইকন পরিবর্তন করুন
      const icon = mobileMenuBtn.querySelector("i");
      if (isExpanded) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // মোবাইল মেনুর লিংকে ক্লিক করলে মেনু বন্ধ করুন
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });
    });
  }
}

// ভাষা বাটন ইনিশিয়ালাইজ করুন
function initializeLanguageButtons() {
  // ডেস্কটপ বাটন
  const desktopBtn = document.getElementById("lang-btn-desktop");
  if (desktopBtn) {
    desktopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (typeof window.toggleLanguage === "function") {
        window.toggleLanguage();
      }
    });
  }

  // মোবাইল বাটন
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

// স্মুথ স্ক্রল ইনিশিয়ালাইজ করুন
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

// পেজ লোড হওয়ার পর হেডার এবং ফুটার লোড করুন
document.addEventListener("DOMContentLoaded", async function () {
  // হেডার লোড করুন
  await loadComponent("header-placeholder", "./component/header.html");

  // ফুটার লোড করুন
  await loadComponent("footer-placeholder", "./component/footer.html");

  // একটু অপেক্ষা করুন যাতে DOM আপডেট হয়
  setTimeout(() => {
    // কম্পোনেন্ট লোড হওয়ার পর সব ইনিশিয়ালাইজ করুন
    initializeMobileMenu();
    initializeLanguageButtons();
    initializeSmoothScroll();

    // ভাষা আপডেট করুন
    if (typeof window.updateContent === "function") {
      window.updateContent();
    }
  }, 100);
});
