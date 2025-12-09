// --- TRANSLATION DATA ---
const contactTranslations = {
  bn: {
    page_title: "যোগাযোগ | টিটিসি পীরগঞ্জ",
    hero_title: "যোগাযোগ করুন",
    header_title: "কারিগরি প্রশিক্ষণ কেন্দ্র",
    header_subtitle: "পীরগঞ্জ, রংপুর",
    nav_home: "হোম",
    nav_contact: "যোগাযোগ",

    // Info Cards
    info_address_title: "ঠিকানা",
    info_address_desc: "মকিমপুর, পীরগঞ্জ, রংপুর, বাংলাদেশ।",
    info_contact_title: "সরাসরি যোগাযোগ",
    info_hours_title: "অফিস সময়",
    day_sun_thu: "রবি - বৃহস্পতি:",
    day_fri_sat: "শুক্র - শনি:",
    closed: "বন্ধ",

    // Form
    form_title: "আমাদের বার্তা পাঠান",
    label_name: "আপনার নাম",
    label_phone: "মোবাইল নম্বর",
    label_email: "ইমেইল (অপশনাল)",
    label_message: "আপনার বার্তা",
    btn_send: "বার্তা পাঠান",
    map_label: "গুগল ম্যাপে দেখুন",

    // Alerts
    success_msg: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।",

    // Footer & Header Translations
    nav_about: "আমাদের সম্পর্কে",
    nav_courses: "কোর্স",
    nav_management: "ব্যবস্থাপনা",
    nav_gallery: "গ্যালারি",
    nav_notice: "নোটিশ",
    footer_copy:
      "&copy; ২০২৫ কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ। সর্বস্বত্ব সংরক্ষিত।",
  },
  en: {
    page_title: "Contact Us | TTC Pirganj",
    hero_title: "Contact Us",
    header_title: "Technical Training Center",
    header_subtitle: "Pirganj, Rangpur",
    nav_home: "Home",
    nav_contact: "Contact",

    // Info Cards
    info_address_title: "Address",
    info_address_desc: "Mokimpur, Pirganj, Rangpur, Bangladesh.",
    info_contact_title: "Direct Contact",
    info_hours_title: "Office Hours",
    day_sun_thu: "Sun - Thu:",
    day_fri_sat: "Fri - Sat:",
    closed: "Closed",

    // Form
    form_title: "Send Us a Message",
    label_name: "Your Name",
    label_phone: "Mobile Number",
    label_email: "Email (Optional)",
    label_message: "Your Message",
    btn_send: "Send Message",
    map_label: "View on Google Maps",

    // Alerts
    success_msg:
      "Your message has been sent successfully! We will contact you soon.",

    // Footer & Header Translations
    nav_about: "About Us",
    nav_courses: "Courses",
    nav_management: "Management",
    nav_gallery: "Gallery",
    nav_notice: "Notices",
    footer_copy:
      "&copy; 2025 Technical Training Center, Pirganj. All rights reserved.",
  },
};

let currentContactLang = localStorage.getItem("lang") || "bn";

// --- FUNCTIONS ---

// 1. Initialize
function initContactPage() {
  renderContactPage();
  setupForm();
  // Note: We do NOT run setupMobileMenu here because your global loader.js handles it.
}

// 2. Render Text
function renderContactPage() {
  currentContactLang = localStorage.getItem("lang") || "bn";
  const t = contactTranslations[currentContactLang];

  // Update Document Title
  document.title = t.page_title;
  document.documentElement.lang = currentContactLang;

  // Update Text Content (Handles both Page content AND Header/Footer)
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (t[key]) {
      element.innerText = t[key];
    }
  });

  // Update Form Placeholders
  const nameInput = document.querySelector('input[type="text"]');
  const phoneInput = document.querySelector('input[type="tel"]');
  const msgInput = document.querySelector("textarea");

  if (nameInput)
    nameInput.placeholder =
      currentContactLang === "bn" ? "আপনার নাম লিখুন..." : "Enter your name...";
  if (phoneInput)
    phoneInput.placeholder =
      currentContactLang === "bn" ? "০১৭XXXXXXXX" : "017XXXXXXXX";
  if (msgInput)
    msgInput.placeholder =
      currentContactLang === "bn"
        ? "আপনার বিস্তারিত বার্তা এখানে লিখুন..."
        : "Write your detailed message here...";

  // Update Language Button Text (Syncs with Header)
  const btnText = currentContactLang === "bn" ? "ENGLISH" : "বাংলা";
  const desktopBtn = document.getElementById("lang-btn-text-desktop");
  const mobileBtn = document.getElementById("lang-btn-text-mobile");

  if (desktopBtn) desktopBtn.innerText = btnText;
  if (mobileBtn)
    mobileBtn.innerText = currentContactLang === "bn" ? "EN" : "BN";
}

// 3. Form Logic
function setupForm() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Mock Submission Animation
      const btn = form.querySelector("button[type='submit']");
      const originalText = btn.innerHTML;

      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      btn.disabled = true;

      setTimeout(() => {
        alert(contactTranslations[currentContactLang].success_msg);
        form.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 1500);
    });
  }
}

// 4. Global Toggle Hook
// This is called by your loader.js when the language button is clicked
window.toggleLanguage = function () {
  const newLang = currentContactLang === "bn" ? "en" : "bn";
  localStorage.setItem("lang", newLang);
  currentContactLang = newLang;

  // Update the page content
  renderContactPage();

  // If there are other global update functions, trigger them here
  if (
    typeof window.updateContent === "function" &&
    window.updateContent !== renderContactPage
  ) {
    window.updateContent();
  }
};

// Expose update function so loader.js can call it after loading the header
window.updateContent = renderContactPage;

// Run on Load
document.addEventListener("DOMContentLoaded", initContactPage);
