
// --- Mobile Menu Logic ---
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    const isExpanded = mobileMenu.classList.contains("active");
    mobileMenuBtn.setAttribute("aria-expanded", isExpanded);

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

  // Close mobile menu when clicking on a link
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

// --- Language Switcher Logic (About Us Page Only) ---

const translations = {
  bn: {
    // Header & Nav
    about_page_title: "আমাদের সম্পর্কে | টিটিসি পীরগঞ্জ",
    skip_link: "মূল কন্টেন্টে যান",
    header_title: "কারিগরি প্রশিক্ষণ কেন্দ্র",
    header_subtitle: "পীরগঞ্জ, রংপুর",
    nav_home: "হোম",
    nav_about: "আমাদের সম্পর্কে",
    nav_courses: "কোর্স",
    nav_management: "ব্যবস্থাপনা",
    nav_gallery: "গ্যালারি",
    nav_contact: "যোগাযোগ",
    nav_notice: "নোটিশ",
    // About Us Page Content
    about_hero_title: "আমাদের সম্পর্কে",
    inst_intro_title: "প্রতিষ্ঠান পরিচিতি",
    inst_intro_text:
      "গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়ের জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো'র অধীনে “৪০ উপজেলায় ৪০টি টিটিসি ও রংপুরে ১টি ইনিস্টিটিউট অব মেরিন টেকনোলজি স্থাপন” শীর্ষক প্রকল্পের মাধ্যমে দক্ষতা উন্নয়ন প্রশিক্ষণ কার্যক্রম-কে তৃণমূল পর্যায়ে মানুষের দোরগোড়ায় পৌঁছানোর লক্ষ্যে উপজেলা পর্যায়ে পীরগঞ্জে নির্মিত হয় “পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র”। দেশের শিক্ষিত, অল্প শিক্ষিত ও বেকার জনসম্পদকে দক্ষ জনশক্তিতে রুপান্তরের জন্য পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র নিরলসভাবে চেষ্টা করে যাচ্ছে।",
    location_label: "অবস্থান",
    location_text: "মকিমপুর, পীরগঞ্জ, রংপুর।",
    vision_title: "রূপকল্প (Vision)",
    vision_text:
      "দক্ষতা উন্নয়ন, বৈদেশিক কর্মসংস্থান বৃদ্ধি, নিরাপদ অভিবাসন ও রেমিটেন্স এর প্রবাহ বৃদ্ধি, বেকারত্ব হ্রাস ও অর্থনৈতিক উন্নয়ন।",
    mission_title: "অভিলক্ষ্য (Mission)",
    mission_text:
      "স্থানীয় ও আন্তর্জাতিক শ্রমবাজারের চাহিদা অনুযায়ী আধুনিক প্রযুক্তি ব্যবহার করে কর্মীদের দক্ষতা উন্নয়ন প্রশিক্ষণ প্রদান।",

    // Functions
    functions_title: "কার্যাবলী",
    func_1:
      "বৈদেশিক শ্রমবাজারের চাহিদার সাথে সামঞ্জস্য রেখে দক্ষতা উন্নয়ন প্রশিক্ষণ প্রদান।",
    func_2: "সার্বিক প্রশিক্ষণ ব্যবস্থায় আধুনিক প্রযুক্তি ব্যবহার।",
    func_3: "সার্বিক প্রশিক্ষণ ব্যবস্থাকে ব্যবহারের উপযোগী পরিবেশ সৃষ্টি।",
    func_4: "বিজ্ঞপ্তি প্রচার, জনসংযোগ ও সেমিনার আয়োজন।",
    func_5: "গ্রাজুয়েটদের কর্মসংস্থান করা।",
    func_6: "ইন হাউজ প্রশিক্ষণের মাধ্যমে শিক্ষক-কর্মচারীদের দক্ষতা বৃদ্ধি।",

    // Performance Areas
    performance_title: "কর্মসম্পাদনের ক্ষেত্র",
    perf_1:
      "অভ্যন্তরীন ও বৈদেশীক কর্মসংস্থান বৃদ্ধিতে দক্ষতা উন্নয়নের প্রশিক্ষণ প্রদান।",
    perf_2: "নিরাপদ অভিবাসন ও রেমিট্যান্স প্রবাহ বৃদ্ধিতে সহায়তা প্রদান।",
    perf_3: "বৃত্তিমূলক ও কারিগরি প্রশিক্ষণ গ্রহণে উদ্বুদ্ধ করণ।",
    perf_4:
      "অবকাঠামোগত ও ল্যাব/ওয়ার্কসপ সুবিধাদি বৃদ্ধির মাধ্যমে মান উন্নয়ন।",

    // Challenges (NEW)
    challenges_title: "আমাদের চ্যালেঞ্জ",
    chal_1: "প্রশিক্ষণের মান উন্নয়ন।",
    chal_2:
      "চাকুরি ভিত্তিক এবং চাহিদা সম্পন্ন/প্রযুক্তি নির্ভর কোর্সে প্রশিক্ষণ প্রদান।",
    chal_3: "কর্মসংস্থান সর্বাধিক হারে বর্ধিতকরণ।",
    chal_4: "শিল্প সংযোগ।",
    chal_5: "প্রশিক্ষণ গ্রহণে আগ্রহ/ভর্তির সংখ্যা বৃদ্ধি।",
    chal_6: "প্রশিক্ষণে নারীদের অংশগ্রহণ বৃদ্ধি।",
    chal_7: "আন্তর্জাতিক স্বীকৃতি।",

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
    // Header & Nav
    about_page_title: "About Us | TTC Pirganj",
    skip_link: "Skip to main content",
    header_title: "Technical Training Center",
    header_subtitle: "Pirganj, Rangpur",
    nav_home: "Home",
    nav_about: "About Us",
    nav_courses: "Courses",
    nav_management: "Management",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_notice: "Notice",
    // About Us Page Content
    about_hero_title: "About Us",
    inst_intro_title: "Institute Introduction",
    inst_intro_text:
      "Under the Ministry of Expatriates' Welfare and Overseas Employment, the 'Pirganj Technical Training Center' was established to bring skill development training to the grassroots level through the project titled 'Establishment of 40 TTCs in 40 Upazilas and 1 Institute of Marine Technology in Rangpur'. Pirganj TTC is working tirelessly to transform the country's educated, semi-educated, and unemployed population into skilled human resources.",
    location_label: "Location",
    location_text: "Mokimpur, Pirganj, Rangpur.",
    vision_title: "Vision",
    vision_text:
      "Skill development, increasing overseas employment, ensuring safe migration, increasing remittance flow, reducing unemployment, and economic development.",
    mission_title: "Mission",
    mission_text:
      "Providing skill development training using modern technology according to local and international labor market demands.",

    // Functions
    functions_title: "Functions",
    func_1:
      "Providing skill development training consistent with foreign labor market demands.",
    func_2: "Using modern technology in the overall training system.",
    func_3:
      "Creating an environment suitable for using the overall training system.",
    func_4: "Publicity, public relations, and organizing seminars.",
    func_5: "Arranging employment for graduates.",
    func_6:
      "Increasing the skills of teachers and staff through in-house training.",

    // Performance Areas
    performance_title: "Fields of Performance",
    perf_1:
      "Providing skill development training to increase domestic and foreign employment.",
    perf_2: "Assisting in safe migration and increasing remittance flow.",
    perf_3: "Encouraging vocational and technical training.",
    perf_4:
      "Quality improvement through expansion of infrastructure and lab/workshop facilities.",

    // Challenges (NEW)
    challenges_title: "Our Challenges",
    chal_1: "Improving the quality of training.",
    chal_2:
      "Providing training in job-oriented and demand-driven/technology-based courses.",
    chal_3: "Maximizing employment generation.",
    chal_4: "Industrial linkage.",
    chal_5: "Increasing interest/enrollment in training.",
    chal_6: "Increasing women's participation in training.",
    chal_7: "International recognition.",

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

let currentLang = localStorage.getItem("lang") || "bn";

// Helper for number conversion
const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

function updateContent() {
  // 1. Update Standard Text (data-i18n)
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  // 2. Update Dynamic Numbers (dynamic-num)
  document.querySelectorAll(".dynamic-num").forEach((element) => {
    const num = element.getAttribute("data-num"); // Get the number (e.g., "1", "2")

    if (currentLang === "bn") {
      // Convert to Bengali
      const bnNum = num
        .toString()
        .split("")
        .map((digit) => bengaliDigits[digit])
        .join("");
      element.innerText = bnNum;
    } else {
      // Keep as English
      element.innerText = num;
    }
  });

  // 3. Update HTML Lang attribute
  document.documentElement.lang = currentLang;

  // 4. Update Button Text
  const btnText = currentLang === "bn" ? "ENGLISH" : "বাংলা";
  const btnTextMobile = currentLang === "bn" ? "EN" : "BN";

  const desktopBtn = document.getElementById("lang-btn-text-desktop");
  const mobileBtn = document.getElementById("lang-btn-text-mobile");

  if (desktopBtn) desktopBtn.innerText = btnText;
  if (mobileBtn) mobileBtn.innerText = btnTextMobile;

  // 5. Save to LocalStorage
  localStorage.setItem("lang", currentLang);
}

function toggleLanguage() {
  currentLang = currentLang === "bn" ? "en" : "bn";
  updateContent();
}

// Initialize Language on Load
document.addEventListener("DOMContentLoaded", updateContent);
