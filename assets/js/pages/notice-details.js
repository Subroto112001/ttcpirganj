// --- TRANSLATION DATA ---
const translations = {
  bn: {
    page_title: "নোটিশ বিস্তারিত | টিটিসি পীরগঞ্জ",
    details_hero_title: "নোটিশ বিস্তারিত",
    details_hero_desc: "গুরুত্বপূর্ণ নোটিশের সম্পূর্ণ তথ্য",
    back_to_notices: "সকল নোটিশে ফিরে যান",
    download_pdf: "সম্পূর্ণ নোটিশ ডাউনলোড করুন (PDF)",
    poster_title: "নোটিশ পোস্টার",
    click_to_view: "ছবিতে ক্লিক করে বড় করে দেখুন",
    date_label: "প্রকাশের তারিখ",
    not_found_title: "নোটিশটি খুঁজে পাওয়া যায়নি!",
    not_found_desc:
      "আপনি যে নোটিশটি খুঁজছেন সেটি এই মুহূর্তে উপলব্ধ নেই অথবা তার URL ভুল রয়েছে।",
    poster_error: "পোস্টার ইমেজ উপলব্ধ নয়।",
  },
  en: {
    page_title: "Notice Details | TTC Pirganj",
    details_hero_title: "Notice Details",
    details_hero_desc: "Complete information of important notice",
    back_to_notices: "Back to All Notices",
    download_pdf: "Download Full Notice (PDF)",
    poster_title: "Notice Poster",
    click_to_view: "Click image to view larger",
    date_label: "Published Date",
    not_found_title: "Notice Not Found!",
    not_found_desc:
      "The notice you are looking for is currently unavailable or the URL is incorrect.",
    poster_error: "Poster image not available.",
  },
};

// --- GLOBAL STATE ---
let currentLang = localStorage.getItem("lang") || "bn";

// --- TOGGLE LANGUAGE ---
window.toggleLanguage = function () {
  const currentLang = localStorage.getItem("lang") || "bn";
  const newLang = currentLang === "bn" ? "en" : "bn";
  localStorage.setItem("lang", newLang);

  // Update content immediately
  if (typeof window.updateContent === "function") {
    window.updateContent();
  }
};

// --- UPDATE CONTENT ---
window.updateContent = function () {
  currentLang = localStorage.getItem("lang") || "bn";

  // Update all text elements
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;

  // Update language toggle button
  const btnText = currentLang === "bn" ? "ENGLISH" : "বাংলা";
  const btnTextMobile = currentLang === "bn" ? "EN" : "BN";
  const desktopBtn = document.getElementById("lang-btn-text-desktop");
  const mobileBtn = document.getElementById("lang-btn-text-mobile");
  if (desktopBtn) desktopBtn.innerText = btnText;
  if (mobileBtn) mobileBtn.innerText = btnTextMobile;

  // Re-render notice details if already loaded
  if (window.currentNoticeData) {
    renderNotice(
      window.currentNoticeData.notice,
      window.currentNoticeData.categories
    );
  }
};

// --- FORMAT DATE ---
function formatDate(dateStr, lang) {
  const date = new Date(dateStr);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (lang === "bn") {
    return date.toLocaleDateString("bn-BD", options);
  }
  return date.toLocaleDateString("en-US", options);
}

// --- DOM CONTENT LOADED ---
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const noticeId = urlParams.get("id");

  const noticeContentContainer = document.getElementById(
    "notice-content-container"
  );
  const notFoundMessage = document.getElementById("not-found-message");

  // যদি কোনো ID না থাকে
  if (!noticeId) {
    if (noticeContentContainer) noticeContentContainer.classList.add("hidden");
    if (notFoundMessage) notFoundMessage.classList.remove("hidden");
    return;
  }

  // --- LOAD NOTICE DETAILS ---
  async function loadNoticeDetails(id) {
    try {
      const response = await fetch("./notices.json");
      if (!response.ok) throw new Error("Failed to load notices.json");
      const data = await response.json();

      const notice = data.notices.find((n) => n.id === parseInt(id));

      if (notice) {
        // Store data globally for language switching
        window.currentNoticeData = {
          notice: notice,
          categories: data.categories,
        };
        renderNotice(notice, data.categories);

        // Call updateContent to ensure proper language display
        window.updateContent();
      } else {
        if (noticeContentContainer)
          noticeContentContainer.classList.add("hidden");
        if (notFoundMessage) notFoundMessage.classList.remove("hidden");
      }
    } catch (error) {
      console.error("Error fetching notice details:", error);
      if (noticeContentContainer)
        noticeContentContainer.classList.add("hidden");
      if (notFoundMessage) notFoundMessage.classList.remove("hidden");
    }
  }

  // --- RENDER NOTICE ---
  function renderNotice(notice, categories) {
    const titleEl = document.getElementById("notice-title");
    const dateEl = document.getElementById("notice-date");
    const categoryEl = document.getElementById("notice-category");
    const descriptionEl = document.getElementById("notice-description");
    const downloadSectionEl = document.getElementById("download-section");
    const pdfLinkEl = document.getElementById("pdf-download-link");
    const posterSectionEl = document.getElementById("poster-section");
    const posterImgEl = document.getElementById("noticePosterImage");
    const posterErrorEl = document.getElementById("poster-error");

    // Category
    const categoryInfo = categories[notice.category] || {
      bn: "অন্যান্য",
      en: "Others",
      color: "gray",
    };

    categoryEl.textContent = categoryInfo[currentLang];
    categoryEl.className = `inline-block bg-${categoryInfo.color}-100 text-${categoryInfo.color}-800 text-sm font-semibold px-4 py-1 rounded-full mb-3`;

    // Title
    titleEl.textContent = notice.title[currentLang] || notice.title["bn"];

    // Date
    const noticeDate = formatDate(notice.date, currentLang);
    const dateLabel = translations[currentLang].date_label;
    dateEl.innerHTML = `<i class="fas fa-calendar-alt mr-1"></i> ${dateLabel}: ${noticeDate}`;

    // Description
    descriptionEl.innerHTML = notice.fullDescription
      ? notice.fullDescription[currentLang] || notice.fullDescription["bn"]
      : notice.description[currentLang] || notice.description["bn"];

    // PDF Link
    if (notice.pdfLink) {
      pdfLinkEl.href = notice.pdfLink;
      downloadSectionEl.classList.remove("hidden");
    } else {
      downloadSectionEl.classList.add("hidden");
    }

    // Poster Image
    if (notice.posterImage) {
      posterImgEl.src = notice.posterImage;
      posterSectionEl.classList.remove("hidden");
      posterErrorEl.classList.add("hidden");
      initializeImageModal();
    } else {
      posterSectionEl.classList.add("hidden");
      posterErrorEl.classList.remove("hidden");
    }
  }

  // --- IMAGE MODAL ---
  function initializeImageModal() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.getElementById("closeModal");
    const posterImg = document.getElementById("noticePosterImage");

    if (modal && modalImg && closeBtn && posterImg) {
      posterImg.addEventListener("click", () => {
        modalImg.src = posterImg.src;
        modal.classList.remove("hidden");
        setTimeout(() => {
          modal.classList.remove("opacity-0");
          modalImg.classList.remove("scale-95");
          modalImg.classList.add("scale-100");
        }, 10);
      });

      const closeModal = () => {
        modal.classList.add("opacity-0");
        modalImg.classList.remove("scale-100");
        modalImg.classList.add("scale-95");
        setTimeout(() => {
          modal.classList.add("hidden");
          modalImg.src = "";
        }, 300);
      };

      closeBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
          closeModal();
        }
      });
    }
  }

  // Start loading
  loadNoticeDetails(noticeId);
});
