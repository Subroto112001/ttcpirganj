// --- TRANSLATION DATA ---
// --- TRANSLATION DATA ---
const translations = {
  bn: {
    page_title: "নোটিশ বোর্ড | কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ",
    header_title: "কারিগরি প্রশিক্ষণ কেন্দ্র",
    header_subtitle: "পীরগঞ্জ, রংপুর",
    
    // Navigation (Updated)
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

    // Notices
    badge_new: "নতুন",
    n1_title: "আগস্ট-নভেম্বর/২০২৫ সেশনে ভর্তি",
    n1_desc:
      "ASSET প্রকল্পের আওতায় ০৩ মাস/৩৬০ ঘন্টা মেয়াদী প্রশিক্ষণ কোর্সে ভর্তির জন্য আবেদন আহ্বান করা হচ্ছে।",
    download_pdf: "পিডিএফ ডাউনলোড",
    view_details: "বিস্তারিত",

    badge_result: "ফলাফল",
    n2_title: "৭ম সাইকেল চূড়ান্ত ফলাফল",
    n2_desc: "৭ম সাইকেল প্রশিক্ষণের চূড়ান্ত ফলাফল প্রকাশ করা হয়েছে।",

    badge_exam: "পরীক্ষা",
    n3_title: "লিখিত পরীক্ষার ফলাফল",
    n3_desc: "আগামী সেশনের লিখিত পরীক্ষার ফলাফল প্রকাশ করা হয়েছে।",

    n4_title: "RPL প্রোগ্রাম চালু",
    n4_desc: "অভিজ্ঞ কর্মীদের জন্য Recognition of Prior Learning প্রোগ্রাম।",
    apply_now: "আবেদন করুন",

    badge_job: "চাকরি",
    n5_title: "দেশ-বিদেশ চাকরির সুযোগ",
    n5_desc: "প্রশিক্ষণপ্রাপ্ত প্রশিক্ষণার্থীদের জন্য চাকরির সুযোগ।",

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
    
    // Navigation (Updated)
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

    // Notices
    badge_new: "New",
    n1_title: "Admission for Aug-Nov 2025 Session",
    n1_desc:
      "Applications invited for 03 months/360 hours training course under ASSET project.",
    download_pdf: "Download PDF",
    view_details: "Details",

    badge_result: "Result",
    n2_title: "7th Cycle Final Result",
    n2_desc: "Final result of 7th cycle training has been published.",

    badge_exam: "Exam",
    n3_title: "Written Exam Result",
    n3_desc: "Written exam result for next session has been published.",

    n4_title: "RPL Program Launched",
    n4_desc: "Recognition of Prior Learning program for experienced workers.",
    apply_now: "Apply Now",

    badge_job: "Job",
    n5_title: "Job Opportunities",
    n5_desc: "Job opportunities for trained trainees in home and abroad.",

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
// --- GLOBAL STATE & FUNCTIONS ---
let currentLang = localStorage.getItem("lang") || "bn";

// Global function for the language toggle button
window.toggleLanguage = function () {
  currentLang = currentLang === "bn" ? "en" : "bn";
  localStorage.setItem("lang", currentLang);
  updateContent();
};

function updateContent() {
  // 1. Update Static Text
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  // 2. Update Placeholders (for search input)
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[currentLang][key]) {
      element.setAttribute("placeholder", translations[currentLang][key]);
    }
  });

  // 3. Update HTML Lang attribute
  document.documentElement.lang = currentLang;

  // 4. Update Toggle Button Text
  const btnText = currentLang === "bn" ? "ENGLISH" : "বাংলা";
  const btnTextMobile = currentLang === "bn" ? "EN" : "BN";

  const desktopBtn = document.getElementById("lang-btn-text-desktop");
  const mobileBtn = document.getElementById("lang-btn-text-mobile");

  if (desktopBtn) desktopBtn.innerText = btnText;
  if (mobileBtn) mobileBtn.innerText = btnTextMobile;

  // 5. Trigger Search Input Event to update Dynamic Counter text
  const searchInput = document.querySelector('input[type="text"]');
  if (searchInput) {
    searchInput.dispatchEvent(new Event("input"));
  }
}

// --- DOM CONTENT LOADED (Search & Interactive Logic) ---
document.addEventListener("DOMContentLoaded", () => {
  // --- SELECTORS ---
  const searchInput = document.querySelector('input[type="text"]');
  const noticeContainer = document.querySelector(".grid.gap-6");
  const noticeCards = document.querySelectorAll(".grid.gap-6 > div");
  const countElement = document.querySelector('[data-i18n="notice_count"]');
  const paginationLinks = document.querySelectorAll("nav a");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // --- INITIAL RENDER ---
  updateContent();

  // --- MOBILE MENU LOGIC ---
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      const isExpanded = mobileMenu.classList.contains("active");

      // Change icon
      const icon = mobileMenuBtn.querySelector("i");
      if (isExpanded) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // --- SEARCH FUNCTIONALITY ---
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      let visibleCount = 0;

      noticeCards.forEach((card) => {
        const title = card.querySelector("h3")?.innerText.toLowerCase() || "";
        const desc = card.querySelector("p")?.innerText.toLowerCase() || "";
        const date =
          card.querySelector(".uppercase")?.innerText.toLowerCase() || "";

        if (
          title.includes(searchTerm) ||
          desc.includes(searchTerm) ||
          date.includes(searchTerm)
        ) {
          card.classList.remove("hidden");
          card.classList.add("flex");
          visibleCount++;
        } else {
          card.classList.add("hidden");
          card.classList.remove("flex");
        }
      });

      updateCounter(visibleCount);
      handleNoResults(visibleCount);
    });
  }

  // --- UPDATE COUNTER ---
  function updateCounter(count) {
    if (!countElement) return;

    const displayCount =
      currentLang === "bn" ? convertToBanglaNumber(count) : count;
    const textLabel =
      currentLang === "bn" ? "সর্বমোট বিজ্ঞপ্তি" : "Total Notices";

    if (currentLang === "bn") {
      countElement.innerText = `${textLabel}: ${displayCount} টি`;
    } else {
      countElement.innerText = `${textLabel}: ${displayCount}`;
    }
  }

  // Helper: Convert English digits to Bangla
  function convertToBanglaNumber(number) {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return number
      .toString()
      .split("")
      .map((digit) => banglaDigits[digit] || digit)
      .join("");
  }

  // --- HANDLE NO RESULTS ---
  function handleNoResults(count) {
    let noResultMsg = document.getElementById("no-result-msg");

    if (count === 0) {
      if (!noResultMsg) {
        noResultMsg = document.createElement("div");
        noResultMsg.id = "no-result-msg";
        noResultMsg.className =
          "text-center py-10 text-gray-500 col-span-full animate-fade-in";
        const msgText =
          currentLang === "bn"
            ? "দুঃখিত, কোনো বিজ্ঞপ্তি পাওয়া যায়নি।"
            : "Sorry, no notices found.";
        noResultMsg.innerHTML = `
                    <i class="fas fa-search-minus text-4xl mb-3 text-gray-300"></i>
                    <p class="text-xl">${msgText}</p>
                `;
        noticeContainer.appendChild(noResultMsg);
      }
      noResultMsg.style.display = "block";
      // Update message text dynamically if lang changes while showing no results
      const msgText =
        currentLang === "bn"
          ? "দুঃখিত, কোনো বিজ্ঞপ্তি পাওয়া যায়নি।"
          : "Sorry, no notices found.";
      noResultMsg.querySelector("p").innerText = msgText;
    } else {
      if (noResultMsg) {
        noResultMsg.style.display = "none";
      }
    }
  }

  // --- PAGINATION INTERACTION (Visual Only) ---
  paginationLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      paginationLinks.forEach((l) => {
        l.classList.remove("bg-purple-600", "text-white", "shadow-lg");
        l.classList.add(
          "border",
          "border-gray-300",
          "hover:bg-purple-600",
          "hover:text-white"
        );
        if (l.querySelector("i")) {
          l.classList.remove("bg-purple-600", "text-white");
        }
      });
      if (!link.querySelector("i")) {
        link.classList.remove(
          "border",
          "border-gray-300",
          "hover:bg-purple-600",
          "hover:text-white"
        );
        link.classList.add("bg-purple-600", "text-white", "shadow-lg");
      }
    });
  });
});
