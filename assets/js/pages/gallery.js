// --- TRANSLATION DATA ---
const translations = {
  bn: {
    page_title: "গ্যালারি | টিটিসি পীরগঞ্জ",
    gallery_hero_title: "ফটো গ্যালারি",
    header_title: "কারিগরি প্রশিক্ষণ কেন্দ্র",
    header_subtitle: "পীরগঞ্জ, রংপুর",
    nav_home: "হোম",
    nav_gallery: "গ্যালারি",
    filter_all: "সকল ছবি",
    filter_campus: "ক্যাম্পাস",
    filter_events: "ইভেন্ট ও কার্যক্রম",
    filter_team: "শিক্ষক ও স্টাফ",
    no_images: "কোনো ছবি পাওয়া যায়নি।",

    // Captions
    cap_campus_view: "ক্যাম্পাস দৃশ্য",
    cap_workshop: "ওয়ার্কশপ ও প্রশিক্ষণ",
    cap_events: "বিভিন্ন ইভেন্ট",
    cap_team: "আমাদের টিম",

    // Footer & Header (Required for consistency)
    nav_about: "আমাদের সম্পর্কে",
    nav_courses: "কোর্স",
    nav_management: "ব্যবস্থাপনা",
    nav_contact: "যোগাযোগ",
    nav_notice: "নোটিশ",
    footer_copy:
      "&copy; ২০২৫ কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ। সর্বস্বত্ব সংরক্ষিত।",
  },
  en: {
    page_title: "Gallery | TTC Pirganj",
    gallery_hero_title: "Photo Gallery",
    header_title: "Technical Training Center",
    header_subtitle: "Pirganj, Rangpur",
    nav_home: "Home",
    nav_gallery: "Gallery",
    filter_all: "All Photos",
    filter_campus: "Campus",
    filter_events: "Events & Activities",
    filter_team: "Instructors & Staff",
    no_images: "No images found.",

    // Captions
    cap_campus_view: "Campus View",
    cap_workshop: "Workshop & Training",
    cap_events: "Various Events",
    cap_team: "Our Team",

    // Footer & Header
    nav_about: "About Us",
    nav_courses: "Courses",
    nav_management: "Management",
    nav_contact: "Contact",
    nav_notice: "Notice",
    footer_copy:
      "&copy; 2025 Technical Training Center, Pirganj. All rights reserved.",
  },
};

// --- IMAGE DATA (Collected from your files) ---
const galleryData = [
  // 1. Campus Images (From Index Hero & About)
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-22.31.43_498ace3a.jpg",
    category: "campus",
    caption: { bn: "টিটিসি প্রধান ভবন", en: "TTC Main Building" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2024/08/404695214_301384866134322_6272328714629949831_n.jpg",
    category: "campus",
    caption: { bn: "একাডেমিক ভবন", en: "Academic Building" },
  },

  // 2. Events & Activities (From Index Gallery Section)
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/08/20240924_124058-300x225.jpg",
    category: "events",
    caption: { bn: "শ্রেণিকক্ষ কার্যক্রম", en: "Classroom Activities" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-01-01-at-6.45.52-PM-768x346.jpeg",
    category: "events",
    caption: { bn: "সেমিনার", en: "Seminar" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/08/20240630_161152-768x576.jpg",
    category: "events",
    caption: { bn: "ব্যবহারিক ক্লাস", en: "Practical Class" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/08/WhatsApp-Image-2024-09-30-at-22.53.03_f2683b4a-1024x768.jpg",
    category: "events",
    caption: { bn: "ল্যাব কার্যক্রম", en: "Lab Activities" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/08/IMG-20240803-WA0002-768x576.jpg",
    category: "events",
    caption: { bn: "ছাত্র সমাবেশ", en: "Student Assembly" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/08/20240812_154029-1024x768.jpg",
    category: "events",
    caption: { bn: "কম্পিউটার ল্যাব", en: "Computer Lab" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/08/IMG-20241119-WA00051-1024x575.jpg",
    category: "events",
    caption: { bn: "পরিদর্শন", en: "Visit" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-01-01-at-2.07.47-PM1-1024x461.jpeg",
    category: "events",
    caption: { bn: "পুরস্কার বিতরণী", en: "Prize Giving" },
  },

  // 3. Team (From Management Page)
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/11/Principal-sir-pic-1617x2048.jpg",
    category: "team",
    caption: { bn: "অধ্যক্ষ মহোদয়", en: "Honorable Principal" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/08/Screenshot-2025-08-03-011853-768x675.png",
    category: "team",
    caption: { bn: "প্রশাসনিক কর্মকর্তা", en: "Administrative Officer" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.02.56_0e3a7b9f-767x1024.jpg",
    category: "team",
    caption: { bn: "ইলেকট্রিক্যাল ইন্সট্রাক্টর", en: "Electrical Instructor" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-18-at-16.22.38_0a0ab5f3-276x300.jpg",
    category: "team",
    caption: { bn: "কম্পিউটার ইন্সট্রাক্টর", en: "Computer Instructor" },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.08.12_9bbe1725-250x300.jpg",
    category: "team",
    caption: {
      bn: "মোবাইল সার্ভিসিং ইন্সট্রাক্টর",
      en: "Mobile Servicing Instructor",
    },
  },
  {
    src: "https://ttcpirganj.com/wp-content/uploads/2025/11/muna-240x300.jpg",
    category: "team",
    caption: { bn: "ড্রাইভিং ইন্সট্রাক্টর", en: "Driving Instructor" },
  },
];

let currentLang = localStorage.getItem("lang") || "bn";

// --- FUNCTIONS ---

// 1. Initialize & Render
function initGallery() {
  renderImages("all");
  setupFilters();
  window.updateContent(); // Trigger text translation
}

// 2. Render Images
function renderImages(filter) {
  const grid = document.getElementById("gallery-grid");
  const noResults = document.getElementById("no-results");

  grid.innerHTML = "";

  const filteredData =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  if (filteredData.length === 0) {
    noResults.classList.remove("hidden");
  } else {
    noResults.classList.add("hidden");

    filteredData.forEach((item, index) => {
      const delay = index * 50; // Staggered animation

      const card = document.createElement("div");
      card.className = `group relative overflow-hidden rounded-xl shadow-md cursor-pointer bg-gray-100 aspect-[4/3] animate-fade-up`;
      card.style.animationDelay = `${delay}ms`;

      card.innerHTML = `
                <img src="${item.src}" alt="${item.caption[currentLang]}" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     loading="lazy">
                
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p class="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        ${item.caption[currentLang]}
                    </p>
                </div>
            `;

      // Add Click Event for Modal
      card.addEventListener("click", () =>
        openModal(item.src, item.caption[currentLang])
      );

      grid.appendChild(card);
    });
  }
}

// 3. Filter Logic
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update Active State
      buttons.forEach((b) =>
        b.classList.remove(
          "active",
          "bg-purple-600",
          "text-white",
          "border-purple-600"
        )
      );
      buttons.forEach((b) =>
        b.classList.add("border-gray-300", "text-gray-600")
      );

      btn.classList.remove("border-gray-300", "text-gray-600");
      btn.classList.add(
        "active",
        "bg-purple-600",
        "text-white",
        "border-purple-600"
      );

      // Render
      renderImages(btn.getAttribute("data-filter"));
    });
  });
}

// 4. Modal Logic
function openModal(src, caption) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalCap = document.getElementById("modalCaption");

  modalImg.src = src;
  modalCap.innerText = caption;

  modal.classList.remove("hidden");
  // Trigger reflow
  void modal.offsetWidth;

  modal.classList.remove("opacity-0");
  modalImg.classList.remove("scale-95");
  modalImg.classList.add("scale-100");

  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  modal.classList.add("opacity-0");
  modalImg.classList.remove("scale-100");
  modalImg.classList.add("scale-95");

  setTimeout(() => {
    modal.classList.add("hidden");
    document.getElementById("modalImage").src = "";
    document.body.style.overflow = "";
  }, 300);
}

// Modal Event Listeners
const closeModalBtn = document.getElementById("closeModal");
const modalOverlay = document.getElementById("imageModal");

if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
    closeModal();
  }
});

// 5. Global Update Function (For Language Toggle)
window.updateContent = function () {
  currentLang = localStorage.getItem("lang") || "bn";
  document.documentElement.lang = currentLang;

  // Update Static Text
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  // Update Filter Button Text
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    const key = btn.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      btn.innerText = translations[currentLang][key];
    }
  });

  // Re-render grid to update captions
  const activeBtn = document.querySelector(".filter-btn.active");
  const currentFilter = activeBtn
    ? activeBtn.getAttribute("data-filter")
    : "all";
  renderImages(currentFilter);

  // Update Toggle Button Text (Syncs with loader.js)
  const btnText = currentLang === "bn" ? "ENGLISH" : "বাংলা";
  const btnTextMobile = currentLang === "bn" ? "EN" : "BN";
  const desktopBtn = document.getElementById("lang-btn-text-desktop");
  const mobileBtn = document.getElementById("lang-btn-text-mobile");
  if (desktopBtn) desktopBtn.innerText = btnText;
  if (mobileBtn) mobileBtn.innerText = btnTextMobile;
};

// 6. Toggle Language
window.toggleLanguage = function () {
  const newLang = currentLang === "bn" ? "en" : "bn";
  localStorage.setItem("lang", newLang);
  window.updateContent();
};

// Run on Load
document.addEventListener("DOMContentLoaded", initGallery);
