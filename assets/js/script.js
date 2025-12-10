// মোবাইল মেনু ফাংশনালিটি (শুধুমাত্র যখন header ইনলাইন থাকে)
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

// Smooth scroll for anchor links
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

// --- Language Switcher Logic ---

const translations = {
  bn: {
    page_title: "কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ",
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
    hero_welcome: "স্বাগতম পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্রে",
    hero_slogan:
      '"প্রবাসী কর্মীরা উন্নয়নের অংশীদার সমুন্নত রাখবো তাদের অধিকার"',
    btn_view_courses: "কোর্স দেখুন",
    btn_contact: "যোগাযোগ করুন",
    notice_head: "গুরুত্বপূর্ণ বিজ্ঞপ্তি",
    notice_body:
      "প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়ের অধীনে জনশক্তি, কর্মস্থান ও প্রশিক্ষণ ব্যুরো কর্তৃক পরিচালিত কারিগরি প্রশিক্ষণ কেন্দ্র (টিটিসি), পীরগঞ্জ নিম্নে বর্ণিত কোর্স সমূহ সরকারি খরচে শুধুমাত্র বেকার যুব পুরুষ ও মহিলা, অনগ্রসর, হতদরিদ্র, সুবিধা বঞ্চিত, উপজাতি এবং প্রতিবন্ধীদের কর্মসংস্থানের লক্ষ্যে ASSET প্রকল্পের আওতায় ০৩ মাস/৩৬০ ঘন্টা মেয়াদী আগস্ট-নভেম্বর/২০২৫ খ্রি. সেশনে ভর্তি ইচ্ছুক প্রশিক্ষণার্থীদের নিকট হতে নির্ধারিত ফরমে আবেদন আহ্বান করা যাচ্ছে।",
    about_title: "আমাদের সম্পর্কে",
    about_card1_title: "দক্ষ প্রশিক্ষক",
    about_card1_desc:
      "অভিজ্ঞ ও দক্ষ প্রশিক্ষকদের তত্ত্বাবধানে আধুনিক প্রশিক্ষণ",
    about_card2_title: "সরকারি সার্টিফিকেট",
    about_card2_desc: "সরকার অনুমোদিত সার্টিফিকেট প্রদান",
    about_card3_title: "বিনামূল্যে প্রশিক্ষণ",
    about_card3_desc: "সম্পূর্ণ বিনামূল্যে প্রশিক্ষণ সুবিধা ও ভাতা",
    courses_title: "আমাদের কোর্স সমূহ",
    course_1_title: "ইলেকট্রিক্যাল",
    course_1_desc: "ইলেকট্রিক্যাল সম্পর্কিত সকল প্রশিক্ষণ",
    course_2_title: "মোবাইল সার্ভিসিং",
    course_2_desc: "মোবাইল মেরামত ও সার্ভিসিং প্রশিক্ষণ",
    course_3_title: "কম্পিউটার অপারেশন",
    course_3_desc: "কম্পিউটার ব্যবহার ও অপারেশন প্রশিক্ষণ",
    course_4_title: "গ্রাফিক্স ডিজাইন",
    course_4_desc: "আধুনিক গ্রাফিক্স ডিজাইন প্রশিক্ষণ",
    course_5_title: "মোটর ড্রাইভিং",
    course_5_desc: "মোটর গাড়ি চালনা প্রশিক্ষণ",
    course_6_title: "অন্যান্য ট্রেড",
    course_6_desc: "আরও বিভিন্ন ধরনের কারিগরি প্রশিক্ষণ",
    btn_more: "আরো",
    all_notices_title: "সকল বিজ্ঞপ্তি",
    all_notices_sub: "আমাদের সর্বশেষ বিজ্ঞপ্তি এবং ঘোষণা",
    badge_new: "নতুন",
    n1_date: "০৮ ডিসেম্বর, ২০২৫",
    n1_title: "আগস্ট-নভেম্বর/২০২৫ সেশনে ভর্তি",
    n1_desc:
      "ASSET প্রকল্পের আওতায় ০৩ মাস/৩৬০ ঘন্টা মেয়াদী প্রশিক্ষণ কোর্সে ভর্তির জন্য আবেদন আহ্বান করা যাচ্ছে।",
    read_details: "বিস্তারিত দেখুন",
    badge_result: "ফলাফল",
    n2_date: "২৫ নভেম্বর, ২০২৫",
    n2_title: "৭ম সাইকেল চূড়ান্ত ফলাফল",
    n2_desc: "৭ম সাইকেল প্রশিক্ষণের চূড়ান্ত ফলাফল প্রকাশ করা হয়েছে।",
    see_result: "ফলাফল দেখুন",
    badge_exam: "পরীক্ষা",
    n3_date: "২০ নভেম্বর, ২০২৫",
    n3_title: "লিখিত পরীক্ষার ফলাফল",
    n3_desc: "আগামী সেশনের লিখিত পরীক্ষার ফলাফল প্রকাশ করা হয়েছে।",
    read_more: "বিস্তারিত পড়ুন",
    n4_date: "১৫ নভেম্বর, ২০২৫",
    n4_title: "RPL প্রোগ্রাম চালু",
    n4_desc: "অভিজ্ঞ কর্মীদের জন্য Recognition of Prior Learning প্রোগ্রাম।",
    apply_now: "আবেদন করুন",
    badge_job: "চাকরি",
    n5_date: "১০ নভেম্বর, ২০২৫",
    n5_title: "দেশ-বিদেশ চাকরির সুযোগ",
    n5_desc: "প্রশিক্ষণপ্রাপ্ত প্রশিক্ষণার্থীদের জন্য চাকরির সুযোগ।",
    submit_cv: "সিভি জমা দিন",
    badge_schedule: "সময়সূচি",
    n6_date: "০৫ নভেম্বর, ২০২৫",
    n6_title: "ক্লাস রুটিন আপডেট",
    n6_desc: "নতুন সেশনের ক্লাস রুটিন প্রকাশ করা হয়েছে।",
    download_routine: "রুটিন ডাউনলোড",
    btn_more_notices: "আরও বিজ্ঞপ্তি দেখুন",
    req_title: "ভর্তির প্রয়োজনীয় কাগজপত্র",
    req_1: "জাতীয় পরিচয়পত্র/জন্মসনদের ডিজিটাল সত্যায়িত অনুলিপি",
    req_2: "সদ্য তোলা পাসপোর্ট সাইজের ছবি ২ কপি",
    req_3: "সকল শিক্ষাগত যোগ্যতার সনদের সত্যায়িত অনুলিপি",
    req_4: "আবেদনপত্রে অবশ্যই মোবাইল নম্বর থাকতে হবে",
    req_5: "বৈদেশিক চাকুরীর প্রার্থীদের পাসপোর্টের ফটোকপি",
    req_6: "নাগরিকত্ব সনদপত্রের কপি",
    facilities_title: "সুযোগ সুবিধা",
    fac_1: "প্রতিমাসে ১,৫০০/-টাকা (পুরুষ) এবং ২,০০০ টাকা (নারী) প্রশিক্ষণ ভাতা",
    fac_2: "দৈনিক ৮৮/-টাকা হারে মাসিক যাতায়াত ভাতা",
    fac_3: "হতদরিদ্র ও মুক্তিযোদ্ধার সন্তানদের অগ্রাধিকার",
    fac_4: "সরকারি সার্টিফিকেট প্রদান",
    fac_5: "কর্মসংস্থানের সুযোগ",
    download_form: "আবেদন ফর্ম ডাউনলোড করুন",
    mgmt_title: "ব্যবস্থাপনা",
    p_name: "মোঃ জিয়া উদ্দিন",
    p_role: "প্রিন্সিপাল",
    p_phone: "০১৭১৩-৪১২৫৯৯",
    ha_name: "মোঃ মুকুল মিয়া",
    ha_role: "হেড অ্যাসিস্ট্যান্ট",
    ha_phone: "০১৭১৭-৪৮৬৫৭৬",
    e1_name: "মোঃ মশিউর রহমান",
    e1_role: "ইলেকট্রিক্যাল ইন্সট্রাক্টর",
    e1_phone: "০১৮৩৪-৪৫৮৭৬১",
    e2_name: "মোঃ তানভীর বিশ্বাস",
    e2_role: "ইলেকট্রিক্যাল ইন্সট্রাক্টর",
    e2_phone: "০১৭১৭-৪৮৩১২৬",
    g1_name: "মোঃ শোহাগ মিয়া",
    g1_role: "গ্রাফিক্স ডিজাইন ইন্সট্রাক্টর",
    g1_phone: "০১৭১৩-৯৮৩৩৪৪",
    g2_name: "এন.এম. নাজমুল হক",
    g2_role: "গ্রাফিক্স ডিজাইন ইন্সট্রাক্টর",
    g2_phone: "০১৭৪৪-৪৭৯৬০১",
    m1_name: "এ.বি.এম ফারুক হাসান",
    m1_role: "মোবাইল সার্ভিসিং ইন্সট্রাক্টর",
    m1_phone: "০১৭৩৭-২৪৩২৭৩",
    m2_name: "মোঃ আসাদুজ্জামান জুয়েল",
    m2_role: "মোবাইল সার্ভিসিং ইন্সট্রাক্টর",
    m2_phone: "০১৭৫০-১১৫৭৮০",
    c1_name: "মোসাম্মৎ শাকিলা আক্তার",
    c1_role: "কম্পিউটার অপারেশন ইন্সট্রাক্টর",
    c1_phone: "০১৭২১-২১৫৯২৪",
    d1_name: "মোঃ মেহেদী হাসান (মুন্না)",
    d1_role: "মোটর ড্রাইভিং ইন্সট্রাক্টর",
    d1_phone: "০১৭৬১-০৭৭৯০০",
    ct_name: "মোঃ শাহাজাহান মিয়া",
    ct_role: "কেয়ারটেকার",
    ct_phone: "০১৭৫১-৮৪৯৯২৫",
    gallery_title: "আমাদের গ্যালারি",
    contact_title: "যোগাযোগ করুন",
    contact_phone_title: "ফোন",
    contact_phone_num: "+৮৮০১৮৪২১৯৬৫৬৬",
    contact_email_title: "ইমেইল",
    footer_logo_text: "টিটিসি পীরগঞ্জ",
    footer_desc: "কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ, রংপুর",
    footer_ql_title: "দ্রুত লিংক",
    footer_contact_title: "যোগাযোগের তথ্য",
    footer_address: "মকিমপুর, পীরগঞ্জ, রংপুর",
    footer_social_title: "সোশ্যাল মিডিয়া",
  },
  en: {
    page_title: "Technical Training Center, Pirganj",
    skip_link: "Skip to main content",
    header_title: "Technical Training Center",
    header_subtitle: "Pirganj, Rangpur",
    nav_home: "Home",
    nav_about: "About Us",
    nav_courses: "Courses",
    nav_management: "Management",
    nav_gallery: "Gallery",
    nav_notice: "Notice",
    nav_contact: "Contact",
    hero_welcome: "Welcome to Pirganj TTC",
    hero_slogan:
      '"Expatriate workers are partners in development, we shall uphold their rights"',
    btn_view_courses: "View Courses",
    btn_contact: "Contact Us",
    notice_head: "Important Notice",
    notice_body:
      "Under the Ministry of Expatriates' Welfare and Overseas Employment, the Technical Training Center (TTC), Pirganj, run by BMET, invites applications in the prescribed form from unemployed youth, underprivileged, and disabled individuals for admission into 03 months/360 hours training courses under the ASSET project for the session August-November/2025 at government expense.",
    about_title: "About Us",
    about_card1_title: "Skilled Instructors",
    about_card1_desc:
      "Modern training under experienced and skilled instructors",
    about_card2_title: "Government Certificate",
    about_card2_desc: "Government approved certificate provision",
    about_card3_title: "Free Training",
    about_card3_desc: "Completely free training facilities and allowance",
    courses_title: "Our Courses",
    course_1_title: "Electrical",
    course_1_desc: "All electrical related training",
    course_2_title: "Mobile Servicing",
    course_2_desc: "Mobile repair and servicing training",
    course_3_title: "Computer Operation",
    course_3_desc: "Computer usage and operation training",
    course_4_title: "Graphics Design",
    course_4_desc: "Modern graphics design training",
    course_5_title: "Motor Driving",
    course_5_desc: "Motor vehicle driving training",
    course_6_title: "Other Trades",
    course_6_desc: "Various other technical training",
    btn_more: "More",
    all_notices_title: "All Notices",
    all_notices_sub: "Our latest notices and announcements",
    badge_new: "New",
    n1_date: "08 December, 2025",
    n1_title: "Admission for August-November/2025 Session",
    n1_desc:
      "Applications are invited for admission to the 03 months/360 hours training course under the ASSET project.",
    read_details: "Read Details",
    badge_result: "Result",
    n2_date: "25 November, 2025",
    n2_title: "7th Cycle Final Result",
    n2_desc: "The final result of the 7th cycle training has been published.",
    see_result: "See Result",
    badge_exam: "Exam",
    n3_date: "20 November, 2025",
    n3_title: "Written Exam Result",
    n3_desc:
      "The written exam results for the upcoming session have been published.",
    read_more: "Read More",
    n4_date: "15 November, 2025",
    n4_title: "RPL Program Launched",
    n4_desc: "Recognition of Prior Learning program for experienced workers.",
    apply_now: "Apply Now",
    badge_job: "Job",
    n5_date: "10 November, 2025",
    n5_title: "Job Opportunities at Home and Abroad",
    n5_desc: "Job opportunities for trained trainees.",
    submit_cv: "Submit CV",
    badge_schedule: "Schedule",
    n6_date: "05 November, 2025",
    n6_title: "Class Routine Update",
    n6_desc: "The new session's class routine has been published.",
    download_routine: "Download Routine",
    btn_more_notices: "View More Notices",
    req_title: "Required Admission Documents",
    req_1: "Digital attested copy of National ID card/Birth Certificate",
    req_2: "2 copies of recent passport size photographs",
    req_3: "Attested copy of all educational qualification certificates",
    req_4: "Must include mobile number on the application",
    req_5: "Photocopy of passport for overseas job candidates",
    req_6: "Copy of citizenship certificate",
    facilities_title: "Facilities",
    fac_1: "Monthly allowance: 1,500/- (Male) & 2,000/- (Female)",
    fac_2: "Daily transport allowance @ 88/- Taka",
    fac_3: "Priority for underprivileged & freedom fighters' children",
    fac_4: "Government Certificate Provided",
    fac_5: "Employment Opportunities",
    download_form: "Download Application Form",
    mgmt_title: "Management",
    p_name: "Md. Zia Uddin",
    p_role: "Principal",
    p_phone: "01713-412599",
    ha_name: "Md. Mukul Mia",
    ha_role: "Head Assistant",
    ha_phone: "01717-486576",
    e1_name: "Md. Mashiur Rahman",
    e1_role: "Electrical Instructor",
    e1_phone: "01834-458761",
    e2_name: "Md. Tanvir Biswas",
    e2_role: "Electrical Instructor",
    e2_phone: "01717-483126",
    g1_name: "Md. Shohag Mia",
    g1_role: "Graphics Design Instructor",
    g1_phone: "01713-983344",
    g2_name: "N.M. Nazmul Haque",
    g2_role: "Graphics Design Instructor",
    g2_phone: "01744-479601",
    m1_name: "A.B.M. Faruk Hasan",
    m1_role: "Mobile Servicing Instructor",
    m1_phone: "01737-243273",
    m2_name: "Md. Asaduzzaman Jewel",
    m2_role: "Mobile Servicing Instructor",
    m2_phone: "01750-115780",
    c1_name: "Mosammat Shakila Akter",
    c1_role: "Computer Operation Instructor",
    c1_phone: "01721-215924",
    d1_name: "Md. Mehedi Hasan (Munna)",
    d1_role: "Motor Driving Instructor",
    d1_phone: "01761-077900",
    ct_name: "Md. Shahjahan Mia",
    ct_role: "Caretaker",
    ct_phone: "01751-849925",
    gallery_title: "Our Gallery",
    contact_title: "Contact Us",
    contact_phone_title: "Phone",
    contact_phone_num: "+8801842196566",
    contact_email_title: "Email",
    footer_logo_text: "TTC Pirganj",
    footer_desc: "Technical Training Center, Pirganj, Rangpur",
    footer_ql_title: "Quick Links",
    footer_contact_title: "Contact Info",
    footer_address: "Mokimpur, Pirganj, Rangpur",
    footer_social_title: "Social Media",
  },
};

const languageSelect = document.getElementById("language-select");

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (t[key]) {
      element.textContent = t[key];
    }
  });
  document.documentElement.lang = lang;
}

if (languageSelect) {
  // Set default language on load
  let currentLang = localStorage.getItem("lang") || "bn";
  languageSelect.value = currentLang;
  applyTranslations(currentLang);

  languageSelect.addEventListener("change", function () {
    currentLang = this.value;
    localStorage.setItem("lang", currentLang);
    applyTranslations(currentLang);
  });
}

// Hero Section Slider Logic
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval;
  const slideDuration = 5000; // 5 seconds

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("opacity-100");
      slide.classList.add("opacity-0");
    });
    slides[index].classList.remove("opacity-0");
    slides[index].classList.add("opacity-100");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  if (prevBtn && nextBtn && slides.length > 1) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetTimer();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetTimer();
    });

    // Start auto-sliding as soon as the page loads
    startAutoSlide();
  }
});

// Image Modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeModal");
  const galleryImages = document.querySelectorAll(".gallery-img");

  if (modal && modalImg && closeBtn) {
    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.classList.remove("hidden");
        setTimeout(() => {
          modal.classList.remove("opacity-0");
          modalImg.classList.remove("scale-95");
          modalImg.classList.add("scale-100");
        }, 10);
      });
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
});
