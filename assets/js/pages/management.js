const translations = {
  bn: {
    page_title: "ব্যবস্থাপনা পর্ষদ - কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ",
    mgmt_hero_title: "আমাদের ব্যবস্থাপনা পর্ষদ",

    // --- NAVBAR ---
    header_title: "কারিগরি প্রশিক্ষণ কেন্দ্র",
    header_subtitle: "পীরগঞ্জ, রংপুর",
    nav_home: "হোম",
    nav_about: "আমাদের সম্পর্কে",
    nav_courses: "কোর্স",
    nav_management: "ব্যবস্থাপনা",
    nav_gallery: "গ্যালারি",
    nav_notice: "নোটিশ",
    nav_contact: "যোগাযোগ",
    nav_admin: "এডমিন",

    // --- PAGE SPECIFIC ---
    team_title: "শিক্ষক ও কর্মচারী বৃন্দ",
    // NEW LINE ADDED BELOW:
    team_desc:
      "আমাদের অভিজ্ঞ এবং নিবেদিতপ্রাণ প্রশিক্ষক ও কর্মী দল, যারা দক্ষ জনশক্তি তৈরিতে নিরলস কাজ করে যাচ্ছেন।",

    view_details: "বিস্তারিত দেখুন",
    call_now: "কল করুন",
    close: "বন্ধ করুন",

    // --- FOOTER ---
    footer_copy:
      "&copy; ২০২৫ কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ। সর্বস্বত্ব সংরক্ষিত।",
  },
  en: {
    page_title: "Management Team - TTC Pirganj",
    mgmt_hero_title: "Our Management Team",

    // --- NAVBAR ---
    header_title: "Technical Training Center",
    header_subtitle: "Pirganj, Rangpur",
    nav_home: "Home",
    nav_about: "About Us",
    nav_courses: "Courses",
    nav_management: "Management",
    nav_gallery: "Gallery",
    nav_notice: "Notices",
    nav_contact: "Contact",
    nav_admin: "Admin",

    // --- PAGE SPECIFIC ---
    team_title: "Instructors & Staff",
    // NEW LINE ADDED BELOW:
    team_desc:
      "Our experienced and dedicated team of instructors and staff, who are working tirelessly to create a skilled workforce.",

    view_details: "View Profile",
    call_now: "Call Now",
    close: "Close",

    // --- FOOTER ---
    footer_copy:
      "&copy; 2025 Technical Training Center, Pirganj. All rights reserved.",
  },
};
// --- EMPLOYEE DATA ---
const principalData = {
  id: "principal",
  name: { bn: "মোঃ জিয়া উদ্দিন", en: "Md. Zia Uddin" },
  role: { bn: "প্রিন্সিপাল", en: "Principal" },
  phone: "01713-412599",
  email: "principal@ttcpirganj.com",
  img: "https://ttcpirganj.com/wp-content/uploads/2025/11/Principal-sir-pic-1617x2048.jpg",
  desc: {
    bn: "মোঃ জিয়া উদ্দিন পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্রের সুযোগ্য অধ্যক্ষ। তিনি দীর্ঘ ২০ বছর ধরে কারিগরি শিক্ষা ও প্রশিক্ষণে নেতৃত্ব দিয়ে আসছেন। তাঁর দক্ষ নির্দেশনায় এই প্রতিষ্ঠানটি উত্তরবঙ্গের অন্যতম সেরা কারিগরি প্রতিষ্ঠানে পরিণত হয়েছে। তিনি প্রতিষ্ঠানের সার্বিক উন্নয়ন ও শিক্ষার মান বৃদ্ধিতে নিরলসভাবে কাজ করে যাচ্ছেন।",
    en: "Md. Zia Uddin is the worthy Principal of Pirganj Technical Training Center. He has been leading technical education and training for over 20 years. Under his skilled guidance, this institution has become one of the best technical institutions in North Bengal. He is working tirelessly to improve the overall development and quality of education of the institution.",
  },
  color: "purple",
};

const staffData = [
  {
    id: 1,
    name: { bn: "মোঃ মুকুল মিয়া", en: "Md. Mukul Mia" },
    role: { bn: "হেড অ্যাসিস্ট্যান্ট", en: "Head Assistant" },
    phone: "01717-486576",
    email: "mukul@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/08/Screenshot-2025-08-03-011853-768x675.png",
    color: "green",
    desc: {
      bn: "প্রতিষ্ঠানের প্রশাসনিক কার্যক্রম পরিচালনায় এবং দাপ্তরিক নথিপত্র সংরক্ষণে গুরুত্বপূর্ণ ভূমিকা পালন করেন।",
      en: "Plays a vital role in managing the administrative activities of the institution and maintaining official records.",
    },
  },
  {
    id: 2,
    name: { bn: "মোঃ মশিউর রহমান", en: "Md. Mashiur Rahman" },
    role: { bn: "ইলেকট্রিক্যাল ইন্সট্রাক্টর", en: "Electrical Instructor" },
    phone: "01834-458761",
    email: "mashiur@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.02.56_0e3a7b9f-767x1024.jpg",
    color: "yellow",
    desc: {
      bn: "ইলেকট্রিক্যাল মেইনটেন্যান্স এবং হাউজ ওয়্যারিং বিষয়ে দক্ষ প্রশিক্ষক। দীর্ঘদিনের বাস্তব কাজের অভিজ্ঞতা রয়েছে।",
      en: "Skilled instructor in Electrical Maintenance and House Wiring. Has many years of practical work experience.",
    },
  },
  {
    id: 3,
    name: { bn: "মোঃ তানভীর বিশ্বাস", en: "Md. Tanvir Biswas" },
    role: { bn: "ইলেকট্রিক্যাল ইন্সট্রাক্টর", en: "Electrical Instructor" },
    phone: "01717-483126",
    email: "tanvir@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.15.42_6c5ee599-150x150.jpg",
    color: "yellow",
    desc: {
      bn: "আধুনিক ইলেকট্রিক্যাল টেকনোলজি এবং ইন্ডাস্ট্রিয়াল ওয়্যারিং বিশেষজ্ঞ। শিক্ষার্থীদের হাতে-কলমে প্রশিক্ষণ দেন।",
      en: "Expert in Modern Electrical Technology and Industrial Wiring. Provides hands-on training to students.",
    },
  },
  {
    id: 4,
    name: { bn: "মোঃ শোহাগ মিয়া", en: "Md. Shohag Mia" },
    role: {
      bn: "গ্রাফিক্স ডিজাইন ইন্সট্রাক্টর",
      en: "Graphics Design Instructor",
    },
    phone: "01713-983344",
    email: "shohag@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/08/Screenshot-2025-08-03-091022-298x300.png",
    color: "pink",
    desc: {
      bn: "ফ্রিল্যান্সিং এবং গ্রাফিক্স ডিজাইনে দীর্ঘদিনের অভিজ্ঞতা সম্পন্ন। শিক্ষার্থীদের আন্তর্জাতিক মানের ডিজাইনার হিসেবে গড়ে তোলেন।",
      en: "Long experience in Freelancing and Graphics Design. Builds students as international standard designers.",
    },
  },
  {
    id: 5,
    name: { bn: "এন.এম. নাজমুল হক", en: "N.M. Nazmul Haque" },
    role: {
      bn: "গ্রাফিক্স ডিজাইন ইন্সট্রাক্টর",
      en: "Graphics Design Instructor",
    },
    phone: "01744-479601",
    email: "nazmul@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-17-at-08.19.20_3d4efe20-233x300.jpg",
    color: "pink",
    desc: {
      bn: "ক্রিয়েটিভ ডিজাইন এবং ডিজিটাল মার্কেটিংয়ে পারদর্শী। আধুনিক ডিজাইন সফটওয়্যারে বিশেষ দক্ষ।",
      en: "Proficient in Creative Design and Digital Marketing. Specially skilled in modern design software.",
    },
  },
  {
    id: 6,
    name: { bn: "এ.বি.এম ফারুক হাসান", en: "A.B.M Faruk Hasan" },
    role: {
      bn: "মোবাইল সার্ভিসিং ইন্সট্রাক্টর",
      en: "Mobile Servicing Instructor",
    },
    phone: "01737-243273",
    email: "faruk@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.08.12_9bbe1725-250x300.jpg",
    color: "blue",
    desc: {
      bn: "হার্ডওয়্যার ও সফটওয়্যার ভিত্তিক মোবাইল মেরামত প্রশিক্ষণে দক্ষ। স্মার্টফোন মেরামতের সকল আধুনিক কৌশল জানেন।",
      en: "Skilled in hardware and software based mobile repair training. Knows all modern techniques of smartphone repair.",
    },
  },
  {
    id: 7,
    name: { bn: "মোঃ আসাদুজ্জামান জুয়েল", en: "Md. Asaduzzaman Jewel" },
    role: {
      bn: "মোবাইল সার্ভিসিং ইন্সট্রাক্টর",
      en: "Mobile Servicing Instructor",
    },
    phone: "01750-115780",
    email: "jewel@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.15.07_3320709b-202x300.jpg",
    color: "blue",
    desc: {
      bn: "স্মার্টফোন টেকনোলজি এবং ট্রাবলশুটিং বিশেষজ্ঞ। জটিল সমস্যা সমাধানে পারদর্শী।",
      en: "Smartphone Technology and Troubleshooting Expert. Proficient in solving complex problems.",
    },
  },
  {
    id: 8,
    name: { bn: "মোসাম্মৎ শাকিলা আক্তার", en: "Mosammat Shakila Akter" },
    role: {
      bn: "কম্পিউটার অপারেশন ইন্সট্রাক্টর",
      en: "Computer Operation Instructor",
    },
    phone: "01721-215924",
    email: "shakila@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-18-at-16.22.38_0a0ab5f3-276x300.jpg",
    color: "green",
    desc: {
      bn: "অফিস অ্যাপ্লিকেশন এবং ডাটাবেস ম্যানেজমেন্টে দক্ষ প্রশিক্ষিকা। শিক্ষার্থীদের অত্যন্ত যত্ন সহকারে প্রশিক্ষণ দেন।",
      en: "Skilled instructor in Office Applications and Database Management. Trains students with great care.",
    },
  },
  {
    id: 9,
    name: { bn: "মোঃ মেহেদী হাসান (মুন্না)", en: "Md. Mehedi Hasan (Munna)" },
    role: { bn: "মোটর ড্রাইভিং ইন্সট্রাক্টর", en: "Motor Driving Instructor" },
    phone: "01761-077900",
    email: "munna@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/11/muna-240x300.jpg",
    color: "red",
    desc: {
      bn: "নিরাপদ সড়ক আইন এবং ব্যবহারিক ড্রাইভিংয়ে অভিজ্ঞ। ট্রাফিক রুলস মেনে ড্রাইভিং শেখান।",
      en: "Experienced in Road Safety Laws and Practical Driving. Teaches driving following traffic rules.",
    },
  },
  {
    id: 10,
    name: { bn: "মোঃ শাহাজাহান মিয়া", en: "Md. Shahjahan Mia" },
    role: { bn: "কেয়ারটেকার", en: "Caretaker" },
    phone: "01751-849925",
    email: "info@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-02.43.25_9ba5c1d0-266x300.jpg",
    color: "gray",
    desc: {
      bn: "ক্যাম্পাসের সার্বিক নিরাপত্তা ও রক্ষণাবেক্ষণে দায়িত্বপ্রাপ্ত। অত্যন্ত বিশ্বস্ত এবং পরিশ্রমী।",
      en: "Responsible for overall security and maintenance of the campus. Highly trusted and hardworking.",
    },
  },
];

// --- APP LOGIC ---

// 1. Convert to Bengali Number
function convertToBanglaNumber(number) {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number
    .toString()
    .split("")
    .map((digit) => banglaDigits[digit] || digit)
    .join("");
}

// 2. Get Styling Classes based on color (UPDATED PALETTE)
function getCardStyles(color) {
  const styles = {
    purple: { bg: "bg-purple-100", text: "text-purple-700" },
    green: { bg: "bg-emerald-100", text: "text-emerald-700" },
    yellow: { bg: "bg-amber-100", text: "text-amber-800" },
    pink: { bg: "bg-rose-100", text: "text-rose-700" },
    blue: { bg: "bg-sky-100", text: "text-sky-700" },
    red: { bg: "bg-red-100", text: "text-red-700" },
    gray: { bg: "bg-gray-100", text: "text-gray-700" },
  };
  return styles[color] || styles.gray;
}

// --- TOGGLE LANGUAGE FUNCTION ---
window.toggleLanguage = function () {
  const currentLang = localStorage.getItem("lang") || "bn";
  const newLang = currentLang === "bn" ? "en" : "bn";
  localStorage.setItem("lang", newLang);
  renderPage();
};

// 3. Render Functions
function renderPage() {
  const currentLang = localStorage.getItem("lang") || "bn";
  const t = translations[currentLang];
  const container = document.getElementById("team-container");
  const principalContainer = document.getElementById("principal-container");

  document.documentElement.lang = currentLang;

  // A. Render Principal
  if (principalContainer) {
    const p = principalData;
    const phone =
      currentLang === "bn" ? convertToBanglaNumber(p.phone) : p.phone;

    principalContainer.innerHTML = `
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden md:flex relative z-10 transform transition-all hover:shadow-3xl">
            <div class="md:w-2/5 relative h-96 md:h-auto bg-purple-50">
                <img src="${p.img}" alt="${p.name[currentLang]}" class="w-full h-full object-cover object-top" loading="lazy">
                 <div class="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-purple-900/20 mix-blend-multiply"></div>
            </div>
            <div class="md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                <div class="absolute top-0 right-0 -mt-12 -mr-12 text-purple-50 opacity-50">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="100" fill="currentColor"/>
                    </svg>
                </div>

                <div class="relative z-10">
                    <span class="text-purple-600 font-bold uppercase tracking-wider text-sm mb-2 block flex items-center gap-2">
                        <i class="fas fa-user-tie"></i> ${p.role[currentLang]}
                    </span>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">${p.name[currentLang]}</h2>
                    <p class="text-gray-600 text-lg mb-8 leading-relaxed">${p.desc[currentLang]}</p>

                    <div class="flex flex-wrap gap-4">
                        <a href="tel:${p.phone}" class="group flex items-center gap-3 px-6 py-3.5 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200/50 hover:shadow-xl">
                            <i class="fas fa-phone-alt text-lg group-hover:animate-pulse"></i>
                            <span>${phone}</span>
                        </a>
                        <button onclick="openModal('principal')" class="group flex items-center gap-3 px-6 py-3.5 bg-purple-50 text-purple-700 rounded-full font-semibold hover:bg-purple-100 transition-all">
                            <i class="fas fa-info-circle text-lg"></i>
                            <span>${t.view_details}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
  }

  // B. Render Staff Grid
  if (container) {
    container.innerHTML = staffData
      .map((person) => {
        const styles = getCardStyles(person.color);
        const phone =
          currentLang === "bn"
            ? convertToBanglaNumber(person.phone)
            : person.phone;

        return `
            <div class="group w-[400px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full relative">
                <div class="relative  h-64 overflow-hidden bg-gray-100">
                    <img src="${person.img}" loading="lazy" alt="${
          person.name[currentLang]
        }" class="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
                    <span class="absolute top-4 left-4 ${styles.bg} ${
          styles.text
        } text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-10">
                        ${person.role[currentLang]}
                    </span>

                    <div class="absolute bottom-0 left-0 p-6 text-white z-10 md:hidden">
                         <h3 class="text-xl font-bold leading-tight">${
                           person.name[currentLang]
                         }</h3>
                    </div>
                </div>

                <div class="p-6 flex flex-col flex-grow text-center md:text-left relative z-20 bg-white -mt-4 rounded-t-2xl md:mt-0 md:rounded-none">
                    <h3 class="hidden md:block text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-purple-700 transition-colors">${
                      person.name[currentLang]
                    }</h3>
                    
                    <p class="text-gray-500 text-sm mb-6 flex-grow line-clamp-2">
                        ${person.desc[currentLang]}
                    </p>

                    <div class="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                        <p class="text-gray-600 text-sm font-medium flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                            <i class="fas fa-phone-alt text-${styles.text.replace(
                              "text-",
                              ""
                            )}-500 text-xs"></i> ${phone}
                        </p>

                        <button onclick="openModal(${
                          person.id
                        })" class="text-${styles.text.replace(
          "text-",
          ""
        )}-500 hover:text-${styles.text.replace("text-", "")}-700 hover:bg-${
          styles.bg
        } p-2 rounded-full transition-all duration-300 flex items-center gap-1 text-sm font-semibold group/btn">
                            <span class="md:hidden">${t.view_details}</span>
                            <i class="fas fa-arrow-right transform group-hover/btn:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>
            </div>
            `;
      })
      .join("");
  }

  // C. Update Static Text (Navbar & Footer included)
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  // Update Modal Buttons
  const callBtn = document.getElementById("call-btn");
  const closeBtn = document.getElementById("close-modal-btn");
  if (callBtn)
    callBtn.innerHTML = `<i class="fas fa-phone mr-2 mt-1"></i> ${t.call_now}`;
  if (closeBtn) closeBtn.innerText = t.close;

  // Update Toggle Button Text
  const btnText = currentLang === "bn" ? "ENGLISH" : "বাংলা";
  const desktopBtn = document.getElementById("lang-btn-text-desktop");
  const mobileBtn = document.getElementById("lang-btn-text-mobile");
  if (desktopBtn) desktopBtn.innerText = btnText;
  if (mobileBtn) mobileBtn.innerText = currentLang === "bn" ? "EN" : "BN";
}

// 4. Modal Logic
const modal = document.getElementById("employee-modal");
const modalContent = document.getElementById("modal-content");
const modalOverlay = document.getElementById("modal-overlay");
const closeModalBtnIcon = document.getElementById("close-modal");
const closeModalBtnBottom = document.getElementById("close-modal-btn");
const callBtn = document.getElementById("call-btn");

window.openModal = function (id) {
  const currentLang = localStorage.getItem("lang") || "bn";
  let person;

  if (id === "principal") {
    person = principalData;
  } else {
    person = staffData.find((p) => p.id === id);
  }

  if (!person) return;

  // Fill Data
  document.getElementById("modal-img").src = person.img;
  document.getElementById("modal-name").innerText = person.name[currentLang];
  document.getElementById("modal-role").innerText = person.role[currentLang];
  document.getElementById("modal-desc").innerText = person.desc[currentLang];

  const phone =
    currentLang === "bn" ? convertToBanglaNumber(person.phone) : person.phone;
  document.getElementById("modal-phone").innerText = phone;
  document.getElementById("modal-email").innerText =
    person.email || "info@ttcpirganj.com";

  if (callBtn) callBtn.href = `tel:${person.phone}`;

  // Show Modal with Animation
  modal.classList.remove("hidden");
  // Trigger reflow to ensure transition works
  void modal.offsetWidth;
  modalContent.classList.remove("scale-95", "opacity-0");
  modalContent.classList.add("scale-100", "opacity-100");
  document.body.style.overflow = "hidden"; // Prevent body scroll
};

function closeModal() {
  modalContent.classList.remove("scale-100", "opacity-100");
  modalContent.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // Restore body scroll
  }, 300); // Match transition duration
}

// Event Listeners for Closing Modal
if (closeModalBtnIcon) closeModalBtnIcon.addEventListener("click", closeModal);
if (closeModalBtnBottom)
  closeModalBtnBottom.addEventListener("click", closeModal);
if (modalOverlay) modalOverlay.addEventListener("click", closeModal);

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// 5. Init
document.addEventListener("DOMContentLoaded", () => {
  renderPage();
});

// Expose for global access
window.updateContent = renderPage;
