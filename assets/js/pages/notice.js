// --- TRANSLATION DATA ---
const translations = {
  bn: {
    page_title: "নোটিশ বোর্ড | কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ",
    header_title: "কারিগরি প্রশিক্ষণ কেন্দ্র",
    header_subtitle: "পীরগঞ্জ, রংপুর",

    // Navigation
    nav_home: "হোম",
    nav_about: "আমাদের সম্পর্কে",
    nav_courses: "কোর্স",
    nav_management: "ব্যবস্থাপনা",
    nav_gallery: "গ্যালারি",
    nav_notice: "নোটিশ",
    nav_contact: "যোগাযোগ",

    notice_board_title: "নোটিশ বোর্ড",
    search_placeholder: "নোটিশ খুঁজুন...",
    notice_count_text: "সর্বমোট বিজ্ঞপ্তি",

    // Filters
    filter_all: "সব ক্যাটাগরি",
    filter_all_dates: "সব তারিখ",
    filter_7days: "শেষ ৭ দিন",
    filter_30days: "শেষ ৩০ দিন",
    filter_90days: "শেষ ৯০ দিন",

    // Categories
    cat_admission: "ভর্তি",
    cat_result: "ফলাফল",
    cat_exam: "পরীক্ষা",
    cat_rpl: "RPL",
    cat_job: "চাকরি",

    // Badges & Actions
    badge_new: "নতুন",
    download_pdf: "পিডিএফ ডাউনলোড",
    view_details: "বিস্তারিত",
    apply_now: "আবেদন করুন",
    no_results: "দুঃখিত, কোনো বিজ্ঞপ্তি পাওয়া যায়নি।",

    // Footer
    footer_logo_text: "টিটিসি পীরগঞ্জ",
    footer_desc: "কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ, রংপুর",
    footer_ql_title: "দ্রুত লিংক",
    footer_contact_title: "যোগাযোগের তথ্য",
    footer_address: "মকিমপুর, পীরগঞ্জ, রংপুর",
    contact_phone_num: "+৮৮০১৮৪২১৯৬৫৬৬",
    footer_social_title: "সোশ্যাল মিডিয়া",
    footer_copy:
      "&copy; ২০২৫ কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ। সর্বস্বত্ব সংরক্ষিত।",
  },
  en: {
    page_title: "Notice Board | TTC Pirganj",
    header_title: "Technical Training Center",
    header_subtitle: "Pirganj, Rangpur",

    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_courses: "Courses",
    nav_management: "Management",
    nav_gallery: "Gallery",
    nav_notice: "Notices",
    nav_contact: "Contact",

    notice_board_title: "Notice Board",
    search_placeholder: "Search notices...",
    notice_count_text: "Total Notices",

    // Filters
    filter_all: "All Categories",
    filter_all_dates: "All Dates",
    filter_7days: "Last 7 Days",
    filter_30days: "Last 30 Days",
    filter_90days: "Last 90 Days",

    // Categories
    cat_admission: "Admission",
    cat_result: "Result",
    cat_exam: "Exam",
    cat_rpl: "RPL",
    cat_job: "Job",

    // Badges & Actions
    badge_new: "New",
    download_pdf: "Download PDF",
    view_details: "Details",
    apply_now: "Apply Now",
    no_results: "Sorry, no notices found.",

    // Footer
    footer_logo_text: "TTC Pirganj",
    footer_desc: "Technical Training Center, Pirganj, Rangpur",
    footer_ql_title: "Quick Links",
    footer_contact_title: "Contact Info",
    footer_address: "Mokimpur, Pirganj, Rangpur",
    contact_phone_num: "+8801842196566",
    footer_social_title: "Social Media",
    footer_copy:
      "&copy; 2025 Technical Training Center, Pirganj. All rights reserved.",
  },
};

// --- GLOBAL STATE ---
let currentLang = localStorage.getItem("lang") || "bn";
let allNotices = [];
let categoriesData = {};

// --- TOGGLE LANGUAGE (RESTORED) ---
// This function is required because loader.js calls window.toggleLanguage()
window.toggleLanguage = function () {
  const currentLang = localStorage.getItem("lang") || "bn";
  const newLang = currentLang === "bn" ? "en" : "bn";

  localStorage.setItem("lang", newLang);

  // Update content immediately
  if (typeof window.updateContent === "function") {
    window.updateContent();
  }
};

// --- UPDATE CONTENT (Overwrites loader.js version for this page) ---
window.updateContent = function () {
  // 1. Get the latest language from storage
  currentLang = localStorage.getItem("lang") || "bn";

  // 2. Update all standard text elements (header/footer/static)
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  // 3. Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[currentLang][key]) {
      element.setAttribute("placeholder", translations[currentLang][key]);
    }
  });

  // 4. Update Filter Dropdown Options
  populateFilters();

  // 5. Re-render the Dynamic Notice List
  renderNotices(filterNotices());

  // 6. Update HTML lang attribute
  document.documentElement.lang = currentLang;

  // 7. Update language toggle button text
  const btnText = currentLang === "bn" ? "ENGLISH" : "বাংলা";
  const btnTextMobile = currentLang === "bn" ? "EN" : "BN";
  const desktopBtn = document.getElementById("lang-btn-text-desktop");
  const mobileBtn = document.getElementById("lang-btn-text-mobile");
  if (desktopBtn) desktopBtn.innerText = btnText;
  if (mobileBtn) mobileBtn.innerText = btnTextMobile;
};

// --- LOAD NOTICES FROM JSON ---
async function loadNotices() {
  try {
    const response = await fetch("./notices.json");
    const data = await response.json();
    allNotices = data.notices;
    categoriesData = data.categories;
    // Initial Render
    renderNotices(allNotices);
    populateFilters();
    // Update content to ensure static text matches loaded lang
    window.updateContent();
  } catch (error) {
    console.error("Error loading notices:", error);
    showNoResults();
  }
}

// --- POPULATE FILTER DROPDOWNS ---
function populateFilters() {
  const categoryFilter = document.getElementById("category-filter");
  if (!categoryFilter) return;

  const currentSelection = categoryFilter.value; // Save selection

  // Clear existing options except "All"
  categoryFilter.innerHTML = `<option value="all" data-i18n="filter_all">${translations[currentLang].filter_all}</option>`;

  // Add category options
  if (categoriesData) {
    Object.keys(categoriesData).forEach((catKey) => {
      const option = document.createElement("option");
      option.value = catKey;
      option.textContent = categoriesData[catKey][currentLang];
      option.setAttribute("data-cat", catKey);
      categoryFilter.appendChild(option);
    });
  }

  // Restore selection if valid, otherwise default to all
  categoryFilter.value = currentSelection;
}

// --- FORMAT DATE ---
function formatDate(dateStr, lang) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const monthNames = {
    bn: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    en: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };
  const month = monthNames[lang][date.getMonth()];
  const year = date.getFullYear();

  if (lang === "bn") {
    return {
      day: convertToBanglaNumber(day),
      month: month,
      year: convertToBanglaNumber(year),
    };
  }
  return { day, month, year };
}

// --- CONVERT TO BANGLA NUMBER ---
function convertToBanglaNumber(number) {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number
    .toString()
    .split("")
    .map((digit) => banglaDigits[digit] || digit)
    .join("");
}

// --- GET CATEGORY STYLES ---
function getCategoryStyles(category) {
  const colors = {
    red: { bg: "red-50", text: "red-600", border: "red-500" },
    blue: { bg: "blue-50", text: "blue-600", border: "purple-500" },
    green: { bg: "green-50", text: "green-600", border: "green-500" },
    purple: { bg: "gray-100", text: "gray-600", border: "gray-300" },
    orange: { bg: "orange-50", text: "orange-600", border: "orange-400" },
  };

  const categoryColor = categoriesData[category]?.color || "gray";
  return colors[categoryColor] || colors.purple;
}

// --- RENDER NOTICES ---
function renderNotices(notices) {
  const container = document.getElementById("notices-container");

  if (!notices || notices.length === 0) {
    showNoResults();
    updateCounter(0);
    return;
  }

  container.innerHTML = notices
    .map((notice) => {
      const dateInfo = formatDate(notice.date, currentLang);
      const styles = getCategoryStyles(notice.category);
      const categoryName =
        categoriesData[notice.category]?.[currentLang] || notice.category;

      let actionButtons = "";
      if (notice.pdfLink) {
        actionButtons += `
        <a href="${notice.pdfLink}" class="text-purple-600 font-semibold hover:text-purple-800 transition flex items-center">
          <i class="fas fa-file-pdf mr-2"></i> <span>${translations[currentLang].download_pdf}</span>
        </a>`;
      }
      if (notice.detailsLink) {
        actionButtons += `
        <a href="${notice.detailsLink}" class="text-gray-500 font-semibold hover:text-gray-700 transition flex items-center ml-4">
          <i class="fas fa-eye mr-2"></i> <span>${translations[currentLang].view_details}</span>
        </a>`;
      }
      if (notice.applyLink) {
        actionButtons += `
        <a href="${notice.applyLink}" class="text-purple-600 font-semibold hover:text-purple-800 transition flex items-center">
          <i class="fas fa-external-link-alt mr-2"></i> <span>${translations[currentLang].apply_now}</span>
        </a>`;
      }

      return `
      <div class="bg-white border-l-4 border-${
        styles.border
      } rounded-lg shadow-md p-6 card-hover animate-fade-in flex flex-col md:flex-row gap-6 items-start">
        <div class="bg-${styles.bg} p-4 rounded-lg text-center min-w-[100px]">
          <span class="block text-3xl font-bold text-${styles.text}">${
        dateInfo.day
      }</span>
          <span class="block text-sm text-${styles.text} uppercase">${
        dateInfo.month
      } ${dateInfo.year}</span>
        </div>
        <div class="flex-grow">
          <div class="flex flex-wrap items-center gap-3 mb-2">
            ${
              notice.isNew
                ? `<span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">${translations[currentLang].badge_new}</span>`
                : ""
            }
            <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
              <i class="fas fa-folder mr-1"></i> ${categoryName}
            </span>
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition cursor-pointer">
            ${notice.title[currentLang]}
          </h3>
          <p class="text-gray-600 mb-4">${notice.description[currentLang]}</p>
          <div class="flex gap-4 flex-wrap">
            ${actionButtons}
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  updateCounter(notices.length);
}

// --- SHOW NO RESULTS ---
function showNoResults() {
  const container = document.getElementById("notices-container");
  container.innerHTML = `
    <div class="text-center py-10 text-gray-500 col-span-full animate-fade-in">
      <i class="fas fa-search-minus text-4xl mb-3 text-gray-300"></i>
      <p class="text-xl">${translations[currentLang].no_results}</p>
    </div>
  `;
}

// --- UPDATE COUNTER ---
function updateCounter(count) {
  const countElement = document.getElementById("notice-count");
  if (!countElement) return;

  const displayCount =
    currentLang === "bn" ? convertToBanglaNumber(count) : count;
  const textLabel = translations[currentLang].notice_count_text;

  if (currentLang === "bn") {
    countElement.innerText = `${textLabel}: ${displayCount} টি`;
  } else {
    countElement.innerText = `${textLabel}: ${displayCount}`;
  }
}

// --- FILTER NOTICES ---
function filterNotices() {
  const searchTerm =
    document.getElementById("search-input")?.value.toLowerCase().trim() || "";
  const categoryFilter =
    document.getElementById("category-filter")?.value || "all";
  const dateFilter = document.getElementById("date-filter")?.value || "all";

  let filtered = [...allNotices];

  // Category filter
  if (categoryFilter !== "all") {
    filtered = filtered.filter((notice) => notice.category === categoryFilter);
  }

  // Date filter
  if (dateFilter !== "all") {
    const now = new Date();
    const days = parseInt(dateFilter);
    const cutoffDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

    filtered = filtered.filter((notice) => {
      const noticeDate = new Date(notice.date);
      return noticeDate >= cutoffDate;
    });
  }

  // Search filter
  if (searchTerm) {
    filtered = filtered.filter((notice) => {
      const title = notice.title[currentLang].toLowerCase();
      const desc = notice.description[currentLang].toLowerCase();
      return title.includes(searchTerm) || desc.includes(searchTerm);
    });
  }

  return filtered;
}

// --- DOM CONTENT LOADED ---
document.addEventListener("DOMContentLoaded", () => {
  // Load initial content
  loadNotices();
  // We call loadNotices first, which fetches data and then calls updateContent.

  // Event Listeners for filters
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderNotices(filterNotices());
    });
  }

  const categoryFilter = document.getElementById("category-filter");
  if (categoryFilter) {
    categoryFilter.addEventListener("change", () => {
      renderNotices(filterNotices());
    });
  }

  const dateFilter = document.getElementById("date-filter");
  if (dateFilter) {
    dateFilter.addEventListener("change", () => {
      renderNotices(filterNotices());
    });
  }

  // Visual Pagination
  const paginationLinks = document.querySelectorAll(".pagination-nav a");
  paginationLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      paginationLinks.forEach((l) => {
        l.classList.remove("bg-purple-600", "text-white", "shadow-lg");
        l.classList.add("border", "border-gray-300");
      });
      if (!link.querySelector("i")) {
        link.classList.remove("border", "border-gray-300");
        link.classList.add("bg-purple-600", "text-white", "shadow-lg");
      }
    });
  });
});
