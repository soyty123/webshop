// Admin Dashboard Logic & LocalStorage Data Management
const STORAGE_KEY = 'edushop_products_data';

// Product Frame Info Helper (ប្រភេទពណ៌ស៊ុម)
function getFrameInfo(frameColor) {
  switch (frameColor) {
    case 'gold':
      return { key: 'gold', label: 'ស៊ុមពណ៌មាស', emoji: '🟡', class: 'frame-gold', classSm: 'frame-gold-sm', classLg: 'frame-gold-lg', badgeBg: 'bg-amber-50 text-amber-800 border-amber-300' };
    case 'wood':
      return { key: 'wood', label: 'ស៊ុមឈើ', emoji: '🟤', class: 'frame-wood', classSm: 'frame-wood-sm', classLg: 'frame-wood-lg', badgeBg: 'bg-amber-100/70 text-amber-900 border-amber-400' };
    case 'black':
      return { key: 'black', label: 'ស៊ុមពណ៌ខ្មៅ', emoji: '⚫', class: 'frame-black', classSm: 'frame-black-sm', classLg: 'frame-black-lg', badgeBg: 'bg-slate-800 text-white border-slate-900' };
    case 'white':
      return { key: 'white', label: 'ស៊ុមពណ៌ស', emoji: '⚪', class: 'frame-white', classSm: 'frame-white-sm', classLg: 'frame-white-lg', badgeBg: 'bg-white text-slate-800 border-slate-300' };
    case 'silver':
      return { key: 'silver', label: 'ស៊ុមពណ៌ប្រាក់', emoji: '🔘', class: 'frame-silver', classSm: 'frame-silver-sm', classLg: 'frame-silver-lg', badgeBg: 'bg-slate-100 text-slate-700 border-slate-300' };
    case 'blue':
      return { key: 'blue', label: 'ស៊ុមពណ៌ខៀវ', emoji: '🔵', class: 'frame-blue', classSm: 'frame-blue-sm', classLg: 'frame-blue-lg', badgeBg: 'bg-sky-50 text-sky-700 border-sky-300' };
    case 'red':
      return { key: 'red', label: 'ស៊ុមពណ៌ក្រហម', emoji: '🔴', class: 'frame-red', classSm: 'frame-red-sm', classLg: 'frame-red-lg', badgeBg: 'bg-rose-50 text-rose-700 border-rose-300' };
    case 'green':
      return { key: 'green', label: 'ស៊ុមពណ៌បៃតង', emoji: '🟢', class: 'frame-green', classSm: 'frame-green-sm', classLg: 'frame-green-lg', badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-300' };
    case 'purple':
      return { key: 'purple', label: 'ស៊ុមពណ៌ស្វាយ', emoji: '🟣', class: 'frame-purple', classSm: 'frame-purple-sm', classLg: 'frame-purple-lg', badgeBg: 'bg-purple-50 text-purple-700 border-purple-300' };
    default:
      return { key: 'none', label: 'គ្មានស៊ុម', emoji: '🚫', class: 'frame-none', classSm: '', classLg: '', badgeBg: '' };
  }
}

// Default Initial Catalog
const defaultCatalog = [
  {
    id: 1,
    name: "ផ្ទាំងបដាស្វាគមន៍ «ស្វាគមន៍មកកាន់ថ្នាក់រៀនយើង»",
    category: "decor",
    categoryLabel: "សម្ភារៈតុបតែងថ្នាក់",
    size: "40 cm x 60 cm",
    material: "ក្រដាសកម្រាស់ 300g អ៊ុតស្វិតការពារទឹក",
    priceUSD: 1.25,
    priceKHR: 5000,
    badge: "លក់ដាច់ខ្លាំង 🔥",
    iconBg: "from-amber-400 to-orange-500",
    iconEmoji: "🎨",
    imageUrl: "poster_welcome.jpg",
    inStock: true,
    description: "ពណ៌ស្រស់ស្អាត រូបភាពគំនូរកុមាររីករាយ មិនងាយជ្រាបទឹក ស័ក្តិសមសម្រាប់បិទខាងលើក្ដារខៀន ឬទ្វារថ្នាក់រៀន។"
  },
  {
    id: 2,
    name: "ផ្ទាំងដើមឈើអំណាន និងផ្កាពិន្ទុលើកទឹកចិត្ត",
    category: "decor",
    categoryLabel: "សម្ភារៈតុបតែងថ្នាក់",
    size: "60 cm x 80 cm",
    material: "ស្ទីគ័ររូបដើមឈើ + ស្លឹកឈើនិងផ្កា 50 សន្លឹក",
    priceUSD: 2.50,
    priceKHR: 10000,
    badge: "ពេញនិយម ⭐",
    iconBg: "from-emerald-400 to-teal-600",
    iconEmoji: "🌳",
    imageUrl: "poster_reading_tree.jpg",
    inStock: true,
    description: "ជួយលើកទឹកចិត្តសិស្សឱ្យចូលចិត្តការអាន និងប្រកួតប្រជែងពិន្ទុស្អាតៗប្រចាំសប្ដាហ៍។"
  },
  {
    id: 3,
    name: "ផ្ទាំងតារាងព្យញ្ជនៈ និងស្រៈខ្មែរ រូបភាពជីវចល",
    category: "decor",
    categoryLabel: "សម្ភារៈតុបតែងថ្នាក់",
    size: "80 cm x 100 cm",
    material: "បោះពុម្ពពណ៌ដិតកម្រិត HD អ៊ុតផ្លាស្ទិកសងខាង",
    priceUSD: 3.75,
    priceKHR: 15000,
    badge: "ចាំបាច់ប្រចាំថ្នាក់ ✨",
    iconBg: "from-blue-400 to-indigo-600",
    iconEmoji: "📖",
    imageUrl: "poster_khmer_alphabet.jpg",
    inStock: true,
    description: "មានព្យញ្ជនៈខ្មែរទាំង ៣៣ តួ និងស្រៈនិស្ស័យពេញលេញ អមដោយរូបភាពកំប្លែងទាក់ទាញភ្នែកកុមារ។"
  },
  {
    id: 4,
    name: "ផ្ទាំងកាលវិភាគ និងច្បាប់វិន័យប្រចាំថ្នាក់",
    category: "decor",
    categoryLabel: "សម្ភារៈតុបតែងថ្នាក់",
    size: "40 cm x 60 cm",
    material: "ក្រដាសរលោង អាចសរសេរហ្វឺតលុបចេញបាន",
    priceUSD: 1.25,
    priceKHR: 5000,
    badge: "ថ្មី 🌟",
    iconBg: "from-pink-400 to-rose-500",
    iconEmoji: "📋",
    imageUrl: "poster_rules_schedule.jpg",
    inStock: true,
    description: "រៀបចំកាលវិភាគប្រចាំសប្ដាហ៍ និងច្បាប់វិន័យសេចក្តីគួរសម ជួយសិស្សឱ្យចេះសាមគ្គី និងមានវិន័យ។"
  },
  {
    id: 5,
    name: "នាឡិកាឈើគំរូ រៀនមើលម៉ោង និងនាទី",
    category: "teaching",
    categoryLabel: "សម្ភារៈបង្រៀនសិស្ស",
    size: "25cm × 25cm (កម្រាស់ 1.5cm)",
    material: "ឈើធម្មជាតិរលោង ទ្រនិចកម្រើកបានដោយសេរី",
    priceUSD: 4.50,
    priceKHR: 18000,
    badge: "ឧបករណ៍ស្តង់ដារ ⏰",
    iconBg: "from-amber-500 to-yellow-600",
    iconEmoji: "🕒",
    imageUrl: "",
    inStock: true,
    description: "ទ្រនិចម៉ោង និងនាទីអាចបង្វិលរៀនជាក់ស្ដែង មានលេខច្បាស់ៗ ងាយយល់ទាំងម៉ោងព្រឹក និងម៉ោងរសៀល។"
  },
  {
    id: 6,
    name: "ឈុតបន្ទាត់ធំ និងត្រីវិស័យសម្រាប់ក្ដារខៀន",
    category: "teaching",
    categoryLabel: "សម្ភារៈបង្រៀនសិស្ស",
    size: "បន្ទាត់ 100cm + រង្វាស់មុំ + ត្រីវិស័យ 50cm",
    material: "ផ្លាស្ទិករឹងមាំ បំពាក់មេដែកជាប់ក្ដារខៀន",
    priceUSD: 8.50,
    priceKHR: 34000,
    badge: "សម្រាប់លោកគ្រូអ្នកគ្រូ 📐",
    iconBg: "from-cyan-500 to-blue-600",
    iconEmoji: "📐",
    imageUrl: "",
    inStock: true,
    description: "ជំនួយការដ៏ល្អសម្រាប់បង្រៀនធរណីមាត្រ គូសបន្ទាត់ត្រង់ វាស់មុំ និងគូសរង្វង់បានស្អាតឥតខ្ចោះ។"
  },
  {
    id: 7,
    name: "កាតពាក្យ Flashcards ភាសាខ្មែរ-អង់គ្លេស (120 សន្លឹក)",
    category: "teaching",
    categoryLabel: "សម្ភារៈបង្រៀនសិស្ស",
    size: "10cm × 14cm (ប្រអប់រឹងមាំ)",
    material: "ក្រដាសក្រាស់ 350g អ៊ុតស្វិតកាត់គែមមូលសុវត្ថិភាព",
    priceUSD: 4.00,
    priceKHR: 16000,
    badge: "លក់ដាច់ 💡",
    iconBg: "from-violet-500 to-purple-600",
    iconEmoji: "🗂️",
    imageUrl: "",
    inStock: true,
    description: "មានវាក្យសព្ទ ផ្លែឈើ សត្វ សម្ភារៈ និងពណ៌ ជួយបង្កើនការចងចាំ និងជំនាញភាសាយ៉ាងឆាប់រហ័ស។"
  },
  {
    id: 8,
    name: "គូបរាប់លេខ និងប្រភាគគណិតវិទ្យា STEM",
    category: "teaching",
    categoryLabel: "សម្ភារៈបង្រៀនសិស្ស",
    size: "ឈុត 100 គ្រាប់ (គ្រាប់នីមួយៗ 2cm × 2cm)",
    material: "ផ្លាស្ទិក ABS សុវត្ថិភាពខ្ពស់ ពណ៌ចម្រុះ 10 ពណ៌",
    priceUSD: 6.00,
    priceKHR: 24000,
    badge: "STEM Learning 🧩",
    iconBg: "from-emerald-500 to-green-600",
    iconEmoji: "🔢",
    imageUrl: "",
    inStock: true,
    description: "អាចផ្គុំតភ្ជាប់គ្នាបាន ងាយស្រួលបង្រៀនការបូកដកលេខ គុណចែក និងការយល់ដឹងអំពីមាឌ និងផ្ទៃក្រឡា។"
  },
  {
    id: 9,
    name: "ល្បែងផ្គុំរូបផែនទីប្រទេសកម្ពុជាពីឈើ (Wood Map Puzzle)",
    category: "games",
    categoryLabel: "ល្បែងសិក្សា",
    size: "35cm × 45cm (កម្រាស់ 1cm)",
    material: "ឈើធម្មជាតិ ឆ្លាក់ឡាស៊ែរតាមព្រំប្រទល់ខេត្ត",
    priceUSD: 7.50,
    priceKHR: 30000,
    badge: "ល្បែងជាតិខ្មែរ 🇰🇭",
    iconBg: "from-blue-600 to-indigo-700",
    iconEmoji: "🗺️",
    imageUrl: "",
    inStock: true,
    description: "មានគ្រប់ ២៥ រាជធានី-ខេត្ត ជួយសិស្សឱ្យស្គាល់ទីតាំងភូមិសាស្ត្រ និងចំណុចពិសេសនៃខេត្តនីមួយៗ។"
  },
  {
    id: 10,
    name: "ល្បែងផ្គុំពាក្យខ្មែរ និងព្យញ្ជនៈឆ្លាតវៃ",
    category: "games",
    categoryLabel: "ល្បែងសិក្សា",
    size: "28cm × 28cm",
    material: "ក្ដារឈើរឹងមាំ + បន្ទះអក្សរមេដែក 60 បន្ទះ",
    priceUSD: 5.50,
    priceKHR: 22000,
    badge: "ជំនាញភាសាខ្មែរ 📚",
    iconBg: "from-teal-500 to-emerald-600",
    iconEmoji: "🔤",
    imageUrl: "",
    inStock: true,
    description: "ល្បែងប្រកួតផ្គុំពាក្យ បណ្ដុះគំនិតច្នៃប្រឌិត និងការប្រើប្រាស់ពាក្យពេចន៍ខ្មែរឱ្យបានត្រឹមត្រូវតាមអក្ខរាវិរុទ្ធ។"
  },
  {
    id: 11,
    name: "ល្បែងបណ្ដុះបញ្ញា Tangram ឈើ 7 បំណែក",
    category: "games",
    categoryLabel: "ល្បែងសិក្សា",
    size: "18cm × 18cm (រួមជាមួយសៀវភៅគំរូ 100+)",
    material: "ឈើធម្មជាតិ ស្រោបពណ៌ទឹកគ្មានជាតិពុល",
    priceUSD: 3.50,
    priceKHR: 14000,
    badge: "IQ Booster 🧠",
    iconBg: "from-amber-500 to-red-500",
    iconEmoji: "🧩",
    imageUrl: "",
    inStock: true,
    description: "បណ្ដុះការគិតបែបវិភាគ ការស្រមើលស្រមៃ និងការដោះស្រាយបញ្ហាធរណីមាត្រតាមរយៈការផ្គុំរាងផ្សេងៗ។"
  },
  {
    id: 12,
    name: "ល្បែងរាប់គ្រាប់ និងលំនាំពណ៌ Montessori",
    category: "games",
    categoryLabel: "ល្បែងសិក្សា",
    size: "30cm × 20cm × 4cm",
    material: "ឈើធម្មជាតិ + កូនពែងស៊ីលីកូន 5 ពណ៌ + ដង្កាប់ឈើ",
    priceUSD: 6.50,
    priceKHR: 26000,
    badge: "Montessori 🌈",
    iconBg: "from-purple-500 to-pink-500",
    iconEmoji: "🎯",
    imageUrl: "",
    inStock: true,
    stockQty: 25,
    description: "ហ្វឹកហាត់សាច់ដុំដៃ ភ្នែក និងការយល់ដឹងអំពីពណ៌ លំនាំ និងការរាប់ចំនួនសម្រាប់កុមារតូច។"
  },
  {
    id: 13,
    name: "កញ្ចប់តុបតែងថ្នាក់រៀនបឋមពេញលេញ (Classroom Starter Combo)",
    category: "combo",
    categoryLabel: "កញ្ចប់ប្រូម៉ូសិន",
    size: "ឈុតធំ 4 ផ្ទាំង + បន្ទះលេខ",
    material: "អ៊ុតស្វិតការពារទឹក 300g (កញ្ចប់ពិសេស)",
    priceUSD: 12.00,
    priceKHR: 48000,
    badge: "COMBO SET 🎁",
    iconBg: "from-sky-500 via-indigo-500 to-purple-600",
    iconEmoji: "🎁",
    imageUrl: "",
    inStock: true,
    stockQty: 15,
    description: "កញ្ចប់ពិសេសរួមបញ្ចូលទាំងផ្ទាំងបដាស្វាគមន៍ តារាងព្យញ្ជនៈ ដើមឈើអំណាន និងកាលវិភាគបង្រៀន ចំណេញជាងទិញរាយ 20%!"
  },
  {
    id: 14,
    name: "កញ្ចប់ល្បែងសិក្សាបណ្ដុះបញ្ញាកុមារ (Kids STEM Learning Pack)",
    category: "combo",
    categoryLabel: "កញ្ចប់ប្រូម៉ូសិន",
    size: "ឈុត 3 មុខក្នុងប្រអប់កាដូ",
    material: "ឈើធម្មជាតិ និងផ្លាស្ទិកសុវត្ថិភាព",
    priceUSD: 15.00,
    priceKHR: 60000,
    badge: "SUPER VALUE 🌟",
    iconBg: "from-amber-500 via-emerald-500 to-teal-600",
    iconEmoji: "📦",
    imageUrl: "",
    inStock: true,
    stockQty: 4,
    description: "រួមបញ្ចូលទាំងផែនទីកម្ពុជាពីឈើ គូបរាប់លេខ STEM និងល្បែង Tangram 7 បំណែក ជួយកូនៗឆ្លាតវៃ!"
  }
];

// App State
let adminProducts = [];
let currentAdminCategory = 'all';
let uploadedImageData = '';

// Load products from LocalStorage
function loadProducts() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      adminProducts = JSON.parse(saved);
      let modified = false;
      adminProducts = adminProducts.map((p, idx) => {
        if (p.id === 1 && (p.size !== "40 cm x 60 cm" || p.priceKHR !== 5000)) { 
          p.size = "40 cm x 60 cm"; p.priceUSD = 1.25; p.priceKHR = 5000; modified = true; 
        }
        if (p.id === 2 && (p.size !== "60 cm x 80 cm" || p.priceKHR !== 10000)) { 
          p.size = "60 cm x 80 cm"; p.priceUSD = 2.50; p.priceKHR = 10000; modified = true; 
        }
        if (p.id === 3 && (p.size !== "80 cm x 100 cm" || p.priceKHR !== 15000)) { 
          p.size = "80 cm x 100 cm"; p.priceUSD = 3.75; p.priceKHR = 15000; modified = true; 
        }
        if (p.id === 4 && (p.size !== "40 cm x 60 cm" || p.priceKHR !== 5000)) { 
          p.size = "40 cm x 60 cm"; p.priceUSD = 1.25; p.priceKHR = 5000; modified = true; 
        }
        if (p.id === 1 && !p.imageUrl) { p.imageUrl = "poster_welcome.jpg"; modified = true; }
        if (p.id === 2 && !p.imageUrl) { p.imageUrl = "poster_reading_tree.jpg"; modified = true; }
        if (p.id === 3 && !p.imageUrl) { p.imageUrl = "poster_khmer_alphabet.jpg"; modified = true; }
        if (p.id === 4 && !p.imageUrl) { p.imageUrl = "poster_rules_schedule.jpg"; modified = true; }
        if (!p.frameColor) {
          p.frameColor = 'none';
          modified = true;
        }
        if (typeof p.stockQty !== 'number') {
          p.stockQty = (idx === 1 || idx === 6) ? 3 : 25;
          modified = true;
        }
        if (p.stockQty === 0) {
          p.inStock = false;
        }
        return p;
      });

      // Ensure Combo items are included
      const hasCombo = adminProducts.some(p => p.category === 'combo');
      if (!hasCombo) {
        adminProducts.push(
          {
            id: 13,
            name: "កញ្ចប់តុបតែងថ្នាក់រៀនបឋមពេញលេញ (Classroom Starter Combo)",
            category: "combo",
            categoryLabel: "កញ្ចប់ប្រូម៉ូសិន",
            size: "ឈុតធំ 4 ផ្ទាំង + បន្ទះលេខ",
            material: "អ៊ុតស្វិតការពារទឹក 300g (កញ្ចប់ពិសេស)",
            priceUSD: 12.00,
            priceKHR: 48000,
            badge: "COMBO SET 🎁",
            iconBg: "from-sky-500 via-indigo-500 to-purple-600",
            iconEmoji: "🎁",
            imageUrl: "",
            inStock: true,
            stockQty: 15,
            description: "កញ្ចប់ពិសេសរួមបញ្ចូលទាំងផ្ទាំងបដាស្វាគមន៍ តារាងព្យញ្ជនៈ ដើមឈើអំណាន និងកាលវិភាគបង្រៀន ចំណេញជាងទិញរាយ 20%!"
          },
          {
            id: 14,
            name: "កញ្ចប់ល្បែងសិក្សាបណ្ដុះបញ្ញាកុមារ (Kids STEM Learning Pack)",
            category: "combo",
            categoryLabel: "កញ្ចប់ប្រូម៉ូសិន",
            size: "ឈុត 3 មុខក្នុងប្រអប់កាដូ",
            material: "ឈើធម្មជាតិ និងផ្លាស្ទិកសុវត្ថិភាព",
            priceUSD: 15.00,
            priceKHR: 60000,
            badge: "SUPER VALUE 🌟",
            iconBg: "from-amber-500 via-emerald-500 to-teal-600",
            iconEmoji: "📦",
            imageUrl: "",
            inStock: true,
            stockQty: 4,
            description: "រួមបញ្ចូលទាំងផែនទីកម្ពុជាពីឈើ គូបរាប់លេខ STEM និងល្បែង Tangram 7 បំណែក ជួយកូនៗឆ្លាតវៃ!"
          }
        );
        modified = true;
      }

      if (modified) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(adminProducts));
      }
    } catch (e) {
      adminProducts = [...defaultCatalog];
      saveProducts();
    }
  } else {
    adminProducts = [...defaultCatalog];
    saveProducts();
  }
  updateStats();
  updateLowStockAlerts();
  renderAdminTable();
}

// Save products to LocalStorage
function saveProducts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(adminProducts));
  updateStats();
  updateLowStockAlerts();
}

// Format numbers
function formatUSD(num) {
  return `$${Number(num).toFixed(2)}`;
}

function formatKHR(num) {
  return `${Number(num).toLocaleString('en-US')} ៛`;
}

// Update Top Stats Overview
function updateStats() {
  const total = adminProducts.length;
  const decor = adminProducts.filter(p => p.category === 'decor').length;
  const teaching = adminProducts.filter(p => p.category === 'teaching').length;
  const games = adminProducts.filter(p => p.category === 'games').length;
  const combo = adminProducts.filter(p => p.category === 'combo').length;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-decor').textContent = decor;
  document.getElementById('stat-teaching').textContent = teaching;
  document.getElementById('stat-games').textContent = games;

  document.getElementById('count-all').textContent = total;
  document.getElementById('count-decor').textContent = decor;
  document.getElementById('count-teaching').textContent = teaching;
  document.getElementById('count-games').textContent = games;
  const cCombo = document.getElementById('count-combo');
  if (cCombo) cCombo.textContent = combo;

  const navProd = document.getElementById('nav-count-products');
  if (navProd) navProd.textContent = total;
}

let currentAdminProductView = localStorage.getItem('edushop_admin_product_view') || 'table';

function setAdminProductView(mode) {
  currentAdminProductView = (mode === 'grid') ? 'grid' : 'table';
  try {
    localStorage.setItem('edushop_admin_product_view', currentAdminProductView);
  } catch (e) {
    console.warn('Failed to save product view mode:', e);
  }
  updateAdminProductViewUI();
}

function updateAdminProductViewUI() {
  const tableContainer = document.getElementById('admin-products-table-container');
  const gridContainer = document.getElementById('admin-products-grid-container');
  const btnTable = document.getElementById('btn-admin-view-table');
  const btnGrid = document.getElementById('btn-admin-view-grid');

  if (currentAdminProductView === 'grid') {
    if (tableContainer) tableContainer.classList.add('hidden');
    if (gridContainer) gridContainer.classList.remove('hidden');
    if (btnTable) {
      btnTable.className = 'px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 flex items-center gap-1.5 transition cursor-pointer';
    }
    if (btnGrid) {
      btnGrid.className = 'px-3 py-1.5 rounded-lg bg-white text-sky-700 shadow-xs flex items-center gap-1.5 transition cursor-pointer';
    }
  } else {
    if (tableContainer) tableContainer.classList.remove('hidden');
    if (gridContainer) gridContainer.classList.add('hidden');
    if (btnTable) {
      btnTable.className = 'px-3 py-1.5 rounded-lg bg-white text-sky-700 shadow-xs flex items-center gap-1.5 transition cursor-pointer';
    }
    if (btnGrid) {
      btnGrid.className = 'px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 flex items-center gap-1.5 transition cursor-pointer';
    }
  }
}

// Render Products Table
function renderAdminTable() {
  const search = document.getElementById('admin-search-input').value.toLowerCase().trim();
  const tableBody = document.getElementById('admin-products-table');

  const filtered = adminProducts.filter(item => {
    const matchCategory = (currentAdminCategory === 'all') || (item.category === currentAdminCategory);
    const matchSearch = !search || 
      item.name.toLowerCase().includes(search) || 
      item.size.toLowerCase().includes(search) ||
      (item.badge && item.badge.toLowerCase().includes(search));
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    if (tableBody) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="py-12 text-center text-slate-400">
            <div class="text-3xl mb-2">🔍</div>
            <p class="font-medium">មិនមានទិន្នន័យទំនិញត្រូវនឹងលក្ខខណ្ឌស្វែងរកទេ</p>
          </td>
        </tr>
      `;
    }
    renderAdminGrid([]);
    updateAdminProductViewUI();
    return;
  }

  if (tableBody) {
    tableBody.innerHTML = filtered.map(item => {
      let catBadge = 'bg-amber-50 text-amber-700 border-amber-200';
      if (item.category === 'teaching') catBadge = 'bg-blue-50 text-blue-700 border-blue-200';
      if (item.category === 'games') catBadge = 'bg-emerald-50 text-emerald-700 border-emerald-200';
      if (item.category === 'combo') catBadge = 'bg-purple-50 text-purple-700 border-purple-200';

      const stockStatusHtml = item.inStock !== false 
        ? `<button onclick="toggleStockStatus(${item.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition" title="ចុចដើម្បីប្តូរទៅ អស់ពីស្តុក">
             <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> មានក្នុងស្តុក
           </button>`
        : `<button onclick="toggleStockStatus(${item.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition" title="ចុចដើម្បីប្តូរទៅ មានក្នុងស្តុក">
             <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span> អស់ពីស្តុក
           </button>`;

      const isWhite = item.iconBg && item.iconBg.includes('white');
      const frameInfo = getFrameInfo(item.frameColor);
      const frameClass = frameInfo.classSm ? ` ${frameInfo.classSm}` : ' border border-slate-200';
      const currentStock = typeof item.stockQty === 'number' ? item.stockQty : 25;
      const isLowStock = currentStock <= 5;

      // Visual image/icon (Clickable to preview)
      const visual = item.imageUrl 
        ? `<img src="${item.imageUrl}" onclick="openAdminImagePreview(${item.id})" class="w-12 h-12 object-cover rounded-xl${frameClass} shadow-xs cursor-pointer hover:scale-108 transition" title="ចុចដើម្បីពិនិត្យរូបភាពធំ">`
        : `<div onclick="openAdminImagePreview(${item.id})" class="w-12 h-12 rounded-xl bg-gradient-to-br ${item.iconBg || 'from-sky-400 to-blue-500'} ${isWhite ? 'border border-slate-300 text-slate-800' : 'text-white'}${frameClass} flex items-center justify-center text-2xl shadow-xs cursor-pointer hover:scale-108 transition" title="ចុចដើម្បីពិនិត្យរូបភាពធំ">
             ${item.iconEmoji || '📦'}
           </div>`;

      return `
        <tr class="hover:bg-slate-50/80 transition">
          <!-- Visual -->
          <td class="py-3 px-4">
            ${visual}
          </td>

          <!-- Name & Badge -->
          <td class="py-3 px-4 max-w-xs">
            <div class="font-bold text-slate-900 leading-snug">${item.name}</div>
            <div class="flex items-center gap-1.5 mt-1 flex-wrap">
              ${item.badge ? `<span class="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-slate-200">${item.badge}</span>` : ''}
              ${(item.frameColor && item.frameColor !== 'none') 
                ? `<span class="text-[10px] font-semibold px-2 py-0.5 rounded-md border ${frameInfo.badgeBg} shadow-2xs" title="មានស៊ុម (${frameInfo.label})">${frameInfo.emoji} ${frameInfo.label}</span>` 
                : `<span class="text-[10px] font-medium text-slate-400 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200" title="គ្មានស៊ុម">🚫 គ្មានស៊ុម</span>`}
              ${item.material ? `<span class="text-[11px] text-slate-400 truncate max-w-[150px]">${item.material}</span>` : ''}
            </div>
          </td>

          <!-- Category -->
          <td class="py-3 px-4 whitespace-nowrap">
            <span class="px-2.5 py-1 rounded-lg text-xs font-semibold border ${catBadge}">
              ${item.categoryLabel || getCategoryLabel(item.category)}
            </span>
          </td>

          <!-- Size / Dimensions -->
          <td class="py-3 px-4">
            <div class="inline-flex items-center gap-1 font-semibold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 text-xs">
              <span class="text-sky-600">📐</span> ${item.size}
            </div>
          </td>

          <!-- Price -->
          <td class="py-3 px-4 whitespace-nowrap">
            <div class="font-bold text-sky-600 text-sm">${formatUSD(item.priceUSD)}</div>
            <div class="text-[11px] text-slate-400">(${formatKHR(item.priceKHR)})</div>
          </td>

          <!-- Stock & Stock Qty -->
          <td class="py-3 px-4 whitespace-nowrap">
            <div class="flex flex-col gap-1 items-start">
              ${stockStatusHtml}
              <div class="flex items-center gap-1.5 mt-0.5">
                <span class="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  ស្តុក៖ <strong>${currentStock}</strong>
                </span>
                ${isLowStock ? `<span class="badge-low-stock animate-pulse">⚠️ ជិតអស់</span>` : ''}
              </div>
              <!-- Quick Restock Actions -->
              <div class="flex items-center gap-1 mt-0.5">
                <span class="text-[9.5px] text-slate-400 font-medium">ថែម:</span>
                <button onclick="quickRestockProduct(${item.id}, 10)" class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 transition cursor-pointer active:scale-95" title="បន្ថែម 10 គ្រឿង">+10</button>
                <button onclick="quickRestockProduct(${item.id}, 20)" class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition cursor-pointer active:scale-95" title="បន្ថែម 20 គ្រឿង">+20</button>
                <button onclick="promptQuickRestock(${item.id})" class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition cursor-pointer active:scale-95" title="កំណត់ចំនួនបន្ថែម">✏️</button>
              </div>
            </div>
          </td>

          <!-- Actions -->
          <td class="py-3 px-4 text-center whitespace-nowrap">
            <div class="flex items-center justify-center gap-1.5">
              <!-- QR / Barcode Sticker Button -->
              <button 
                onclick="openProductQrModal(${item.id})" 
                class="px-2 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition font-bold text-xs flex items-center gap-1 active:scale-95 cursor-pointer shadow-2xs" 
                title="បោះពុម្ពស្លាក QR / Barcode បិទលើទំនិញ">
                <span>🏷️</span>
                <span class="hidden sm:inline">QR</span>
              </button>

              <!-- Edit Button -->
              <button 
                onclick="openEditProductModal(${item.id})" 
                class="p-2 rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100 border border-sky-200 transition active:scale-95 cursor-pointer" 
                title="កែសម្រួលទំនិញ">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </button>

              <!-- Delete Button -->
              <button 
                onclick="deleteProduct(${item.id})" 
                class="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 transition active:scale-95 cursor-pointer" 
                title="លុបទំនិញ">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }
  renderAdminGrid(filtered);
  updateAdminProductViewUI();
}

// Render Products Visual Grid / Gallery View
function renderAdminGrid(filtered) {
  const grid = document.getElementById('admin-products-grid');
  if (!grid) return;

  if (!filtered || filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 bg-white rounded-2xl border border-slate-200">
        <div class="text-3xl mb-2">🔍</div>
        <p class="font-medium text-xs">មិនមានទិន្នន័យទំនិញត្រូវនឹងលក្ខខណ្ឌស្វែងរកទេ</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    let catBadge = 'bg-amber-50 text-amber-700 border-amber-200';
    if (item.category === 'teaching') catBadge = 'bg-blue-50 text-blue-700 border-blue-200';
    if (item.category === 'games') catBadge = 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (item.category === 'combo') catBadge = 'bg-purple-50 text-purple-700 border-purple-200';

    const stockStatusHtml = item.inStock !== false 
      ? `<button onclick="toggleStockStatus(${item.id})" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition cursor-pointer" title="ចុចដើម្បីប្តូរទៅ អស់ពីស្តុក">
           <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> មានក្នុងស្តុក
         </button>`
      : `<button onclick="toggleStockStatus(${item.id})" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition cursor-pointer" title="ចុចដើម្បីប្តូរទៅ មានក្នុងស្តុក">
           <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span> អស់ពីស្តុក
         </button>`;

    const isWhite = item.iconBg && item.iconBg.includes('white');
    const frameInfo = getFrameInfo(item.frameColor);
    const frameClass = frameInfo.classSm ? ` ${frameInfo.classSm}` : ' border border-slate-200';
    const currentStock = typeof item.stockQty === 'number' ? item.stockQty : 25;
    const isLowStock = currentStock <= 5;

    // Visual image/thumbnail preview
    const visual = item.imageUrl 
      ? `<div onclick="openAdminImagePreview(${item.id})" class="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 cursor-pointer group shadow-2xs border border-slate-100">
           <img src="${item.imageUrl}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
           <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
             <span class="px-2.5 py-1 bg-white/90 backdrop-blur text-slate-800 text-[11px] font-bold rounded-lg shadow-sm">🔍 មើលរូបធំ</span>
           </div>
           <!-- Bottom Branding Strip -->
           <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent pt-3 pb-1 px-1.5 flex items-center justify-between text-white text-[8px] pointer-events-none z-10">
             <span class="flex items-center gap-1 font-bold text-amber-300 truncate">
               <img src="logo.png" alt="EduShop" class="w-3.5 h-3.5 rounded-full bg-white object-contain flex-shrink-0">
               <span class="truncate">EduShop</span>
             </span>
             <span class="flex items-center gap-1 font-mono font-bold text-white flex-shrink-0">
               <span>0319711333</span>
               <img src="telegram_qr.png" alt="QR" class="w-4 h-4 rounded-xs bg-white object-contain flex-shrink-0">
             </span>
           </div>
         </div>`
      : `<div onclick="openAdminImagePreview(${item.id})" class="relative aspect-square w-full rounded-xl bg-gradient-to-br ${item.iconBg || 'from-sky-400 to-blue-500'} ${isWhite ? 'border border-slate-300 text-slate-800' : 'text-white'}${frameClass} flex flex-col items-center justify-center text-5xl shadow-2xs cursor-pointer group hover:scale-102 transition overflow-hidden">
           <span class="group-hover:scale-110 transition-transform mb-2">${item.iconEmoji || '📦'}</span>
           <span class="text-[10px] opacity-75 mb-4 font-medium">ចុចមើល</span>
           <!-- Bottom Branding Strip -->
           <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent pt-3 pb-1 px-1.5 flex items-center justify-between text-white text-[8px] pointer-events-none z-10">
             <span class="flex items-center gap-1 font-bold text-amber-300 truncate">
               <img src="logo.png" alt="EduShop" class="w-3.5 h-3.5 rounded-full bg-white object-contain flex-shrink-0">
               <span class="truncate">EduShop</span>
             </span>
             <span class="flex items-center gap-1 font-mono font-bold text-white flex-shrink-0">
               <span>0319711333</span>
               <img src="telegram_qr.png" alt="QR" class="w-4 h-4 rounded-xs bg-white object-contain flex-shrink-0">
             </span>
           </div>
         </div>`;

    return `
      <div class="bg-white rounded-2xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs hover:shadow-md transition">
        <div class="space-y-2.5">
          <!-- Card Image -->
          ${visual}

          <!-- Badges & Frame Info -->
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-semibold border ${catBadge}">
              ${item.categoryLabel || getCategoryLabel(item.category)}
            </span>
            ${item.badge ? `<span class="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-slate-200">${item.badge}</span>` : ''}
            ${(item.frameColor && item.frameColor !== 'none') 
              ? `<span class="text-[10px] font-semibold px-2 py-0.5 rounded-md border ${frameInfo.badgeBg} shadow-2xs">${frameInfo.emoji} ${frameInfo.label}</span>` 
              : ''}
          </div>

          <!-- Product Title -->
          <h4 class="font-bold text-slate-900 text-xs leading-snug line-clamp-2" title="${item.name}">${item.name}</h4>

          <!-- Size & Price -->
          <div class="flex items-center justify-between gap-1 pt-1 border-t border-slate-100 text-xs">
            <span class="inline-flex items-center gap-1 font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-[11px]">
              📐 ${item.size}
            </span>
            <div class="text-right">
              <div class="font-black text-sky-600 text-xs">${formatUSD(item.priceUSD)}</div>
              <div class="text-[9.5px] text-slate-400">(${formatKHR(item.priceKHR)})</div>
            </div>
          </div>

          <!-- Stock Status & Restock -->
          <div class="flex items-center justify-between gap-1 bg-slate-50 p-2 rounded-xl border border-slate-100 text-xs">
            <div>
              ${stockStatusHtml}
              <div class="text-[10px] text-slate-500 font-medium mt-1">
                ស្តុក៖ <strong class="text-slate-800">${currentStock}</strong>
                ${isLowStock ? '<span class="text-rose-600 font-bold ml-1">⚠️ ជិតអស់</span>' : ''}
              </div>
            </div>
            <div class="flex flex-col gap-1 items-end">
              <div class="flex items-center gap-1">
                <button onclick="quickRestockProduct(${item.id}, 10)" class="px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 cursor-pointer" title="ថែម 10">+10</button>
                <button onclick="quickRestockProduct(${item.id}, 20)" class="px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 cursor-pointer" title="ថែម 20">+20</button>
              </div>
              <button onclick="promptQuickRestock(${item.id})" class="text-[9.5px] text-slate-500 hover:text-sky-600 underline cursor-pointer">✏️ កំណត់ស្តុក</button>
            </div>
          </div>
        </div>

        <!-- Card Actions -->
        <div class="flex items-center justify-between gap-1.5 pt-3 mt-3 border-t border-slate-100">
          <button 
            onclick="openProductQrModal(${item.id})" 
            class="flex-1 py-1.5 px-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-bold text-[11px] flex items-center justify-center gap-1 cursor-pointer transition">
            <span>🏷️</span>
            <span>ស្លាក QR</span>
          </button>

          <button 
            onclick="openEditProductModal(${item.id})" 
            class="p-1.5 rounded-lg bg-sky-50 text-sky-600 hover:bg-sky-100 border border-sky-200 cursor-pointer transition" 
            title="កែសម្រួល">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </button>

          <button 
            onclick="deleteProduct(${item.id})" 
            class="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 cursor-pointer transition" 
            title="លុប">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Quick jump scroll inside batch items modal list
function scrollBatchItems(direction) {
  const list = document.getElementById('batch-items-list');
  if (!list) return;
  if (direction === 'top') {
    list.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    list.scrollTo({ top: list.scrollHeight, behavior: 'smooth' });
  }
}

// Scroll to top of Admin page
function scrollToAdminTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const main = document.getElementById('admin-main-content');
  if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide floating scroll-to-top button based on scroll depth
function handleAdminScroll() {
  const btn = document.getElementById('admin-scroll-top-btn');
  if (!btn) return;
  const main = document.getElementById('admin-main-content');
  const scrollY = window.scrollY || document.documentElement.scrollTop || (main ? main.scrollTop : 0);
  if (scrollY > 300) {
    btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
    btn.classList.add('opacity-100', 'translate-y-0');
  } else {
    btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
    btn.classList.remove('opacity-100', 'translate-y-0');
  }
}

function getCategoryLabel(category) {
  if (category === 'decor') return 'សម្ភារៈតុបតែងថ្នាក់';
  if (category === 'teaching') return 'សម្ភារៈបង្រៀនសិស្ស';
  if (category === 'games') return 'ល្បែងសិក្សា';
  if (category === 'combo') return 'កញ្ចប់ប្រូម៉ូសិន';
  return 'ទូទៅ';
}

// Category filter tabs
function setAdminCategoryFilter(cat) {
  currentAdminCategory = cat;
  document.querySelectorAll('.admin-filter-btn').forEach(btn => {
    btn.className = 'admin-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200';
  });
  document.getElementById('btn-admin-' + cat).className = 'admin-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-600 text-white shadow-sm';
  renderAdminTable();
}

function filterAdminProducts() {
  renderAdminTable();
}

// Toggle Stock Status
function toggleStockStatus(id) {
  const item = adminProducts.find(p => p.id === id);
  if (!item) return;

  item.inStock = (item.inStock === false) ? true : false;
  saveProducts();
  renderAdminTable();
  showToast(`បានប្តូរស្ថានភាព៖ «${item.name.slice(0, 15)}...» ទៅជា ${item.inStock ? 'មានក្នុងស្តុក' : 'អស់ពីស្តុក'}`);
}

// Delete Product
function deleteProduct(id) {
  const item = adminProducts.find(p => p.id === id);
  if (!item) return;

  if (confirm(`តើអ្នកពិតជាចង់លុបទំនិញ «${item.name}» មែនទេ?`)) {
    adminProducts = adminProducts.filter(p => p.id !== id);
    saveProducts();
    renderAdminTable();
    showToast(`បានលុបទំនិញ «${item.name.slice(0, 20)}...» ដោយជោគជ័យ!`, 'rose');
  }
}

// Auto calculate KHR from USD
function autoCalculateKHR(val) {
  const num = parseFloat(val) || 0;
  const khr = Math.round(num * 4000);
  document.getElementById('price-khr-preview').textContent = `តម្លៃរៀល៖ ≈ ${khr.toLocaleString()} ៛`;
}

// Apply Standard Size & Price Preset
function applySizePricePreset(size, priceUSD, priceKHR) {
  document.getElementById('prod-size').value = size;
  document.getElementById('prod-price-usd').value = priceUSD.toFixed(2);
  document.getElementById('price-khr-preview').textContent = `តម្លៃរៀល៖ ≈ ${priceKHR.toLocaleString()} ៛`;
  renderSingleProductPresetsGrid();
  showToast(`បានជ្រើសរើស៖ ${size} តម្លៃ ${priceKHR.toLocaleString()} ៛ ($${priceUSD.toFixed(2)})`);
}

// Toggle Admin Custom Size Inputs Box
function toggleAdminCustomSizeBox(force) {
  const box = document.getElementById('admin-custom-size-box');
  if (!box) return;
  if (typeof force === 'boolean') {
    if (force) box.classList.remove('hidden');
    else box.classList.add('hidden');
  } else {
    box.classList.toggle('hidden');
  }
}

// ================= SIZE PRESETS MANAGEMENT (ទំហំលឿន) =================
const DEFAULT_SIZE_PRESETS = [
  { id: 'preset_40_60', name: '40×60 cm', size: '40 cm x 60 cm', width: 40, length: 60, priceKHR: 5000, priceUSD: 1.25, areaM2: 0.24 },
  { id: 'preset_60_80', name: '60×80 cm', size: '60 cm x 80 cm', width: 60, length: 80, priceKHR: 10000, priceUSD: 2.50, areaM2: 0.48 },
  { id: 'preset_80_100', name: '80×100 cm', size: '80 cm x 100 cm', width: 80, length: 100, priceKHR: 15000, priceUSD: 3.75, areaM2: 0.80 },
  { id: 'preset_60_200', name: '60×200 cm', size: '60 cm x 200 cm', width: 60, length: 200, priceKHR: 25000, priceUSD: 6.25, areaM2: 1.20 },
  { id: 'preset_80_250', name: '80×250 cm', size: '80 cm x 250 cm', width: 80, length: 250, priceKHR: 40000, priceUSD: 10.00, areaM2: 2.00 }
];

function getSizePresets() {
  try {
    const raw = localStorage.getItem('edushop_size_presets');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error reading size presets:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_SIZE_PRESETS));
}

function saveSizePresets(presets) {
  try {
    localStorage.setItem('edushop_size_presets', JSON.stringify(presets));
  } catch (e) {
    console.error("Error saving size presets:", e);
  }
}

function renderAllSizePresetContainers() {
  renderPresetManagerList();
  renderSingleProductPresetsGrid();
  renderBatchDefaultSizeSelect();
  renderBatchBulkSizeButtons();
  if (typeof renderBatchItemsList === 'function' && typeof batchProductsQueue !== 'undefined' && batchProductsQueue.length > 0) {
    renderBatchItemsList();
  }
}

let currentSingleProductSizes = [];

function initSingleProductSizes(existingSizes = null) {
  if (Array.isArray(existingSizes) && existingSizes.length > 0) {
    currentSingleProductSizes = JSON.parse(JSON.stringify(existingSizes));
  } else {
    currentSingleProductSizes = getSizePresets().map(p => ({ ...p }));
  }
  renderSingleProductPresetsGrid();
}

function removeSingleProductSize(idx) {
  if (currentSingleProductSizes.length <= 1) {
    alert("ទំនិញត្រូវមានទំហំយ៉ាងហោចណាស់ ១ ជម្រើស!");
    return;
  }
  const removed = currentSingleProductSizes.splice(idx, 1)[0];
  renderSingleProductPresetsGrid();
  showToast(`🗑️ បានដកចេញទំហំ «${removed.size}» ពីទំនិញនេះ!`);
}

function renderSingleProductPresetsGrid() {
  const container = document.getElementById('single-product-size-presets-grid');
  if (!container) return;

  if (!Array.isArray(currentSingleProductSizes) || currentSingleProductSizes.length === 0) {
    currentSingleProductSizes = getSizePresets().map(p => ({ ...p }));
  }

  const curSize = document.getElementById('prod-size')?.value || '';

  container.innerHTML = `
    ${currentSingleProductSizes.map((p, idx) => `
      <div class="relative group/pill">
        <button 
          type="button" 
          onclick="applySizePricePreset('${p.size}', ${p.priceUSD}, ${p.priceKHR})"
          class="w-full p-2.5 rounded-xl border text-left transition flex flex-col shadow-2xs cursor-pointer ${curSize === p.size ? 'bg-sky-50 border-sky-500 ring-1 ring-sky-400' : 'bg-white border-sky-200 hover:border-sky-500 hover:bg-sky-50'}">
          <span class="font-bold text-slate-800 text-xs">${p.name || p.size}</span>
          <span class="text-[10px] text-slate-400">${p.width && p.length ? ((p.width * p.length)/10000).toFixed(2) + ' m²' : ''}</span>
          <span class="text-[11px] font-bold text-emerald-600 mt-0.5">${formatKHR(p.priceKHR)} <span class="font-normal text-slate-400">(${formatUSD(p.priceUSD)})</span></span>
        </button>
        <button 
          type="button" 
          onclick="removeSingleProductSize(${idx})" 
          title="ដកចេញទំហំ ${p.name || p.size} ពីទំនិញនេះ"
          class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-black text-[10px] flex items-center justify-center shadow-xs cursor-pointer transition opacity-70 group-hover/pill:opacity-100">
          ✕
        </button>
      </div>
    `).join('')}
    <button 
      type="button" 
      onclick="toggleAdminCustomSizeBox()"
      class="p-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white active:scale-95 text-left transition flex flex-col shadow-2xs group cursor-pointer justify-between">
      <div>
        <span class="font-bold text-xs flex items-center gap-1">✏️ ទំហំផ្សេង</span>
        <span class="text-[10px] text-sky-100">ទទឹង × បណ្ដាយ</span>
      </div>
      <span class="text-[10.5px] font-bold text-amber-300 mt-0.5">20,000៛/m²</span>
    </button>
  `;
}

function renderBatchDefaultSizeSelect() {
  const select = document.getElementById('batch-default-size-preset');
  if (!select) return;

  const curVal = select.value;
  const presets = getSizePresets();
  select.innerHTML = presets.map(p => `
    <option value="${p.size}|${p.priceUSD}|${p.priceKHR}">${p.size} ៖ ${formatKHR(p.priceKHR)} (${formatUSD(p.priceUSD)})</option>
  `).join('');

  if (curVal && presets.some(p => `${p.size}|${p.priceUSD}|${p.priceKHR}` === curVal)) {
    select.value = curVal;
  }
}

function renderBatchBulkSizeButtons() {
  const container = document.getElementById('batch-bulk-preset-buttons');
  if (!container) return;

  const presets = getSizePresets();
  container.innerHTML = `
    ${presets.map(p => `
      <button 
        type="button" 
        onclick="bulkSetBatchItemSize('${p.size}|${p.priceUSD}|${p.priceKHR}')" 
        class="px-2.5 py-1 rounded-lg bg-white hover:bg-sky-100 border border-sky-300 text-sky-900 font-bold text-[10.5px] transition shadow-2xs cursor-pointer">
        ${p.name || p.size} (${formatKHR(p.priceKHR)})
      </button>
    `).join('')}
    <button 
      type="button" 
      onclick="promptBulkCustomSize()" 
      class="px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-[10.5px] transition shadow-2xs cursor-pointer">
      ✏️ ទំហំផ្សេង (20,000៛/m²)...
    </button>
    <button 
      type="button" 
      onclick="promptQuickAddPreset()" 
      title="បន្ថែមទំហំស្ដង់ដារថ្មី"
      class="px-2 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-dashed border-emerald-400 text-emerald-800 font-bold text-[10.5px] transition shadow-2xs cursor-pointer flex items-center gap-1">
      <span>➕</span> <span>ថែមទំហំ</span>
    </button>
  `;
}

function renderPresetManagerList() {
  const container = document.getElementById('preset-manager-items-list');
  const countBadge = document.getElementById('preset-count-badge');
  if (!container) return;

  const presets = getSizePresets();
  if (countBadge) countBadge.textContent = presets.length;

  if (presets.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
        <p class="text-xs font-medium">គ្មានទំហំស្ដង់ដារក្នុងបញ្ជីទេ!</p>
        <button type="button" onclick="resetDefaultSizePresets()" class="mt-2 px-3 py-1 bg-sky-600 text-white rounded-lg text-xs font-bold cursor-pointer">
          🔄 ស្តារទំហំដើមទាំង ៥ វិញ
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = presets.map((p, idx) => {
    const areaM2 = ((p.width * p.length) / 10000).toFixed(2);
    return `
      <div class="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-white border border-slate-200 rounded-xl transition shadow-2xs">
        <div class="flex items-center gap-2.5">
          <span class="w-6 h-6 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
            ${idx + 1}
          </span>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-bold text-slate-800">${p.size}</span>
              <span class="text-[10px] text-slate-400">(${areaM2} m²)</span>
            </div>
            <div class="text-[11px] font-bold text-emerald-600">
              ${formatKHR(p.priceKHR)} <span class="font-normal text-slate-400">(${formatUSD(p.priceUSD)})</span>
            </div>
          </div>
        </div>

        <button 
          type="button" 
          onclick="deleteSizePreset('${p.id}')" 
          title="ដកចេញទំហំនេះ"
          class="px-2.5 py-1 bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-700 active:scale-95 rounded-lg text-xs font-bold border border-rose-200 transition cursor-pointer flex items-center gap-1">
          <span>🗑️</span>
          <span>ដកចេញ</span>
        </button>
      </div>
    `;
  }).join('');
}

function openPresetSizeManagerModal() {
  renderPresetManagerList();
  const modal = document.getElementById('preset-size-manager-modal');
  if (modal) modal.classList.remove('hidden');
}

function closePresetSizeManagerModal() {
  const modal = document.getElementById('preset-size-manager-modal');
  if (modal) modal.classList.add('hidden');
}

function promptQuickAddPreset() {
  openPresetSizeManagerModal();
  setTimeout(() => {
    document.getElementById('new-preset-w')?.focus();
  }, 150);
}

function onNewPresetDimensionChange() {
  const w = parseFloat(document.getElementById('new-preset-w')?.value) || 0;
  const l = parseFloat(document.getElementById('new-preset-l')?.value) || 0;
  const khrInput = document.getElementById('new-preset-khr');
  const usdInput = document.getElementById('new-preset-usd');
  const infoEl = document.getElementById('new-preset-info');

  if (w > 0 && l > 0) {
    const areaM2 = (w * l) / 10000;
    let khr = Math.round((areaM2 * 20000) / 100) * 100;
    if (khr < 1000) khr = 1000;
    const usd = parseFloat((khr / 4000).toFixed(2));
    
    if (khrInput) khrInput.value = khr;
    if (usdInput) usdInput.value = usd;
    if (infoEl) infoEl.textContent = `📐 ក្រឡាផ្ទៃ៖ ${areaM2.toFixed(2)} m² (គិត 20,000៛/m² = ${formatKHR(khr)})`;
  } else {
    if (infoEl) infoEl.textContent = '📐 បញ្ចូលទំហំខាងលើដើម្បីគណនាតម្លៃស្វ័យប្រវត្តិ';
  }
}

function onNewPresetPriceKHRChange() {
  const khr = parseInt(document.getElementById('new-preset-khr')?.value, 10) || 0;
  const usdInput = document.getElementById('new-preset-usd');
  if (khr > 0 && usdInput) {
    usdInput.value = (khr / 4000).toFixed(2);
  }
}

function saveNewSizePreset() {
  const wInput = document.getElementById('new-preset-w');
  const lInput = document.getElementById('new-preset-l');
  const khrInput = document.getElementById('new-preset-khr');
  const usdInput = document.getElementById('new-preset-usd');

  const w = parseFloat(wInput?.value) || 0;
  const l = parseFloat(lInput?.value) || 0;
  const khr = parseInt(khrInput?.value, 10) || 0;
  const usd = parseFloat(usdInput?.value) || 0;

  if (w <= 0 || l <= 0) {
    alert("សូមបញ្ចូលទទឹង និងបណ្ដោយឱ្យបានត្រឹមត្រូវ!");
    return;
  }
  if (khr <= 0) {
    alert("សូមបញ្ចូលតម្លៃទំនិញឱ្យបានត្រឹមត្រូវ!");
    return;
  }

  const sizeStr = `${w} cm x ${l} cm`;
  const presets = getSizePresets();
  
  if (presets.some(p => p.size === sizeStr)) {
    alert(`ទំហំ «${sizeStr}» មានក្នុងបញ្ជីរួចរាល់ហើយ!`);
    return;
  }

  const newPreset = {
    id: 'preset_' + Date.now(),
    name: `${w}×${l} cm`,
    size: sizeStr,
    width: w,
    length: l,
    priceKHR: khr,
    priceUSD: usd > 0 ? usd : parseFloat((khr / 4000).toFixed(2)),
    areaM2: parseFloat(((w * l) / 10000).toFixed(3))
  };

  presets.push(newPreset);
  saveSizePresets(presets);
  renderAllSizePresetContainers();

  if (wInput) wInput.value = '';
  if (lInput) lInput.value = '';
  if (khrInput) khrInput.value = '';
  if (usdInput) usdInput.value = '';
  const infoEl = document.getElementById('new-preset-info');
  if (infoEl) infoEl.textContent = '📐 បញ្ចូលទំហំខាងលើដើម្បីគណនាតម្លៃស្វ័យប្រវត្តិ';

  showToast(`🎉 បានបន្ថែមទំហំស្ដង់ដារ «${newPreset.size}» ជោគជ័យ!`);
}

function deleteSizePreset(id) {
  const presets = getSizePresets();
  const target = presets.find(p => p.id === id);
  if (!target) return;

  if (!confirm(`តើអ្នកពិតជាចង់ដកចេញទំហំ «${target.size} (${formatKHR(target.priceKHR)})» ពីបញ្ជីទំហំលឿនមែនទេ?`)) {
    return;
  }

  const updated = presets.filter(p => p.id !== id);
  saveSizePresets(updated);
  renderAllSizePresetContainers();
  showToast(`🗑️ បានដកចេញទំហំ «${target.size}» ដោយជោគជ័យ!`);
}

function resetDefaultSizePresets() {
  if (!confirm("តើអ្នកពិតជាចង់ស្តារទំហំស្ដង់ដារដើមទាំង ៥ មកវិញមែនទេ?")) return;
  saveSizePresets(DEFAULT_SIZE_PRESETS);
  renderAllSizePresetContainers();
  showToast("🔄 បានស្តារទំហំស្ដង់ដារដើមទាំង ៥ ជោគជ័យ!");
}

// Calculate Price based on Presets & 1 Square Meter (1m²) = 20,000 ៛ ($5.00)
function calcCustomDimensionsPrice(w, l) {
  const width = parseFloat(w) || 0;
  const length = parseFloat(l) || 0;
  if (width <= 0 || length <= 0) return { khr: 5000, usd: 1.25, areaM2: 0.24, areaFormatted: '0.24 m²' };

  const minD = Math.min(width, length);
  const maxD = Math.max(width, length);

  // Exact matches for the active presets
  const presets = getSizePresets();
  const matched = presets.find(p => {
    const pMin = Math.min(p.width, p.length);
    const pMax = Math.max(p.width, p.length);
    return minD === pMin && maxD === pMax;
  });

  if (matched) {
    const area = (matched.width * matched.length) / 10000;
    return {
      khr: matched.priceKHR,
      usd: matched.priceUSD,
      areaM2: parseFloat(area.toFixed(3)),
      areaFormatted: `${area.toFixed(2)} m² (ស្ដង់ដារ)`
    };
  }

  // ចំពោះទំហំផ្សេង ត្រូវគិតតម្លៃ 1 ម៉ែត្រការេ = 20,000 ៛ ($5.00)
  const areaM2 = (width * length) / 10000;
  let khr = Math.round((areaM2 * 20000) / 100) * 100;
  if (khr < 1000) khr = 1000; // Minimum floor price
  const usd = parseFloat((khr / 4000).toFixed(2));
  return { 
    khr, 
    usd, 
    areaM2: parseFloat(areaM2.toFixed(3)),
    areaFormatted: `${areaM2.toFixed(2)} m²`
  };
}

// Calculate Admin Custom Dimensions (ទំហំផ្សេង 1 m² = 20,000 ៛)
function calculateAdminCustomSize() {
  const wInput = document.getElementById('admin-custom-w');
  const lInput = document.getElementById('admin-custom-l');
  const warn = document.getElementById('admin-custom-w-warn');
  const info = document.getElementById('admin-custom-calc-info');

  const w = parseFloat(wInput.value) || 0;
  const l = parseFloat(lInput.value) || 0;

  if (warn) {
    if (w > 160) {
      warn.classList.remove('hidden');
    } else {
      warn.classList.add('hidden');
    }
  }

  if (w > 0 && l > 0) {
    const price = calcCustomDimensionsPrice(w, l);
    info.textContent = `ទំហំ: ${w} cm x ${l} cm (${price.areaFormatted}) | តម្លៃ: ${price.khr.toLocaleString()} ៛ ($${price.usd.toFixed(2)})`;
  } else {
    info.textContent = 'សូមបញ្ចូលទទឹង និងបណ្ដោយដើម្បីគណនាតម្លៃ';
  }
}

// Apply Admin Custom Size to Form Inputs (សេរីតាមចិត្តអ្នកគ្រប់គ្រង)
function applyAdminCustomSizeToForm() {
  const w = parseFloat(document.getElementById('admin-custom-w').value) || 0;
  const l = parseFloat(document.getElementById('admin-custom-l').value) || 0;

  if (w <= 0 || l <= 0) {
    alert("សូមបញ្ចូលទទឹង និងបណ្ដាយឱ្យបានត្រឹមត្រូវ!");
    return;
  }

  const price = calcCustomDimensionsPrice(w, l);
  const sizeStr = `${w} cm x ${l} cm`;

  if (!currentSingleProductSizes.some(s => s.size === sizeStr)) {
    currentSingleProductSizes.push({
      id: 'size_' + Date.now(),
      name: `${w}×${l} cm`,
      size: sizeStr,
      width: w,
      length: l,
      priceKHR: price.khr,
      priceUSD: price.usd
    });
  }

  applySizePricePreset(sizeStr, price.usd, price.khr);
  toggleAdminCustomSizeBox(false);
}

// Clean filename into user-friendly product name
function getCleanFileName(filename) {
  if (!filename) return "ទំនិញថ្មី";
  // Strip extension
  let name = filename.replace(/\.[^/.]+$/, "");
  // Replace underscores and consecutive dashes with spaces
  name = name.replace(/[_-]+/g, " ");
  // Trim extra spaces
  name = name.trim();
  return name || "ទំនិញថ្មី";
}

// Draw branded watermark bar (Logo + Telegram QR 0319711333) directly onto image canvas
function drawProductImageWatermarkOnCanvas(ctx, width, height) {
  return new Promise((resolve) => {
    const barHeight = Math.max(50, Math.min(84, Math.round(height * 0.125)));
    const yTop = height - barHeight;

    // Dark gradient overlay across the bottom
    const grad = ctx.createLinearGradient(0, yTop, 0, height);
    grad.addColorStop(0, 'rgba(15, 23, 42, 0.0)');
    grad.addColorStop(0.25, 'rgba(15, 23, 42, 0.85)');
    grad.addColorStop(1, 'rgba(15, 23, 42, 0.98)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, yTop, width, barHeight);

    const logo = new Image();
    const qr = new Image();
    let loadedCount = 0;
    const totalAssets = 2;

    const onComplete = () => {
      // 1. Left side: Logo + EduShop
      const logoSize = Math.max(26, Math.min(48, Math.round(barHeight * 0.65)));
      const logoPadding = Math.round(barHeight * 0.18);
      const logoX = 12;
      const logoY = height - logoSize - logoPadding;

      // Draw white circular background behind logo
      ctx.save();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2 + 1, 0, Math.PI * 2);
      ctx.fill();

      if (logo.complete && logo.naturalWidth) {
        ctx.beginPath();
        ctx.arc(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
      }
      ctx.restore();

      // Brand text
      const textX = logoX + logoSize + 8;
      ctx.fillStyle = '#fde047'; // Amber-300
      ctx.font = `bold ${Math.max(12, Math.round(barHeight * 0.28))}px 'Kantumruy Pro', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText('EduShop', textX, logoY + 1);

      ctx.fillStyle = '#cbd5e1'; // Slate-300
      ctx.font = `500 ${Math.max(9, Math.round(barHeight * 0.18))}px 'Kantumruy Pro', sans-serif`;
      ctx.fillText('សម្ភារៈអប់រំខ្មែរ', textX, logoY + Math.round(barHeight * 0.32));

      // 2. Right side: Telegram QR Code + 0319711333
      const qrSize = Math.max(32, Math.min(54, Math.round(barHeight * 0.75)));
      const qrPadding = Math.round(barHeight * 0.12);
      const qrX = width - qrSize - 12;
      const qrY = height - qrSize - qrPadding;

      // Draw white rounded rect for QR
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(qrX - 1, qrY - 1, qrSize + 2, qrSize + 2, 4);
      } else {
        ctx.rect(qrX - 1, qrY - 1, qrSize + 2, qrSize + 2);
      }
      ctx.fill();

      if (qr.complete && qr.naturalWidth) {
        ctx.drawImage(qr, qrX, qrY, qrSize, qrSize);
      }

      // Text next to QR
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';
      ctx.fillStyle = '#7dd3fc'; // Sky-300
      ctx.font = `bold ${Math.max(9, Math.round(barHeight * 0.18))}px 'Kantumruy Pro', sans-serif`;
      ctx.fillText('✈️ Telegram QR', qrX - 8, qrY + 2);

      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${Math.max(11, Math.round(barHeight * 0.28))}px 'Kantumruy Pro', monospace`;
      ctx.fillText('0319711333', qrX - 8, qrY + Math.round(barHeight * 0.26));

      ctx.textAlign = 'left';
      resolve();
    };

    const tryFinish = () => {
      loadedCount++;
      if (loadedCount >= totalAssets) {
        onComplete();
      }
    };

    logo.onload = tryFinish;
    logo.onerror = tryFinish;
    qr.onload = tryFinish;
    qr.onerror = tryFinish;

    logo.src = 'logo.png';
    qr.src = 'telegram_qr.png';

    // Timeout safety fallback (max 450ms)
    setTimeout(() => {
      if (loadedCount < totalAssets) {
        onComplete();
      }
    }, 450);
  });
}

// Compress image via Canvas to prevent exceeding LocalStorage quota
function resizeAndCompressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.78) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.onload = async function() {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Watermark: Website Logo & Telegram QR Code (0319711333) at the bottom
        try {
          await drawProductImageWatermarkOnCanvas(ctx, width, height);
        } catch (wmErr) {
          console.warn("Watermark drawing skipped or failed:", wmErr);
        }

        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      img.onerror = () => resolve(e.target.result);
      img.src = e.target.result;
    };
    reader.onerror = () => resolve('');
    reader.readAsDataURL(file);
  });
}

function getCategoryDefaultEmoji(category) {
  if (category === 'decor') return '🎨';
  if (category === 'teaching') return '📐';
  if (category === 'games') return '🧩';
  return '📦';
}

function getCategoryDefaultBg(category) {
  if (category === 'decor') return 'from-amber-400 to-orange-500';
  if (category === 'teaching') return 'from-cyan-500 to-blue-600';
  if (category === 'games') return 'from-emerald-400 to-teal-600';
  return 'from-sky-400 to-blue-500';
}

// Modal Mode Switching (Single vs Batch)
let currentModalMode = 'single';
let batchProductsQueue = [];

function switchProductModalMode(mode) {
  currentModalMode = mode;
  const singleContainer = document.getElementById('single-product-container');
  const batchContainer = document.getElementById('batch-product-container');
  const tabSingle = document.getElementById('tab-single-btn');
  const tabBatch = document.getElementById('tab-batch-btn');

  if (mode === 'batch') {
    singleContainer.classList.add('hidden');
    batchContainer.classList.remove('hidden');
    tabSingle.className = 'flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition text-slate-600 hover:text-slate-900 hover:bg-white/60';
    tabBatch.className = 'flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition bg-white text-emerald-700 shadow-xs ring-1 ring-emerald-500/20';
    document.getElementById('modal-title').innerHTML = `<span>⚡</span> <span>បង្កើតទំនិញច្រើនជាមួយរូបភាព (Batch Upload)</span>`;
    if (typeof updateBatchFrameButtons === 'function') updateBatchFrameButtons();
  } else {
    singleContainer.classList.remove('hidden');
    batchContainer.classList.add('hidden');
    tabSingle.className = 'flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition bg-white text-sky-700 shadow-xs ring-1 ring-sky-500/20';
    tabBatch.className = 'flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition text-slate-600 hover:text-slate-900 hover:bg-white/60';
    document.getElementById('modal-title').innerHTML = `<span>📦</span> <span>បង្កើតទំនិញថ្មី</span>`;
    if (typeof updateSingleFrameButtons === 'function') updateSingleFrameButtons();
  }
}

// Toggle buttons for single product frame option (គ្មានស៊ុម / មានស៊ុម)
function updateSingleFrameButtons() {
  const frameColor = document.getElementById('prod-frame-color')?.value || 'none';
  const btnNone = document.getElementById('btn-single-frame-none');
  const btnHas = document.getElementById('btn-single-frame-has');
  const wrapper = document.getElementById('single-frame-color-wrapper');
  if (btnNone && btnHas) {
    if (frameColor === 'none') {
      btnNone.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-black bg-slate-800 text-white shadow-xs border border-slate-800 transition cursor-pointer';
      btnHas.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold bg-white text-slate-600 hover:bg-slate-50 border border-slate-300 transition cursor-pointer';
      if (wrapper) wrapper.classList.add('hidden');
    } else {
      btnNone.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold bg-white text-slate-600 hover:bg-slate-50 border border-slate-300 transition cursor-pointer';
      btnHas.className = 'flex-1 py-1.5 px-2 rounded-lg text-xs font-black bg-amber-500 text-white shadow-xs border border-amber-600 transition cursor-pointer';
      if (wrapper) wrapper.classList.remove('hidden');
    }
  }
}

function setSingleFrameColor(color) {
  const select = document.getElementById('prod-frame-color');
  if (select) {
    select.value = color;
    updateSinglePreviewFrame();
  }
}

function setSingleProductHasFrame(hasFrame) {
  const select = document.getElementById('prod-frame-color');
  if (!select) return;
  if (!hasFrame) {
    select.value = 'none';
  } else {
    if (select.value === 'none') select.value = 'green';
  }
  updateSinglePreviewFrame();
}

// Live Preview of Frame for Single Product Modal
function updateSinglePreviewFrame() {
  const frameColor = document.getElementById('prod-frame-color')?.value || 'none';
  const frameInfo = getFrameInfo(frameColor);
  const previewImg = document.getElementById('image-preview');
  const badge = document.getElementById('image-preview-frame-badge');
  
  if (previewImg) {
    previewImg.classList.remove(
      'frame-gold', 'frame-wood', 'frame-black', 'frame-white', 'frame-silver', 'frame-blue', 'frame-red', 'frame-green', 'frame-purple',
      'frame-gold-sm', 'frame-wood-sm', 'frame-black-sm', 'frame-white-sm', 'frame-silver-sm', 'frame-blue-sm', 'frame-red-sm', 'frame-green-sm', 'frame-purple-sm'
    );
    if (frameInfo.classSm) {
      previewImg.classList.add(frameInfo.classSm);
    }
  }

  if (badge) {
    if (frameColor !== 'none') {
      badge.textContent = `${frameInfo.emoji} ${frameInfo.label}`;
      badge.className = `absolute -bottom-1 -right-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-xs border ${frameInfo.badgeBg}`;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }

  // Highlight active swatch button in single modal
  document.querySelectorAll('.single-frame-swatch-btn').forEach(btn => {
    const val = btn.getAttribute('data-frame-val');
    if (val === frameColor) {
      btn.classList.add('ring-2', 'ring-emerald-500', 'ring-offset-1', 'font-black', 'shadow-xs');
      btn.classList.remove('opacity-70');
    } else {
      btn.classList.remove('ring-2', 'ring-emerald-500', 'ring-offset-1', 'font-black', 'shadow-xs');
      btn.classList.add('opacity-70');
    }
  });

  updateSingleFrameButtons();
}

// Handle Photo Upload in Single Mode
async function handleImageUpload(e) {
  const files = e.target.files;
  if (!files || files.length === 0) return;

  // If user selected multiple images in single mode file picker, automatically switch to batch mode!
  if (files.length > 1) {
    switchProductModalMode('batch');
    handleBatchFiles(files);
    return;
  }

  const file = files[0];
  const nameInput = document.getElementById('prod-name');
  if (!nameInput.value.trim() && file.name) {
    nameInput.value = getCleanFileName(file.name);
    showToast(`បានកំណត់ឈ្មោះ៖ «${nameInput.value}» តាមឈ្មោះរូបភាព`);
  }

  const compressedDataUrl = await resizeAndCompressImage(file, 800, 800, 0.78);
  uploadedImageData = compressedDataUrl;
  const preview = document.getElementById('image-preview');
  preview.src = uploadedImageData;
  const fileNameEl = document.getElementById('image-preview-filename');
  if (fileNameEl) fileNameEl.textContent = file.name;
  updateSinglePreviewFrame();
  document.getElementById('image-preview-container').classList.remove('hidden');
}

function clearUploadedImage() {
  uploadedImageData = '';
  document.getElementById('prod-image-file').value = '';
  document.getElementById('image-preview').src = '';
  const fileNameEl = document.getElementById('image-preview-filename');
  if (fileNameEl) fileNameEl.textContent = '';
  updateSinglePreviewFrame();
  document.getElementById('image-preview-container').classList.add('hidden');
}

// Modal: Open Add Product (Single or Batch)
function openAddProductModal(initialMode = 'single') {
  initSingleProductSizes();
  renderAllSizePresetContainers();
  document.getElementById('modal-mode-tabs').classList.remove('hidden');
  document.getElementById('product-form').reset();
  document.getElementById('prod-id').value = '';
  document.getElementById('prod-instock').value = 'true';
  const stockEl = document.getElementById('prod-stock-qty');
  if (stockEl) stockEl.value = '25';
  document.getElementById('prod-frame-color').value = 'none';
  clearUploadedImage();
  updateSinglePreviewFrame();
  autoCalculateKHR(0);
  switchProductModalMode(initialMode);
  document.getElementById('product-modal').classList.remove('hidden');
}

// Modal: Open Edit Product
function openEditProductModal(id) {
  const item = adminProducts.find(p => p.id === id);
  if (!item) return;

  initSingleProductSizes(item.availableSizes);
  renderAllSizePresetContainers();
  // Hide mode tabs during edit
  document.getElementById('modal-mode-tabs').classList.add('hidden');
  switchProductModalMode('single');

  document.getElementById('modal-title').innerHTML = `<span>✏️</span> <span>កែសម្រួលទំនិញ</span>`;
  document.getElementById('prod-id').value = item.id;
  document.getElementById('prod-name').value = item.name;
  document.getElementById('prod-category').value = item.category;
  document.getElementById('prod-size').value = item.size;
  document.getElementById('prod-price-usd').value = item.priceUSD;
  autoCalculateKHR(item.priceUSD);
  document.getElementById('prod-material').value = item.material || '';
  document.getElementById('prod-badge').value = item.badge || '';
  const stockEl = document.getElementById('prod-stock-qty');
  if (stockEl) stockEl.value = (typeof item.stockQty === 'number') ? item.stockQty : 25;
  document.getElementById('prod-instock').value = (item.inStock !== false) ? 'true' : 'false';
  document.getElementById('prod-emoji').value = item.iconEmoji || '🎨';
  document.getElementById('prod-icon-bg').value = item.iconBg || 'from-amber-400 to-orange-500';
  document.getElementById('prod-frame-color').value = item.frameColor || 'none';
  document.getElementById('prod-desc').value = item.description || '';

  if (item.imageUrl) {
    uploadedImageData = item.imageUrl;
    document.getElementById('image-preview').src = item.imageUrl;
    const fileNameEl = document.getElementById('image-preview-filename');
    if (fileNameEl) fileNameEl.textContent = item.name;
    updateSinglePreviewFrame();
    document.getElementById('image-preview-container').classList.remove('hidden');
  } else {
    clearUploadedImage();
  }

  document.getElementById('product-modal').classList.remove('hidden');
}

function closeProductModal() {
  document.getElementById('product-modal').classList.add('hidden');
}

// ================= BATCH MULTI-PRODUCT CREATION LOGIC =================
async function handleBatchFiles(files) {
  if (!files || files.length === 0) return;

  const defaultCategory = document.getElementById('batch-default-category')?.value || 'decor';
  const defaultPreset = (document.getElementById('batch-default-size-preset')?.value || (getSizePresets()[0] ? `${getSizePresets()[0].size}|${getSizePresets()[0].priceUSD}|${getSizePresets()[0].priceKHR}` : '40 cm x 60 cm|1.25|5000')).split('|');
  const defaultSize = defaultPreset[0];
  const defaultUSD = parseFloat(defaultPreset[1]);
  const defaultKHR = parseInt(defaultPreset[2]);
  const defaultFrameColor = document.getElementById('batch-default-frame-color')?.value || 'none';
  const defaultMaterial = document.getElementById('batch-default-material')?.value.trim() || '';
  const defaultBadge = document.getElementById('batch-default-badge')?.value.trim() || 'ថ្មី 🌟';

  // Filter ONLY image files (checking both MIME type and file extension)
  const imageFiles = Array.from(files).filter(file => {
    const isMimeImage = file.type && file.type.startsWith('image/');
    const isExtImage = /\.(jpe?g|png|webp|gif|bmp|svg|jfif|tiff?)$/i.test(file.name);
    return isMimeImage || isExtImage;
  });

  if (imageFiles.length === 0) {
    alert("ពុំមានឯកសារជារូបភាព (JPG, PNG, WebP) ក្នុងចំណោមឯកសារដែលបានជ្រើសរើសឡើយ!");
    return;
  }

  showToast(`កំពុងអាន និងរៀបចំរូបភាពចំនួន ${imageFiles.length} សន្លឹក...`);

  // Process in parallel using Promise.all for fast speed
  const newBatchItems = await Promise.all(imageFiles.map(async (file, idx) => {
    const productName = getCleanFileName(file.name);
    let compressedDataUrl = '';
    try {
      compressedDataUrl = await resizeAndCompressImage(file, 800, 800, 0.78);
    } catch (err) {
      console.warn("Could not compress, reading direct:", file.name, err);
      compressedDataUrl = await new Promise(r => {
        const reader = new FileReader();
        reader.onload = ev => r(ev.target.result);
        reader.readAsDataURL(file);
      });
    }

    return {
      id: Date.now() + idx + Math.floor(Math.random() * 10000),
      name: productName,
      category: defaultCategory,
      categoryLabel: getCategoryLabel(defaultCategory),
      size: defaultSize,
      priceUSD: defaultUSD,
      priceKHR: defaultKHR,
      frameColor: defaultFrameColor,
      material: defaultMaterial,
      badge: defaultBadge,
      inStock: true,
      stockQty: 25,
      iconEmoji: getCategoryDefaultEmoji(defaultCategory),
      iconBg: getCategoryDefaultBg(defaultCategory),
      imageUrl: compressedDataUrl,
      description: `ផលិតផល ${productName} គុណភាពស្អាត ស័ក្តិសមសម្រាប់សាលារៀន និងបន្ទប់សិក្សា។`,
      customW: 50,
      customL: 70,
      isCustom: false,
      sizes: getSizePresets().map(p => ({ ...p }))
    };
  }));

  // Append new items to batch queue
  batchProductsQueue = [...batchProductsQueue, ...newBatchItems];

  renderBatchItemsList();
  showToast(`🎉 បានបញ្ចូលរូបភាពចំនួន ${newBatchItems.length} សន្លឹកទៅក្នុងបញ្ជីជោគជ័យ!`);
}

function handleBatchFileSelect(e) {
  if (!e.target.files || e.target.files.length === 0) return;
  const filesArray = Array.from(e.target.files);
  e.target.value = '';
  handleBatchFiles(filesArray);
}

function handleBatchFolderSelect(e) {
  if (!e.target.files || e.target.files.length === 0) return;
  const filesArray = Array.from(e.target.files);
  e.target.value = '';
  handleBatchFiles(filesArray);
}

function handleBatchDrop(e) {
  e.preventDefault();
  const zone = document.getElementById('batch-drop-zone');
  if (zone) zone.classList.remove('border-emerald-500', 'bg-emerald-50/50');
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    const filesArray = Array.from(e.dataTransfer.files);
    handleBatchFiles(filesArray);
  }
}

function formatShortSize(size) {
  if (!size) return '';
  return size.replace(/\s*cm\s*/gi, '').replace(/\s*x\s*/gi, '×') + ' cm';
}

function isCustomBatchSize(size, itemSizes = null) {
  if (!size) return false;
  const s = size.trim();
  const presets = (Array.isArray(itemSizes) && itemSizes.length > 0) ? itemSizes : getSizePresets();
  return !presets.some(p => p.size.trim() === s);
}

function escapeBatchHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderBatchItemsList() {
  const container = document.getElementById('batch-items-list');
  const section = document.getElementById('batch-items-section');
  const countBadge = document.getElementById('batch-items-count-badge');
  const saveBtn = document.getElementById('batch-save-btn');
  const saveBtnText = document.getElementById('batch-save-btn-text');

  if (batchProductsQueue.length === 0) {
    section.classList.add('hidden');
    saveBtn.disabled = true;
    saveBtn.className = 'flex-[2] py-3 px-4 rounded-xl bg-slate-200 text-slate-400 text-xs sm:text-sm font-bold cursor-not-allowed transition flex items-center justify-center gap-2';
    saveBtnText.textContent = 'បង្កើតទំនិញទាំងអស់ (០ មុខ) ✓';
    return;
  }

  section.classList.remove('hidden');
  countBadge.textContent = `${batchProductsQueue.length} មុខ`;
  saveBtn.disabled = false;
  saveBtn.className = 'flex-[2] py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-200 transition flex items-center justify-center gap-2 cursor-pointer';
  saveBtnText.textContent = `🚀 បង្កើតទំនិញទាំង ${batchProductsQueue.length} មុខនេះ ✓`;

  const presets = getSizePresets();

  container.innerHTML = batchProductsQueue.map((item, index) => {
    if (!Array.isArray(item.sizes) || item.sizes.length === 0) {
      item.sizes = getSizePresets().map(p => ({ ...p }));
    }
    const itemSizes = item.sizes;
    const frameInfo = getFrameInfo(item.frameColor);
    const frameClass = frameInfo.classSm ? ` ${frameInfo.classSm}` : ' border border-slate-200';
    const isCustom = item.isCustom || isCustomBatchSize(item.size, itemSizes);

    return `
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200 shadow-2xs hover:border-sky-300 hover:shadow-xs transition">
      
      <!-- IMAGE BOX WITH DIRECT ON-IMAGE SIZE SELECTOR (បង្កើតនៅលើរូបភាពទំនិញដែលបានជ្រើសរើស) -->
      <div class="relative w-28 h-32 sm:w-32 sm:h-36 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0${frameClass} shadow-xs group">
        <!-- Thumbnail Image -->
        <img src="${item.imageUrl}" alt="${escapeBatchHtml(item.name)}" class="w-full h-full object-cover transition duration-300 group-hover:scale-105">

        <!-- Top Badges Overlay: Index & Size Tag -->
        <div class="absolute top-1 left-1 flex items-center gap-1 z-10 pointer-events-none">
          <span class="px-1.5 py-0.5 rounded-md bg-black/75 backdrop-blur-xs text-[10px] font-black text-white shadow-xs">#${index + 1}</span>
          <span id="batch-item-size-badge-${index}" class="px-1.5 py-0.5 rounded-md bg-sky-600/90 backdrop-blur-xs text-[9.5px] font-bold text-white shadow-xs">${formatShortSize(item.size)}</span>
        </div>

        <!-- Quick Zoom/Preview Button -->
        <button 
          type="button" 
          onclick="previewBatchItemImage(${index})" 
          title="ពង្រីកមើលរូបភាពធំ"
          class="absolute top-1 right-1 w-6 h-6 rounded-md bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-[11px] shadow-xs cursor-pointer transition z-10">
          🔍
        </button>

        <!-- ON-IMAGE DIRECT SIZE SELECTOR OVERLAY (បង្កើតលើរូបភាពផ្ទាល់) -->
        <div class="absolute inset-x-0 bottom-0 p-1 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent flex flex-col justify-end z-10">
          <div class="flex items-center justify-between text-[8.5px] font-bold text-sky-200 mb-0.5 px-0.5 pointer-events-none">
            <span>📐 ទំហំលើរូប</span>
            <span class="text-amber-300 text-[8px]">▼</span>
          </div>
          <select 
            id="batch-img-select-${index}"
            onchange="updateBatchItemSizePreset(${index}, this.value)" 
            title="ជ្រើសរើសទំហំរូបភាពនេះផ្ទាល់លើរូបភាព"
            class="w-full text-[10px] bg-slate-900/95 hover:bg-black text-white font-bold py-1 px-1 rounded-md border border-sky-400/60 shadow-md focus:outline-none focus:ring-1 focus:ring-sky-400 cursor-pointer">
            ${itemSizes.map(pr => `
              <option value="${pr.size}|${pr.priceUSD}|${pr.priceKHR}" ${item.size === pr.size ? 'selected' : ''}>${pr.name || pr.size} (${formatKHR(pr.priceKHR)})</option>
            `).join('')}
            <option value="custom" ${isCustom ? 'selected' : ''}>✏️ ទំហំផ្សេង (20,000៛/m²)...</option>
          </select>
        </div>
      </div>

      <!-- CARD CONTENT & CONTROLS BESIDE IMAGE -->
      <div class="flex-1 min-w-0 w-full space-y-2">
        <!-- Title & Price & Delete Row -->
        <div class="flex items-center gap-2">
          <input 
            type="text" 
            value="${escapeBatchHtml(item.name)}" 
            placeholder="ឈ្មោះទំនិញ..."
            oninput="updateBatchItemName(${index}, this.value)"
            class="flex-1 px-2.5 py-1.5 bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500 transition"
          >
          <div id="batch-item-price-badge-${index}" class="flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 text-right flex-shrink-0 shadow-2xs">
            <span class="text-xs font-black text-emerald-700">${formatUSD(item.priceUSD)}</span>
            <span class="text-[10.5px] font-bold text-emerald-600">(${formatKHR(item.priceKHR)})</span>
          </div>
          <button 
            type="button" 
            onclick="removeBatchItem(${index})" 
            title="លុបទំនិញនេះចេញពីបញ្ជី"
            class="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 active:scale-95 text-rose-600 flex items-center justify-center text-xs font-bold transition flex-shrink-0 cursor-pointer">
            ✕
          </button>
        </div>

        <!-- 1-Click Quick Size Preset Pills (ដាច់ដោយឡែកពីគ្នា ចំពោះទំនិញនីមួយៗ) -->
        <div class="flex items-center gap-1.5 flex-wrap">
          <div class="flex items-center gap-1 mr-0.5">
            <span class="text-[11px] font-bold text-slate-500">ទំហំលឿន៖</span>
            <button 
              type="button" 
              onclick="openBatchItemAddSizeModal(${index})" 
              title="បន្ថែមទំហំសម្រាប់តែទំនិញ #${index + 1} នេះ"
              class="px-1.5 py-0.5 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-700 hover:text-emerald-900 border border-dashed border-emerald-300 text-[9.5px] font-bold transition cursor-pointer flex items-center gap-0.5 shadow-2xs">
              <span>➕</span> <span>ថែម</span>
            </button>
          </div>
          ${itemSizes.map(pr => `
            <div class="inline-flex items-center rounded-md border shadow-2xs ${item.size === pr.size ? 'bg-sky-600 border-sky-600' : 'bg-slate-100 border-slate-200 hover:bg-slate-200'}">
              <button 
                type="button" 
                onclick="updateBatchItemSizePreset(${index}, '${pr.size}|${pr.priceUSD}|${pr.priceKHR}')"
                class="px-2 py-0.5 text-[10.5px] font-bold transition cursor-pointer ${item.size === pr.size ? 'text-white' : 'text-slate-700'}">
                ${pr.name || pr.size} (${formatKHR(pr.priceKHR)})
              </button>
              <button 
                type="button" 
                onclick="removeSizeFromBatchItem(${index}, '${pr.id || pr.size}')" 
                title="ដកចេញទំហំ ${pr.name || pr.size} ពីទំនិញ #${index + 1}"
                class="px-1 py-0.5 text-[10px] font-bold transition cursor-pointer rounded-r-md ${item.size === pr.size ? 'text-sky-200 hover:text-white hover:bg-sky-700' : 'text-slate-400 hover:text-rose-600 hover:bg-rose-50'}">
                ✕
              </button>
            </div>
          `).join('')}
          <button 
            type="button" 
            onclick="toggleBatchItemCustomBox(${index})"
            class="px-2 py-0.5 rounded-md text-[10.5px] font-bold transition cursor-pointer border ${isCustom ? 'bg-amber-600 text-white border-amber-600 shadow-2xs' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'}">
            ✏️ ទំហំផ្សេង
          </button>
        </div>

        <!-- Custom Dimensions Box (Only visible if isCustom is true) -->
        <div id="batch-custom-box-${index}" class="${isCustom ? '' : 'hidden'} p-2.5 bg-amber-50/90 rounded-xl border border-amber-200 space-y-1.5 animate-fade-in">
          <div class="flex items-center justify-between text-[11px] font-bold text-amber-900">
            <span>✏️ បញ្ចូលទំហំផ្សេង (cm) ៖</span>
            <span class="text-[10px] text-emerald-800 bg-emerald-100 font-bold px-2 py-0.5 rounded-md border border-emerald-300">ទំហំផ្សេងគិត 1 m² = 20,000 ៛</span>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
              <span>ទទឹង:</span>
              <input 
                type="number" 
                min="1" 
                step="1" 
                value="${item.customW || 50}" 
                oninput="updateBatchItemCustomDimension(${index}, 'w', this.value)" 
                class="w-16 px-2 py-1 bg-white border border-slate-300 rounded-lg text-center text-xs font-black text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500">
              <span>cm</span>
            </div>
            <span class="text-slate-400 font-black text-xs">×</span>
            <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
              <span>បណ្ដាយ:</span>
              <input 
                type="number" 
                min="1" 
                step="1" 
                value="${item.customL || 70}" 
                oninput="updateBatchItemCustomDimension(${index}, 'l', this.value)" 
                class="w-16 px-2 py-1 bg-white border border-slate-300 rounded-lg text-center text-xs font-black text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500">
              <span>cm</span>
            </div>
            <span id="batch-custom-calc-tag-${index}" class="text-[10.5px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-lg border border-emerald-300 ml-auto">
              ${item.size} (${calcCustomDimensionsPrice(item.customW || 50, item.customL || 70).areaFormatted} ➔ ${formatKHR(item.priceKHR)})
            </span>
          </div>
          <div id="batch-custom-warn-${index}" class="${(item.customW || 0) > 160 ? '' : 'hidden'} text-[10px] text-amber-800 bg-amber-100/70 p-1.5 rounded-md font-semibold flex items-center gap-1">
            <span>💡</span> <span>ចំណាំ៖ ទទឹងធំជាង 160 cm នឹងត្រូវបោះពុម្ពតគ្នារឺប្រើផ្ទាំងបដាធំ (ម៉ាស៊ីនអ៊ុតស្វិតស្ដង់ដារត្រឹម 160 cm)</span>
          </div>
          <div class="flex items-center justify-between pt-1 border-t border-amber-200/60">
            <span class="text-[10px] text-amber-800">រក្សាទុកជាជម្រើសទំហំសម្រាប់តែទំនិញ #${index + 1} នេះ៖</span>
            <button 
              type="button" 
              onclick="saveBatchItemCustomAsSize(${index})"
              title="រក្សាទុកទំហំនេះជាគ្រាប់ទំហំសម្រាប់តែទំនិញ #${index + 1}"
              class="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold rounded-lg text-[10.5px] shadow-2xs transition cursor-pointer flex items-center gap-1">
              <span>➕</span> <span>រក្សាទុកជាទំហំសម្រាប់ទំនិញនេះ</span>
            </button>
          </div>
        </div>

        <!-- Meta Details: Category, Frame, Size summary -->
        <div class="flex items-center gap-2 text-[11px] text-slate-500 flex-wrap pt-0.5">
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">📁 ${item.categoryLabel}</span>
          
          <!-- Frame Selection: មានស៊ុម / គ្មានស៊ុម (ត្រង់ គ្មានស៊ុម) -->
          <div class="inline-flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg border border-slate-200">
            <span class="text-[10px] font-bold text-slate-500 pl-1">ស៊ុម៖</span>
            <button 
              type="button" 
              onclick="setBatchItemHasFrame(${index}, false)" 
              title="ជ្រើសរើស គ្មានស៊ុម សម្រាប់ទំនិញ #${index + 1}" 
              class="px-2 py-0.5 rounded-md text-[10.5px] font-bold transition cursor-pointer ${(!item.frameColor || item.frameColor === 'none') ? 'bg-white text-slate-800 shadow-xs border border-slate-300 font-extrabold' : 'text-slate-500 hover:text-slate-800'}">
              🚫 គ្មានស៊ុម
            </button>
            <button 
              type="button" 
              onclick="setBatchItemHasFrame(${index}, true)" 
              title="ជ្រើសរើស មានស៊ុម សម្រាប់ទំនិញ #${index + 1}" 
              class="px-2 py-0.5 rounded-md text-[10.5px] font-bold transition cursor-pointer ${(item.frameColor && item.frameColor !== 'none') ? 'bg-amber-500 text-white shadow-xs font-extrabold' : 'text-slate-500 hover:text-slate-800'}">
              🖼️ មានស៊ុម
            </button>
            ${(item.frameColor && item.frameColor !== 'none') ? `
              <select 
                onchange="updateBatchItemFrameColor(${index}, this.value)" 
                title="ជ្រើសរើសពណ៌ស៊ុមសម្រាប់ទំនិញ #${index + 1}"
                class="text-[10px] font-bold bg-white text-slate-800 rounded px-1.5 py-0.5 border border-amber-300 focus:ring-1 focus:ring-amber-500 cursor-pointer shadow-2xs">
                <option value="gold" ${item.frameColor === 'gold' ? 'selected' : ''}>🟡 ស៊ុមពណ៌មាស</option>
                <option value="wood" ${item.frameColor === 'wood' ? 'selected' : ''}>🟤 ស៊ុមឈើ</option>
                <option value="black" ${item.frameColor === 'black' ? 'selected' : ''}>⚫ ស៊ុមពណ៌ខ្មៅ</option>
                <option value="white" ${item.frameColor === 'white' ? 'selected' : ''}>⚪ ស៊ុមពណ៌ស</option>
                <option value="silver" ${item.frameColor === 'silver' ? 'selected' : ''}>🔘 ស៊ុមពណ៌ប្រាក់</option>
                <option value="blue" ${item.frameColor === 'blue' ? 'selected' : ''}>🔵 ស៊ុមពណ៌ខៀវ</option>
                <option value="red" ${item.frameColor === 'red' ? 'selected' : ''}>🔴 ស៊ុមពណ៌ក្រហម</option>
                <option value="green" ${item.frameColor === 'green' ? 'selected' : ''}>🟢 ស៊ុមពណ៌បៃតង</option>
                <option value="purple" ${item.frameColor === 'purple' ? 'selected' : ''}>🟣 ស៊ុមពណ៌ស្វាយ</option>
              </select>
            ` : ''}
          </div>

          <span id="batch-meta-size-${index}" class="text-sky-700 font-semibold text-[11px]">📐 ទំហំ៖ ${item.size} (${calcCustomDimensionsPrice(item.customW || 50, item.customL || 70).areaFormatted})</span>
        </div>
      </div>

    </div>
  `;
  }).join('');
}

function updateBatchItemName(index, val) {
  if (batchProductsQueue[index]) {
    batchProductsQueue[index].name = val.trim();
  }
}

function updateBatchItemSizePreset(index, presetValue) {
  const item = batchProductsQueue[index];
  if (!item) return;

  if (presetValue === 'custom') {
    item.isCustom = true;
    if (!item.customW) item.customW = 50;
    if (!item.customL) item.customL = 70;
    const price = calcCustomDimensionsPrice(item.customW, item.customL);
    item.size = `${item.customW} cm x ${item.customL} cm`;
    item.priceUSD = price.usd;
    item.priceKHR = price.khr;
  } else {
    item.isCustom = false;
    const parts = presetValue.split('|');
    item.size = parts[0];
    item.priceUSD = parseFloat(parts[1]);
    item.priceKHR = parseInt(parts[2]);
  }
  renderBatchItemsList();
}

function toggleBatchItemCustomBox(index) {
  const item = batchProductsQueue[index];
  if (!item) return;

  if (!isCustomBatchSize(item.size, item.sizes)) {
    updateBatchItemSizePreset(index, 'custom');
  } else {
    const itemSizes = (Array.isArray(item.sizes) && item.sizes.length > 0) ? item.sizes : getSizePresets();
    const fallback = itemSizes.length > 0 ? `${itemSizes[0].size}|${itemSizes[0].priceUSD}|${itemSizes[0].priceKHR}` : '40 cm x 60 cm|1.25|5000';
    updateBatchItemSizePreset(index, fallback);
  }
}

function updateBatchItemCustomDimension(index, field, val) {
  const item = batchProductsQueue[index];
  if (!item) return;

  const num = parseFloat(val) || 0;
  if (field === 'w') {
    item.customW = num;
  } else if (field === 'l') {
    item.customL = num;
  }

  const w = item.customW || 0;
  const l = item.customL || 0;
  const price = calcCustomDimensionsPrice(w, l);
  item.size = `${w} cm x ${l} cm`;
  item.priceUSD = price.usd;
  item.priceKHR = price.khr;

  const sizeBadge = document.getElementById(`batch-item-size-badge-${index}`);
  if (sizeBadge) sizeBadge.textContent = formatShortSize(item.size);

  const priceBadge = document.getElementById(`batch-item-price-badge-${index}`);
  if (priceBadge) {
    priceBadge.innerHTML = `<span class="text-xs font-black text-emerald-700">${formatUSD(item.priceUSD)}</span>
      <span class="text-[10.5px] font-bold text-emerald-600">(${formatKHR(item.priceKHR)})</span>`;
  }

  const calcTag = document.getElementById(`batch-custom-calc-tag-${index}`);
  if (calcTag) calcTag.textContent = `${item.size} (${price.areaFormatted} ➔ ${formatKHR(item.priceKHR)})`;

  const warnEl = document.getElementById(`batch-custom-warn-${index}`);
  if (warnEl) {
    if (w > 160) warnEl.classList.remove('hidden');
    else warnEl.classList.add('hidden');
  }

  const metaSize = document.getElementById(`batch-meta-size-${index}`);
  if (metaSize) metaSize.textContent = `📐 ទំហំ៖ ${item.size} (${price.areaFormatted})`;
}

// Remove size option specifically from this individual batch item
function removeSizeFromBatchItem(itemIndex, sizeKey) {
  const item = batchProductsQueue[itemIndex];
  if (!item) return;
  if (!Array.isArray(item.sizes) || item.sizes.length === 0) {
    item.sizes = getSizePresets().map(p => ({ ...p }));
  }

  if (item.sizes.length <= 1) {
    alert("ទំនិញនេះត្រូវមានទំហំយ៉ាងហោចណាស់ ១ ជម្រើស!");
    return;
  }

  const targetSize = item.sizes.find(s => s.id === sizeKey || s.size === sizeKey);
  const targetLabel = targetSize ? (targetSize.name || targetSize.size) : sizeKey;

  item.sizes = item.sizes.filter(s => s.id !== sizeKey && s.size !== sizeKey);

  // If currently selected size on this item was deleted, switch to first remaining size
  if (item.size === sizeKey || (targetSize && item.size === targetSize.size)) {
    const firstRemaining = item.sizes[0];
    item.size = firstRemaining.size;
    item.priceUSD = firstRemaining.priceUSD;
    item.priceKHR = firstRemaining.priceKHR;
  }

  renderBatchItemsList();
  showToast(`🗑️ បានដកចេញទំហំ «${targetLabel}» ពីទំនិញ #${itemIndex + 1} (${item.name})!`);
}

// Add Size Modal specifically for one batch item
let activeBatchItemIndexForAdd = null;

function openBatchItemAddSizeModal(itemIndex) {
  const item = batchProductsQueue[itemIndex];
  if (!item) return;

  activeBatchItemIndexForAdd = itemIndex;
  const modal = document.getElementById('batch-item-add-size-modal');
  const subEl = document.getElementById('batch-item-add-size-subtitle');
  if (subEl) subEl.textContent = `ទំនិញ #${itemIndex + 1}៖ ${item.name}`;

  const wInput = document.getElementById('item-new-size-w');
  const lInput = document.getElementById('item-new-size-l');
  const khrInput = document.getElementById('item-new-size-khr');
  const usdInput = document.getElementById('item-new-size-usd');
  const infoEl = document.getElementById('item-new-size-info');

  if (wInput) wInput.value = '';
  if (lInput) lInput.value = '';
  if (khrInput) khrInput.value = '';
  if (usdInput) usdInput.value = '';
  if (infoEl) infoEl.textContent = '📐 បញ្ចូលទំហំខាងលើដើម្បីគណនាតម្លៃស្វ័យប្រវត្តិ (20,000៛/m²)';

  if (modal) modal.classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('item-new-size-w')?.focus();
  }, 150);
}

function closeBatchItemAddSizeModal() {
  const modal = document.getElementById('batch-item-add-size-modal');
  if (modal) modal.classList.add('hidden');
  activeBatchItemIndexForAdd = null;
}

function onBatchItemNewDimensionChange() {
  const w = parseFloat(document.getElementById('item-new-size-w')?.value) || 0;
  const l = parseFloat(document.getElementById('item-new-size-l')?.value) || 0;
  const khrInput = document.getElementById('item-new-size-khr');
  const usdInput = document.getElementById('item-new-size-usd');
  const infoEl = document.getElementById('item-new-size-info');

  if (w > 0 && l > 0) {
    const areaM2 = (w * l) / 10000;
    let khr = Math.round((areaM2 * 20000) / 100) * 100;
    if (khr < 1000) khr = 1000;
    const usd = parseFloat((khr / 4000).toFixed(2));
    
    if (khrInput) khrInput.value = khr;
    if (usdInput) usdInput.value = usd;
    if (infoEl) infoEl.textContent = `📐 ក្រឡាផ្ទៃ៖ ${areaM2.toFixed(2)} m² (គិត 20,000៛/m² = ${formatKHR(khr)})`;
  } else {
    if (infoEl) infoEl.textContent = '📐 បញ្ចូលទំហំខាងលើដើម្បីគណនាតម្លៃស្វ័យប្រវត្តិ (20,000៛/m²)';
  }
}

function onBatchItemNewPriceKHRChange() {
  const khr = parseInt(document.getElementById('item-new-size-khr')?.value, 10) || 0;
  const usdInput = document.getElementById('item-new-size-usd');
  if (khr > 0 && usdInput) {
    usdInput.value = (khr / 4000).toFixed(2);
  }
}

function confirmAddSizeToBatchItem() {
  if (activeBatchItemIndexForAdd === null) return;
  const item = batchProductsQueue[activeBatchItemIndexForAdd];
  if (!item) return;

  const w = parseFloat(document.getElementById('item-new-size-w')?.value) || 0;
  const l = parseFloat(document.getElementById('item-new-size-l')?.value) || 0;
  const khr = parseInt(document.getElementById('item-new-size-khr')?.value, 10) || 0;
  const usd = parseFloat(document.getElementById('item-new-size-usd')?.value) || 0;

  if (w <= 0 || l <= 0) {
    alert("សូមបញ្ចូលទទឹង និងបណ្ដាយឱ្យបានត្រឹមត្រូវ!");
    return;
  }
  if (khr <= 0) {
    alert("សូមបញ្ចូលតម្លៃទំនិញឱ្យបានត្រឹមត្រូវ!");
    return;
  }

  const sizeStr = `${w} cm x ${l} cm`;
  if (!Array.isArray(item.sizes) || item.sizes.length === 0) {
    item.sizes = getSizePresets().map(p => ({ ...p }));
  }

  if (item.sizes.some(s => s.size === sizeStr)) {
    alert(`ទំហំ «${sizeStr}» មានក្នុងបញ្ជីទំនិញនេះរួចរាល់ហើយ!`);
    return;
  }

  const newSize = {
    id: 'size_' + Date.now(),
    name: `${w}×${l} cm`,
    size: sizeStr,
    width: w,
    length: l,
    priceKHR: khr,
    priceUSD: usd > 0 ? usd : parseFloat((khr / 4000).toFixed(2))
  };

  item.sizes.push(newSize);
  item.size = sizeStr;
  item.priceUSD = newSize.priceUSD;
  item.priceKHR = newSize.priceKHR;
  item.isCustom = false;

  renderBatchItemsList();
  closeBatchItemAddSizeModal();
  showToast(`🎉 បានបន្ថែមទំហំ «${sizeStr}» សម្រាប់តែទំនិញ #${activeBatchItemIndexForAdd + 1} (${item.name})!`);
}

function saveBatchItemCustomAsSize(index) {
  const item = batchProductsQueue[index];
  if (!item) return;

  const w = parseFloat(item.customW) || 0;
  const l = parseFloat(item.customL) || 0;
  if (w <= 0 || l <= 0) {
    alert("សូមបញ្ចូលទទឹង និងបណ្ដាយឱ្យបានត្រឹមត្រូវ!");
    return;
  }

  const sizeStr = `${w} cm x ${l} cm`;
  if (!Array.isArray(item.sizes) || item.sizes.length === 0) {
    item.sizes = getSizePresets().map(p => ({ ...p }));
  }

  if (item.sizes.some(s => s.size === sizeStr)) {
    showToast(`ទំហំ «${sizeStr}» មានក្នុងបញ្ជីទំនិញនេះរួចរាល់ហើយ!`);
    return;
  }

  const price = calcCustomDimensionsPrice(w, l);
  const newSize = {
    id: 'size_' + Date.now(),
    name: `${w}×${l} cm`,
    size: sizeStr,
    width: w,
    length: l,
    priceKHR: price.khr,
    priceUSD: price.usd
  };

  item.sizes.push(newSize);
  item.size = sizeStr;
  item.priceUSD = price.usd;
  item.priceKHR = price.khr;
  item.isCustom = false;

  renderBatchItemsList();
  showToast(`🎉 បានរក្សាទុកទំហំ «${sizeStr}» ក្នុងបញ្ជីទំហំសម្រាប់ទំនិញ #${index + 1}!`);
}

function bulkSetBatchItemSize(presetValue) {
  if (batchProductsQueue.length === 0) {
    showToast('ពុំទាន់មានរូបភាពទំនិញក្នុងបញ្ជីនៅឡើយទេ!');
    return;
  }
  const parts = presetValue.split('|');
  const size = parts[0];
  const usd = parseFloat(parts[1]);
  const khr = parseInt(parts[2]);

  batchProductsQueue.forEach(item => {
    item.size = size;
    item.priceUSD = usd;
    item.priceKHR = khr;
    item.isCustom = false;
    if (!Array.isArray(item.sizes) || item.sizes.length === 0) {
      item.sizes = getSizePresets().map(p => ({ ...p }));
    }
    if (!item.sizes.some(s => s.size === size)) {
      item.sizes.unshift({ id: 'size_' + Date.now(), name: size, size: size, priceUSD: usd, priceKHR: khr });
    }
  });

  renderBatchItemsList();
  showToast(`✅ បានកំណត់ទំហំ ${size} (${formatKHR(khr)}) លើគ្រប់រូបភាពទាំងអស់!`);
}

function promptBulkCustomSize() {
  if (batchProductsQueue.length === 0) {
    showToast('ពុំទាន់មានរូបភាពទំនិញក្នុងបញ្ជីនៅឡើយទេ!');
    return;
  }
  const input = prompt("សូមបញ្ចូលទំហំសេរីជា cm ឧទាហរណ៍៖ 50x70 ឬ 100x100 ឬ 120x150 (ទទឹង x បណ្ដាយ) ៖", "50x70");
  if (!input) return;
  const match = input.match(/(\d+(?:\.\d+)?)\s*[xX*×]\s*(\d+(?:\.\d+)?)/);
  if (!match) {
    alert("ទម្រង់មិនត្រឹមត្រូវ! សូមបញ្ចូលដូចជា 50x70 ឬ 100x120");
    return;
  }
  const w = parseFloat(match[1]);
  const l = parseFloat(match[2]);
  if (w <= 0 || l <= 0) {
    alert("សូមបញ្ចូលទំហំធំជាង 0!");
    return;
  }
  const price = calcCustomDimensionsPrice(w, l);
  const sizeStr = `${w} cm x ${l} cm`;

  batchProductsQueue.forEach(item => {
    item.size = sizeStr;
    item.customW = w;
    item.customL = l;
    item.priceUSD = price.usd;
    item.priceKHR = price.khr;
    item.isCustom = true;
  });

  renderBatchItemsList();
  showToast(`✅ បានកំណត់ទំហំ ${sizeStr} (${price.areaFormatted} ➔ ${formatKHR(price.khr)}) លើគ្រប់រូបភាពទាំងអស់!`);
}

function previewBatchItemImage(index) {
  const item = batchProductsQueue[index];
  if (!item) return;

  const frameInfo = getFrameInfo(item.frameColor);
  const frameBadgeHtml = (item.frameColor && item.frameColor !== 'none')
    ? `<span class="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${frameInfo.badgeBg} shadow-2xs">${frameInfo.emoji} ${frameInfo.label}</span>`
    : '';

  document.getElementById('admin-preview-title').innerHTML = `
    <span class="truncate max-w-[260px] sm:max-w-md inline-block align-middle">${item.name || 'រូបភាពទំនិញ'}</span>
    <span class="ml-2 text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-lg border border-sky-200">${item.size}</span>
    ${frameBadgeHtml ? `<span class="ml-2 inline-block align-middle">${frameBadgeHtml}</span>` : ''}
  `;
  const content = document.getElementById('admin-preview-content');
  const frameClass = frameInfo.classLg || 'border border-slate-200';
  content.innerHTML = `<img src="${item.imageUrl}" alt="${escapeBatchHtml(item.name || 'Preview')}" class="max-h-[60vh] w-auto max-w-full rounded-2xl object-contain shadow-lg ${frameClass} bg-white">`;
  document.getElementById('admin-image-preview-modal').classList.remove('hidden');
}

function removeBatchItem(index) {
  batchProductsQueue.splice(index, 1);
  renderBatchItemsList();
}

function clearBatchItems() {
  batchProductsQueue = [];
  renderBatchItemsList();
}

function applyBatchCategoryToAll() {
  const cat = document.getElementById('batch-default-category').value;
  const label = getCategoryLabel(cat);
  const emoji = getCategoryDefaultEmoji(cat);
  const bg = getCategoryDefaultBg(cat);
  batchProductsQueue.forEach(item => {
    item.category = cat;
    item.categoryLabel = label;
    item.iconEmoji = emoji;
    item.iconBg = bg;
  });
  renderBatchItemsList();
  showToast(`បានអនុវត្តប្រភេទ «${label}» លើគ្រប់ទំនិញ`);
}

function applyBatchSizePresetToAll() {
  const val = document.getElementById('batch-default-size-preset').value.split('|');
  const size = val[0];
  const usd = parseFloat(val[1]);
  const khr = parseInt(val[2]);
  batchProductsQueue.forEach(item => {
    item.size = size;
    item.priceUSD = usd;
    item.priceKHR = khr;
  });
  renderBatchItemsList();
  showToast(`បានអនុវត្តទំហំ ${size} (${formatKHR(khr)}) លើគ្រប់ទំនិញ`);
}

function updateBatchFrameButtons() {
  const frameColor = document.getElementById('batch-default-frame-color')?.value || 'none';
  const btnNone = document.getElementById('btn-batch-frame-none');
  const btnHas = document.getElementById('btn-batch-frame-has');
  const selectWrapper = document.getElementById('batch-frame-color-wrapper');
  if (btnNone && btnHas) {
    if (frameColor === 'none') {
      btnNone.className = 'flex-1 py-1 px-2 rounded-lg text-xs font-black bg-slate-800 text-white shadow-xs border border-slate-800 transition cursor-pointer';
      btnHas.className = 'flex-1 py-1 px-2 rounded-lg text-xs font-bold bg-white text-slate-600 hover:bg-slate-50 border border-slate-300 transition cursor-pointer';
      if (selectWrapper) selectWrapper.classList.add('hidden');
    } else {
      btnNone.className = 'flex-1 py-1 px-2 rounded-lg text-xs font-bold bg-white text-slate-600 hover:bg-slate-50 border border-slate-300 transition cursor-pointer';
      btnHas.className = 'flex-1 py-1 px-2 rounded-lg text-xs font-black bg-amber-500 text-white shadow-xs border border-amber-600 transition cursor-pointer';
      if (selectWrapper) selectWrapper.classList.remove('hidden');
    }
  }

  // Highlight active swatch button in batch modal
  document.querySelectorAll('.batch-frame-swatch-btn').forEach(btn => {
    const val = btn.getAttribute('data-batch-frame-val');
    if (val === frameColor) {
      btn.classList.add('ring-2', 'ring-emerald-500', 'ring-offset-1', 'font-black', 'shadow-xs');
      btn.classList.remove('opacity-70');
    } else {
      btn.classList.remove('ring-2', 'ring-emerald-500', 'ring-offset-1', 'font-black', 'shadow-xs');
      btn.classList.add('opacity-70');
    }
  });
}

function setBatchDefaultFrameColor(color) {
  const select = document.getElementById('batch-default-frame-color');
  if (select) {
    select.value = color;
    applyBatchFrameColorToAll();
  }
}

function setBatchDefaultHasFrame(hasFrame) {
  const select = document.getElementById('batch-default-frame-color');
  if (!select) return;
  if (!hasFrame) {
    select.value = 'none';
  } else {
    if (select.value === 'none') select.value = 'green';
  }
  updateBatchFrameButtons();
  applyBatchFrameColorToAll();
}

function setBatchItemHasFrame(index, hasFrame) {
  const item = batchProductsQueue[index];
  if (!item) return;
  if (!hasFrame) {
    item.frameColor = 'none';
  } else {
    const defaultFrame = document.getElementById('batch-default-frame-color')?.value;
    item.frameColor = (defaultFrame && defaultFrame !== 'none') ? defaultFrame : 'gold';
  }
  renderBatchItemsList();
}

function updateBatchItemFrameColor(index, color) {
  const item = batchProductsQueue[index];
  if (!item) return;
  item.frameColor = color;
  renderBatchItemsList();
}

function applyBatchFrameColorToAll() {
  const frameColor = document.getElementById('batch-default-frame-color')?.value || 'none';
  const info = getFrameInfo(frameColor);
  batchProductsQueue.forEach(item => {
    item.frameColor = frameColor;
  });
  updateBatchFrameButtons();
  renderBatchItemsList();
  showToast(`បានអនុវត្តប្រភេទស៊ុម «${info.label}» លើគ្រប់ទំនិញ`);
}

function applyBatchMaterialToAll() {
  const mat = document.getElementById('batch-default-material').value.trim();
  batchProductsQueue.forEach(item => {
    item.material = mat;
  });
}

function applyBatchBadgeToAll() {
  const badge = document.getElementById('batch-default-badge').value.trim() || 'ថ្មី 🌟';
  batchProductsQueue.forEach(item => {
    item.badge = badge;
  });
}

function saveBatchProducts() {
  if (batchProductsQueue.length === 0) {
    alert("សូមជ្រើសរើសរូបភាពយ៉ាងហោចណាស់ ១ សន្លឹកជាមុនសិន!");
    return;
  }

  // Ensure all items have a name and their own availableSizes
  const newBatchProducts = batchProductsQueue.map((item, i) => {
    const itemName = item.name ? item.name.trim() : `ទំនិញថ្មីទី ${i + 1}`;
    const itemAvailableSizes = (Array.isArray(item.sizes) && item.sizes.length > 0)
      ? item.sizes
      : [{ name: item.size, size: item.size, priceUSD: item.priceUSD, priceKHR: item.priceKHR }];

    return {
      ...item,
      name: itemName,
      availableSizes: itemAvailableSizes
    };
  });

  const count = newBatchProducts.length;
  adminProducts = [...newBatchProducts, ...adminProducts];

  saveProducts();
  renderAdminTable();
  closeProductModal();

  showToast(`🎉 បានបង្កើតទំនិញថ្មីចំនួន ${count} មុខដោយជោគជ័យ!`);
  clearBatchItems();
}

// Handle Form Submission (Save or Update)
function handleSaveProduct(e) {
  e.preventDefault();

  const idVal = document.getElementById('prod-id').value;
  const name = document.getElementById('prod-name').value.trim();
  const category = document.getElementById('prod-category').value;
  const categoryLabel = getCategoryLabel(category);
  const size = document.getElementById('prod-size').value.trim();
  const priceUSD = parseFloat(document.getElementById('prod-price-usd').value) || 0;
  const priceKHR = Math.round(priceUSD * 4000);
  const material = document.getElementById('prod-material').value.trim();
  const badge = document.getElementById('prod-badge').value.trim();
  const stockQty = parseInt(document.getElementById('prod-stock-qty')?.value, 10) || 0;
  const inStock = (document.getElementById('prod-instock').value === 'true') && (stockQty > 0);
  const iconEmoji = document.getElementById('prod-emoji').value;
  const iconBg = document.getElementById('prod-icon-bg').value;
  const frameColor = document.getElementById('prod-frame-color')?.value || 'none';
  const description = document.getElementById('prod-desc').value.trim();

  if (idVal) {
    // Update existing product
    const targetId = Number(idVal);
    const index = adminProducts.findIndex(p => p.id === targetId);
    if (index !== -1) {
      adminProducts[index] = {
        ...adminProducts[index],
        name,
        category,
        categoryLabel,
        size,
        priceUSD,
        priceKHR,
        availableSizes: (currentSingleProductSizes && currentSingleProductSizes.length > 0) ? currentSingleProductSizes : (adminProducts[index].availableSizes || getSizePresets()),
        material,
        badge,
        stockQty,
        inStock,
        iconEmoji,
        iconBg,
        frameColor,
        imageUrl: uploadedImageData || adminProducts[index].imageUrl || '',
        description
      };
      showToast(`បានកែសម្រួលទំនិញ «${name.slice(0, 15)}...» ជោគជ័យ!`);
    }
  } else {
    // Add new product
    const newProduct = {
      id: Date.now(),
      name,
      category,
      categoryLabel,
      size,
      priceUSD,
      priceKHR,
      availableSizes: (currentSingleProductSizes && currentSingleProductSizes.length > 0) ? currentSingleProductSizes : getSizePresets(),
      material,
      badge: badge || 'ថ្មី 🌟',
      stockQty,
      inStock,
      iconEmoji,
      iconBg,
      frameColor,
      imageUrl: uploadedImageData || '',
      description
    };
    adminProducts.unshift(newProduct);
    showToast(`បានបន្ថែមទំនិញថ្មី «${name.slice(0, 15)}...» ជោគជ័យ!`);
  }

  saveProducts();
  renderAdminTable();
  closeProductModal();
}

// Reset to Default Products
function resetToDefaultData() {
  if (confirm("តើអ្នកពិតជាចង់កំណត់ទិន្នន័យដើម (Default 12 មុខ) ឡើងវិញមែនទេ? រាល់ការបន្ថែមថ្មីនឹងត្រូវលុប។")) {
    adminProducts = [...defaultCatalog];
    saveProducts();
    renderAdminTable();
    showToast("បានកំណត់ទិន្នន័យដើមឡើងវិញរួចរាល់!");
  }
}

// Toast notification
function showToast(message, type = 'sky') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `flex items-center gap-2 px-4 py-3 rounded-xl shadow-xl text-xs font-semibold text-white bg-slate-900 border border-slate-700 animate-bounce-soft pointer-events-auto transition duration-300`;
  toast.innerHTML = `
    <span class="${type === 'rose' ? 'text-rose-400' : 'text-emerald-400'} font-bold">●</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// Open Admin Image Preview
function openAdminImagePreview(id) {
  const item = adminProducts.find(p => p.id === id);
  if (!item) return;

  const frameInfo = getFrameInfo(item.frameColor);
  const frameBadgeHtml = (item.frameColor && item.frameColor !== 'none')
    ? `<span class="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${frameInfo.badgeBg} shadow-2xs">${frameInfo.emoji} ${frameInfo.label}</span>`
    : '';

  document.getElementById('admin-preview-title').innerHTML = `
    <span class="truncate max-w-[260px] sm:max-w-md inline-block align-middle">${item.name}</span>
    ${frameBadgeHtml ? `<span class="ml-2 inline-block align-middle">${frameBadgeHtml}</span>` : ''}
  `;
  const content = document.getElementById('admin-preview-content');
  if (item.imageUrl) {
    const frameClass = frameInfo.classLg || 'border border-slate-200';
    content.innerHTML = `
      <div class="relative overflow-hidden rounded-2xl flex items-center justify-center bg-slate-900/10">
        <img src="${item.imageUrl}" alt="${item.name}" class="max-h-[50vh] w-auto max-w-full rounded-2xl object-contain shadow-lg ${frameClass} bg-white">
        <!-- Bottom Branding Bar: Logo & Telegram QR Code (0319711333) -->
        <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent pt-6 pb-2.5 px-3 sm:px-4 flex items-center justify-between text-white z-10 pointer-events-auto">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-8 h-8 rounded-full bg-white p-0.5 shadow-md ring-2 ring-white/60 overflow-hidden flex-shrink-0 flex items-center justify-center">
              <img src="logo.png" alt="EduShop" class="w-full h-full object-contain">
            </div>
            <div class="min-w-0 text-left">
              <div class="text-xs sm:text-sm font-black text-amber-300 leading-tight truncate">EduShop Cambodia</div>
              <div class="text-[9.5px] sm:text-[10.5px] text-slate-300 font-medium truncate hidden xs:block">សម្ភារៈតុបតែងថ្នាក់ & សម្ភារៈបង្រៀនខ្មែរ</div>
            </div>
          </div>
          <a href="https://t.me/+855964361201" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 px-2.5 py-1 rounded-xl border border-sky-400/50 shadow-md group transition flex-shrink-0" title="Telegram: 096 436 1201">
            <div class="text-right leading-tight">
              <div class="text-[9px] text-sky-300 font-bold flex items-center justify-end gap-1">
                <span>✈️</span> <span>Telegram QR</span>
              </div>
              <div class="text-xs sm:text-sm font-mono font-bold text-white tracking-wide">096 436 1201</div>
            </div>
            <div class="w-10 h-10 bg-white p-0.5 rounded-lg shadow ring-1 ring-sky-400 overflow-hidden flex-shrink-0 group-hover:scale-105 transition">
              <img src="telegram_qr.png" alt="Telegram QR" class="w-full h-full object-contain">
            </div>
          </a>
        </div>
      </div>
    `;
  } else {
    const isWhite = item.iconBg && item.iconBg.includes('white');
    const frameClass = frameInfo.classLg || '';
    content.innerHTML = `
      <div class="relative w-full h-56 rounded-2xl bg-gradient-to-br ${item.iconBg || 'from-sky-400 to-blue-500'} ${isWhite ? 'border border-slate-200 text-slate-800' : 'text-white'} flex flex-col items-center justify-center shadow-inner p-4 ${frameClass} overflow-hidden">
        <span class="text-7xl drop-shadow-md animate-bounce-soft mb-3">${item.iconEmoji || '📦'}</span>
        ${item.material ? `<span class="text-xs font-semibold ${isWhite ? 'bg-slate-100 text-slate-700 border border-slate-200' : 'bg-black/25 text-white'} px-3 py-1 rounded-full mb-6">${item.material}</span>` : ''}
        
        <!-- Bottom Branding Bar: Logo & Telegram QR Code (0964361201) -->
        <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent pt-6 pb-2.5 px-3 sm:px-4 flex items-center justify-between text-white z-10 pointer-events-auto">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-8 h-8 rounded-full bg-white p-0.5 shadow-md ring-2 ring-white/60 overflow-hidden flex-shrink-0 flex items-center justify-center">
              <img src="logo.png" alt="EduShop" class="w-full h-full object-contain">
            </div>
            <div class="min-w-0 text-left">
              <div class="text-xs sm:text-sm font-black text-amber-300 leading-tight truncate">EduShop Cambodia</div>
              <div class="text-[9.5px] sm:text-[10.5px] text-slate-300 font-medium truncate hidden xs:block">សម្ភារៈតុបតែងថ្នាក់ & សម្ភារៈបង្រៀនខ្មែរ</div>
            </div>
          </div>
          <a href="https://t.me/+855964361201" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 px-2.5 py-1 rounded-xl border border-sky-400/50 shadow-md group transition flex-shrink-0" title="Telegram: 096 436 1201">
            <div class="text-right leading-tight">
              <div class="text-[9px] text-sky-300 font-bold flex items-center justify-end gap-1">
                <span>✈️</span> <span>Telegram QR</span>
              </div>
              <div class="text-xs sm:text-sm font-mono font-bold text-white tracking-wide">096 436 1201</div>
            </div>
            <div class="w-10 h-10 bg-white p-0.5 rounded-lg shadow ring-1 ring-sky-400 overflow-hidden flex-shrink-0 group-hover:scale-105 transition">
              <img src="telegram_qr.png" alt="Telegram QR" class="w-full h-full object-contain">
            </div>
          </a>
        </div>
      </div>
    `;
  }
  document.getElementById('admin-image-preview-modal').classList.remove('hidden');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderAllSizePresetContainers();
  loadProducts();
  loadAdminOrders();
  updateAdminThemeHeader();
  updateAdminShippingQuickBadge();
  updateAdminPromoTagBadge();
  if (typeof updateAdminWebsiteQrDisplay === 'function') {
    updateAdminWebsiteQrDisplay();
  }
  updateAdminSoundToggleUI();
  initAdminPwa();
  updateAdminProductViewUI();
  updateAdminBulkDiscountBadge();
  window.addEventListener('scroll', handleAdminScroll, { passive: true });
  const mainEl = document.getElementById('admin-main-content');
  if (mainEl) {
    mainEl.addEventListener('scroll', handleAdminScroll, { passive: true });
  }
});

// =========================================================================
// ================= ORDERS HISTORY MANAGEMENT (ADMIN) ======================
// =========================================================================
// SECTION 4: ORDERS HISTORY & INVOICE MANAGEMENT (គ្រប់គ្រងការបញ្ជាទិញ & ចេញវិក្កយបត្រ)
// =========================================================================

const ORDERS_STORAGE_KEY = 'edushop_orders_data';

// Helper: Convert Arabic number to Khmer Numeral (លេខខ្មែរ ០-៩)
function toKhmerNum(num) {
  const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  return String(num ?? '').split('').map(char => {
    const digit = parseInt(char, 10);
    return !isNaN(digit) ? khmerDigits[digit] : char;
  }).join('');
}

// Helper: Extract Khmer date components
function getKhmerDateParts(dateStr) {
  const d = dateStr ? new Date(dateStr) : new Date();
  const day = d.getDate();
  const khMonths = [
    'មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា',
    'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'
  ];
  const month = khMonths[d.getMonth()] || 'មករា';
  const year = d.getFullYear();
  const yearStr = String(year);
  return {
    dayKh: toKhmerNum(day),
    monthKh: month,
    yearKh: toKhmerNum(year),
    yearEndKh: toKhmerNum(yearStr.slice(-1)) // e.g. '៦' for '២០២៦'
  };
}

// Helper: Calculate Next Sequential Invoice Number
function getNextInvoiceNumber() {
  let maxNum = 0;
  (adminOrders || []).forEach(o => {
    if (o.invoiceNo) {
      const m = String(o.invoiceNo).match(/\d+/);
      if (m) {
        const val = parseInt(m[0], 10);
        if (val > maxNum) maxNum = val;
      }
    }
  });
  if (maxNum === 0) maxNum = (adminOrders || []).length;
  return String(maxNum + 1).padStart(4, '0');
}

// Default Sample Orders for immediate testing & demonstration
const defaultSampleOrders = [
  {
    id: "ORD-942185",
    invoiceNo: "0001",
    customerName: "អ្នកគ្រូ សុខ គីមហុង",
    customerPhone: "012 888 999",
    customerAddress: "សាលាបឋមសិក្សាព្រះនរោត្តម, សង្កាត់ជ័យជំនះ, ខណ្ឌដូនពេញ, រាជធានីភ្នំពេញ",
    paymentMethod: "ABA KHQR",
    customerNote: "សូមដឹកជញ្ជូនឱ្យបានមុនម៉ោង ៤ រសៀល",
    items: [
      { name: "ផ្ទាំងបដាស្វាគមន៍ «ស្វាគមន៍មកកាន់ថ្នាក់រៀនយើង»", size: "60 cm x 80 cm", qty: 2, priceUSD: 5.00, priceKHR: 20000, image: "poster_welcome.jpg" },
      { name: "ផ្ទាំងដើមឈើអំណាន និងផ្កាពិន្ទុលើកទឹកចិត្ត", size: "60 cm x 80 cm", qty: 1, priceUSD: 2.50, priceKHR: 10000, image: "poster_reading_tree.jpg" }
    ],
    totalUSD: 7.50,
    totalKHR: 30000,
    status: "pending",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: "ORD-831402",
    invoiceNo: "0002",
    customerName: "លោកគ្រូ ចាន់ វិសាល",
    customerPhone: "098 776 543",
    customerAddress: "សាលាបឋមសិក្សាវត្តបូព៌, ក្រុងសៀមរាប, ខេត្តសៀមរាប",
    paymentMethod: "ធនាគារអេស៊ីលីដា / Wing",
    customerNote: "ផ្ញើតាមឡានក្រុង វីរៈប៊ុនថាំ សៀមរាប",
    items: [
      { name: "ផ្ទាំងតារាងព្យញ្ជនៈ និងស្រៈខ្មែរ រូបភាពជីវចល", size: "80 cm x 100 cm", qty: 3, priceUSD: 11.25, priceKHR: 45000, image: "poster_khmer_alphabet.jpg" },
      { name: "នាឡិកាឈើគំរូ រៀនមើលម៉ោង និងនាទី", size: "25cm × 25cm (កម្រាស់ 1.5cm)", qty: 2, priceUSD: 9.00, priceKHR: 36000, image: "logo.png" }
    ],
    totalUSD: 20.25,
    totalKHR: 81000,
    status: "processing",
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString()
  },
  {
    id: "ORD-720914",
    invoiceNo: "0003",
    customerName: "អ្នកគ្រូ លី ស្រីមុំ",
    customerPhone: "077 445 566",
    customerAddress: "សាលាអនុវិទ្យាល័យសម្តេចជាស៊ីម, ក្រុងបាត់ដំបង, ខេត្តបាត់ដំបង",
    paymentMethod: "ABA KHQR",
    customerNote: "ទំនិញស្អាតណាស់ អរគុណច្រើន!",
    items: [
      { name: "ឈុតបន្ទាត់ធំ និងត្រីវិស័យសម្រាប់ក្ដារខៀន", size: "បន្ទាត់ 100cm + រង្វាស់មុំ + ត្រីវិស័យ 50cm", qty: 1, priceUSD: 8.50, priceKHR: 34000, image: "logo.png" },
      { name: "ផ្ទាំងកាលវិភាគ និងច្បាប់វិន័យប្រចាំថ្នាក់", size: "40 cm x 60 cm", qty: 4, priceUSD: 5.00, priceKHR: 20000, image: "poster_rules_schedule.jpg" }
    ],
    totalUSD: 13.50,
    totalKHR: 54000,
    status: "completed",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
  },
  {
    id: "ORD-519823",
    invoiceNo: "0004",
    customerName: "លោកគ្រូ ហ៊ាង ដារ៉ា",
    customerPhone: "010 332 211",
    customerAddress: "សាលាបឋមសិក្សាព្រះសីហនុ, ក្រុងកំពង់ចាម, ខេត្តកំពង់ចាម",
    paymentMethod: "ABA KHQR",
    customerNote: "ទំហំទទឹង 120cm x 150cm (ផ្ទៃក្រឡា 1.80 m²)",
    items: [
      { name: "ផ្ទាំងបដាស្វាគមន៍ «ស្វាគមន៍មកកាន់ថ្នាក់រៀនយើង» (កំណត់ផ្ទាល់)", size: "120 cm x 150 cm (ផ្ទៃក្រឡា 1.80 m²)", qty: 1, priceUSD: 8.50, priceKHR: 34000, image: "poster_welcome.jpg" }
    ],
    totalUSD: 8.50,
    totalKHR: 34000,
    status: "pending",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
  }
];

// Orders App State
let adminOrders = [];
let adminOrderStatusFilter = 'all';
let currentAdminSection = 'products';
let currentActiveOrder = null;
let invoicePrintLayout = 'single'; // 'single' (1 slip) | 'dual' (2 slips A4 like PDF)
let currentCreateInvoiceTab = 'from-order';
let manualInvoiceItems = [];

// Switch Admin Main Sections ('products' vs 'orders' vs 'analytics')
function switchAdminSection(section) {
  currentAdminSection = section;
  const prodSec = document.getElementById('admin-products-section');
  const ordSec = document.getElementById('admin-orders-section');
  const anaSec = document.getElementById('admin-analytics-section');

  const tabProd = document.getElementById('nav-tab-products');
  const tabOrd = document.getElementById('nav-tab-orders');
  const tabAna = document.getElementById('nav-tab-analytics');

  const prodQuickActions = document.getElementById('nav-products-quick-actions');
  const ordQuickActions = document.getElementById('nav-orders-quick-actions');

  const inactiveTabClass = 'w-full px-3.5 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between gap-2 text-slate-300 hover:text-white hover:bg-slate-800/80 cursor-pointer group text-left';

  // Hide all sections first
  if (prodSec) prodSec.classList.add('hidden');
  if (ordSec) ordSec.classList.add('hidden');
  if (anaSec) anaSec.classList.add('hidden');

  // Reset all tabs to inactive
  if (tabProd) tabProd.className = inactiveTabClass;
  if (tabOrd) tabOrd.className = inactiveTabClass;
  if (tabAna) tabAna.className = inactiveTabClass;

  // Toggle quick action toolbars
  if (prodQuickActions) prodQuickActions.classList.add('hidden');
  if (ordQuickActions) ordQuickActions.classList.add('hidden');

  if (section === 'orders') {
    if (ordSec) ordSec.classList.remove('hidden');
    if (tabOrd) tabOrd.className = 'w-full px-3.5 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between gap-2 bg-purple-600 text-white shadow-sm cursor-pointer group text-left';
    if (ordQuickActions) ordQuickActions.classList.remove('hidden');
    loadAdminOrders();
  } else if (section === 'analytics') {
    if (anaSec) anaSec.classList.remove('hidden');
    if (tabAna) tabAna.className = 'w-full px-3.5 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between gap-2 bg-emerald-600 text-white shadow-sm cursor-pointer group text-left';
    if (prodQuickActions) prodQuickActions.classList.remove('hidden');
    renderAnalyticsDashboard();
  } else {
    // Default: 'products'
    if (prodSec) prodSec.classList.remove('hidden');
    if (tabProd) tabProd.className = 'w-full px-3.5 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between gap-2 bg-sky-600 text-white shadow-sm cursor-pointer group text-left';
    if (prodQuickActions) prodQuickActions.classList.remove('hidden');
    updateStats();
    renderAdminTable();
  }
}

function handleSidebarExportCSV() {
  if (currentAdminSection === 'orders') {
    exportOrdersCSV();
  } else {
    exportProductsCSV();
  }
}

function toggleAdminSidebar() {
  const sidebar = document.getElementById('admin-sidebar');
  if (sidebar) {
    sidebar.classList.toggle('hidden');
  }
}

// Load Orders from LocalStorage
function loadAdminOrders() {
  const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
  if (saved) {
    try {
      adminOrders = JSON.parse(saved);
      if (!Array.isArray(adminOrders) || adminOrders.length === 0) {
        adminOrders = JSON.parse(JSON.stringify(defaultSampleOrders));
        saveAdminOrders();
      }
    } catch (e) {
      adminOrders = JSON.parse(JSON.stringify(defaultSampleOrders));
      saveAdminOrders();
    }
  } else {
    adminOrders = JSON.parse(JSON.stringify(defaultSampleOrders));
    saveAdminOrders();
  }

  // Ensure every order has a sequential invoice number & item images
  let needsSave = false;
  adminOrders.forEach((ord, idx) => {
    if (!ord.invoiceNo) {
      ord.invoiceNo = String(adminOrders.length - idx).padStart(4, '0');
      needsSave = true;
    }
    if (Array.isArray(ord.items)) {
      ord.items.forEach(it => {
        if (!it.image) {
          const img = getOrderItemImage(it);
          if (img) {
            it.image = img;
            needsSave = true;
          }
        }
      });
    }
  });
  if (needsSave) {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(adminOrders));
  }

  updateOrderStats();
  renderAdminOrdersTable();
}

// Save Orders to LocalStorage
function saveAdminOrders() {
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(adminOrders));
  updateOrderStats();
}

// Update Order Stats & Badges
function updateOrderStats() {
  const total = adminOrders.length;
  const pending = adminOrders.filter(o => o.status === 'pending').length;
  const processing = adminOrders.filter(o => o.status === 'processing').length;
  const completed = adminOrders.filter(o => o.status === 'completed').length;
  const cancelled = adminOrders.filter(o => o.status === 'cancelled').length;

  const totalUSD = adminOrders.reduce((sum, o) => sum + (parseFloat(o.totalUSD) || 0), 0);
  const completedUSD = adminOrders
    .filter(o => o.status === 'completed')
    .reduce((sum, o) => sum + (parseFloat(o.totalUSD) || 0), 0);

  // Stats cards
  const elTotal = document.getElementById('stat-orders-total');
  const elRev = document.getElementById('stat-orders-revenue');
  const elPending = document.getElementById('stat-orders-pending');
  const elProc = document.getElementById('stat-orders-processing');
  const elComp = document.getElementById('stat-orders-completed');
  const elCompRev = document.getElementById('stat-orders-completed-rev');

  if (elTotal) elTotal.textContent = total;
  if (elRev) elRev.textContent = `ចំណូលសរុប: ${formatUSD(totalUSD)}`;
  if (elPending) elPending.textContent = pending;
  if (elProc) elProc.textContent = processing;
  if (elComp) elComp.textContent = completed;
  if (elCompRev) elCompRev.textContent = `ជោគជ័យ: ${formatUSD(completedUSD)}`;

  // Filter button counts
  const cAll = document.getElementById('count-orders-all');
  const cPend = document.getElementById('count-orders-pending');
  const cProc = document.getElementById('count-orders-processing');
  const cComp = document.getElementById('count-orders-completed');
  const cCanc = document.getElementById('count-orders-cancelled');

  if (cAll) cAll.textContent = total;
  if (cPend) cPend.textContent = pending;
  if (cProc) cProc.textContent = processing;
  if (cComp) cComp.textContent = completed;
  if (cCanc) cCanc.textContent = cancelled;

  // Nav badges
  const navBadge = document.getElementById('nav-count-orders');
  if (navBadge) {
    navBadge.textContent = pending;
    if (pending > 0) {
      navBadge.className = 'bg-rose-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold animate-pulse';
    } else {
      navBadge.className = 'bg-slate-600 text-slate-200 px-2 py-0.5 rounded-full text-[10px] font-bold';
    }
  }

  const navProdBadge = document.getElementById('nav-count-products');
  if (navProdBadge) {
    navProdBadge.textContent = adminProducts.length;
  }
}

// Format Khmer date/time
function formatDateKh(dateStr) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${mins}`;
  } catch (e) {
    return dateStr;
  }
}

// Order status helper
function getOrderStatusBadge(status) {
  switch (status) {
    case 'pending':
      return { label: '⏳ រង់ចាំពិនិត្យ', bg: 'bg-amber-50 text-amber-700 border-amber-200' };
    case 'processing':
      return { label: '🚚 កំពុងរៀបចំ/ដឹក', bg: 'bg-sky-50 text-sky-700 border-sky-200' };
    case 'completed':
      return { label: '✅ បានបញ្ចប់', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
    case 'cancelled':
      return { label: '❌ បានបោះបង់', bg: 'bg-rose-50 text-rose-700 border-rose-200' };
    default:
      return { label: status, bg: 'bg-slate-100 text-slate-700 border-slate-200' };
  }
}

// Helper: Resolve Product Image for Order Items (បង្ហាញរូបភាពទំនិញដែលបានទិញ)
function getOrderItemImage(item) {
  if (!item) return 'logo.png';
  if (item.image && typeof item.image === 'string' && item.image.trim()) return item.image.trim();
  if (item.imageUrl && typeof item.imageUrl === 'string' && item.imageUrl.trim()) return item.imageUrl.trim();

  const itemName = (item.name || '').trim().toLowerCase();

  // 1. Search in adminProducts catalog by exact or partial name
  if (Array.isArray(adminProducts) && itemName) {
    const matched = adminProducts.find(p => {
      const pName = (p.name || '').trim().toLowerCase();
      return pName === itemName || itemName.includes(pName) || pName.includes(itemName);
    });
    if (matched && matched.imageUrl) return matched.imageUrl;
  }

  // 2. Fallback poster image maps
  if (itemName.includes('ស្វាគមន៍')) return 'poster_welcome.jpg';
  if (itemName.includes('ដើមឈើអំណាន')) return 'poster_reading_tree.jpg';
  if (itemName.includes('ព្យញ្ជនៈ') || itemName.includes('ស្រៈ')) return 'poster_khmer_alphabet.jpg';
  if (itemName.includes('កាលវិភាគ') || itemName.includes('វិន័យ')) return 'poster_rules_schedule.jpg';

  return 'logo.png';
}

// Open high-resolution image preview modal for ordered item
function openAdminItemImagePreview(title, imgUrl, frameColor) {
  const modal = document.getElementById('admin-image-preview-modal');
  const titleEl = document.getElementById('admin-preview-title');
  const contentEl = document.getElementById('admin-preview-content');
  if (!modal || !titleEl || !contentEl) return;

  const frameInfo = getFrameInfo(frameColor || 'none');
  const frameBadgeHtml = (frameColor && frameColor !== 'none')
    ? `<span class="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${frameInfo.badgeBg} shadow-2xs">${frameInfo.emoji} ${frameInfo.label}</span>`
    : '';

  titleEl.innerHTML = `
    <span class="truncate max-w-[260px] sm:max-w-md inline-block align-middle font-bold">${title || 'រូបភាពទំនិញ'}</span>
    ${frameBadgeHtml ? `<span class="ml-2 inline-block align-middle">${frameBadgeHtml}</span>` : ''}
  `;

  const frameClass = frameInfo.classLg || 'border border-slate-200';
  contentEl.innerHTML = `
    <div class="relative overflow-hidden rounded-2xl flex items-center justify-center bg-slate-900/10 w-full">
      <img src="${imgUrl || 'logo.png'}" alt="${title || 'Preview'}" class="max-h-[50vh] w-auto max-w-full rounded-2xl object-contain shadow-lg ${frameClass} bg-white" onerror="this.src='logo.png'">
      <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent pt-6 pb-2.5 px-3 sm:px-4 flex items-center justify-between text-white z-10 pointer-events-auto">
        <div class="flex items-center gap-2 min-w-0">
          <div class="w-8 h-8 rounded-full bg-white p-0.5 shadow-md ring-2 ring-white/60 overflow-hidden flex-shrink-0 flex items-center justify-center">
            <img src="logo.png" alt="EduShop" class="w-full h-full object-contain">
          </div>
          <div class="min-w-0 text-left">
            <div class="text-xs sm:text-sm font-black text-amber-300 leading-tight truncate">EduShop Cambodia</div>
            <div class="text-[9.5px] sm:text-[10.5px] text-slate-300 font-medium truncate hidden xs:block">សម្ភារៈតុបតែងថ្នាក់ & សម្ភារៈបង្រៀនខ្មែរ</div>
          </div>
        </div>
        <a href="https://t.me/+855964361201" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 px-2.5 py-1 rounded-xl border border-sky-400/50 shadow-md group transition flex-shrink-0" title="Telegram: 096 436 1201">
          <div class="text-right leading-tight">
            <div class="text-[9px] text-sky-300 font-bold flex items-center justify-end gap-1">
              <span>✈️</span> <span>Telegram QR</span>
            </div>
            <div class="text-xs sm:text-sm font-mono font-bold text-white tracking-wide">096 436 1201</div>
          </div>
          <div class="w-10 h-10 bg-white p-0.5 rounded-lg shadow ring-1 ring-sky-400 overflow-hidden flex-shrink-0 group-hover:scale-105 transition">
            <img src="telegram_qr.png" alt="Telegram QR" class="w-full h-full object-contain">
          </div>
        </a>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
}

// Render Orders Table
function renderAdminOrdersTable() {
  const searchInput = document.getElementById('admin-orders-search');
  const search = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const paymentSelect = document.getElementById('admin-orders-payment-filter');
  const payment = paymentSelect ? paymentSelect.value : 'all';
  const tableBody = document.getElementById('admin-orders-table');

  if (!tableBody) return;

  const filtered = adminOrders.filter(order => {
    // Status filter
    if (adminOrderStatusFilter !== 'all' && order.status !== adminOrderStatusFilter) {
      return false;
    }
    // Payment filter
    if (payment !== 'all') {
      const pm = (order.paymentMethod || '').toLowerCase();
      if (payment === 'ABA KHQR' && !pm.includes('aba')) return false;
      if (payment.includes('អេស៊ីលីដា') && !pm.includes('អេស៊ីលីដា') && !pm.includes('acleda')) return false;
    }
    // Search filter
    if (search) {
      const matchId = order.id && order.id.toLowerCase().includes(search);
      const matchInv = (order.invoiceNo && order.invoiceNo.toLowerCase().includes(search)) ||
                       (toKhmerNum(order.invoiceNo || '').includes(search));
      const matchName = order.customerName && order.customerName.toLowerCase().includes(search);
      const matchPhone = order.customerPhone && order.customerPhone.toLowerCase().includes(search);
      const matchAddress = order.customerAddress && order.customerAddress.toLowerCase().includes(search);
      const matchItems = order.items && order.items.some(i => i.name && i.name.toLowerCase().includes(search));
      if (!matchId && !matchInv && !matchName && !matchPhone && !matchAddress && !matchItems) {
        return false;
      }
    }
    return true;
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="8" class="py-12 text-center text-slate-400">
          <div class="text-3xl mb-2">🛍️</div>
          <p class="font-medium text-sm text-slate-600">មិនមានប្រវត្តិបញ្ជាទិញត្រូវនឹងលក្ខខណ្ឌស្វែងរកទេ</p>
          <p class="text-xs text-slate-400 mt-1">សាកល្បងផ្លាស់ប្តូរជម្រើសស្វែងរក ឬចុចបញ្ចូលទិន្នន័យគំរូឡើងវិញ</p>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(order => {
    const statusInfo = getOrderStatusBadge(order.status);
    const totalOrderQty = (order.items || []).reduce((acc, i) => acc + (parseInt(i.qty, 10) || 1), 0);

    const itemsPreview = (order.items || []).map(i => {
      const itemImg = getOrderItemImage(i);
      const safeTitle = (i.name || 'ទំនិញ').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
      const frameColor = i.frameColor || 'none';

      return `
        <div class="flex items-center gap-2.5 p-1.5 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-slate-300 transition group/item shadow-2xs">
          <!-- Thumbnail Image (Clickable for full preview) -->
          <div 
            onclick="openAdminItemImagePreview('${safeTitle}', '${itemImg}', '${frameColor}')" 
            class="relative shrink-0 w-11 h-11 rounded-lg overflow-hidden border border-slate-200 bg-white cursor-pointer group-hover/item:scale-105 transition shadow-xs group-hover/item:ring-2 group-hover/item:ring-sky-400" 
            title="ចុចដើម្បីពិនិត្យរូបភាពធំ">
            <img 
              src="${itemImg}" 
              alt="${safeTitle}" 
              loading="lazy" 
              class="w-full h-full object-cover" 
              onerror="this.onerror=null; this.src='logo.png';">
            <span class="absolute -top-1 -right-1 bg-slate-900 text-white font-mono text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs border border-white">
              ${i.qty || 1}
            </span>
          </div>

          <!-- Item Details -->
          <div class="min-w-0 flex-1">
            <div class="font-bold text-slate-900 text-[11px] leading-tight line-clamp-2" title="${safeTitle}">
              ${i.name}
            </div>
            <div class="text-[10px] text-slate-500 mt-0.5 flex flex-wrap items-center gap-1 leading-normal">
              ${i.frameLabel ? `<span class="bg-amber-100 text-amber-900 font-bold px-1 rounded text-[9px] border border-amber-200">🖼️ ${i.frameLabel}</span>` : ''}
              <span class="bg-slate-100 text-slate-700 px-1.5 py-0.2 rounded text-[9.5px] font-semibold border border-slate-200">${i.size || 'ស្តង់ដារ'}</span>
              <span class="text-slate-300">•</span>
              <span class="font-bold text-emerald-700 font-mono">x${i.qty || 1}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    const cleanPhone = (order.customerPhone || '').replace(/\s+/g, '');

    return `
      <tr class="hover:bg-slate-50/80 transition group border-b border-slate-100">
        <!-- Invoice No & Order ID -->
        <td class="py-3 px-3 align-top whitespace-nowrap">
          <div class="font-bold text-sky-800 text-xs">
            លេខៈ <span class="font-mono text-sm">${toKhmerNum(order.invoiceNo || '0001')}</span>
            <span class="text-[10px] text-slate-400 font-normal">(${order.invoiceNo || '0001'})</span>
          </div>
          <span class="font-mono text-[11px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 block w-fit mt-1">
            #${order.id}
          </span>
        </td>

        <!-- Date -->
        <td class="py-3 px-3 align-top whitespace-nowrap text-slate-600">
          <span class="text-xs font-medium block">${formatDateKh(order.createdAt)}</span>
        </td>

        <!-- Customer Info -->
        <td class="py-3 px-3 align-top max-w-[220px]">
          <div class="space-y-1">
            <div class="font-bold text-slate-900 text-xs">${order.customerName || '-'}</div>
            <div class="flex items-center gap-1.5 text-xs text-slate-600">
              <span>📞</span>
              <a href="tel:${cleanPhone}" class="font-semibold hover:text-sky-600 hover:underline">${order.customerPhone || '-'}</a>
            </div>
            <div class="text-[11px] text-slate-500 leading-tight">
              <span>📍</span> ${order.customerAddress || '-'}
            </div>
            ${order.customerNote ? `
              <div class="text-[11px] text-amber-800 bg-amber-50/80 p-1.5 rounded-md border border-amber-200/80 mt-1 leading-tight">
                <strong>ចំណាំ៖</strong> ${order.customerNote}
              </div>
            ` : ''}
            ${order.customText ? `
              <div class="text-[11px] text-purple-900 bg-purple-50 p-1.5 rounded-md border border-purple-200 mt-1 leading-tight flex items-start gap-1">
                <span>✍️</span>
                <div><strong>ឆ្លាក់/ឈ្មោះ៖</strong> «${order.customText}»</div>
              </div>
            ` : ''}
          </div>
        </td>

        <!-- Items Summary (មុខទំនិញដែលបានទិញ) -->
        <td class="py-3 px-3 align-top min-w-[220px] max-w-[300px]">
          <div class="space-y-1.5 max-h-56 overflow-y-auto pr-0.5 smooth-scroll-box">
            ${itemsPreview}
          </div>
          ${order.items && order.items.length > 1 ? `
            <div class="text-[9.5px] font-bold text-slate-400 pt-1 flex items-center justify-between">
              <span>សរុប ${order.items.length} មុខទំនិញ</span>
              <span class="font-mono text-slate-500 font-bold">(${totalOrderQty} ចំនួន)</span>
            </div>
          ` : ''}
        </td>

        <!-- Total Price -->
        <td class="py-3 px-3 align-top whitespace-nowrap">
          <div class="font-bold text-slate-900 text-sm">${formatUSD(order.totalUSD)}</div>
          <div class="text-[11px] font-semibold text-emerald-600">${formatKHR(order.totalKHR)}</div>
          ${order.couponCode ? `
            <div class="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 mt-1 inline-flex items-center gap-1">
              <span>🎟️ ${order.couponCode}</span>
              ${order.discountUSD ? `<span>(-${formatUSD(order.discountUSD)})</span>` : ''}
            </div>
          ` : ''}
          ${(order.shippingLocation || order.shippingFeeUSD !== undefined) ? `
            <div class="text-[10px] font-medium text-amber-900 bg-amber-50/80 px-1.5 py-0.5 rounded border border-amber-200 mt-1 flex items-center gap-1">
              <span>🚚</span>
              <span class="truncate max-w-[130px]">${order.shippingLocation || 'សេវាផ្ញើ'}</span>
              ${order.isFreeShipping ? '<span class="text-emerald-700 font-bold">(Free)</span>' : `<span>(+${formatUSD(order.shippingFeeUSD || 0)})</span>`}
            </div>
          ` : ''}
          ${(order.courierName || order.waybillNo) ? `
            <div class="text-[10px] font-semibold text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 mt-1 flex items-center justify-between gap-1">
              <span class="truncate">🚚 ${order.courierName || 'បញ្ញើ'}${order.waybillNo ? `: <strong class="font-mono text-sky-950">${order.waybillNo}</strong>` : ''}</span>
              <button onclick="openOrderTrackingModal('${order.id}')" class="text-[9.5px] text-sky-600 hover:text-sky-800 underline font-bold shrink-0">កែ</button>
            </div>
          ` : ''}
        </td>

        <!-- Payment Method -->
        <td class="py-3 px-3 align-top whitespace-nowrap">
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold ${
            order.paymentMethod === 'ABA KHQR' 
              ? 'bg-red-50 text-red-700 border border-red-200' 
              : 'bg-blue-50 text-blue-700 border border-blue-200'
          }">
            <span>${order.paymentMethod === 'ABA KHQR' ? '📲' : '🏦'}</span>
            <span>${order.paymentMethod || 'ABA KHQR'}</span>
          </span>
          ${order.paymentSlip ? `
            <div class="mt-1.5">
              <button 
                onclick="openSlipModal('${order.id}')" 
                class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition cursor-pointer"
                title="ចុចដើម្បីពិនិត្យវិក្កយបត្របង់ប្រាក់">
                <span>📷 មើល Slip</span>
              </button>
            </div>
          ` : ''}
        </td>

        <!-- Status Change Dropdown -->
        <td class="py-3 px-3 align-top text-center">
          <select 
            onchange="changeOrderStatus('${order.id}', this.value)" 
            class="text-xs font-bold px-2.5 py-1.5 rounded-xl border transition shadow-2xs cursor-pointer ${statusInfo.bg}">
            <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>⏳ រង់ចាំពិនិត្យ</option>
            <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>🚚 កំពុងរៀបចំ/ដឹក</option>
            <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>✅ បានបញ្ចប់</option>
            <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>❌ បានបោះបង់</option>
          </select>
        </td>

        <!-- Actions -->
        <td class="py-3 px-3 align-top text-center whitespace-nowrap">
          <div class="flex items-center justify-center gap-1.5">
            <button 
              onclick="openOrderInvoice('${order.id}')" 
              title="ចេញវិក្កយបត្រ / បោះពុម្ព"
              class="px-2.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 transition font-bold flex items-center gap-1 text-xs cursor-pointer shadow-2xs">
              <span>🧾</span>
              <span>ចេញវិក្កយបត្រ</span>
            </button>

            <button 
              onclick="openOrderTrackingModal('${order.id}')" 
              title="តាមដានបញ្ញើ & ផ្ញើដំណឹង Telegram ភ្ញៀវ" 
              class="px-2.5 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 transition font-bold flex items-center gap-1 text-xs cursor-pointer shadow-2xs">
              <span>🚚</span>
              <span>បញ្ញើ/Tracking</span>
            </button>

            <button 
              onclick="notifyCustomerDeliveryTelegram('${order.id}')" 
              title="ផ្ញើសារដំណឹង Telegram ទៅកាន់ភ្ញៀវផ្ទាល់ (1-Click Notification)" 
              class="px-2.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white border border-sky-600 transition font-bold flex items-center gap-1 text-xs cursor-pointer shadow-2xs">
              <span>✈️</span>
              <span>Telegram</span>
            </button>

            <button 
              onclick="openShippingLabelModal('${order.id}')" 
              title="បោះពុម្ពស្លាកដឹកជញ្ជូនបញ្ញើ (10x10cm / A6)"
              class="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition font-bold flex items-center gap-1 text-xs cursor-pointer shadow-2xs">
              <span>🏷️</span>
              <span>ស្លាកដឹក</span>
            </button>

            <button 
              onclick="openAdminQuotationModal('${order.id}')" 
              title="លិខិតសម្រង់តម្លៃផ្លូវការ (សាលារៀន/PB)"
              class="px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition font-bold flex items-center gap-1 text-xs cursor-pointer shadow-2xs">
              <span>📑</span>
              <span>សម្រង់តម្លៃ</span>
            </button>

            <button 
              onclick="deleteOrder('${order.id}')" 
              title="លុបការបញ្ជាទិញ"
              class="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition font-medium text-xs cursor-pointer">
              <span>🗑️</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Filter Status Buttons Handler
function setAdminOrderStatusFilter(status) {
  adminOrderStatusFilter = status;
  const buttons = ['all', 'pending', 'processing', 'completed', 'cancelled'];
  buttons.forEach(s => {
    const btn = document.getElementById(`btn-order-${s}`);
    if (!btn) return;
    if (s === status) {
      btn.className = 'order-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-600 text-white shadow-sm cursor-pointer';
    } else {
      btn.className = 'order-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200 cursor-pointer';
    }
  });
  renderAdminOrdersTable();
}

function filterAdminOrders() {
  renderAdminOrdersTable();
}

// Change Order Status
function changeOrderStatus(orderId, newStatus) {
  const order = adminOrders.find(o => o.id === orderId);
  if (!order) return;
  order.status = newStatus;
  saveAdminOrders();
  renderAdminOrdersTable();
  const labelMap = {
    pending: 'រង់ចាំពិនិត្យ ⏳',
    processing: 'កំពុងរៀបចំ/ដឹក 🚚',
    completed: 'បានបញ្ចប់ជោគជ័យ ✅',
    cancelled: 'បានបោះបង់ ❌'
  };
  showToast(`បានកែប្រែស្ថានភាព #${orderId} ទៅជា ${labelMap[newStatus] || newStatus}`);
}

// Delete Order
function deleteOrder(orderId) {
  if (confirm(`តើអ្នកពិតជាចង់លុបការបញ្ជាទិញ #${orderId} នេះមែនទេ? សកម្មភាពនេះមិនអាចត្រឡប់វិញបានទេ។`)) {
    adminOrders = adminOrders.filter(o => o.id !== orderId);
    saveAdminOrders();
    renderAdminOrdersTable();
    showToast(`បានលុបការបញ្ជាទិញ #${orderId} រួចរាល់`, 'rose');
  }
}

// Reset to Default Sample Orders
function resetToDefaultOrders() {
  if (confirm("តើអ្នកពិតជាចង់បញ្ចូលទិន្នន័យបញ្ជាទិញគំរូ (Sample Orders) ឡើងវិញមែនទេ? រាល់ការបញ្ជាទិញបច្ចុប្បន្ននឹងត្រូវកំណត់ឡើងវិញ។")) {
    adminOrders = JSON.parse(JSON.stringify(defaultSampleOrders));
    saveAdminOrders();
    renderAdminOrdersTable();
    showToast("បានកំណត់ទិន្នន័យបញ្ជាទិញគំរូឡើងវិញរួចរាល់!");
  }
}

// =========================================================================
// SECTION 5: INVOICE GENERATION & PRINTING (ផ្ទាំងវិក្កយបត្រ)
// =========================================================================

// Generate Single Invoice Slip HTML
function renderInvoiceSlipHTML(order, copyBadge = '') {
  const items = Array.isArray(order.items) ? order.items : [];
  const totalUSD = parseFloat(order.totalUSD) || 0;
  const totalKHR = parseInt(order.totalKHR, 10) || Math.round(totalUSD * 4000);
  
  const dateParts = getKhmerDateParts(order.createdAt);
  const invoiceNo = order.invoiceNo || '0001';
  const invoiceNoKh = toKhmerNum(invoiceNo);

  const khNums = ['១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩', '១០', '១១', '១២'];
  const totalRows = Math.max(12, items.length);

  let rowsHtml = '';
  for (let i = 0; i < totalRows; i++) {
    const item = items[i];
    const rowNumKh = i < khNums.length ? khNums[i] : toKhmerNum(i + 1);
    if (item) {
      const qty = item.qty || 1;
      const priceUSD = parseFloat(item.priceUSD) || 0;
      const priceKHR = item.priceKHR || Math.round(priceUSD * 4000);
      const unitKHR = qty > 0 ? Math.round(priceKHR / qty) : priceKHR;

      const details = [];
      if (item.frameLabel) details.push(`ស៊ុម៖ ${item.frameLabel}`);
      if (item.size && item.size !== 'ស្តង់ដារ') details.push(`ទំហំ៖ ${item.size}`);
      const detailsStr = details.length > 0 ? `<span class="block text-[9.5px] text-slate-500 font-normal leading-tight">${details.join(' • ')}</span>` : '';

      rowsHtml += `
        <tr style="height: 25px;" class="border-b border-[#0284c7]">
          <td class="text-center font-bold text-[#0369a1] border-r border-[#0284c7] px-1 py-0.5 align-middle text-[11px]">${rowNumKh}</td>
          <td class="px-2 py-0.5 border-r border-[#0284c7] font-semibold text-slate-900 align-middle text-[11px] leading-tight">
            ${item.name || '-'}
            ${detailsStr}
          </td>
          <td class="text-center font-bold text-slate-800 border-r border-[#0284c7] px-1 py-0.5 align-middle text-[11px]">${toKhmerNum(qty)}</td>
          <td class="text-right font-medium text-slate-700 border-r border-[#0284c7] px-2 py-0.5 align-middle text-[11px]">${unitKHR.toLocaleString('en-US')} ៛</td>
          <td class="text-right font-bold text-slate-900 px-2 py-0.5 align-middle text-[11px]">${priceKHR.toLocaleString('en-US')} ៛</td>
        </tr>
      `;
    } else {
      rowsHtml += `
        <tr style="height: 23px;" class="border-b border-[#0284c7]">
          <td class="text-center font-bold text-[#0369a1] border-r border-[#0284c7] px-1 py-0.5 align-middle text-[11px]">${rowNumKh}</td>
          <td class="px-2 py-0.5 border-r border-[#0284c7] align-middle">&nbsp;</td>
          <td class="text-center border-r border-[#0284c7] px-1 py-0.5 align-middle">&nbsp;</td>
          <td class="text-right border-r border-[#0284c7] px-2 py-0.5 align-middle">&nbsp;</td>
          <td class="text-right px-2 py-0.5 align-middle">&nbsp;</td>
        </tr>
      `;
    }
  }

  return `
    <div class="invoice-slip bg-white p-3.5 sm:p-5 rounded-2xl shadow-xs text-slate-800 flex flex-col justify-between" style="border: 2.5px solid #16a34a; font-family: 'Kantumruy Pro', 'Khmer OS', sans-serif;">
      
      <!-- Copy indicator badge if dual mode -->
      ${copyBadge ? `
        <div class="flex justify-between items-center mb-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          <span class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200">${copyBadge}</span>
          <span class="font-mono text-slate-400">#${order.id}</span>
        </div>
      ` : ''}

      <!-- Top Header Row: 6 Graphic Thumbnails + Yellow Center Ribbon -->
      <div class="flex items-center justify-between gap-1 mb-2">
        
        <!-- Left 3 Thumbnails -->
        <div class="flex items-center gap-1 justify-start">
          <div class="w-10 h-12 sm:w-12 sm:h-14 rounded-md border-2 border-sky-400 bg-sky-50 flex flex-col items-center justify-center p-0.5 text-center shadow-2xs">
            <span class="text-base sm:text-lg">🎨</span>
            <span class="text-[7.5px] font-bold text-sky-900 leading-none mt-0.5">តុបតែងថ្នាក់</span>
          </div>
          <div class="w-10 h-12 sm:w-12 sm:h-14 rounded-md border-2 border-amber-400 bg-amber-50 flex flex-col items-center justify-center p-0.5 text-center shadow-2xs">
            <span class="text-base sm:text-lg">📚</span>
            <span class="text-[7.5px] font-bold text-amber-900 leading-none mt-0.5">កិច្ចតែងការ</span>
          </div>
          <div class="w-10 h-12 sm:w-12 sm:h-14 rounded-md border-2 border-emerald-400 bg-emerald-50 flex flex-col items-center justify-center p-0.5 text-center shadow-2xs">
            <span class="text-base sm:text-lg">🔤</span>
            <span class="text-[7.5px] font-bold text-emerald-900 leading-none mt-0.5">ព្យញ្ជនៈ</span>
          </div>
        </div>

        <!-- Center Yellow Brand Ribbon -->
        <div class="px-3 sm:px-6 py-1 sm:py-1.5 rounded-full bg-[#fde047] border-2 border-[#ca8a04] shadow-sm text-center flex-shrink-0 mx-1">
          <h2 class="text-lg sm:text-2xl font-black text-[#881337] tracking-wider leading-none" style="text-shadow: 0 1px 1px rgba(255,255,255,0.9);">
            EduShop
          </h2>
        </div>

        <!-- Right 3 Thumbnails -->
        <div class="flex items-center gap-1 justify-end">
          <div class="w-10 h-12 sm:w-12 sm:h-14 rounded-md border-2 border-indigo-400 bg-indigo-50 flex flex-col items-center justify-center p-0.5 text-center shadow-2xs">
            <span class="text-base sm:text-lg">⏰</span>
            <span class="text-[7.5px] font-bold text-indigo-900 leading-none mt-0.5">សម្ភារៈរៀន</span>
          </div>
          <div class="w-10 h-12 sm:w-12 sm:h-14 rounded-md border-2 border-rose-400 bg-rose-50 flex flex-col items-center justify-center p-0.5 text-center shadow-2xs">
            <span class="text-base sm:text-lg">🧩</span>
            <span class="text-[7.5px] font-bold text-rose-900 leading-none mt-0.5">ល្បែងសិក្សា</span>
          </div>
          <div class="w-10 h-12 sm:w-12 sm:h-14 rounded-md border-2 border-cyan-400 bg-cyan-50 flex flex-col items-center justify-center p-0.5 text-center shadow-2xs">
            <span class="text-base sm:text-lg">🖨️</span>
            <span class="text-[7.5px] font-bold text-cyan-900 leading-none mt-0.5">ព្រីនបែនន័រ</span>
          </div>
        </div>

      </div>

      <!-- Pink Description Banner (exact wording from PDF) -->
      <div class="rounded-lg border-2 border-[#db2777] bg-[#fdf2f8] px-2 py-1 text-center font-bold text-[9.5px] sm:text-[10.5px] text-[#831843] leading-snug mb-2 shadow-2xs">
        <span class="text-red-600 font-black mr-0.5">➡</span>
        មានលក់សម្ភារៈតុបតែងថ្នាក់ សម្ភារៈបង្រៀន កិច្ចតែងការបង្រៀន សម្ភារៈការិយាល័យ សម្ភារៈសិក្សា សៀវភៅអានគ្រប់ប្រភេទ និងមានទទួលបោះពុម្ពធៀបការ បុណ្យ ខួបកំណើត ព្រីនបែនន័រ ស្លាកយីហោ ឡើងគេហដ្ឋានថ្មី វាយលិខិតស្នាមផ្សេងៗ។
      </div>

      <!-- 3-Column Info & Address (exact from PDF) -->
      <div class="grid grid-cols-3 items-center gap-1 text-[#0369a1] text-[10px] sm:text-[11px] leading-tight mb-2 pb-1.5 border-b-2 border-[#0284c7]">
        <div class="font-medium text-left">
          <div>ភូមិដំបូក១០០ ឃុំត្នោតជុំ ស្រុកក្រគរ</div>
          <div>ខេត្តពោធិ៍សាត់ ខាងលិចសាលាបឋម</div>
          <div>សិក្សាដំបូក១០០ ប្រហែល ៥០០ម៉ែត្រ</div>
        </div>

        <div class="text-center flex justify-center">
          <div class="px-3 sm:px-4 py-1 rounded-full bg-[#bae6fd] border-1.5 border-[#0284c7] text-[#0369a1] font-black text-[11px] sm:text-xs tracking-wider shadow-2xs uppercase">
            វិក្កយបត្រ INVOICE
          </div>
        </div>

        <div class="font-semibold text-right space-y-0.5">
          <div>Tell: 031 97 11 333 (ម្ចាស់ហាង)</div>
          <div>096 436 1201</div>
          <div>069 490 108</div>
        </div>
      </div>

      <!-- Date & Sequential Invoice Number Line (exact from PDF) -->
      <div class="flex flex-wrap items-center justify-between gap-1 text-[11px] sm:text-xs text-[#0369a1] font-bold mb-1.5">
        <div>
          <span>ដំបូក១០០, ថ្ងៃទី</span>
          <span class="inline-block min-w-[28px] text-center border-b border-dotted border-slate-700 text-slate-900 font-black px-1">${dateParts.dayKh}</span>
          <span>ខែ</span>
          <span class="inline-block min-w-[46px] text-center border-b border-dotted border-slate-700 text-slate-900 font-black px-1">${dateParts.monthKh}</span>
          <span>ឆ្នាំ២០២</span>
          <span class="inline-block min-w-[18px] text-center border-b border-dotted border-slate-700 text-slate-900 font-black px-0.5">${dateParts.yearEndKh}</span>
        </div>
        <div>
          <span>លេខៈ</span>
          <span class="inline-block min-w-[80px] text-center border-b-2 border-[#0284c7] text-sky-800 font-black px-2 font-mono text-xs sm:text-sm">${invoiceNoKh}</span>
          <span class="text-[10px] text-slate-500 font-normal">(${invoiceNo})</span>
        </div>
      </div>

      <!-- Customer Details Row (Recorded from Order) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[10.5px] sm:text-[11px] bg-slate-50/80 p-1.5 rounded-lg border border-slate-200 mb-2">
        <div class="truncate">
          <span class="text-slate-500 font-semibold">អតិថិជន / Buyer:</span>
          <strong class="text-slate-900 ml-1">${order.customerName || '-'}</strong>
          ${order.customerPhone ? `<span class="text-slate-700 ml-1.5 font-semibold">(📞 ${order.customerPhone})</span>` : ''}
        </div>
        <div class="truncate">
          <span class="text-slate-500 font-semibold">ទីតាំង / Address:</span>
          <span class="text-slate-800 font-medium ml-1">${order.customerAddress || '-'}</span>
        </div>
        ${order.customText ? `
          <div class="col-span-1 sm:col-span-2 text-[10.5px] text-purple-900 font-semibold mt-0.5 pt-0.5 border-t border-slate-200/60">
            <span>✍️ ឆ្លាក់/ឈ្មោះលើផ្ទាំង៖</span> <span class="bg-purple-100/70 text-purple-900 px-1.5 py-0.5 rounded border border-purple-300">«${order.customText}»</span>
          </div>
        ` : ''}
      </div>

      <!-- 12-Row Table matching the PDF -->
      <div class="border-2 border-[#0284c7] rounded-lg overflow-hidden mb-2">
        <table class="w-full text-xs border-collapse">
          <thead>
            <tr class="bg-sky-50/80 text-[#0369a1] font-bold border-b-2 border-[#0284c7] text-center">
              <th class="py-1 px-1.5 border-r border-[#0284c7] w-[8%] text-[10.5px]">ល.រ<br><span class="text-[8.5px] font-normal text-sky-700">No.</span></th>
              <th class="py-1 px-2 border-r border-[#0284c7] text-left w-[46%] text-[10.5px]">រាយមុខទំនិញ<br><span class="text-[8.5px] font-normal text-sky-700">Name of Items</span></th>
              <th class="py-1 px-1.5 border-r border-[#0284c7] w-[14%] text-[10.5px]">ចំនួន<br><span class="text-[8.5px] font-normal text-sky-700">Number</span></th>
              <th class="py-1 px-2 border-r border-[#0284c7] w-[16%] text-right text-[10.5px]">តម្លៃរាយ<br><span class="text-[8.5px] font-normal text-sky-700">Unit Price</span></th>
              <th class="py-1 px-2 w-[16%] text-right text-[10.5px]">តម្លៃសរុប<br><span class="text-[8.5px] font-normal text-sky-700">Amount</span></th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
          <tfoot>
            ${(order.couponCode && (order.discountUSD > 0 || order.discountKHR > 0)) ? `
              <tr class="border-t border-[#0284c7] bg-white text-[10.5px]">
                <td colspan="4" class="py-1 px-3 text-right text-slate-600 border-r border-[#0284c7]">
                  តម្លៃដើមសរុប (Subtotal):
                </td>
                <td class="py-1 px-3 text-right text-slate-700 font-semibold">
                  ${(order.subtotalKHR || (totalKHR + (order.discountKHR || Math.round((order.discountUSD || 0) * 4000)))).toLocaleString('en-US')} ៛
                </td>
              </tr>
              <tr class="border-t border-[#0284c7] bg-amber-50/70 text-[10.5px]">
                <td colspan="4" class="py-1 px-3 text-right text-amber-800 font-bold border-r border-[#0284c7]">
                  ប័ណ្ណបញ្ចុះតម្លៃ (${order.couponCode}):
                </td>
                <td class="py-1 px-3 text-right text-amber-800 font-bold">
                  -${(order.discountKHR || Math.round((order.discountUSD || 0) * 4000)).toLocaleString('en-US')} ៛
                </td>
              </tr>
            ` : ''}
            ${(order.shippingLocation || (order.shippingFeeUSD !== undefined && (order.shippingFeeUSD > 0 || order.isFreeShipping))) ? `
              <tr class="border-t border-[#0284c7] bg-emerald-50/50 text-[10.5px]">
                <td colspan="4" class="py-1 px-3 text-right text-emerald-800 font-semibold border-r border-[#0284c7]">
                  សេវាដឹកជញ្ជូន (${order.shippingLocation || 'ទូទៅ'})${order.isFreeShipping ? ' (Free Shipping 🎉)' : ''}:
                </td>
                <td class="py-1 px-3 text-right text-emerald-800 font-bold">
                  ${order.isFreeShipping ? 'ឥតគិតថ្លៃ ($0.00)' : `+${(order.shippingFeeKHR || Math.round((order.shippingFeeUSD || 0) * 4000)).toLocaleString('en-US')} ៛`}
                </td>
              </tr>
            ` : ''}
            <tr class="border-t-2 border-[#0284c7] bg-sky-50/60 font-bold">
              <td colspan="4" class="py-1.5 px-3 text-right text-[#0369a1] text-xs sm:text-sm border-r border-[#0284c7]">
                ${(order.couponCode && (order.discountUSD > 0 || order.discountKHR > 0)) ? 'សរុបចុងក្រោយៈ' : 'សរុបៈ'}
              </td>
              <td class="py-1.5 px-3 text-right text-sky-900 font-black text-xs sm:text-sm">
                ${totalKHR.toLocaleString('en-US')} ៛
                <span class="block text-[9.5px] text-slate-500 font-medium font-mono">(${formatUSD(totalUSD)})</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- Signatures Row (exact from PDF) -->
      <div class="grid grid-cols-2 pt-2 text-center text-[#0369a1] font-bold text-xs">
        <div>
          <div>អ្នកទិញ / The Buyer</div>
          <div class="h-12 sm:h-14 flex items-end justify-center">
            <span class="text-[9px] text-slate-400 font-normal border-t border-dotted border-slate-400 pt-0.5 px-4">ហត្ថលេខា / ស្នាមមេដៃ</span>
          </div>
        </div>

        <div>
          <div>អ្នកលក់ / The Seller</div>
          <div class="h-12 sm:h-14 flex items-end justify-center">
            <span class="text-[9px] text-slate-400 font-normal border-t border-dotted border-slate-400 pt-0.5 px-4">ហត្ថលេខា / ត្រា</span>
          </div>
        </div>
      </div>

    </div>
  `;
}

// Render active invoice content in modal
function renderCurrentActiveInvoiceContent() {
  if (!currentActiveOrder) return;
  const printableArea = document.getElementById('invoice-printable-area');
  if (!printableArea) return;

  if (invoicePrintLayout === 'dual') {
    printableArea.innerHTML = `
      <div class="invoice-dual-wrapper grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        <div class="w-full">
          ${renderInvoiceSlipHTML(currentActiveOrder, 'ច្បាប់ដើម (Original / សម្រាប់ភ្ញៀវ)')}
        </div>
        <div class="w-full">
          ${renderInvoiceSlipHTML(currentActiveOrder, 'ច្បាប់ចម្លង (Duplicate / សម្រាប់ហាងទុក)')}
        </div>
      </div>
    `;
  } else {
    printableArea.innerHTML = `
      <div class="max-w-2xl mx-auto w-full">
        ${renderInvoiceSlipHTML(currentActiveOrder, '')}
      </div>
    `;
  }
}

// Toggle Print Layout (Single Slip vs Dual A4 Slips like PDF)
function setInvoicePrintLayout(layout) {
  invoicePrintLayout = layout;
  const btnSingle = document.getElementById('btn-layout-single');
  const btnDual = document.getElementById('btn-layout-dual');
  const modalCard = document.getElementById('order-invoice-modal-card');

  if (layout === 'dual') {
    if (btnDual) btnDual.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-white text-slate-900 shadow-xs cursor-pointer transition';
    if (btnSingle) btnSingle.className = 'px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer transition';
    if (modalCard) {
      modalCard.classList.remove('max-w-3xl');
      modalCard.classList.add('max-w-6xl');
    }
  } else {
    if (btnSingle) btnSingle.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-white text-slate-900 shadow-xs cursor-pointer transition';
    if (btnDual) btnDual.className = 'px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer transition';
    if (modalCard) {
      modalCard.classList.remove('max-w-6xl');
      modalCard.classList.add('max-w-3xl');
    }
  }

  renderCurrentActiveInvoiceContent();
}

// Format Invoice Message for Telegram Sharing
function formatInvoiceTelegramMessage(order) {
  if (!order) return '';
  const invNo = order.invoiceNo || order.id || '0001';
  const custName = order.customerName || 'អតិថិជន';
  const custPhone = order.customerPhone || '096 436 1201';
  const custSchool = order.schoolName ? `🏫 សាលារៀន/ស្ថាប័ន៖ ${order.schoolName}\n` : '';
  const custAddr = order.customerAddress ? `📍 ទីតាំងដឹកជញ្ជូន៖ ${order.customerAddress}\n` : '';
  const itemsList = (order.items && order.items.length) 
    ? order.items.map((it, idx) => `  ${idx + 1}. ${it.name} (x${it.qty || 1}) = $${((it.price || 0) * (it.qty || 1)).toFixed(2)}`).join('\n')
    : '  1. ទំនិញទូទៅ';
  const payableUSD = Number(order.payableUSD || order.totalUSD || 0).toFixed(2);
  const payableKHR = (order.payableKHR || Math.round(Number(payableUSD) * 4100)).toLocaleString();
  const payStatus = (order.paymentStatus === 'paid' || order.status === 'completed') ? '✅ បានទូទាត់រួចរាល់' : '⏳ រង់ចាំការទូទាត់';

  return `🧾 វិក្កយបត្របញ្ជាទិញ / INVOICE #${invNo}\n` +
    `👤 អតិថិជន៖ ${custName} (${custPhone})\n` +
    custSchool +
    custAddr +
    `-----------------------------------------\n` +
    `📦 បញ្ជីទំនិញ៖\n${itemsList}\n` +
    `-----------------------------------------\n` +
    `💰 ទឹកប្រាក់សរុប៖ $${payableUSD} (${payableKHR} រៀល)\n` +
    `📌 ស្ថានភាពបង់ប្រាក់៖ ${payStatus}\n\n` +
    `🙏 សូមអរគុណសម្រាប់ការគាំទ្រ EduShop Cambodia!\n` +
    `📞 ទំនាក់ទំនងម្ចាស់ហាង៖ 031 97 11 333 / 096 436 1201 (Telegram)\n` +
    `🌐 ឆាតតាម Telegram: https://t.me/+855964361201`;
}

// Send or Open Invoice via Telegram with Auto-Clipboard & Deep Link Fallback
function sendInvoiceViaTelegram(event) {
  if (event) {
    try { event.preventDefault(); } catch (e) {}
    try { event.stopPropagation(); } catch (e) {}
  }
  const order = currentActiveOrder;
  const msgText = formatInvoiceTelegramMessage(order);

  // Auto copy invoice message to clipboard so user can paste immediately
  if (msgText && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(msgText).then(() => {
      showToast("📋 បានចម្លងព័ត៌មានវិក្កយបត្រ! កំពុងបើក Telegram...", "emerald");
    }).catch(() => {});
  }

  let targetPhone = '855964361201';
  if (order && order.customerPhone) {
    const raw = order.customerPhone.replace(/[^0-9]/g, '');
    if (raw.length >= 8) {
      targetPhone = raw.startsWith('855') ? raw : ('855' + raw.replace(/^0/, ''));
    }
  }

  const encoded = encodeURIComponent(msgText);
  const webUrl = `https://t.me/+${targetPhone}?text=${encoded}`;
  const deepLink = `tg://resolve?phone=${targetPhone}`;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    try {
      window.location.href = `tg://msg_url?url=&text=${encoded}`;
    } catch (e) {}
  }

  setTimeout(() => {
    window.open(webUrl, '_blank', 'noopener,noreferrer');
  }, 250);
}

// Open Order Invoice Modal
function openOrderInvoice(orderId) {
  const cleanTargetId = String(orderId || '').replace(/^#/, '').trim();
  const order = adminOrders.find(o => String(o.id || '').replace(/^#/, '').trim() === cleanTargetId);
  
  if (!order) {
    console.warn("Order not found for ID:", orderId, "Available orders:", adminOrders.map(o => o.id));
    showToast("រកមិនឃើញការបញ្ជាទិញនេះទេ! សូមសាកល្បងម្ដងទៀត", "rose");
    return;
  }
  
  currentActiveOrder = order;

  const subtitleEl = document.getElementById('invoice-modal-subtitle');
  if (subtitleEl) {
    const invKh = toKhmerNum(order.invoiceNo || '0001');
    subtitleEl.textContent = `លេខរៀងវិក្កយបត្រ៖ លេខៈ ${invKh} (${order.invoiceNo || '0001'}) | កូដបញ្ជាទិញ៖ #${order.id}`;
  }
  
  const cleanPhone = (order.customerPhone || '').replace(/\s+/g, '');
  const tgLink = document.getElementById('invoice-tg-link');
  if (tgLink) {
    tgLink.classList.remove('hidden');
    let targetPhone = '855964361201';
    if (cleanPhone) {
      const digits = cleanPhone.replace(/[^0-9]/g, '');
      if (digits.length >= 8) {
        targetPhone = digits.startsWith('855') ? digits : ('855' + digits.replace(/^0/, ''));
      }
    }
    const invMsg = formatInvoiceTelegramMessage(order);
    tgLink.href = `https://t.me/+${targetPhone}?text=${encodeURIComponent(invMsg)}`;
    tgLink.onclick = sendInvoiceViaTelegram;
  }

  renderCurrentActiveInvoiceContent();

  const modal = document.getElementById('order-invoice-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

// Close Order Invoice Modal
function closeInvoiceModal() {
  const modal = document.getElementById('order-invoice-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Print Invoice Function
function printInvoice() {
  if (!currentActiveOrder) {
    showToast("សូមជ្រើសរើសការបញ្ជាទិញជាមុនសិន!", "rose");
    return;
  }

  // Ensure modal is visible and populated
  const modal = document.getElementById('order-invoice-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }

  // Add print classes to body
  if (invoicePrintLayout === 'dual') {
    document.body.classList.add('printing-dual');
  } else {
    document.body.classList.remove('printing-dual');
  }
  document.body.classList.add('printing-invoice');

  // Trigger browser print
  setTimeout(() => {
    window.print();
  }, 100);
}

// Clean up print classes when print dialog closes
window.addEventListener('afterprint', () => {
  document.body.classList.remove('printing-invoice');
  document.body.classList.remove('printing-dual');
  document.body.classList.remove('printing-waybill');
  document.body.classList.remove('label-size-10x15');
  document.body.classList.remove('label-size-a6');
  document.body.classList.remove('printing-qr-labels');
});

// =========================================================================
// SECTION 6: CREATE / ISSUE NEW INVOICE MODAL LOGIC
// =========================================================================

function openCreateInvoiceModal() {
  // Populate select dropdown with existing customer orders
  const selectEl = document.getElementById('select-order-for-invoice');
  if (selectEl) {
    if (adminOrders.length > 0) {
      selectEl.innerHTML = adminOrders.map((ord, idx) => `
        <option value="${ord.id}">
          [លេខៈ ${toKhmerNum(ord.invoiceNo || String(idx + 1).padStart(4, '0'))}] ${ord.customerName || 'អតិថិជន'} (${ord.customerPhone || '-'}) — ${formatKHR(ord.totalKHR)}
        </option>
      `).join('');
    } else {
      selectEl.innerHTML = `<option value="">-- មិនទាន់មានការបញ្ជាទិញទេ --</option>`;
    }
  }
  onSelectOrderForInvoiceChange();

  // Reset manual invoice form fields
  const nameEl = document.getElementById('manual-inv-cust-name');
  if (nameEl) nameEl.value = '';
  const phoneEl = document.getElementById('manual-inv-cust-phone');
  if (phoneEl) phoneEl.value = '';
  const addrEl = document.getElementById('manual-inv-cust-address');
  if (addrEl) addrEl.value = '';
  const numEl = document.getElementById('manual-inv-number');
  if (numEl) numEl.value = getNextInvoiceNumber();

  // Initialize with 1 default manual item
  manualInvoiceItems = [
    { name: '', size: '60 cm x 80 cm', qty: 1, unitKHR: 10000, priceKHR: 10000, priceUSD: 2.50 }
  ];
  renderManualInvoiceItems();

  switchCreateInvoiceTab('from-order');
  const modal = document.getElementById('create-invoice-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeCreateInvoiceModal() {
  const modal = document.getElementById('create-invoice-modal');
  if (modal) modal.classList.add('hidden');
}

function switchCreateInvoiceTab(tab) {
  currentCreateInvoiceTab = tab;
  const tabFromOrder = document.getElementById('tab-inv-from-order');
  const tabManual = document.getElementById('tab-inv-manual');
  const paneFromOrder = document.getElementById('pane-inv-from-order');
  const paneManual = document.getElementById('pane-inv-manual');
  const submitBtnText = document.getElementById('btn-submit-create-invoice-text');

  if (tab === 'manual') {
    tabManual.className = 'px-3.5 py-1.5 rounded-xl text-xs font-bold bg-purple-600 text-white shadow-xs cursor-pointer transition';
    tabFromOrder.className = 'px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer transition';
    paneFromOrder.classList.add('hidden');
    paneManual.classList.remove('hidden');
    if (submitBtnText) submitBtnText.textContent = 'រក្សាទុក និងចេញវិក្កយបត្រ (Save & Issue)';
  } else {
    tabFromOrder.className = 'px-3.5 py-1.5 rounded-xl text-xs font-bold bg-purple-600 text-white shadow-xs cursor-pointer transition';
    tabManual.className = 'px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer transition';
    paneManual.classList.add('hidden');
    paneFromOrder.classList.remove('hidden');
    if (submitBtnText) submitBtnText.textContent = 'ចេញវិក្កយបត្រ (Generate Invoice)';
  }
}

function onSelectOrderForInvoiceChange() {
  const selectEl = document.getElementById('select-order-for-invoice');
  const previewCard = document.getElementById('selected-order-preview-card');
  if (!selectEl || !previewCard) return;

  const orderId = selectEl.value;
  const order = adminOrders.find(o => o.id === orderId);
  if (!order) {
    previewCard.innerHTML = `<p class="text-xs text-slate-400 text-center py-4">សូមជ្រើសរើសការបញ្ជាទិញរបស់ភ្ញៀវ</p>`;
    return;
  }

  const itemsList = (order.items || []).map(i => `
    <div class="flex justify-between items-center text-xs py-1 border-b border-slate-100">
      <div>
        <span class="font-bold text-slate-800">• ${i.name}</span>
        <span class="text-slate-500 text-[11px] block pl-2">${i.frameLabel ? i.frameLabel + ' • ' : ''}${i.size || 'ស្តង់ដារ'} × ${i.qty}</span>
      </div>
      <div class="font-bold text-slate-900">${formatKHR(i.priceKHR || ((i.priceUSD || 0) * 4000))}</div>
    </div>
  `).join('');

  previewCard.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-200 gap-2">
      <div>
        <div class="text-xs font-bold text-sky-800">
          លេខរៀងវិក្កយបត្រ៖ <span class="font-mono text-sm">${toKhmerNum(order.invoiceNo || '0001')} (${order.invoiceNo || '0001'})</span>
        </div>
        <div class="text-[11px] text-slate-500 mt-0.5">កូដបញ្ជាទិញ៖ #${order.id} | កាលបរិច្ឆេទ៖ ${formatDateKh(order.createdAt)}</div>
      </div>
      <div class="text-right">
        <span class="text-xs text-slate-500">តម្លៃសរុប៖</span>
        <div class="text-sm font-black text-emerald-600">${formatKHR(order.totalKHR)} (${formatUSD(order.totalUSD)})</div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs py-1 text-slate-700">
      <div><strong>អតិថិជន៖</strong> ${order.customerName || '-'} (📞 ${order.customerPhone || '-'})</div>
      <div><strong>អាសយដ្ឋាន៖</strong> ${order.customerAddress || '-'}</div>
    </div>

    <div class="space-y-1 pt-1">
      <div class="text-[11px] font-bold text-slate-500">មុខទំនិញដែលបានកុម្ម៉ង់ (${(order.items || []).length} មុខ)៖</div>
      <div class="max-h-36 overflow-y-auto space-y-1">
        ${itemsList}
      </div>
    </div>
  `;
}

function renderManualInvoiceItems() {
  const tbody = document.getElementById('manual-invoice-items-table');
  if (!tbody) return;

  const productOptions = (adminProducts || []).map(p => `
    <option value="${p.id}" data-name="${p.name}" data-size="${p.size}" data-usd="${p.priceUSD}" data-khr="${p.priceKHR}">
      ${p.name} (${p.size}) — ${formatKHR(p.priceKHR)}
    </option>
  `).join('');

  tbody.innerHTML = manualInvoiceItems.map((item, idx) => `
    <tr class="hover:bg-slate-100/50">
      <td class="py-1 px-1 text-center font-bold text-slate-400 text-xs">${idx + 1}</td>
      <td class="py-1 px-2">
        <input 
          type="text" 
          value="${item.name || ''}" 
          oninput="updateManualItemField(${idx}, 'name', this.value)" 
          placeholder="ឈ្មោះទំនិញ ឬជ្រើសរើសពីបញ្ជី..." 
          class="w-full px-2 py-1 bg-white border border-slate-300 rounded-lg text-xs font-semibold focus:ring-1 focus:ring-purple-500 mb-1"
        >
        <select onchange="onManualProductSelect(${idx}, this)" class="w-full px-1.5 py-0.5 bg-slate-50 border border-slate-200 rounded text-[11px] text-slate-600">
          <option value="">-- ជ្រើសរើសទំនិញពីហាង --</option>
          ${productOptions}
        </select>
      </td>
      <td class="py-1 px-2">
        <input 
          type="text" 
          value="${item.size || '60 cm x 80 cm'}" 
          oninput="updateManualItemField(${idx}, 'size', this.value)" 
          class="w-full px-2 py-1 bg-white border border-slate-300 rounded-lg text-xs"
        >
      </td>
      <td class="py-1 px-2 text-center">
        <input 
          type="number" 
          min="1" 
          value="${item.qty || 1}" 
          oninput="updateManualItemField(${idx}, 'qty', parseInt(this.value, 10) || 1)" 
          class="w-16 px-1.5 py-1 text-center bg-white border border-slate-300 rounded-lg text-xs font-bold"
        >
      </td>
      <td class="py-1 px-2 text-right">
        <input 
          type="number" 
          step="500" 
          value="${item.unitKHR || 10000}" 
          oninput="updateManualItemField(${idx}, 'unitKHR', parseInt(this.value, 10) || 0)" 
          class="w-24 px-1.5 py-1 text-right bg-white border border-slate-300 rounded-lg text-xs font-semibold"
        >
      </td>
      <td class="py-1 px-2 text-right font-bold text-slate-900 text-xs">
        ${((item.qty || 1) * (item.unitKHR || 0)).toLocaleString('en-US')} ៛
      </td>
      <td class="py-1 px-1 text-center">
        <button type="button" onclick="removeManualInvoiceItemRow(${idx})" class="text-rose-500 hover:text-rose-700 p-1 text-sm font-bold">✕</button>
      </td>
    </tr>
  `).join('');

  calcManualInvoiceTotals();
}

function updateManualItemField(idx, field, value) {
  if (!manualInvoiceItems[idx]) return;
  manualInvoiceItems[idx][field] = value;
  if (field === 'qty' || field === 'unitKHR') {
    const qty = parseInt(manualInvoiceItems[idx].qty, 10) || 1;
    const unitKHR = parseInt(manualInvoiceItems[idx].unitKHR, 10) || 0;
    manualInvoiceItems[idx].priceKHR = qty * unitKHR;
    manualInvoiceItems[idx].priceUSD = (qty * unitKHR) / 4000;
  }
  calcManualInvoiceTotals();
}

function onManualProductSelect(idx, selectEl) {
  const selectedOpt = selectEl.selectedOptions[0];
  if (!selectedOpt || !selectedOpt.value) return;
  const pName = selectedOpt.getAttribute('data-name');
  const pSize = selectedOpt.getAttribute('data-size');
  const pKHR = parseInt(selectedOpt.getAttribute('data-khr'), 10) || 10000;
  const pUSD = parseFloat(selectedOpt.getAttribute('data-usd')) || 2.50;

  if (manualInvoiceItems[idx]) {
    manualInvoiceItems[idx].name = pName;
    manualInvoiceItems[idx].size = pSize;
    manualInvoiceItems[idx].unitKHR = pKHR;
    manualInvoiceItems[idx].priceKHR = (manualInvoiceItems[idx].qty || 1) * pKHR;
    manualInvoiceItems[idx].priceUSD = (manualInvoiceItems[idx].qty || 1) * pUSD;
    renderManualInvoiceItems();
  }
}

function addManualInvoiceItemRow() {
  manualInvoiceItems.push({
    name: '',
    size: '60 cm x 80 cm',
    qty: 1,
    unitKHR: 10000,
    priceKHR: 10000,
    priceUSD: 2.50
  });
  renderManualInvoiceItems();
}

function removeManualInvoiceItemRow(idx) {
  if (manualInvoiceItems.length <= 1) {
    showToast("ត្រូវមានមុខទំនិញយ៉ាងហោចណាស់មួយ!", "amber");
    return;
  }
  manualInvoiceItems.splice(idx, 1);
  renderManualInvoiceItems();
}

function calcManualInvoiceTotals() {
  let totalKHR = 0;
  let totalUSD = 0;
  manualInvoiceItems.forEach(i => {
    const lineKHR = (i.qty || 1) * (i.unitKHR || 0);
    totalKHR += lineKHR;
    totalUSD += lineKHR / 4000;
  });

  const khrEl = document.getElementById('manual-inv-total-khr');
  const usdEl = document.getElementById('manual-inv-total-usd');
  if (khrEl) khrEl.textContent = totalKHR.toLocaleString('en-US') + ' ៛';
  if (usdEl) usdEl.textContent = `($${totalUSD.toFixed(2)})`;
}

function submitCreateInvoice() {
  if (currentCreateInvoiceTab === 'from-order') {
    const selectEl = document.getElementById('select-order-for-invoice');
    if (!selectEl || !selectEl.value) {
      showToast("សូមជ្រើសរើសការបញ្ជាទិញ!", "amber");
      return;
    }
    closeCreateInvoiceModal();
    openOrderInvoice(selectEl.value);
  } else {
    // Manual Invoice Creation
    const name = document.getElementById('manual-inv-cust-name').value.trim();
    const phone = document.getElementById('manual-inv-cust-phone').value.trim();
    const address = document.getElementById('manual-inv-cust-address').value.trim();
    const invoiceNum = document.getElementById('manual-inv-number').value.trim() || getNextInvoiceNumber();

    if (!name || !phone) {
      showToast("សូមបញ្ចូលឈ្មោះអតិថិជន និងលេខទូរស័ព្ទ!", "amber");
      return;
    }

    const validItems = manualInvoiceItems.filter(i => (i.name || '').trim().length > 0);
    if (validItems.length === 0) {
      showToast("សូមបញ្ចូលឈ្មោះមុខទំនិញយ៉ាងហោចណាស់មួយ!", "amber");
      return;
    }

    let totalKHR = 0;
    const finalItems = validItems.map(i => {
      const lineKHR = (i.qty || 1) * (i.unitKHR || 0);
      totalKHR += lineKHR;
      return {
        name: i.name.trim(),
        size: i.size || 'ស្តង់ដារ',
        qty: i.qty || 1,
        priceKHR: lineKHR,
        priceUSD: lineKHR / 4000
      };
    });

    const totalUSD = totalKHR / 4000;
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

    const newOrder = {
      id: orderId,
      invoiceNo: invoiceNum,
      customerName: name,
      customerPhone: phone,
      customerAddress: address || 'រាជធានីភ្នំពេញ',
      paymentMethod: 'ABA KHQR',
      customerNote: 'ចេញវិក្កយបត្រផ្ទាល់',
      items: finalItems,
      totalUSD: totalUSD,
      totalKHR: totalKHR,
      status: 'completed',
      createdAt: new Date().toISOString()
    };

    adminOrders.unshift(newOrder);
    saveAdminOrders();
    renderAdminOrdersTable();
    showToast(`បានបង្កើត និងចេញវិក្កយបត្រលេខៈ ${toKhmerNum(invoiceNum)} ជោគជ័យ!`, 'emerald');

    closeCreateInvoiceModal();
    openOrderInvoice(newOrder.id);
  }
}

// Cross-tab Synchronization via Storage Events
window.addEventListener('storage', (e) => {
  if (e.key === ORDERS_STORAGE_KEY) {
    const prevCount = Array.isArray(adminOrders) ? adminOrders.length : 0;
    loadAdminOrders();
    const newCount = Array.isArray(adminOrders) ? adminOrders.length : 0;

    // Trigger audio chime and live visual banner when order count increases or order placed
    if (newCount > prevCount || (e.newValue && (!e.oldValue || e.newValue.length > e.oldValue.length))) {
      playOrderNotificationChime();
      const latest = Array.isArray(adminOrders) && adminOrders.length > 0 ? adminOrders[0] : null;
      showLiveOrderAlertBanner(latest);
      showToast("🔔 មានការកុម្ម៉ង់ថ្មីចូលមកដល់!", "amber");
    }
  }
  if (e.key === STORAGE_KEY) {
    loadProducts();
  }
  if (e.key === THEME_STORAGE_KEY) {
    updateAdminThemeHeader();
    updateThemeModalUI();
  }
  if (e.key === SHIPPING_STORAGE_KEY) {
    updateAdminShippingQuickBadge();
  }
  if (e.key === PROMO_BANNER_STORAGE_KEY) {
    updateAdminPromoTagBadge();
  }
  if (e.key === 'edushop_bulk_discount_settings') {
    if (typeof updateAdminBulkDiscountBadge === 'function') updateAdminBulkDiscountBadge();
  }
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeInvoiceModal();
    closeCreateInvoiceModal();
    closeThemeModal();
    if (typeof closeShippingSettingsModal === 'function') closeShippingSettingsModal();
    if (typeof closeShippingLabelModal === 'function') closeShippingLabelModal();
    if (typeof closeTelegramSettingsModal === 'function') closeTelegramSettingsModal();
    if (typeof closeProductQrModal === 'function') closeProductQrModal();
    if (typeof closeAdminCatalogueModal === 'function') closeAdminCatalogueModal();
    if (typeof closeAdminQuotationModal === 'function') closeAdminQuotationModal();
    if (typeof closeSlipModal === 'function') closeSlipModal();
    if (typeof closeProductModal === 'function') closeProductModal();
    if (typeof closeAdminPromoBannerModal === 'function') closeAdminPromoBannerModal();
    if (typeof closeAdminBulkDiscountModal === 'function') closeAdminBulkDiscountModal();
    const previewModal = document.getElementById('admin-image-preview-modal');
    if (previewModal) previewModal.classList.add('hidden');
  }
});

// =========================================================================
// SHIPPING WAYBILL PARCEL LABEL GENERATOR (ស្លាកដឹកជញ្ជូន 10x10cm / A6)
// =========================================================================

let currentShippingLabelOrderId = null;
let currentShippingLabelFormat = '10x10';

function setShippingLabelFormat(format) {
  currentShippingLabelFormat = format || '10x10';
  const waybillEl = document.querySelector('.shipping-waybill');
  const btn10 = document.getElementById('btn-label-size-10x10');
  const btn15 = document.getElementById('btn-label-size-10x15');
  const btnA6 = document.getElementById('btn-label-size-a6');

  const inactiveCls = 'px-2 py-0.5 rounded-lg text-[11px] font-semibold text-slate-600 hover:text-slate-900 transition cursor-pointer';
  const activeCls = 'px-2 py-0.5 rounded-lg text-[11px] font-bold bg-emerald-700 text-white shadow-2xs transition cursor-pointer';

  if (btn10) btn10.className = format === '10x10' ? activeCls : inactiveCls;
  if (btn15) btn15.className = format === '10x15' ? activeCls : inactiveCls;
  if (btnA6) btnA6.className = format === 'a6' ? activeCls : inactiveCls;

  if (waybillEl) {
    if (format === '10x15') {
      waybillEl.style.maxWidth = '420px';
      waybillEl.style.minHeight = '560px';
    } else if (format === 'a6') {
      waybillEl.style.maxWidth = '460px';
      waybillEl.style.minHeight = 'auto';
    } else {
      waybillEl.style.maxWidth = '380px';
      waybillEl.style.minHeight = 'auto';
    }
  }

  const modal = document.getElementById('shipping-label-modal');
  if (modal) {
    modal.classList.toggle('label-size-10x15', format === '10x15');
    modal.classList.toggle('label-size-a6', format === 'a6');
  }
  document.body.classList.toggle('label-size-10x15', format === '10x15');
  document.body.classList.toggle('label-size-a6', format === 'a6');
}

function copyShippingLabelText() {
  if (!currentShippingLabelOrderId) return;
  const order = adminOrders.find(o => o.id === currentShippingLabelOrderId);
  if (!order) return;

  const courierName = order.courierName || 'វីរៈប៊ុនថាំ (VET Express)';
  const waybillCode = order.waybillNo || order.trackingNumber || order.id || 'N/A';
  const totalQty = (order.items || []).reduce((s, i) => s + (parseInt(i.qty, 10) || 1), 0);
  const payableUSD = Number(order.payableUSD || order.totalUSD || 0).toFixed(2);
  const payableKHR = (order.payableKHR || Math.round(Number(payableUSD) * 4100)).toLocaleString();
  const isPaid = (order.paymentStatus === 'paid' || order.status === 'completed' || 
    (order.paymentMethod && !order.paymentMethod.toUpperCase().includes('COD') && order.paymentStatus !== 'unpaid' && order.paymentStatus !== 'pending_cod'));
  const codText = isPaid ? '✅ បានទូទាត់រួចរាល់ 100% (មិនបាច់ប្រមូលប្រាក់)' : `⚠️ ប្រមូលប្រាក់ (COD): $${payableUSD} (${payableKHR} ៛)`;

  const text = `🏷️ ស្លាកដឹកជញ្ជូនបញ្ញើ EduShop (Waybill #${waybillCode})\n` +
    `-----------------------------------------\n` +
    `👤 អ្នកទទួល៖ ${order.customerName || '-'}\n` +
    `📞 ទូរស័ព្ទ៖ ${order.customerPhone || '-'}\n` +
    (order.schoolName ? `🏫 សាលារៀន/ស្ថាប័ន៖ ${order.schoolName}\n` : '') +
    `📍 អាសយដ្ឋាន៖ ${order.customerAddress || '-'}\n` +
    (order.customerNote ? `📝 ចំណាំ៖ ${order.customerNote}\n` : '') +
    (order.customText ? `✍️ ឈ្មោះលើផ្ទាំង៖ ${order.customText}\n` : '') +
    `-----------------------------------------\n` +
    `🚚 ក្រុមហ៊ុនដឹក៖ ${courierName}\n` +
    `📦 ចំនួនទំនិញ៖ ${totalQty} ចំនួន\n` +
    `💰 ស្ថានភាពប្រាក់៖ ${codText}\n` +
    `-----------------------------------------\n` +
    `📤 អ្នកផ្ញើ៖ EduShop Cambodia (031 97 11 333 (ម្ចាស់ហាង) / 096 436 1201 / 069 490 108)`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("📋 បានចម្លងព័ត៌មានដឹកជញ្ជូនជោគជ័យ!", "emerald");
    }).catch(() => {
      showToast("មិនអាចចម្លងបានទេ", "amber");
    });
  }
}

function openShippingLabelModal(orderId) {
  const cleanTargetId = String(orderId || '').replace(/^#/, '').trim();
  const order = adminOrders.find(o => String(o.id || '').replace(/^#/, '').trim() === cleanTargetId);

  if (!order) {
    showToast("រកមិនឃើញការបញ្ជាទិញនេះទេ!", "rose");
    return;
  }

  currentShippingLabelOrderId = order.id;

  const modal = document.getElementById('shipping-label-modal');
  const printArea = document.getElementById('shipping-label-printable-area');

  if (printArea) {
    const totalQty = (order.items || []).reduce((s, i) => s + (parseInt(i.qty, 10) || 1), 0);
    const itemsSummary = (order.items || []).map(i => {
      const frameTxt = i.frameLabel ? `[${i.frameLabel}] ` : '';
      return `${i.name} ${frameTxt}(x${i.qty || 1})`;
    }).join(' • ');

    const courierName = order.courierName || 'វីរៈប៊ុនថាំ (VET Express)';
    const waybillCode = order.waybillNo || order.trackingNumber || order.id || 'N/A';
    const branchName = order.branch || order.trackingBranch || '';
    const deliveryTypeTxt = (order.deliveryType === 'home') 
      ? '🏠 ដឹកដល់គេហដ្ឋាន / សាលារៀន (Home Delivery)' 
      : (branchName ? `🏢 ទទួលនៅសាខា (${branchName})` : '🏢 ទទួលនៅសាខាបញ្ញើ (Branch Pickup)');

    const isPaid = (order.paymentStatus === 'paid' || order.status === 'completed' || 
      (order.paymentMethod && !order.paymentMethod.toUpperCase().includes('COD') && order.paymentStatus !== 'unpaid' && order.paymentStatus !== 'pending_cod'));
    const payableUSD = Number(order.payableUSD || order.totalUSD || 0).toFixed(2);
    const payableKHR = (order.payableKHR || Math.round(Number(payableUSD) * 4100)).toLocaleString();

    let qrImgHtml = '';
    if (typeof qrcode !== 'undefined') {
      try {
        const qr = qrcode(0, 'M');
        qr.addData(`https://edushop-cambodia.com/index.html?track=${encodeURIComponent(order.id)}`);
        qr.make();
        const qrDataUrl = qr.createDataURL(4, 2);
        qrImgHtml = `<img src="${qrDataUrl}" alt="QR" class="w-14 h-14 object-contain border border-slate-300 rounded-lg p-0.5 bg-white flex-shrink-0" />`;
      } catch (e) {}
    }
    if (!qrImgHtml) {
      qrImgHtml = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=110x110&margin=4&data=${encodeURIComponent('https://edushop-cambodia.com/index.html?track=' + order.id)}" alt="QR" class="w-14 h-14 object-contain border border-slate-300 rounded-lg p-0.5 bg-white flex-shrink-0" />`;
    }

    printArea.innerHTML = `
      <div class="shipping-waybill border-2 border-slate-900 rounded-2xl overflow-hidden bg-white text-slate-900 p-4 sm:p-5 shadow-sm transition-all" style="max-width: 380px;">
        <!-- Top Bar: Logo & Store Info -->
        <div class="flex items-center justify-between border-b-2 border-slate-900 pb-2.5 mb-2.5">
          <div class="flex items-center gap-2">
            <img src="logo.png" alt="EduShop" class="w-9 h-9 object-contain rounded-xl border border-slate-300 p-0.5 bg-white flex-shrink-0" />
            <div>
              <h4 class="font-black text-sm tracking-tight text-slate-900 leading-tight">EduShop Cambodia</h4>
              <p class="text-[9.5px] text-slate-600 font-semibold">សម្ភារៈតុបតែងថ្នាក់ & ជំនួយការបង្រៀន</p>
            </div>
          </div>
          <div class="text-right">
            <span class="inline-block bg-slate-900 text-white text-[11px] font-mono font-black px-2.5 py-0.5 rounded-md">
              #${order.id}
            </span>
            <div class="text-[9.5px] text-slate-500 font-bold mt-0.5">វិក្កយបត្រ #${order.invoiceNo || '0001'}</div>
          </div>
        </div>

        <!-- Courier & Waybill Strip -->
        <div class="bg-slate-900 text-white rounded-xl p-2.5 mb-2.5 flex items-center justify-between gap-2">
          <div class="min-w-0">
            <div class="text-[9px] text-sky-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <span>🚚</span> <span>ក្រុមហ៊ុនដឹកជញ្ជូន (COURIER)</span>
            </div>
            <div class="text-xs sm:text-sm font-black text-white truncate">${courierName}</div>
            <div class="text-[9.5px] text-slate-300 truncate">${deliveryTypeTxt}</div>
          </div>
          <div class="text-right flex-shrink-0">
            <div class="text-[9px] text-amber-300 font-bold uppercase tracking-wider">លេខបញ្ញើ (WAYBILL)</div>
            <div class="text-xs sm:text-sm font-mono font-black text-amber-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">${waybillCode}</div>
          </div>
        </div>

        <!-- Sender Box (អ្នកផ្ញើ) -->
        <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200 mb-2.5 text-xs">
          <div class="text-[9px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1 mb-0.5">
            <span>📤 អ្នកផ្ញើ (SENDER)</span>
          </div>
          <div class="font-black text-slate-900 text-xs">EduShop Cambodia</div>
          <div class="text-slate-700 text-[10.5px] font-semibold mt-0.5">📞 031 97 11 333 (ម្ចាស់ហាង) / 096 436 1201 / 069 490 108</div>
          <div class="text-slate-500 text-[10px] mt-0.5">📍 ភូមិដំបូក១០០ ឃុំត្នោតជុំ ស្រុកក្រគរ ខេត្តពោធិ៍សាត់</div>
        </div>

        <!-- Receiver Box (អ្នកទទួល) - Prominent Highlighted Box -->
        <div class="bg-sky-50/80 p-3 rounded-xl border-2 border-sky-600 mb-2.5 text-xs">
          <div class="text-[10px] font-black text-sky-800 uppercase tracking-wider flex items-center justify-between mb-1 border-b border-sky-200 pb-0.5">
            <span class="flex items-center gap-1"><span>📥</span> <span>អ្នកទទួល (RECEIVER)</span></span>
            <span class="bg-sky-600 text-white text-[9px] px-2 py-0.2 rounded-full font-bold">🚀 ទាន់ចិត្ត</span>
          </div>
          
          <div class="text-base font-black text-slate-900 mb-1 leading-snug">
            ${order.customerName || '-'}
          </div>

          <div class="mb-1.5">
            <span class="font-mono text-sm sm:text-base font-black text-sky-950 bg-sky-200/90 border border-sky-300 px-2 py-0.5 rounded-md inline-flex items-center gap-1">
              <span>📞</span> <span>${order.customerPhone || '-'}</span>
            </span>
          </div>

          ${order.schoolName ? `
            <div class="mb-1.5 text-[11px] text-indigo-950 bg-indigo-50/90 p-1.5 rounded-lg border border-indigo-200">
              <span class="font-bold">🏫 សាលារៀន/ស្ថាប័ន៖</span> <span class="font-black text-indigo-900">${order.schoolName}</span>
            </div>
          ` : ''}

          <div class="text-xs font-bold text-slate-800 leading-snug bg-white/70 p-2 rounded-lg border border-sky-200">
            <span class="text-slate-500 font-semibold block text-[10px]">📍 អាសយដ្ឋានដឹក (Delivery Address)៖</span>
            ${order.customerAddress || '-'}
          </div>

          ${order.customerNote ? `
            <div class="mt-1.5 text-[10.5px] font-semibold text-amber-900 bg-amber-100/90 p-1.5 rounded-lg border border-amber-300">
              📝 ចំណាំ៖ ${order.customerNote}
            </div>
          ` : ''}

          ${order.customText ? `
            <div class="mt-1.5 text-[10.5px] font-semibold text-purple-900 bg-purple-100/90 p-1.5 rounded-lg border border-purple-300">
              ✍️ ឈ្មោះលើផ្ទាំង៖ «${order.customText}»
            </div>
          ` : ''}
        </div>

        <!-- Package Content & Items Summary -->
        <div class="grid grid-cols-2 gap-2 text-xs mb-2.5">
          <div class="p-2 bg-slate-50 rounded-xl border border-slate-200 min-w-0">
            <div class="text-[9px] text-slate-500 font-bold uppercase">📦 មុខទំនិញ (${totalQty} ចំនួន)</div>
            <div class="font-bold text-slate-800 text-[10.5px] line-clamp-2 mt-0.5" title="${itemsSummary}">
              ${itemsSummary || 'សម្ភារៈបង្រៀន'}
            </div>
          </div>
          <div class="p-2 bg-slate-50 rounded-xl border border-slate-200">
            <div class="text-[9px] text-slate-500 font-bold uppercase">🏷️ បញ្ជាទិញ / វិក្កយបត្រ</div>
            <div class="font-mono font-black text-slate-900 text-[10.5px] mt-0.5 truncate">
              #${order.id}
            </div>
          </div>
        </div>

        <!-- Financial Payment / COD Settlement Status -->
        <div class="mb-2.5">
          ${isPaid ? `
            <div class="p-2 bg-emerald-50 rounded-xl border-2 border-emerald-500 text-center">
              <div class="text-xs font-black text-emerald-800 flex items-center justify-center gap-1">
                <span>✅</span> <span>បានទូទាត់ប្រាក់រួចរាល់ 100% (PAID)</span>
              </div>
              <div class="text-[10px] text-emerald-700 font-bold mt-0.5">
                🚫 មិនបាច់ប្រមូលប្រាក់ទេ (DO NOT COLLECT) • ${order.paymentMethod || 'KHQR'} ($${payableUSD})
              </div>
            </div>
          ` : `
            <div class="p-2 bg-amber-50 rounded-xl border-2 border-amber-600 text-center">
              <div class="text-xs font-black text-amber-900 flex items-center justify-center gap-1">
                <span>⚠️</span> <span>ត្រូវប្រមូលប្រាក់ពេលដឹក (COLLECT ON DELIVERY - COD)</span>
              </div>
              <div class="text-sm font-black text-rose-700 font-mono mt-0.5">
                💰 ទឹកប្រាក់ត្រូវប្រមូល៖ $${payableUSD} (${payableKHR} ៛)
              </div>
            </div>
          `}
        </div>

        <!-- Caution Warning Banner -->
        <div class="p-2 bg-rose-50 border border-rose-300 rounded-xl text-center text-rose-800 text-[10.5px] font-bold leading-tight mb-2.5">
          ⚠️ សម្ភារៈបង្រៀន & ផ្ទាំងអ៊ុតស្វិត (ប្រយ័ត្នបាក់បែក ឬត្រូវទឹក! FRAGILE - DO NOT BEND)
        </div>

        <!-- Barcode look, QR Code & Footer -->
        <div class="pt-2 border-t-2 border-dashed border-slate-300 flex items-center justify-between gap-2.5 text-[10px] text-slate-500">
          <div class="flex items-center gap-2">
            ${qrImgHtml}
            <div class="leading-tight">
              <div class="font-mono text-slate-900 font-black text-xs tracking-wider">${waybillCode}</div>
              <div class="text-[9px] text-slate-500">ស្កេនពិនិត្យបញ្ញើ / Scan to Track</div>
              <div class="text-[8.5px] text-slate-400 mt-0.5">កាលបរិច្ឆេទ៖ ${formatDateKh(order.createdAt)}</div>
            </div>
          </div>
          <div class="text-right">
            <div class="font-mono text-[8.5px] text-slate-400">||||||||||||||||||||||</div>
            <div class="text-[9px] font-bold text-slate-700">EduShop Cambodia</div>
            <div class="text-[8.5px] text-slate-500">Hotline: 031 97 11 333 / 096 436 1201</div>
          </div>
        </div>
      </div>
    `;

    setShippingLabelFormat(currentShippingLabelFormat);
  }

  if (modal) modal.classList.remove('hidden');
}

function closeShippingLabelModal() {
  const modal = document.getElementById('shipping-label-modal');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('printing-waybill', 'label-size-10x15', 'label-size-a6');
}

function printShippingLabel(orderId) {
  if (orderId && currentShippingLabelOrderId !== orderId) {
    openShippingLabelModal(orderId);
  }

  const modal = document.getElementById('shipping-label-modal');
  if (modal) modal.classList.remove('hidden');

  document.body.classList.add('printing-waybill');
  if (currentShippingLabelFormat === '10x15') {
    document.body.classList.add('label-size-10x15');
    document.body.classList.remove('label-size-a6');
  } else if (currentShippingLabelFormat === 'a6') {
    document.body.classList.add('label-size-a6');
    document.body.classList.remove('label-size-10x15');
  } else {
    document.body.classList.remove('label-size-10x15');
    document.body.classList.remove('label-size-a6');
  }

  // Allow styles and QR codes to render cleanly before triggering print preview
  setTimeout(() => {
    window.print();
  }, 100);
}

function openShippingLabelPrintWindow() {
  const printArea = document.getElementById('shipping-label-printable-area');
  if (!printArea || !printArea.innerHTML.trim()) {
    showToast("សូមជ្រើសរើសការបញ្ជាទិញជាមុនសិន!", "rose");
    return;
  }

  const printWindow = window.open('', '_blank', 'width=460,height=680');
  if (!printWindow) {
    // If popup blocked, seamlessly trigger in-page print
    printShippingLabel();
    return;
  }

  const formatClass = currentShippingLabelFormat === '10x15' ? 'label-size-10x15' : (currentShippingLabelFormat === 'a6' ? 'label-size-a6' : '');
  const waybillHtml = printArea.innerHTML;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="km">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Shipping Waybill Label - EduShop Cambodia</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;600;700;800;900&display=swap" rel="stylesheet">
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="style.css">
      <style>
        @page { margin: 0.4cm; size: auto; }
        body { margin: 0; padding: 12px; background: #f8fafc; font-family: 'Kantumruy Pro', sans-serif; display: flex; justify-content: center; }
        .shipping-waybill { width: 100% !important; max-width: 100mm !important; margin: 0 auto !important; background: #fff !important; }
        .label-size-10x15 .shipping-waybill { max-width: 100mm !important; min-height: 145mm !important; }
        .label-size-a6 .shipping-waybill { max-width: 140mm !important; }
        @media print {
          body { padding: 0 !important; background: #fff !important; }
          .no-print { display: none !important; }
        }
      </style>
    </head>
    <body class="${formatClass}">
      <div style="width: 100%; max-width: 440px;">
        <div class="no-print" style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; background: white; padding: 8px 12px; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <span style="font-size: 12px; font-weight: bold; color: #047857;">🏷️ ស្លាកបញ្ញើ (Waybill Preview)</span>
          <div style="display: flex; gap: 8px;">
            <button onclick="window.print()" style="padding: 6px 14px; background: #059669; color: white; border-radius: 8px; font-weight: bold; font-size: 12px; border: none; cursor: pointer;">🖨️ បោះពុម្ព (Print)</button>
            <button onclick="window.close()" style="padding: 6px 14px; background: #f1f5f9; color: #475569; border-radius: 8px; font-weight: bold; font-size: 12px; border: 1px solid #cbd5e1; cursor: pointer;">បិទ</button>
          </div>
        </div>
        ${waybillHtml}
      </div>
      <script>
        window.addEventListener('load', () => {
          setTimeout(() => { window.print(); }, 250);
        });
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

if (typeof window !== 'undefined') {
  window.openShippingLabelModal = openShippingLabelModal;
  window.closeShippingLabelModal = closeShippingLabelModal;
  window.printShippingLabel = printShippingLabel;
  window.openShippingLabelPrintWindow = openShippingLabelPrintWindow;
  window.setShippingLabelFormat = setShippingLabelFormat;
  window.copyShippingLabelText = copyShippingLabelText;
  window.openAdminItemImagePreview = openAdminItemImagePreview;
  window.getOrderItemImage = getOrderItemImage;
}

// =========================================================================
// SECTION 5: USER STOREFRONT THEME & BACKGROUND MANAGER (គ្រប់គ្រងផ្ទៃ BACKGROUND)
// =========================================================================

const THEME_STORAGE_KEY = 'edushop_active_theme';
const CURRENT_THEME_VER = 'edushop_theme_ver_khmer_flagship_v1';

/**
 * Get current active theme ('khmer' | 'school' | 'vacation')
 */
function getCurrentTheme() {
  if (!localStorage.getItem(CURRENT_THEME_VER)) {
    localStorage.setItem(THEME_STORAGE_KEY, 'khmer');
    localStorage.setItem(CURRENT_THEME_VER, 'true');
  }
  return localStorage.getItem(THEME_STORAGE_KEY) || 'khmer';
}

/**
 * Open Theme Selector Modal in Admin
 */
function openThemeModal() {
  const modal = document.getElementById('admin-theme-modal');
  if (!modal) return;
  updateThemeModalUI();
  modal.classList.remove('hidden');
}

/**
 * Close Theme Selector Modal
 */
function closeThemeModal() {
  const modal = document.getElementById('admin-theme-modal');
  if (modal) modal.classList.add('hidden');
}

/**
 * Select and activate a background theme
 * @param {'khmer' | 'school' | 'vacation'} themeKey 
 */
function selectTheme(themeKey) {
  if (themeKey !== 'khmer' && themeKey !== 'school' && themeKey !== 'vacation') return;
  localStorage.setItem(THEME_STORAGE_KEY, themeKey);
  updateAdminThemeHeader();
  updateThemeModalUI();

  let themeTitle = 'ទី១. ខ្មែរ-អង្គរ & ធម្មជាតិ (Khmer Heritage & Nature)';
  if (themeKey === 'school') themeTitle = 'ទី២. រដូវកាលសិក្សា (School Season)';
  if (themeKey === 'vacation') themeTitle = 'ទី៣. រដូវកាលវិស្សមកាល & តុបតែងថ្នាក់/អនឡាញ (Vacation & Decor/Online)';

  showToast(`🎉 បានប្តូរផ្ទៃ Background របស់ User ទៅជា «${themeTitle}» ដោយជោគជ័យ!`);
}

/**
 * Update theme status indicator badge in top admin navbar
 */
function updateAdminThemeHeader() {
  const label = document.getElementById('admin-current-theme-label');
  if (!label) return;
  const current = getCurrentTheme();
  if (current === 'khmer') {
    label.className = 'bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-md font-bold text-[11px] border border-amber-400/30';
    label.innerHTML = '🪷 ខ្មែរ-អង្គរ & ធម្មជាតិ';
  } else if (current === 'vacation') {
    label.className = 'bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-md font-bold text-[11px] border border-amber-400/30';
    label.innerHTML = '🎨 តុបតែងថ្នាក់ & អនឡាញ';
  } else {
    label.className = 'bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-md font-bold text-[11px] border border-sky-400/30';
    label.innerHTML = '📚 រដូវកាលសិក្សា';
  }
}

/**
 * Update UI cards inside the Admin Theme Modal according to current active theme
 */
function updateThemeModalUI() {
  const current = getCurrentTheme();

  const cardKhmer = document.getElementById('theme-card-khmer');
  const cardSchool = document.getElementById('theme-card-school');
  const cardVacation = document.getElementById('theme-card-vacation');
  const badgeKhmer = document.getElementById('theme-active-badge-khmer');
  const badgeSchool = document.getElementById('theme-active-badge-school');
  const badgeVacation = document.getElementById('theme-active-badge-vacation');

  // Khmer Heritage & Nature card
  if (cardKhmer && badgeKhmer) {
    const btn = cardKhmer.querySelector('.btn-theme-apply');
    if (current === 'khmer') {
      cardKhmer.className = 'group relative rounded-2xl border-2 border-amber-600 bg-amber-50/40 shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeKhmer.classList.remove('hidden');
      if (btn) {
        btn.className = 'w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-amber-600 text-white cursor-default btn-theme-apply shadow-xs';
        btn.innerHTML = '<span>✓ កំពុងប្រើប្រាស់</span>';
      }
    } else {
      cardKhmer.className = 'group relative rounded-2xl border-2 border-slate-200 hover:border-amber-300 bg-white hover:shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeKhmer.classList.add('hidden');
      if (btn) {
        btn.className = 'w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-700 btn-theme-apply';
        btn.innerHTML = '<span>ជ្រើសរើសប្រើប្រាស់</span>';
      }
    }
  }

  // School Season card
  if (cardSchool && badgeSchool) {
    const btn = cardSchool.querySelector('.btn-theme-apply');
    if (current === 'school') {
      cardSchool.className = 'group relative rounded-2xl border-2 border-sky-600 bg-sky-50/40 shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeSchool.classList.remove('hidden');
      if (btn) {
        btn.className = 'w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-sky-600 text-white cursor-default btn-theme-apply shadow-xs';
        btn.innerHTML = '<span>✓ កំពុងប្រើប្រាស់</span>';
      }
    } else {
      cardSchool.className = 'group relative rounded-2xl border-2 border-slate-200 hover:border-sky-300 bg-white hover:shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeSchool.classList.add('hidden');
      if (btn) {
        btn.className = 'w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-700 btn-theme-apply';
        btn.innerHTML = '<span>ជ្រើសរើសប្រើប្រាស់</span>';
      }
    }
  }

  // Vacation Season card
  if (cardVacation && badgeVacation) {
    const btn = cardVacation.querySelector('.btn-theme-apply');
    if (current === 'vacation') {
      cardVacation.className = 'group relative rounded-2xl border-2 border-amber-600 bg-amber-50/40 shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeVacation.classList.remove('hidden');
      if (btn) {
        btn.className = 'w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-amber-600 text-white cursor-default btn-theme-apply shadow-xs';
        btn.innerHTML = '<span>✓ កំពុងប្រើប្រាស់</span>';
      }
    } else {
      cardVacation.className = 'group relative rounded-2xl border-2 border-slate-200 hover:border-amber-300 bg-white hover:shadow-md p-4 cursor-pointer transition-all flex flex-col justify-between space-y-3';
      badgeVacation.classList.add('hidden');
      if (btn) {
        btn.className = 'w-full py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-700 btn-theme-apply';
        btn.innerHTML = '<span>ជ្រើសរើសប្រើប្រាស់</span>';
      }
    }
  }
}

// =========================================================================
// SECTION 5.5: PROMO / ADVERTISEMENT BANNER CUSTOMIZER (កែប្រែផ្ទាំងពាណិជ្ជកម្ម)
// =========================================================================

const PROMO_BANNER_STORAGE_KEY = 'edushop_promo_banner_settings';

const DEFAULT_PROMO_BANNER_SETTINGS = {
  tag: '🎒 បវេសនកាល',
  badge: '🎒 បវេសនកាលសិក្សាថ្មី | បរិយាកាសបង្រៀន និងរៀនក្នុងថ្នាក់រៀន',
  heading: 'សម្ភារៈតុបតែងថ្នាក់ & ជំនួយការបង្រៀនគ្រូ-សិស្ស',
  subtitle: 'បង្កើនប្រសិទ្ធភាពនៃការបង្រៀន និងរៀនក្នុងថ្នាក់ ជាមួយផ្ទាំងរូបភាពអប់រំ បណ្ណពាក្យ និងឧបករណ៍បង្រៀនគុណភាពខ្ពស់ ជួយសិស្សឆាប់យល់ និងស្រឡាញ់ការសិក្សា។',
  marqueeText: '🎒 ស្វាគមន៍បវេសនកាលសិក្សាថ្មី! 📚 សម្ភារៈបង្រៀន & តុបតែងថ្នាក់រៀនគុណភាពខ្ពស់ | 🚚 ផ្ញើជូន <strong>២៥ ខេត្ត-ក្រុង</strong> | 🎁 កម្ម៉ង់ចាប់ពី <strong>១០ ផ្ទាំង</strong> ឡើងទៅ មានតម្លៃពិសេស!',
  couponCode: 'EDUSHOP10',
  contactPhone: '031 97 11 333 (ម្ចាស់ហាង) / 096 436 1201'
};

const PROMO_BANNER_PRESETS = {
  school: {
    tag: '🎒 បវេសនកាល',
    badge: '🎒 បវេសនកាលសិក្សាថ្មី | បរិយាកាសបង្រៀន និងរៀនក្នុងថ្នាក់រៀន',
    heading: 'សម្ភារៈតុបតែងថ្នាក់ & ជំនួយការបង្រៀនគ្រូ-សិស្ស',
    subtitle: 'បង្កើនប្រសិទ្ធភាពនៃការបង្រៀន និងរៀនក្នុងថ្នាក់ ជាមួយផ្ទាំងរូបភាពអប់រំ បណ្ណពាក្យ និងឧបករណ៍បង្រៀនគុណភាពខ្ពស់ ជួយសិស្សឆាប់យល់ និងស្រឡាញ់ការសិក្សា។',
    marqueeText: '🎒 ស្វាគមន៍បវេសនកាលសិក្សាថ្មី! 📚 សម្ភារៈបង្រៀន & តុបតែងថ្នាក់រៀនគុណភាពខ្ពស់ | 🚚 ផ្ញើជូន <strong>២៥ ខេត្ត-ក្រុង</strong> | 🎁 កម្ម៉ង់ចាប់ពី <strong>១០ ផ្ទាំង</strong> ឡើងទៅ មានតម្លៃពិសេស!',
    couponCode: 'EDUSHOP10',
    contactPhone: '031 97 11 333 (ម្ចាស់ហាង) / 096 436 1201'
  },
  khmer: {
    tag: '🪷 មោទនភាពខ្មែរ',
    badge: '🪷 អរិយធម៌អង្គរ & ការអប់រំខ្មែរជំនាន់ថ្មី | ធម្មជាតិ និងប្រាជ្ញា',
    heading: 'សម្ភារៈតុបតែងថ្នាក់ & សម្ភារៈបង្រៀនបែបខ្មែរ',
    subtitle: 'លើកកម្ពស់សោភ័ណភាពថ្នាក់រៀន និងបណ្តុះស្មារតីសិស្សានុសិស្ស តាមរយៈផ្ទាំងរូបភាពអប់រំ ប្រាសាទបុរាណ ធម្មជាតិស្រស់បំព្រង ផ្កាឈូក និងល្បែងសិក្សាសម្បូរបែប។',
    marqueeText: '🪷 មោទនភាពកម្ពុជា | 📚 ផ្ទាំងអប់រំបែបខ្មែរ & សម្ភារៈបង្រៀនគុណភាពខ្ពស់ | 🚚 ផ្ញើជូន <strong>២៥ ខេត្ត-ក្រុង</strong> | 🎁 កម្ម៉ង់ចាប់ពី <strong>១០ ផ្ទាំង</strong> ឡើងទៅ មានតម្លៃពិសេស!',
    couponCode: 'EDUSHOP10',
    contactPhone: '031 97 11 333 (ម្ចាស់ហាង) / 096 436 1201'
  },
  vacation: {
    tag: '🎨 វិស្សមកាល',
    badge: '🎨 រដូវកាលវិស្សមកាល | តុបតែងថ្នាក់រៀន & សិក្សាពីចម្ងាយ (Online Learning)',
    heading: 'តុបតែងថ្នាក់រៀន & ការសិក្សាពីចម្ងាយបែបទំនើប',
    subtitle: 'ត្រៀមស្វាគមន៍ឆ្នាំសិក្សាថ្មីដោយការច្នៃប្រឌិតតុបតែងថ្នាក់រៀន ផ្ទាំងបដាស្វាគមន៍ បណ្ណពាក្យ និងការបង្រៀន-រៀនពីចម្ងាយតាមអនឡាញប្រកបដោយភាពស្និទ្ធស្នាលរវាងគ្រូ និងសិស្ស។',
    marqueeText: '🎨 រដូវកាលវិស្សមកាល! ✂️ តុបតែងថ្នាក់រៀន & 💻 សិក្សាពីចម្ងាយ (Online Learning) | 🚚 ផ្ញើជូន <strong>២៥ ខេត្ត-ក្រុង</strong> | 🎁 កម្ម៉ង់ចាប់ពី <strong>១០ ផ្ទាំង</strong> ឡើងទៅ មានតម្លៃពិសេស!',
    couponCode: 'EDUSHOP10',
    contactPhone: '031 97 11 333 (ម្ចាស់ហាង) / 096 436 1201'
  },
  special: {
    tag: '🔥 ប្រូម៉ូសិនពិសេស',
    badge: '🔥 មហាប្រូម៉ូសិនប្រចាំខែ | បញ្ចុះតម្លៃពិសេសជូនសាលារៀន និងលោកគ្រូ-អ្នកគ្រូ',
    heading: 'ប្រូម៉ូសិនសម្ភារៈតុបតែងថ្នាក់ & សម្ភារៈបង្រៀនតម្លៃពិសេស',
    subtitle: 'បញ្ចុះតម្លៃរហូតដល់ 15% សម្រាប់ការទិញច្រើនផ្ទាំង ថែមជូនឆ្លាក់ឈ្មោះសាលា និងដឹកជញ្ជូនរហ័សទូទាំង ២៥ ខេត្ត-ក្រុង!',
    marqueeText: '🔥 មហាប្រូម៉ូសិនពិសេស! 🎟️ ប្រើកូដ <strong>EDUSHOP10</strong> បញ្ចុះតម្លៃ <strong>10%</strong> | 🚚 ផ្ញើជូន <strong>២៥ ខេត្ត-ក្រុង</strong> | ✍️ ឆ្លាក់ឈ្មោះសាលា Free!',
    couponCode: 'EDUSHOP10',
    contactPhone: '031 97 11 333 (ម្ចាស់ហាង) / 096 436 1201'
  }
};

/**
 * Retrieve current Promo Banner settings from localStorage or fallback
 */
function getPromoBannerSettings() {
  try {
    const raw = localStorage.getItem(PROMO_BANNER_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return Object.assign({}, DEFAULT_PROMO_BANNER_SETTINGS, parsed);
      }
    }
  } catch (err) {
    console.warn('Error parsing promo banner settings:', err);
  }
  return Object.assign({}, DEFAULT_PROMO_BANNER_SETTINGS);
}

/**
 * Update the tag badge in the admin sidebar navigation
 */
function updateAdminPromoTagBadge() {
  const badge = document.getElementById('admin-current-promo-tag-badge');
  if (!badge) return;
  const settings = getPromoBannerSettings();
  badge.textContent = settings.tag || '🎒 បវេសនកាល';
}

/**
 * Open the Promo Banner modal in Admin
 */
function openAdminPromoBannerModal() {
  const modal = document.getElementById('admin-promo-banner-modal');
  if (!modal) return;

  const settings = getPromoBannerSettings();
  const inputTag = document.getElementById('promo-input-tag');
  const inputBadge = document.getElementById('promo-input-badge');
  const inputHeading = document.getElementById('promo-input-heading');
  const inputSubtitle = document.getElementById('promo-input-subtitle');
  const inputMarquee = document.getElementById('promo-input-marquee');
  const inputCoupon = document.getElementById('promo-input-coupon');
  const inputPhone = document.getElementById('promo-input-phone');

  if (inputTag) inputTag.value = settings.tag || '';
  if (inputBadge) inputBadge.value = settings.badge || '';
  if (inputHeading) inputHeading.value = settings.heading || '';
  if (inputSubtitle) inputSubtitle.value = settings.subtitle || '';
  if (inputMarquee) inputMarquee.value = settings.marqueeText || '';
  if (inputCoupon) inputCoupon.value = settings.couponCode || '';
  if (inputPhone) inputPhone.value = settings.contactPhone || '';

  updatePromoLivePreview();
  modal.classList.remove('hidden');
}

/**
 * Close the Promo Banner modal in Admin
 */
function closeAdminPromoBannerModal() {
  const modal = document.getElementById('admin-promo-banner-modal');
  if (modal) modal.classList.add('hidden');
}

/**
 * Update the live preview card in the Promo Banner modal
 */
function updatePromoLivePreview() {
  const tagVal = document.getElementById('promo-input-tag')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.tag;
  const badgeVal = document.getElementById('promo-input-badge')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.badge;
  const headingVal = document.getElementById('promo-input-heading')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.heading;
  const subtitleVal = document.getElementById('promo-input-subtitle')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.subtitle;
  const marqueeVal = document.getElementById('promo-input-marquee')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.marqueeText;
  const couponVal = document.getElementById('promo-input-coupon')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.couponCode;
  const phoneVal = document.getElementById('promo-input-phone')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.contactPhone;

  const previewTag = document.getElementById('preview-promo-tag');
  const previewMarquee = document.getElementById('preview-promo-marquee');
  const previewBadge = document.getElementById('preview-promo-badge');
  const previewHeading = document.getElementById('preview-promo-heading');
  const previewSubtitle = document.getElementById('preview-promo-subtitle');
  const previewCoupon = document.getElementById('preview-promo-coupon-badge');
  const previewPhone = document.getElementById('preview-promo-phone-badge');

  if (previewTag) previewTag.textContent = tagVal;
  if (previewMarquee) previewMarquee.innerHTML = marqueeVal;
  if (previewBadge) previewBadge.textContent = badgeVal;
  if (previewHeading) {
    previewHeading.innerHTML = `<span class="text-amber-300">EduShop</span> - ${escapeBatchHtml(headingVal)}`;
  }
  if (previewSubtitle) previewSubtitle.textContent = subtitleVal;
  if (previewCoupon) previewCoupon.textContent = `🎟️ ${couponVal}`;
  if (previewPhone) previewPhone.textContent = `📞 ${phoneVal}`;
}

/**
 * Apply a preset to the input fields and refresh the live preview
 * @param {'school' | 'khmer' | 'vacation' | 'special'} key
 */
function applyPromoPreset(key) {
  const preset = PROMO_BANNER_PRESETS[key];
  if (!preset) return;

  const inputTag = document.getElementById('promo-input-tag');
  const inputBadge = document.getElementById('promo-input-badge');
  const inputHeading = document.getElementById('promo-input-heading');
  const inputSubtitle = document.getElementById('promo-input-subtitle');
  const inputMarquee = document.getElementById('promo-input-marquee');
  const inputCoupon = document.getElementById('promo-input-coupon');
  const inputPhone = document.getElementById('promo-input-phone');

  if (inputTag) inputTag.value = preset.tag;
  if (inputBadge) inputBadge.value = preset.badge;
  if (inputHeading) inputHeading.value = preset.heading;
  if (inputSubtitle) inputSubtitle.value = preset.subtitle;
  if (inputMarquee) inputMarquee.value = preset.marqueeText;
  if (inputCoupon) inputCoupon.value = preset.couponCode;
  if (inputPhone) inputPhone.value = preset.contactPhone;

  updatePromoLivePreview();
  showToast(`⚡ បានជ្រើសរើសគំរូ «${preset.tag}»`);
}

/**
 * Save Promo Banner settings to localStorage and notify UI
 */
function handleSavePromoBanner(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  const tag = document.getElementById('promo-input-tag')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.tag;
  const badge = document.getElementById('promo-input-badge')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.badge;
  const heading = document.getElementById('promo-input-heading')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.heading;
  const subtitle = document.getElementById('promo-input-subtitle')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.subtitle;
  const marqueeText = document.getElementById('promo-input-marquee')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.marqueeText;
  const couponCode = document.getElementById('promo-input-coupon')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.couponCode;
  const contactPhone = document.getElementById('promo-input-phone')?.value?.trim() || DEFAULT_PROMO_BANNER_SETTINGS.contactPhone;

  const settings = {
    tag,
    badge,
    heading,
    subtitle,
    marqueeText,
    couponCode,
    contactPhone,
    updatedAt: new Date().toISOString()
  };

  try {
    localStorage.setItem(PROMO_BANNER_STORAGE_KEY, JSON.stringify(settings));
  } catch (err) {
    console.error('Error saving promo banner settings:', err);
    alert('មិនអាចរក្សាទុកបានទេ សូមពិនិត្យទំហំផ្ទុក Storage របស់ Browser');
    return;
  }

  updateAdminPromoTagBadge();
  closeAdminPromoBannerModal();
  showToast('🎉 បានរក្សាទុក និងផ្សាយពាណិជ្ជកម្មលើគេហទំព័រដោយជោគជ័យ!');
}

/**
 * Reset Promo Banner settings to factory defaults
 */
function resetPromoBannerToDefault() {
  if (!confirm('តើអ្នកពិតជាចង់កំណត់ខ្លឹមសារផ្ទាំងពាណិជ្ជកម្មទៅជាទម្រង់ដើមវិញមែនទេ?')) return;

  try {
    localStorage.removeItem(PROMO_BANNER_STORAGE_KEY);
  } catch (err) {
    console.warn(err);
  }

  const inputTag = document.getElementById('promo-input-tag');
  const inputBadge = document.getElementById('promo-input-badge');
  const inputHeading = document.getElementById('promo-input-heading');
  const inputSubtitle = document.getElementById('promo-input-subtitle');
  const inputMarquee = document.getElementById('promo-input-marquee');
  const inputCoupon = document.getElementById('promo-input-coupon');
  const inputPhone = document.getElementById('promo-input-phone');

  if (inputTag) inputTag.value = DEFAULT_PROMO_BANNER_SETTINGS.tag;
  if (inputBadge) inputBadge.value = DEFAULT_PROMO_BANNER_SETTINGS.badge;
  if (inputHeading) inputHeading.value = DEFAULT_PROMO_BANNER_SETTINGS.heading;
  if (inputSubtitle) inputSubtitle.value = DEFAULT_PROMO_BANNER_SETTINGS.subtitle;
  if (inputMarquee) inputMarquee.value = DEFAULT_PROMO_BANNER_SETTINGS.marqueeText;
  if (inputCoupon) inputCoupon.value = DEFAULT_PROMO_BANNER_SETTINGS.couponCode;
  if (inputPhone) inputPhone.value = DEFAULT_PROMO_BANNER_SETTINGS.contactPhone;

  updatePromoLivePreview();
  updateAdminPromoTagBadge();
  showToast('🔄 បានកំណត់ខ្លឹមសារផ្ទាំងពាណិជ្ជកម្មទៅដើមវិញ!');
}

// =========================================================================
// SECTION 5.5: BULK / WHOLESALE TIER DISCOUNTS MANAGEMENT ENGINE
// (ប្រព័ន្ធបញ្ចុះតម្លៃស្វ័យប្រវត្តិតាមចំនួនទិញ)
// =========================================================================

const BULK_DISCOUNT_STORAGE_KEY = 'edushop_bulk_discount_settings';

const DEFAULT_BULK_DISCOUNT_SETTINGS = {
  enabled: true,
  badgeTitle: 'ប្រព័ន្ធបញ្ចុះតម្លៃទិញដុំសាលា',
  tier1: {
    minUnits: 5,
    percent: 5,
    label: 'កម្រិតទិញដុំដំបូង (បញ្ចុះ 5%)'
  },
  tier2: {
    minUnits: 10,
    percent: 10,
    label: 'កម្រិតទិញដុំមធ្យម (បញ្ចុះ 10%)'
  },
  tier3: {
    minUnits: 20,
    percent: 15,
    label: 'កម្រិត VIP សាលារៀន (បញ្ចុះ 15%)'
  }
};

function getBulkDiscountSettings() {
  try {
    const raw = localStorage.getItem(BULK_DISCOUNT_STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_BULK_DISCOUNT_SETTINGS));
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return JSON.parse(JSON.stringify(DEFAULT_BULK_DISCOUNT_SETTINGS));
    return {
      enabled: parsed.enabled !== false,
      badgeTitle: parsed.badgeTitle || DEFAULT_BULK_DISCOUNT_SETTINGS.badgeTitle,
      tier1: {
        minUnits: Math.max(1, parseInt(parsed.tier1?.minUnits, 10) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier1.minUnits),
        percent: Math.max(0, parseFloat(parsed.tier1?.percent) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier1.percent),
        label: parsed.tier1?.label || DEFAULT_BULK_DISCOUNT_SETTINGS.tier1.label
      },
      tier2: {
        minUnits: Math.max(1, parseInt(parsed.tier2?.minUnits, 10) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier2.minUnits),
        percent: Math.max(0, parseFloat(parsed.tier2?.percent) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier2.percent),
        label: parsed.tier2?.label || DEFAULT_BULK_DISCOUNT_SETTINGS.tier2.label
      },
      tier3: {
        minUnits: Math.max(1, parseInt(parsed.tier3?.minUnits, 10) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier3.minUnits),
        percent: Math.max(0, parseFloat(parsed.tier3?.percent) || DEFAULT_BULK_DISCOUNT_SETTINGS.tier3.percent),
        label: parsed.tier3?.label || DEFAULT_BULK_DISCOUNT_SETTINGS.tier3.label
      }
    };
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULT_BULK_DISCOUNT_SETTINGS));
  }
}

function updateAdminBulkDiscountBadge() {
  const badge = document.getElementById('admin-bulk-discount-badge');
  if (!badge) return;
  const cfg = getBulkDiscountSettings();
  if (!cfg.enabled) {
    badge.textContent = '⛔ បានបិទ';
    badge.className = 'bg-rose-900/60 text-rose-300 border border-rose-700/40 px-2 py-0.5 rounded font-bold text-[10px] truncate max-w-[125px]';
  } else {
    badge.textContent = `${toKhmerNum(cfg.tier1.minUnits)}-${toKhmerNum(cfg.tier2.minUnits)}-${toKhmerNum(cfg.tier3.minUnits)} ផ្ទាំង`;
    badge.className = 'bg-emerald-500 text-white px-2 py-0.5 rounded-md font-bold text-[10px] truncate max-w-[125px]';
  }
}

function openAdminBulkDiscountModal() {
  const modal = document.getElementById('admin-bulk-discount-modal');
  if (!modal) return;
  const cfg = getBulkDiscountSettings();

  const toggle = document.getElementById('bulk-enable-toggle');
  if (toggle) toggle.checked = cfg.enabled !== false;

  const t1Units = document.getElementById('bulk-tier1-units');
  const t1Pct = document.getElementById('bulk-tier1-percent');
  const t1Lbl = document.getElementById('bulk-tier1-label');

  const t2Units = document.getElementById('bulk-tier2-units');
  const t2Pct = document.getElementById('bulk-tier2-percent');
  const t2Lbl = document.getElementById('bulk-tier2-label');

  const t3Units = document.getElementById('bulk-tier3-units');
  const t3Pct = document.getElementById('bulk-tier3-percent');
  const t3Lbl = document.getElementById('bulk-tier3-label');

  const badgeTitle = document.getElementById('bulk-badge-title');

  if (t1Units) t1Units.value = cfg.tier1.minUnits;
  if (t1Pct) t1Pct.value = cfg.tier1.percent;
  if (t1Lbl) t1Lbl.value = cfg.tier1.label;

  if (t2Units) t2Units.value = cfg.tier2.minUnits;
  if (t2Pct) t2Pct.value = cfg.tier2.percent;
  if (t2Lbl) t2Lbl.value = cfg.tier2.label;

  if (t3Units) t3Units.value = cfg.tier3.minUnits;
  if (t3Pct) t3Pct.value = cfg.tier3.percent;
  if (t3Lbl) t3Lbl.value = cfg.tier3.label;

  if (badgeTitle) badgeTitle.value = cfg.badgeTitle;

  updateBulkLivePreview();
  modal.classList.remove('hidden');
}

function closeAdminBulkDiscountModal() {
  const modal = document.getElementById('admin-bulk-discount-modal');
  if (modal) modal.classList.add('hidden');
}

function toggleBulkDiscountEnabledState() {
  updateBulkLivePreview();
}

function applyBulkDiscountPreset(type) {
  const t1Units = document.getElementById('bulk-tier1-units');
  const t1Pct = document.getElementById('bulk-tier1-percent');
  const t1Lbl = document.getElementById('bulk-tier1-label');

  const t2Units = document.getElementById('bulk-tier2-units');
  const t2Pct = document.getElementById('bulk-tier2-percent');
  const t2Lbl = document.getElementById('bulk-tier2-label');

  const t3Units = document.getElementById('bulk-tier3-units');
  const t3Pct = document.getElementById('bulk-tier3-percent');
  const t3Lbl = document.getElementById('bulk-tier3-label');

  const toggle = document.getElementById('bulk-enable-toggle');
  if (toggle) toggle.checked = true;

  if (type === 'standard') {
    if (t1Units) t1Units.value = 5;
    if (t1Pct) t1Pct.value = 5;
    if (t1Lbl) t1Lbl.value = 'កម្រិតទិញដុំដំបូង (បញ្ចុះ 5%)';

    if (t2Units) t2Units.value = 10;
    if (t2Pct) t2Pct.value = 10;
    if (t2Lbl) t2Lbl.value = 'កម្រិតទិញដុំមធ្យម (បញ្ចុះ 10%)';

    if (t3Units) t3Units.value = 20;
    if (t3Pct) t3Pct.value = 15;
    if (t3Lbl) t3Lbl.value = 'កម្រិត VIP សាលារៀន (បញ្ចុះ 15%)';
    showToast('🏫 បានជ្រើសរើសទម្រង់គំរូ «ស្តង់ដារសាលា (5% - 10% - 15%)»');
  } else if (type === 'promotion') {
    if (t1Units) t1Units.value = 5;
    if (t1Pct) t1Pct.value = 10;
    if (t1Lbl) t1Lbl.value = 'ប្រូម៉ូសិនដំបូង (បញ្ចុះ 10%)';

    if (t2Units) t2Units.value = 10;
    if (t2Pct) t2Pct.value = 15;
    if (t2Lbl) t2Lbl.value = 'ប្រូម៉ូសិនមធ្យម (បញ្ចុះ 15%)';

    if (t3Units) t3Units.value = 20;
    if (t3Pct) t3Pct.value = 20;
    if (t3Lbl) t3Lbl.value = 'មហាប្រូម៉ូសិន VIP (បញ្ចុះ 20%)';
    showToast('🔥 បានជ្រើសរើសទម្រង់គំរូ «ប្រូម៉ូសិនទិញដុំធំ (10% - 15% - 20%)»');
  } else if (type === 'light') {
    if (t1Units) t1Units.value = 3;
    if (t1Pct) t1Pct.value = 3;
    if (t1Lbl) t1Lbl.value = 'ទិញដុំកម្រិតស្រាល (បញ្ចុះ 3%)';

    if (t2Units) t2Units.value = 6;
    if (t2Pct) t2Pct.value = 6;
    if (t2Lbl) t2Lbl.value = 'ទិញដុំមធ្យម (បញ្ចុះ 6%)';

    if (t3Units) t3Units.value = 12;
    if (t3Pct) t3Pct.value = 10;
    if (t3Lbl) t3Lbl.value = 'ទិញដុំកម្រិតខ្ពស់ (បញ្ចុះ 10%)';
    showToast('📦 បានជ្រើសរើសទម្រង់គំរូ «ទិញដុំកម្រិតស្រាល (3% - 6% - 10%)»');
  }

  updateBulkLivePreview();
}

function updateBulkLivePreview() {
  const resultBox = document.getElementById('bulk-sim-result');
  if (!resultBox) return;

  const isEnabled = document.getElementById('bulk-enable-toggle')?.checked !== false;
  const simQty = Math.max(1, parseInt(document.getElementById('bulk-sim-qty')?.value, 10) || 1);

  const t1Units = Math.max(1, parseInt(document.getElementById('bulk-tier1-units')?.value, 10) || 5);
  const t1Pct = Math.max(0, parseFloat(document.getElementById('bulk-tier1-percent')?.value) || 0);

  const t2Units = Math.max(1, parseInt(document.getElementById('bulk-tier2-units')?.value, 10) || 10);
  const t2Pct = Math.max(0, parseFloat(document.getElementById('bulk-tier2-percent')?.value) || 0);

  const t3Units = Math.max(1, parseInt(document.getElementById('bulk-tier3-units')?.value, 10) || 20);
  const t3Pct = Math.max(0, parseFloat(document.getElementById('bulk-tier3-percent')?.value) || 0);

  if (!isEnabled) {
    resultBox.innerHTML = `
      <div class="text-rose-400 font-bold flex items-center gap-1.5">
        <span>⛔</span> <span>ប្រព័ន្ធបញ្ចុះតម្លៃដុំត្រូវបានបិទ (Disabled)</span>
      </div>
      <div class="text-slate-400 text-[11px]">
        មិនមានការបញ្ចុះតម្លៃស្វ័យប្រវត្តិតាមចំនួនផ្ទាំងឡើយ
      </div>
    `;
    return;
  }

  let matchedTier = 0;
  let percent = 0;
  let tierName = 'មិនទាន់ដល់កម្រិតបញ្ចុះតម្លៃ';
  let badgeColor = 'bg-slate-700 text-slate-300';

  if (simQty >= t3Units) {
    matchedTier = 3;
    percent = t3Pct;
    tierName = 'Tier 3 (VIP សាលា)';
    badgeColor = 'bg-emerald-600 text-white';
  } else if (simQty >= t2Units) {
    matchedTier = 2;
    percent = t2Pct;
    tierName = 'Tier 2 (មធ្យម)';
    badgeColor = 'bg-sky-600 text-white';
  } else if (simQty >= t1Units) {
    matchedTier = 1;
    percent = t1Pct;
    tierName = 'Tier 1 (ដំបូង)';
    badgeColor = 'bg-amber-600 text-white';
  }

  const sampleRawUSD = simQty * 2.50;
  const discountUSD = Number((sampleRawUSD * (percent / 100)).toFixed(2));
  const payableUSD = Number((sampleRawUSD - discountUSD).toFixed(2));

  resultBox.innerHTML = `
    <div class="flex items-center gap-2">
      <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${badgeColor}">
        ${tierName}
      </span>
      <span class="font-extrabold text-amber-300">បញ្ចុះ ${percent}%</span>
    </div>
    <div class="text-right">
      <div class="font-bold text-white">នៅសល់៖ <span class="text-emerald-400">${formatUSD(payableUSD)}</span> <span class="text-[10px] text-slate-400">(${formatKHR(payableUSD * 4000)})</span></div>
      <div class="text-[10px] text-slate-400">ចំណេញ៖ <span class="text-rose-400">-${formatUSD(discountUSD)}</span></div>
    </div>
  `;
}

function handleSaveBulkDiscountSettings(e) {
  if (e) e.preventDefault();

  const isEnabled = document.getElementById('bulk-enable-toggle')?.checked !== false;

  const t1Units = Math.max(1, parseInt(document.getElementById('bulk-tier1-units')?.value, 10) || 5);
  const t1Pct = Math.max(0, parseFloat(document.getElementById('bulk-tier1-percent')?.value) || 0);
  const t1Lbl = (document.getElementById('bulk-tier1-label')?.value || 'កម្រិតទិញដុំដំបូង').trim();

  const t2Units = Math.max(1, parseInt(document.getElementById('bulk-tier2-units')?.value, 10) || 10);
  const t2Pct = Math.max(0, parseFloat(document.getElementById('bulk-tier2-percent')?.value) || 0);
  const t2Lbl = (document.getElementById('bulk-tier2-label')?.value || 'កម្រិតទិញដុំមធ្យម').trim();

  const t3Units = Math.max(1, parseInt(document.getElementById('bulk-tier3-units')?.value, 10) || 20);
  const t3Pct = Math.max(0, parseFloat(document.getElementById('bulk-tier3-percent')?.value) || 0);
  const t3Lbl = (document.getElementById('bulk-tier3-label')?.value || 'កម្រិត VIP សាលារៀន').trim();

  const badgeTitle = (document.getElementById('bulk-badge-title')?.value || 'ប្រព័ន្ធបញ្ចុះតម្លៃទិញដុំសាលា').trim();

  if (t1Units >= t2Units || t2Units >= t3Units) {
    if (!confirm('ចំណាំ៖ ចំនួនផ្ទាំងនៃ Tier នីមួយៗគួរតែតាមលំដាប់ (Tier 1 < Tier 2 < Tier 3)។ តើអ្នកចង់បន្តរក្សាទុកដែរឬទេ?')) {
      return;
    }
  }

  const settings = {
    enabled: isEnabled,
    badgeTitle: badgeTitle,
    tier1: { minUnits: t1Units, percent: t1Pct, label: t1Lbl },
    tier2: { minUnits: t2Units, percent: t2Pct, label: t2Lbl },
    tier3: { minUnits: t3Units, percent: t3Pct, label: t3Lbl }
  };

  try {
    localStorage.setItem(BULK_DISCOUNT_STORAGE_KEY, JSON.stringify(settings));
    updateAdminBulkDiscountBadge();
    closeAdminBulkDiscountModal();
    showToast('💾 បានរក្សាទុកការកំណត់ប្រព័ន្ធបញ្ចុះតម្លៃដុំ (Bulk Discounts) ជោគជ័យ!', 'emerald');
  } catch (err) {
    console.error('Error saving bulk discount settings:', err);
    alert('មិនអាចរក្សាទុកបានទេ សូមពិនិត្យទំហំផ្ទុក Storage');
  }
}

function resetBulkDiscountSettingsToDefault() {
  if (!confirm('តើអ្នកពិតជាចង់កំណត់ប្រព័ន្ធបញ្ចុះតម្លៃដុំត្រឡប់ទៅតម្លៃដើម (Default) វិញមែនទេ?')) {
    return;
  }

  try {
    localStorage.removeItem(BULK_DISCOUNT_STORAGE_KEY);
  } catch (err) {
    console.warn(err);
  }

  openAdminBulkDiscountModal();
  updateAdminBulkDiscountBadge();
  showToast('🔄 បានកំណត់ប្រព័ន្ធបញ្ចុះតម្លៃដុំទៅតម្លៃដើមវិញជោគជ័យ!', 'emerald');
}

// =========================================================================
// SECTION 6: CUSTOMER PAYMENT SLIP VIEWER
// =========================================================================
function openSlipModal(orderId) {
  const cleanId = String(orderId || '').replace(/^#/, '').trim();
  const order = (adminOrders || []).find(o => String(o.id || '').replace(/^#/, '').trim() === cleanId);
  if (!order || !order.paymentSlip) {
    showToast("មិនមានរូបភាពវិក្កយបត្រ (Slip) សម្រាប់ Order នេះទេ!", "amber");
    return;
  }
  const modal = document.getElementById('admin-slip-modal');
  const img = document.getElementById('admin-slip-full-img');
  const info = document.getElementById('admin-slip-order-info');
  const custText = document.getElementById('admin-slip-customer-text');

  if (img) img.src = order.paymentSlip;
  if (info) info.textContent = `កូដ #${order.id} • ${order.customerName || 'អតិថិជន'} (${formatUSD(order.totalUSD)} / ${formatKHR(order.totalKHR)})`;
  if (custText) {
    custText.textContent = `វិធីទូទាត់៖ ${order.paymentMethod || 'ABA KHQR'} • ពេលវេលា៖ ${formatDateKh(order.createdAt)}`;
  }
  if (modal) modal.classList.remove('hidden');
}

function closeSlipModal() {
  const modal = document.getElementById('admin-slip-modal');
  if (modal) modal.classList.add('hidden');
}

// =========================================================================
// SECTION 7: EXCEL / CSV DATA EXPORTS (WITH UTF-8 BOM FOR KHMER SCRIPT)
// =========================================================================
function exportProductsCSV() {
  if (!adminProducts || adminProducts.length === 0) {
    showToast("មិនមានទិន្នន័យទំនិញសម្រាប់ទាញយកទេ!", "amber");
    return;
  }

  const headers = [
    "ID",
    "ឈ្មោះទំនិញ",
    "ប្រភេទ",
    "ស្លាកប្រភេទ",
    "ទំហំ",
    "តម្លៃដុល្លារ ($)",
    "តម្លៃរៀល (៛)",
    "ចំនួនក្នុងស្តុក",
    "ស្ថានភាពស្តុក",
    "សម្ភារៈ",
    "ស្លាកសម្គាល់",
    "ពណ៌ស៊ុម",
    "ការពិពណ៌នា"
  ];

  const rows = adminProducts.map(p => {
    const frameInfo = getFrameInfo(p.frameColor);
    return [
      p.id,
      `"${(p.name || '').replace(/"/g, '""')}"`,
      p.category || '',
      `"${(p.categoryLabel || getCategoryLabel(p.category)).replace(/"/g, '""')}"`,
      `"${(p.size || '').replace(/"/g, '""')}"`,
      p.priceUSD || 0,
      p.priceKHR || 0,
      typeof p.stockQty === 'number' ? p.stockQty : 25,
      p.inStock !== false ? "មានក្នុងស្តុក" : "អស់ពីស្តុក",
      `"${(p.material || '').replace(/"/g, '""')}"`,
      `"${(p.badge || '').replace(/"/g, '""')}"`,
      `"${frameInfo.label}"`,
      `"${(p.description || '').replace(/"/g, '""')}"`
    ].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `edushop_products_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("📥 បានទាញយកបញ្ជីទំនិញជាឯកសារ Excel/CSV ដោយជោគជ័យ!", "emerald");
}

function exportOrdersCSV() {
  if (!adminOrders || adminOrders.length === 0) {
    showToast("មិនមានទិន្នន័យបញ្ជាទិញសម្រាប់ទាញយកទេ!", "amber");
    return;
  }

  const headers = [
    "លេខរៀងវិក្កយបត្រ",
    "កូដបញ្ជាទិញ",
    "កាលបរិច្ឆេទ",
    "ឈ្មោះអតិថិជន",
    "លេខទូរស័ព្ទ",
    "អាសយដ្ឋានដឹកជញ្ជូន",
    "ឈ្មោះសាលារៀន",
    "ថ្នាក់/គ្រូបង្រៀន",
    "អត្ថបទឆ្លាក់ផ្ទាល់ខ្លួន",
    "ប្រភេទការបញ្ជាទិញ",
    "វិធីទូទាត់",
    "ប័ណ្ណបញ្ចុះតម្លៃ",
    "បញ្ចុះតម្លៃទូទៅ ($)",
    "ការបញ្ចុះតម្លៃដុំ (Bulk)",
    "សេវាផ្ញើ ($)",
    "តម្លៃសរុប ($)",
    "តម្លៃសរុប (៛)",
    "ស្ថានភាព",
    "ក្រុមហ៊ុនដឹកជញ្ជូន",
    "លេខកូដបញ្ញើ (Tracking No)",
    "មុខទំនិញដែលបានទិញ",
    "ចំណាំបន្ថែម"
  ];

  const rows = adminOrders.map(o => {
    const itemsText = (o.items || []).map(i => `${i.name} (${i.frameLabel ? i.frameLabel + ' • ' : ''}${i.size || 'ស្តង់ដារ'} x ${i.qty})`).join('; ');
    const bulkDiscountStr = o.bulkDiscountPercent ? `${o.bulkDiscountPercent}% (-$${o.bulkDiscountUSD || 0})` : '0%';
    const orderTypeStr = o.isSchoolOrder ? 'កុម្ម៉ង់សម្រាប់សាលារៀន' : 'ទូទៅ';
    const schoolName = o.engraveSchool || o.schoolName || '';
    const gradeName = o.engraveGrade || '';

    return [
      `"${o.invoiceNo || ''}"`,
      `"${o.id || ''}"`,
      `"${formatDateKh(o.createdAt)}"`,
      `"${(o.customerName || '').replace(/"/g, '""')}"`,
      `"${(o.customerPhone || '').replace(/"/g, '""')}"`,
      `"${(o.customerAddress || '').replace(/"/g, '""')}"`,
      `"${schoolName.replace(/"/g, '""')}"`,
      `"${gradeName.replace(/"/g, '""')}"`,
      `"${(o.customText || '').replace(/"/g, '""')}"`,
      `"${orderTypeStr}"`,
      `"${o.paymentMethod || 'ABA KHQR'}"`,
      `"${o.couponCode || ''}"`,
      o.discountUSD || 0,
      `"${bulkDiscountStr}"`,
      o.shippingFeeUSD || 0,
      o.totalUSD || 0,
      o.totalKHR || 0,
      `"${getOrderStatusBadge(o.status).label}"`,
      `"${(o.courierName || '').replace(/"/g, '""')}"`,
      `"${(o.waybillNo || o.trackingNumber || '').replace(/"/g, '""')}"`,
      `"${itemsText.replace(/"/g, '""')}"`,
      `"${(o.customerNote || '').replace(/"/g, '""')}"`
    ].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `edushop_orders_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("📥 បានទាញយកប្រវត្តិការបញ្ជាទិញជាឯកសារ Excel/CSV ដោយជោគជ័យ!", "emerald");
}

// =========================================================================
// SECTION 8: FULL SYSTEM BACKUP & RESTORE HUB (JSON FORMAT)
// =========================================================================
let pendingRestoreData = null;

function getFullSystemBackupObject() {
  let sizePresets = [];
  try {
    const rawPresets = localStorage.getItem('edushop_size_presets');
    if (rawPresets) sizePresets = JSON.parse(rawPresets);
  } catch (e) {}

  let tgBot = null;
  try {
    const rawTg = localStorage.getItem(TELEGRAM_BOT_STORAGE_KEY);
    if (rawTg) tgBot = JSON.parse(rawTg);
  } catch (e) {}

  return {
    appName: "EduShop",
    version: "2.0",
    backupDate: new Date().toISOString(),
    theme: getCurrentTheme(),
    shippingSettings: (typeof getShippingSettings === 'function') ? getShippingSettings() : null,
    bulkDiscountSettings: (typeof getBulkDiscountSettings === 'function') ? getBulkDiscountSettings() : null,
    sizePresets: sizePresets,
    telegramBotSettings: tgBot,
    websiteUrl: localStorage.getItem('edushop_website_url') || '',
    products: adminProducts || [],
    orders: adminOrders || []
  };
}

function backupAllData() {
  const backupData = getFullSystemBackupObject();
  const jsonStr = JSON.stringify(backupData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `edushop_backup_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("💾 បានទាញយកឯកសារ Backup ទិន្នន័យប្រព័ន្ធទាំងអស់ជោគជ័យ!", "emerald");
}

function copyBackupJsonToClipboard() {
  const backupData = getFullSystemBackupObject();
  const jsonStr = JSON.stringify(backupData, null, 2);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(jsonStr).then(() => {
      showToast("📋 បានចម្លងកូដ Backup JSON ទៅក្នុង Clipboard រួចរាល់!", "emerald");
    }).catch(() => {
      prompt("ចម្លងកូដ JSON ខាងក្រោម៖", jsonStr);
    });
  } else {
    prompt("ចម្លងកូដ JSON ខាងក្រោម៖", jsonStr);
  }
}

function openBackupRestoreModal() {
  const modal = document.getElementById('backup-restore-modal');
  if (!modal) return;

  // Update current live stats
  const statProducts = document.getElementById('backup-stat-products');
  const statOrders = document.getElementById('backup-stat-orders');
  const statPresets = document.getElementById('backup-stat-presets');
  const statTheme = document.getElementById('backup-stat-theme');

  if (statProducts) statProducts.textContent = (adminProducts || []).length;
  if (statOrders) statOrders.textContent = (adminOrders || []).length;

  let presetCount = 5;
  try {
    const raw = localStorage.getItem('edushop_size_presets');
    if (raw) presetCount = JSON.parse(raw).length;
  } catch (e) {}
  if (statPresets) statPresets.textContent = presetCount;

  if (statTheme) {
    const currentTh = getCurrentTheme();
    statTheme.textContent = currentTh === 'khmer' ? '🪷 ខ្មែរ-អង្គរ' : (currentTh === 'summer' ? '🏖️ វិស្សមកាល' : currentTh);
  }

  // Reset file inspection
  cancelRestoreInspection();

  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeBackupRestoreModal() {
  const modal = document.getElementById('backup-restore-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  cancelRestoreInspection();
}

function handleRestoreFileInspection(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || (!data.products && !data.orders)) {
        alert("ឯកសារនេះមិនមែនជា Backup ត្រឹមត្រូវរបស់ EduShop ទេ!");
        return;
      }

      pendingRestoreData = data;

      // Make sure modal is visible
      const modal = document.getElementById('backup-restore-modal');
      if (modal && modal.classList.contains('hidden')) {
        openBackupRestoreModal();
      }

      const inspectCard = document.getElementById('restore-inspection-card');
      const fName = document.getElementById('restore-file-name');
      const fDate = document.getElementById('restore-file-date');
      const cProd = document.getElementById('restore-count-products');
      const cOrd = document.getElementById('restore-count-orders');
      const cPre = document.getElementById('restore-count-presets');
      const vTheme = document.getElementById('restore-val-theme');

      if (fName) fName.textContent = file.name;
      if (fDate) fDate.textContent = data.backupDate ? formatDateKh(data.backupDate) : 'មិនបានបញ្ជាក់កាលបរិច្ឆេទ';
      if (cProd) cProd.textContent = Array.isArray(data.products) ? data.products.length : 0;
      if (cOrd) cOrd.textContent = Array.isArray(data.orders) ? data.orders.length : 0;
      if (cPre) cPre.textContent = Array.isArray(data.sizePresets) ? data.sizePresets.length : 0;
      if (vTheme) vTheme.textContent = data.theme || 'khmer';

      if (inspectCard) inspectCard.classList.remove('hidden');
      showToast("🔍 បានពិនិត្យឯកសារ Backup រួចរាល់! សូមជ្រើសរើសរបៀបស្តារទិន្នន័យ។", "sky");
    } catch (err) {
      console.error(err);
      alert("មានបញ្ហាក្នុងការអានឯកសារ Backup! សូមពិនិត្យឯកសារម្តងទៀត។");
    } finally {
      event.target.value = '';
    }
  };
  reader.readAsText(file);
}

function cancelRestoreInspection() {
  pendingRestoreData = null;
  const inspectCard = document.getElementById('restore-inspection-card');
  if (inspectCard) inspectCard.classList.add('hidden');
  const fileInput = document.getElementById('backup-restore-modal-file-input');
  if (fileInput) fileInput.value = '';
}

function confirmRestoreSelectedData() {
  if (!pendingRestoreData) {
    showToast("មិនមានទិន្នន័យសម្រាប់ស្តារទេ! សូមជ្រើសរើសឯកសារ Backup ជាមុនសិន។", "amber");
    return;
  }

  const modeRadio = document.querySelector('input[name="restore-mode"]:checked');
  const mode = modeRadio ? modeRadio.value : 'merge';
  const data = pendingRestoreData;

  const incomingProducts = Array.isArray(data.products) ? data.products : [];
  const incomingOrders = Array.isArray(data.orders) ? data.orders : [];

  if (mode === 'replace') {
    if (!confirm(`⚠️ ការព្រមាន៖ អ្នកបានជ្រើសរើស «ជំនួសទាំងអស់ (Replace All)»!\nទិន្នន័យទំនិញ និងការបញ្ជាទិញបច្ចុប្បន្នទាំងអស់នឹងត្រូវលុបជំនួសវិញ។\n\nតើអ្នកពិតជាចង់បន្តមែនទេ?`)) {
      return;
    }
    if (incomingProducts.length > 0) {
      adminProducts = incomingProducts;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(adminProducts));
    }
    if (incomingOrders.length > 0) {
      adminOrders = incomingOrders;
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(adminOrders));
    }
  } else {
    // Merge & Append mode
    // 1. Merge products by unique id or append
    const existingProdIds = new Set(adminProducts.map(p => p.id));
    let maxProdId = adminProducts.reduce((max, p) => Math.max(max, p.id || 0), 0);
    incomingProducts.forEach(newP => {
      if (existingProdIds.has(newP.id)) {
        // If exact ID exists, check if name matches; if so, update stock & price; else assign new ID
        const existing = adminProducts.find(p => p.id === newP.id);
        if (existing && existing.name === newP.name) {
          Object.assign(existing, newP);
        } else {
          maxProdId++;
          adminProducts.push({ ...newP, id: maxProdId });
        }
      } else {
        adminProducts.push(newP);
        existingProdIds.add(newP.id);
      }
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(adminProducts));

    // 2. Merge orders by unique order id
    const existingOrderIds = new Set(adminOrders.map(o => o.id));
    incomingOrders.forEach(newO => {
      if (!existingOrderIds.has(newO.id)) {
        adminOrders.unshift(newO); // newer on top
        existingOrderIds.add(newO.id);
      }
    });
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(adminOrders));
  }

  // Restore Extra Settings
  if (Array.isArray(data.sizePresets) && data.sizePresets.length > 0) {
    localStorage.setItem('edushop_size_presets', JSON.stringify(data.sizePresets));
  }
  if (data.theme) {
    localStorage.setItem(THEME_STORAGE_KEY, data.theme);
    if (typeof updateAdminThemeHeader === 'function') updateAdminThemeHeader();
    if (typeof updateThemeModalUI === 'function') updateThemeModalUI();
  }
  if (data.shippingSettings) {
    localStorage.setItem(SHIPPING_STORAGE_KEY, JSON.stringify(data.shippingSettings));
    if (typeof updateAdminShippingQuickBadge === 'function') updateAdminShippingQuickBadge();
  }
  if (data.bulkDiscountSettings) {
    localStorage.setItem(BULK_DISCOUNT_STORAGE_KEY, JSON.stringify(data.bulkDiscountSettings));
    if (typeof updateAdminBulkDiscountBadge === 'function') updateAdminBulkDiscountBadge();
  }
  if (data.telegramBotSettings) {
    localStorage.setItem(TELEGRAM_BOT_STORAGE_KEY, JSON.stringify(data.telegramBotSettings));
  }
  if (data.websiteUrl) {
    localStorage.setItem('edushop_website_url', data.websiteUrl);
  }

  loadProducts();
  loadAdminOrders();

  closeBackupRestoreModal();
  showToast(`🎉 បានស្តារទិន្នន័យប្រព័ន្ធដោយជោគជ័យ (${mode === 'merge' ? 'បញ្ចូលបន្ថែម' : 'ជំនួសទាំងអស់'})!`, "emerald");
}

function restoreAllData(event) {
  handleRestoreFileInspection(event);
}

// =========================================================================
// SECTION 9: SALES ANALYTICS & ADVANCED REPORTING DASHBOARD
// =========================================================================
function renderAnalyticsDashboard() {
  const orders = adminOrders || [];
  const validOrders = orders.filter(o => o.status !== 'cancelled');

  // 1. Overall Revenue
  const totalRevenueUSD = validOrders.reduce((sum, o) => sum + (parseFloat(o.totalUSD) || 0), 0);
  const totalRevenueKHR = Math.round(totalRevenueUSD * 4000);

  const elRevUSD = document.getElementById('analytics-revenue-usd');
  const elRevKHR = document.getElementById('analytics-revenue-khr');
  if (elRevUSD) elRevUSD.textContent = formatUSD(totalRevenueUSD);
  if (elRevKHR) elRevKHR.textContent = `≈ ${formatKHR(totalRevenueKHR)}`;

  // 2. Orders Count
  const totalOrders = orders.length;
  const completedOrders = orders.filter(o => o.status === 'completed').length;
  const pendingOrders = orders.filter(o => o.status === 'pending').length;

  const elTotalOrders = document.getElementById('analytics-total-orders');
  const elCompOrders = document.getElementById('analytics-completed-orders');
  if (elTotalOrders) elTotalOrders.textContent = totalOrders;
  if (elCompOrders) elCompOrders.textContent = `${completedOrders} បញ្ចប់ជោគជ័យ (${pendingOrders} រង់ចាំ)`;

  // 3. Total Items Sold
  let totalItemsSold = 0;
  const productStats = {}; // name -> { name, qty, revUSD, revKHR }
  const categoryStats = {
    decor: { label: 'សម្ភារៈតុបតែងថ្នាក់', emoji: '🎨', color: 'from-amber-400 to-orange-500', barColor: 'bg-amber-500', qty: 0, revUSD: 0 },
    teaching: { label: 'សម្ភារៈបង្រៀនសិស្ស', emoji: '📐', color: 'from-blue-500 to-indigo-600', barColor: 'bg-blue-600', qty: 0, revUSD: 0 },
    games: { label: 'ល្បែងសិក្សា', emoji: '🧩', color: 'from-emerald-500 to-teal-600', barColor: 'bg-emerald-600', qty: 0, revUSD: 0 },
    combo: { label: 'កញ្ចប់ប្រូម៉ូសិន', emoji: '🎁', color: 'from-purple-500 to-pink-600', barColor: 'bg-purple-600', qty: 0, revUSD: 0 }
  };

  validOrders.forEach(o => {
    (o.items || []).forEach(item => {
      const q = parseInt(item.qty, 10) || 1;
      const usd = (parseFloat(item.priceUSD) || 0);
      const khr = (parseInt(item.priceKHR, 10) || Math.round(usd * 4000));
      totalItemsSold += q;

      // Product sales tally
      const pName = (item.name || 'ទំនិញ').trim();
      if (!productStats[pName]) {
        productStats[pName] = {
          name: pName,
          qty: 0,
          revUSD: 0,
          revKHR: 0,
          size: item.size || 'ស្តង់ដារ'
        };
      }
      productStats[pName].qty += q;
      productStats[pName].revUSD += usd;
      productStats[pName].revKHR += khr;

      // Category tally
      let cat = 'decor';
      const catalogItem = adminProducts.find(p => p.name === pName || pName.includes(p.name));
      if (catalogItem && catalogItem.category) {
        cat = catalogItem.category;
      } else if (pName.includes('ល្បែង') || pName.includes('Montessori') || pName.includes('Tangram') || pName.includes('ផែនទី')) {
        cat = 'games';
      } else if (pName.includes('បង្រៀន') || pName.includes('នាឡិកា') || pName.includes('បន្ទាត់') || pName.includes('STEM') || pName.includes('Flashcard')) {
        cat = 'teaching';
      } else if (pName.includes('កញ្ចប់') || pName.includes('Combo') || pName.includes('Pack')) {
        cat = 'combo';
      }

      if (categoryStats[cat]) {
        categoryStats[cat].qty += q;
        categoryStats[cat].revUSD += usd;
      }
    });
  });

  const elItemsSold = document.getElementById('analytics-items-sold');
  if (elItemsSold) elItemsSold.textContent = `${totalItemsSold} ផ្ទាំង/ឈុត`;

  // 4. Average Order Value (AOV)
  const aovUSD = validOrders.length > 0 ? (totalRevenueUSD / validOrders.length) : 0;
  const aovKHR = Math.round(aovUSD * 4000);

  const elAovUSD = document.getElementById('analytics-aov-usd');
  const elAovKHR = document.getElementById('analytics-aov-khr');
  if (elAovUSD) elAovUSD.textContent = formatUSD(aovUSD);
  if (elAovKHR) elAovKHR.textContent = `≈ ${formatKHR(aovKHR)}`;

  // 5. Top 5 Best-Selling Products
  const sortedProducts = Object.values(productStats).sort((a, b) => b.qty - a.qty).slice(0, 5);
  const maxQty = sortedProducts.length > 0 ? sortedProducts[0].qty : 1;
  const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];

  const elTopProducts = document.getElementById('analytics-top-products');
  if (elTopProducts) {
    if (sortedProducts.length === 0) {
      elTopProducts.innerHTML = `<div class="py-8 text-center text-slate-400 text-xs font-medium">មិនទាន់មានទិន្នន័យលក់ផលិតផលនៅឡើយទេ</div>`;
    } else {
      elTopProducts.innerHTML = sortedProducts.map((p, idx) => {
        const percent = Math.max(12, Math.round((p.qty / maxQty) * 100));
        return `
          <div class="space-y-1 p-2.5 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition border border-slate-200/80">
            <div class="flex items-center justify-between text-xs">
              <div class="flex items-center gap-2 truncate max-w-[280px]">
                <span class="text-base">${medals[idx] || '⭐'}</span>
                <span class="font-bold text-slate-900 truncate">${p.name}</span>
              </div>
              <div class="text-right flex-shrink-0">
                <span class="font-black text-sky-700 text-xs">${p.qty} ឈុត</span>
                <span class="text-[11px] text-slate-400 ml-1">(${formatUSD(p.revUSD)})</span>
              </div>
            </div>
            <!-- Visual Progress Bar -->
            <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div class="bg-gradient-to-r from-sky-500 to-indigo-600 h-2 rounded-full analytics-bar" style="width: ${percent}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 6. Category Sales Breakdown
  const elCatBreakdown = document.getElementById('analytics-categories-breakdown');
  if (elCatBreakdown) {
    const catKeys = ['decor', 'teaching', 'games', 'combo'];
    const totalCatRevenue = Object.values(categoryStats).reduce((sum, c) => sum + c.revUSD, 0) || 1;

    elCatBreakdown.innerHTML = catKeys.map(key => {
      const cat = categoryStats[key];
      const percent = Math.round((cat.revUSD / totalCatRevenue) * 100);
      return `
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="text-base">${cat.emoji}</span>
              <span class="font-bold text-slate-800">${cat.label}</span>
              <span class="text-[10px] text-slate-500 font-semibold">(${cat.qty} ឯកតា)</span>
            </div>
            <div class="text-right font-bold text-slate-900">
              ${formatUSD(cat.revUSD)}
              <span class="text-[11px] text-slate-400 font-medium ml-1">(${percent}%)</span>
            </div>
          </div>
          <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div class="${cat.barColor} h-2 rounded-full analytics-bar" style="width: ${Math.max(6, percent)}%;"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 7. Top Delivery Locations
  const elLocations = document.getElementById('analytics-locations-list');
  if (elLocations) {
    const provinceList = [
      'ភ្នំពេញ', 'កណ្តាល', 'កណ្ដាល', 'សៀមរាប', 'បាត់ដំបង', 'កំពង់ចាម',
      'កំពត', 'ព្រះសីហនុ', 'តាកែវ', 'កំពង់ឆ្នាំង', 'កំពង់ធំ', 'ពោធិ៍សាត់',
      'ព្រៃវែង', 'ស្វាយរៀង', 'បន្ទាយមានជ័យ', 'រតនគិរី', 'មណ្ឌលគិរី',
      'ក្រចេះ', 'ស្ទឹងត្រែង', 'ព្រះវិហារ', 'កែប', 'ប៉ៃលិន', 'កោះកុង',
      'ឧត្តរមានជ័យ', 'ត្បូងឃ្មុំ'
    ];

    const locationCounts = {};
    validOrders.forEach(o => {
      const addr = o.customerAddress || '';
      let matched = 'ផ្សេងៗ';
      for (const prov of provinceList) {
        if (addr.includes(prov)) {
          matched = (prov === 'កណ្តាល' || prov === 'កណ្ដាល') ? 'ខេត្តកណ្ដាល' : (prov.startsWith('ខេត្ត') || prov.startsWith('រាជធានី') ? prov : `ខេត្ត${prov}`);
          if (prov === 'ភ្នំពេញ') matched = 'រាជធានីភ្នំពេញ';
          break;
        }
      }
      locationCounts[matched] = (locationCounts[matched] || 0) + 1;
    });

    const sortedLocations = Object.entries(locationCounts).sort((a, b) => b[1] - a[1]);

    if (sortedLocations.length === 0) {
      elLocations.innerHTML = `<div class="col-span-3 text-center py-4 text-xs text-slate-400">មិនទាន់មានទិន្នន័យទីតាំង</div>`;
    } else {
      elLocations.innerHTML = sortedLocations.map(([loc, count]) => `
        <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div class="flex items-center gap-1.5 truncate">
            <span class="text-sm">📍</span>
            <span class="text-xs font-bold text-slate-800 truncate">${loc}</span>
          </div>
          <span class="text-xs font-extrabold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md ml-1 flex-shrink-0">
            ${count}
          </span>
        </div>
      `).join('');
    }
  }
}

// =========================================================================
// PHASE 4 ADMIN: TELEGRAM BOT SETTINGS, PRODUCT QR LABELS, CATALOGUE & QUOTATIONS
// =========================================================================

const TELEGRAM_BOT_STORAGE_KEY = 'edushop_telegram_bot_settings';

// --- 1. TELEGRAM BOT SETTINGS ---
function getTelegramSettings() {
  try {
    const raw = localStorage.getItem(TELEGRAM_BOT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : { botToken: '', chatId: '', ownerContact: '0964361201', enabled: true };
  } catch (e) {
    return { botToken: '', chatId: '', ownerContact: '0964361201', enabled: true };
  }
}

function openTelegramSettingsModal() {
  const modal = document.getElementById('admin-telegram-settings-modal');
  if (!modal) return;

  const settings = getTelegramSettings();
  const tokenInput = document.getElementById('admin-tg-token');
  const chatInput = document.getElementById('admin-tg-chat-id');
  const enabledInput = document.getElementById('admin-tg-enabled');
  const ownerInput = document.getElementById('admin-tg-owner-contact');

  if (tokenInput) tokenInput.value = settings.botToken || '';
  if (chatInput) chatInput.value = settings.chatId || '';
  if (enabledInput) enabledInput.checked = settings.enabled !== false;
  if (ownerInput) ownerInput.value = settings.ownerContact || '0964361201';

  modal.classList.remove('hidden');
}

function closeTelegramSettingsModal() {
  const modal = document.getElementById('admin-telegram-settings-modal');
  if (modal) modal.classList.add('hidden');
}

function saveTelegramSettings() {
  const tokenInput = document.getElementById('admin-tg-token');
  const chatInput = document.getElementById('admin-tg-chat-id');
  const enabledInput = document.getElementById('admin-tg-enabled');
  const ownerInput = document.getElementById('admin-tg-owner-contact');

  const settings = {
    botToken: tokenInput ? tokenInput.value.trim() : '',
    chatId: chatInput ? chatInput.value.trim() : '',
    ownerContact: ownerInput ? ownerInput.value.trim() : '0964361201',
    enabled: enabledInput ? enabledInput.checked : true
  };

  localStorage.setItem(TELEGRAM_BOT_STORAGE_KEY, JSON.stringify(settings));
  showToast("✓ បានរក្សាទុកការកំណត់ Telegram ជោគជ័យ!", "emerald");
  closeTelegramSettingsModal();
}

function testTelegramBot() {
  const tokenInput = document.getElementById('admin-tg-token');
  const chatInput = document.getElementById('admin-tg-chat-id');
  const token = tokenInput ? tokenInput.value.trim() : '';
  const chatId = chatInput ? chatInput.value.trim() : '';

  if (!token || !chatId) {
    showToast("សូមបញ្ចូល Bot Token និង Chat ID ជាមុនសិន!", "amber");
    return;
  }

  showToast("កំពុងផ្ញើសារតេស្ត...", "sky");

  const testMsg = `🔔 តេស្តប្រព័ន្ធ Telegram Bot របស់ «EduShop» ជោគជ័យ!\n\nកាលបរិច្ឆេទ៖ ${formatDateKh(new Date().toISOString())}\n\nរាល់ការបញ្ជាទិញថ្មីពី Web User នឹងត្រូវបានបញ្ជូនមកកាន់ទីនេះស្វ័យប្រវត្តិ។`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: testMsg
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.ok) {
      showToast("🎉 ផ្ញើសារតេស្តបានជោគជ័យ! សូមពិនិត្យ Telegram របស់អ្នក", "emerald");
    } else {
      showToast(`បរាជ័យ៖ ${data.description || 'ពិនិត្យ Token/Chat ID ឡើងវិញ'}`, "rose");
    }
  })
  .catch(err => {
    showToast(`មិនអាចតភ្ជាប់បាន៖ ${err.message}`, "rose");
  });
}

// --- 2. PRODUCT QR CODE & BARCODE LABELS GENERATOR ---
function openProductQrModal(productId = null) {
  const modal = document.getElementById('admin-product-qr-modal');
  const printArea = document.getElementById('product-qr-printable-area');
  if (!modal || !printArea) return;

  const targetProducts = productId 
    ? adminProducts.filter(p => p.id === productId) 
    : adminProducts;

  if (targetProducts.length === 0) {
    showToast("មិនមានទំនិញសម្រាប់បោះពុម្ពស្លាក QR ទេ!", "amber");
    return;
  }

  const cardsHtml = targetProducts.map(p => {
    const fInfo = (typeof getFrameInfo === 'function') ? getFrameInfo(p.frameColor) : { label: '' };
    const qrData = encodeURIComponent(`https://t.me/+855964361201?text=សួរអំពីទំនិញ-${p.id}-${encodeURIComponent(p.name)}`);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=${qrData}`;

    return `
      <div class="qr-label-card border-2 border-slate-900 rounded-xl p-3 bg-white text-slate-900 flex flex-col justify-between space-y-2 shadow-2xs">
        <div class="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <span class="text-[10px] font-black text-sky-700 tracking-tight">EduShop</span>
          <span class="text-[9px] font-mono font-bold text-slate-400">#${String(p.id).padStart(4, '0')}</span>
        </div>

        <div class="flex items-center gap-2.5">
          <img src="${qrUrl}" alt="QR" class="w-16 h-16 object-contain border border-slate-200 rounded-lg p-0.5">
          <div class="min-w-0 flex-1">
            <h5 class="font-black text-slate-900 text-xs truncate leading-snug" title="${p.name}">${p.name}</h5>
            <div class="text-[10px] text-slate-500 font-medium mt-0.5">ទំហំ៖ <strong>${p.size}</strong></div>
            ${p.frameColor && p.frameColor !== 'none' ? `<div class="text-[9.5px] text-amber-800 font-semibold">${fInfo.label || p.frameColor}</div>` : ''}
            <div class="mt-1 flex items-baseline gap-1.5">
              <span class="font-black text-sm text-sky-700 font-mono">${formatUSD(p.priceUSD)}</span>
              <span class="text-[10px] font-bold text-emerald-700 font-mono">(${formatKHR(p.priceKHR)})</span>
            </div>
          </div>
        </div>

        <!-- Simulated Barcode Line -->
        <div class="pt-1.5 border-t border-dashed border-slate-300">
          <div class="barcode-strip mb-0.5"></div>
          <div class="flex items-center justify-between text-[8.5px] font-mono text-slate-500">
            <span>TEL: 069 490 108</span>
            <span>EDUSHOP-KH</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  printArea.innerHTML = `
    <div class="space-y-4">
      <div class="no-print p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-xs">
        <span class="font-bold text-emerald-900">
          📄 ចំនួនស្លាកទំនិញ៖ ${targetProducts.length} ស្លាក (ទម្រង់ Sticker អាចបោះពុម្ពលើក្រដាសស្ទីគ័រ A4)
        </span>
        ${productId ? `
          <button onclick="openProductQrModal()" class="text-sky-600 font-bold hover:underline cursor-pointer">
            បង្ហាញទំនិញទាំងអស់វិញ ➔
          </button>
        ` : ''}
      </div>

      <div class="qr-labels-grid">
        ${cardsHtml}
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeProductQrModal() {
  const modal = document.getElementById('admin-product-qr-modal');
  if (modal) modal.classList.add('hidden');
}

function printProductQrLabels() {
  document.body.classList.add('printing-qr-labels');
  window.print();
  setTimeout(() => {
    document.body.classList.remove('printing-qr-labels');
  }, 500);
}

// --- 3. ADMIN PRODUCT CATALOGUE MODAL (A4 PRINTABLE) ---
function openAdminCatalogueModal() {
  const modal = document.getElementById('admin-catalogue-modal');
  const printArea = document.getElementById('admin-catalogue-printable-area');
  if (!modal || !printArea) return;

  const categories = [
    { key: 'decor', title: '🎨 សម្ភារៈតុបតែងថ្នាក់រៀន (Classroom Decoration)', desc: 'ផ្ទាំងបដាស្វាគមន៍, ដើមឈើអំណាន, តារាងព្យញ្ជនៈ និងកាលវិភាគ' },
    { key: 'teaching', title: '📖 សម្ភារៈជំនួយការបង្រៀន (Teaching Aids)', desc: 'បណ្ណពាក្យ, ផ្ទាំងរូបភាពជីវចល, ឧបករណ៍បង្រៀនគណិតវិទ្យា និងអក្សរសាស្ត្រ' },
    { key: 'games', title: '🧩 ល្បែងសិក្សាបណ្ដុះបញ្ញា (Educational Games)', desc: 'ល្បែងផ្គុំរូប, ហ្គេមអក្សរខ្មែរ, និងឧបករណ៍តេស្តកាយសម្បទា' },
    { key: 'combo', title: '🎁 កញ្ចប់ប្រូម៉ូសិនពិសេស (Special Combo Packs)', desc: 'ឈុតសន្សំសំចៃ រៀបចំថ្នាក់រៀនមួយចប់ពេញលេញ' }
  ];

  let catSectionsHtml = categories.map(cat => {
    const items = adminProducts.filter(p => p.category === cat.key && p.inStock !== false);
    if (items.length === 0) return '';

    const cardsHtml = items.map((p) => {
      const fInfo = (typeof getFrameInfo === 'function') ? getFrameInfo(p.frameColor) : { label: '' };
      return `
        <div class="p-3 bg-white rounded-xl border border-slate-200 flex flex-col justify-between space-y-2 shadow-2xs break-inside-avoid">
          <div>
            <div class="flex items-center justify-between gap-1 mb-1">
              <span class="text-[10px] font-mono text-slate-400 font-bold">#${String(p.id).padStart(3, '0')}</span>
              ${p.badge ? `<span class="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800">${p.badge}</span>` : ''}
            </div>
            <div class="font-bold text-slate-900 text-xs leading-snug line-clamp-2">${p.name}</div>
            <div class="text-[10.5px] text-slate-500 mt-1">
              <span>ទំហំ៖ <strong class="text-slate-700">${p.size}</strong></span>
              ${p.frameColor && p.frameColor !== 'none' ? `<span class="block text-slate-600 font-medium">${fInfo.label}</span>` : ''}
            </div>
            ${p.material ? `<div class="text-[9.5px] text-slate-400 mt-0.5 line-clamp-1">សម្ភារៈ៖ ${p.material}</div>` : ''}
          </div>
          <div class="pt-2 border-t border-slate-100 flex items-baseline justify-between">
            <span class="text-xs font-black text-sky-700 font-mono">${formatUSD(p.priceUSD)}</span>
            <span class="text-[10.5px] font-bold text-emerald-700 font-mono">${formatKHR(p.priceKHR)}</span>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="space-y-2 break-inside-avoid">
        <div class="border-b-2 border-sky-600 pb-1 flex items-baseline justify-between">
          <h4 class="font-bold text-sm sm:text-base text-sky-900">${cat.title}</h4>
          <span class="text-[10px] text-slate-500">${cat.desc}</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          ${cardsHtml}
        </div>
      </div>
    `;
  }).join('');

  printArea.innerHTML = `
    <div class="catalogue-page p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6">
      <div class="flex items-center justify-between border-b-2 border-slate-900 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center font-black text-2xl shadow-md">
            📚
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">EduShop</h2>
            <p class="text-xs font-bold text-sky-700">តារាងតម្លៃ & សៀវភៅកាតាឡុកសម្ភារៈអប់រំ និងតុបតែងថ្នាក់រៀន</p>
            <p class="text-[10.5px] text-slate-500 mt-0.5">ផ្ញើជូន ២៥ រាជធានី-ខេត្ត • ធានាគុណភាពបោះពុម្ព HD អ៊ុតស្វិតការពារទឹក</p>
          </div>
        </div>
        <div class="text-right">
          <div class="bg-sky-50 text-sky-900 border border-sky-200 px-3 py-1.5 rounded-xl text-center">
            <span class="text-[10px] uppercase font-bold text-sky-600 block">ទំនាក់ទំនងម្ចាស់ហាង (Telegram)</span>
            <span class="font-black text-xs sm:text-sm font-mono text-slate-900">031 97 11 333 / 096 436 1201</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        ${catSectionsHtml}
      </div>

      <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2 break-inside-avoid">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="font-bold text-slate-900">🎁 ប្រូម៉ូសិនពិសេសសម្រាប់សាលារៀន (School Bulk Order)៖</span>
          <span class="text-emerald-700 font-bold">បញ្ចុះតម្លៃ ១០% សម្រាប់ការកុម្ម៉ង់ចាប់ពី ១០ ផ្ទាំងឡើង</span>
        </div>
        <p class="text-[10.5px] text-slate-500 leading-relaxed">
          • អាចកំណត់ទំហំផ្ទាល់ខ្លួន (Custom Size) ទទឹងរហូតដល់ 160 cm<br>
          • មានសេវាឆ្លាក់ និងដាក់ឈ្មោះសាលា ឬឈ្មោះគ្រូប្រចាំថ្នាក់ដោយឥតគិតថ្លៃ<br>
          • ទីតាំងហាង៖ ភូមិដំបូក១០០ ឃុំត្នោតជុំ ស្រុកក្រគរ ខេត្តពោធិ៍សាត់ • ម្ចាស់ហាង (Telegram)៖ <strong>031 97 11 333 / 096 436 1201</strong>
        </p>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeAdminCatalogueModal() {
  const modal = document.getElementById('admin-catalogue-modal');
  if (modal) modal.classList.add('hidden');
}

function printAdminCatalogue() {
  document.body.classList.add('printing-catalogue');
  window.print();
  setTimeout(() => {
    document.body.classList.remove('printing-catalogue');
  }, 500);
}

// --- 4. ADMIN SCHOOL OFFICIAL QUOTATION ---
function openAdminQuotationModal(orderId) {
  const cleanTargetId = String(orderId || '').replace(/^#/, '').trim();
  const order = adminOrders.find(o => String(o.id || '').replace(/^#/, '').trim() === cleanTargetId);

  if (!order) {
    showToast("រកមិនឃើញការបញ្ជាទិញនេះទេ!", "rose");
    return;
  }

  const modal = document.getElementById('admin-quotation-modal');
  const printArea = document.getElementById('admin-quotation-printable-area');
  if (!modal || !printArea) return;

  const schoolName = order.schoolName || order.customerName || 'សាលារៀន';
  const directorName = order.schoolDirector || 'លោកនាយក / នាយិកា';

  const rowsHtml = (order.items || []).map((item, idx) => {
    const unitUSD = item.priceUSD / item.qty;
    const unitKHR = unitUSD * 4000;
    const lineTotalKHR = item.priceUSD * 4000;

    return `
      <tr class="border-b border-slate-300 text-xs">
        <td class="py-2 px-1.5 text-center font-bold font-mono">${idx + 1}</td>
        <td class="py-2 px-2.5">
          <div class="font-bold text-slate-900">${item.name}</div>
          <div class="text-[10.5px] text-slate-600">${item.frameLabel ? item.frameLabel + ' • ' : ''}ទំហំ៖ ${item.size}</div>
        </td>
        <td class="py-2 px-2 text-center font-bold font-mono">${item.qty}</td>
        <td class="py-2 px-2 text-right font-medium font-mono">${unitKHR.toLocaleString()} ៛</td>
        <td class="py-2 px-2 text-right font-medium font-mono">${formatUSD(unitUSD)}</td>
        <td class="py-2 px-2 text-right font-bold font-mono text-slate-900">${lineTotalKHR.toLocaleString()} ៛</td>
        <td class="py-2 px-2 text-right font-bold font-mono text-slate-900">${formatUSD(item.priceUSD)}</td>
      </tr>
    `;
  }).join('');

  printArea.innerHTML = `
    <div class="quotation-document p-8 bg-white rounded-2xl border-2 border-slate-900 shadow-xs space-y-6">
      <div class="text-center space-y-1 border-b-2 border-slate-900 pb-4">
        <h2 class="text-base sm:text-lg font-black text-slate-900 tracking-wide font-serif">ព្រះរាជាណាចក្រកម្ពុជា</h2>
        <h3 class="text-xs sm:text-sm font-bold text-slate-800 tracking-wider">ជាតិ សាសនា ព្រះមហាក្សត្រ</h3>
        <div class="flex justify-center items-center gap-1 my-1">
          <span class="inline-block w-16 h-0.5 bg-slate-900"></span>
          <span class="text-xs">❖</span>
          <span class="inline-block w-16 h-0.5 bg-slate-900"></span>
        </div>
        <h1 class="text-lg sm:text-xl font-black text-slate-900 uppercase pt-2">លិខិតសម្រង់តម្លៃ / QUOTATION</h1>
        <p class="text-[11px] font-mono text-slate-600">លេខ៖ QT-${order.invoiceNo || '0001'} | កាលបរិច្ឆេទ៖ ${formatDateKh(order.createdAt)}</p>
      </div>

      <div class="grid grid-cols-2 gap-4 text-xs">
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-300 space-y-1">
          <span class="text-[10px] font-bold text-slate-500 uppercase">អ្នកផ្គត់ផ្គង់ (SUPPLIER)</span>
          <div class="font-black text-slate-900 text-sm">EduShop</div>
          <div class="text-[11px] text-slate-700">សម្ភារៈតុបតែងថ្នាក់ និងបង្រៀនគ្រប់កម្រិត</div>
          <div class="text-[11px] text-slate-700">📞 031 97 11 333 (ម្ចាស់ហាង) / 096 436 1201 / 069 490 108</div>
          <div class="text-[10.5px] text-slate-500">📍 ភូមិដំបូក១០០ ឃុំត្នោតជុំ ស្រុកក្រគរ ខេត្តពោធិ៍សាត់</div>
        </div>

        <div class="p-3 bg-amber-50/60 rounded-xl border border-amber-300 space-y-1">
          <span class="text-[10px] font-bold text-amber-800 uppercase">ជូនចំពោះអតិថិជន (CLIENT)</span>
          <div class="font-black text-slate-900 text-sm">${schoolName}</div>
          <div class="text-[11px] text-slate-700">អ្នកស្នើសុំ៖ <strong>${directorName}</strong></div>
          <div class="text-[11px] text-slate-700">📞 ${order.customerPhone || '-'}</div>
          <div class="text-[10.5px] text-slate-500">📍 ${order.customerAddress || '-'}</div>
        </div>
      </div>

      <div class="border border-slate-300 rounded-xl overflow-hidden">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-100 text-slate-700 text-[10.5px] font-bold uppercase border-b border-slate-300">
              <th class="py-2 px-1.5 text-center w-8">ល.រ</th>
              <th class="py-2 px-2.5">បរិយាយមុខទំនិញ / ទំហំ</th>
              <th class="py-2 px-2 text-center w-12">ចំនួន</th>
              <th class="py-2 px-2 text-right w-20">តម្លៃរៀល</th>
              <th class="py-2 px-2 text-right w-16">តម្លៃដុល្លារ</th>
              <th class="py-2 px-2 text-right w-24">សរុបរៀល</th>
              <th class="py-2 px-2 text-right w-20">សរុបដុល្លារ</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
          <tfoot>
            <tr class="bg-slate-50 font-bold text-xs border-t-2 border-slate-300">
              <td colspan="5" class="py-2.5 px-3 text-right">តម្លៃសរុបរួម (Grand Total)៖</td>
              <td class="py-2.5 px-2 text-right font-mono text-emerald-800 text-sm">${(order.totalUSD * 4000).toLocaleString()} ៛</td>
              <td class="py-2.5 px-2 text-right font-mono text-sky-800 text-sm">${formatUSD(order.totalUSD)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="text-[11px] text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
        <div class="font-bold text-slate-900">ចំណាំ និងលក្ខខណ្ឌ៖</div>
        <div>• តម្លៃខាងលើរួមបញ្ចូលទាំងការអ៊ុតស្វិតការពារទឹក និងវេចខ្ចប់យ៉ាងមានសុវត្ថិភាព។</div>
        <div>• លិខិតសម្រង់តម្លៃនេះមានសុពលភាពរយៈពេល ៣០ ថ្ងៃ គិតចាប់ពីថ្ងៃចេញលិខិត។</div>
      </div>

      <div class="grid grid-cols-2 gap-8 pt-4 text-xs text-center break-inside-avoid">
        <div class="space-y-16">
          <div>
            <span class="font-bold text-slate-800 block">បានឃើញ និងឯកភាព</span>
            <span class="text-[11px] text-slate-500">នាយកសាលា / គណៈគ្រប់គ្រង</span>
          </div>
          <div class="border-t border-dashed border-slate-400 pt-1 w-48 mx-auto text-slate-400 text-[10px]">
            ហត្ថលេខា និងត្រា
          </div>
        </div>

        <div class="space-y-16">
          <div>
            <span class="font-bold text-slate-800 block">អ្នករៀបចំសម្រង់តម្លៃ</span>
            <span class="text-[11px] text-slate-500">EduShop</span>
          </div>
          <div class="border-t border-dashed border-slate-400 pt-1 w-48 mx-auto text-slate-900 font-bold text-[11px]">
            EduShop
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeAdminQuotationModal() {
  const modal = document.getElementById('admin-quotation-modal');
  if (modal) modal.classList.add('hidden');
}

function printAdminQuotation() {
  document.body.classList.add('printing-quotation');
  window.print();
  setTimeout(() => {
    document.body.classList.remove('printing-quotation');
  }, 500);
}

// =========================================================================
// SECTION 11: SHIPPING FEE & DELIVERY CONFIGURATION (កំណត់តម្លៃសេវាផ្ញើទំនិញ)
// =========================================================================

const SHIPPING_STORAGE_KEY = 'edushop_shipping_settings';

const DEFAULT_SHIPPING_SETTINGS = {
  baseFeeUSD: 1.50,
  baseFeeKHR: 6000,
  deliveryEstimate: '១ ទៅ ២ ថ្ងៃ (24h - 48h)',
  deliveryPartners: 'វីរៈប៊ុនថាំ (VET), ជេ&ធី (J&T), ឡានឈ្នួល',
  homeDeliveryEnabled: true,
  homeDeliveryFeeUSD: 2.00,
  homeDeliveryFeeKHR: 8000,
  homeDeliveryEstimate: '២៤ម៉ោង - ៤៨ម៉ោង (ដឹកដល់មាត់ទ្វារ)',
  homeDeliveryNotes: 'ដឹកជូនដល់មុខផ្ទះ ឬមុខសាលារៀនផ្ទាល់ (Doorstep Delivery)',
  homeDeliveryPartners: 'Grab Express, J&T Doorstep, ភ្នាក់ងារដឹកផ្ទាល់',
  freeShippingEnabled: true,
  freeShippingMinUSD: 20.00,
  freeShippingMinKHR: 80000,
  freeShippingForSchool: true,
  ratesByLocation: [
    { id: 'loc-pp', location: 'រាជធានីភ្នំពេញ', feeUSD: 1.25, feeKHR: 5000, homeFeeUSD: 1.75, homeFeeKHR: 7000, note: 'ដឹកដល់ទីតាំង (Delivery)' },
    { id: 'loc-pursat', location: 'ខេត្តពោធិ៍សាត់ (ក្នុងខេត្ត)', feeUSD: 1.00, feeKHR: 4000, homeFeeUSD: 1.50, homeFeeKHR: 6000, note: 'ទីតាំងហាងផ្ទាល់' },
    { id: 'loc-provinces', location: 'បណ្ដាខេត្តទូទៅ (២៣ ខេត្ត)', feeUSD: 1.50, feeKHR: 6000, homeFeeUSD: 2.50, homeFeeKHR: 10000, note: 'ផ្ញើតាមឡាន / VET / J&T' },
    { id: 'loc-remote', location: 'ខេត្តឆ្ងាយ (រតនគិរី, មណ្ឌលគិរី, ស្ទឹងត្រែង, ព្រះវិហារ)', feeUSD: 2.00, feeKHR: 8000, homeFeeUSD: 3.00, homeFeeKHR: 12000, note: 'តំបន់ដាច់ស្រយាល' }
  ],
  updatedAt: new Date().toISOString()
};

let currentEditingShippingRates = [];

function getShippingSettings() {
  try {
    const raw = localStorage.getItem(SHIPPING_STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_SHIPPING_SETTINGS));
    const parsed = JSON.parse(raw);
    const mergedRates = Array.isArray(parsed.ratesByLocation) ? parsed.ratesByLocation.map(r => ({
      ...r,
      homeFeeUSD: (typeof r.homeFeeUSD === 'number') ? r.homeFeeUSD : (typeof r.feeUSD === 'number' ? parseFloat((r.feeUSD + 0.50).toFixed(2)) : 2.00),
      homeFeeKHR: (typeof r.homeFeeKHR === 'number') ? r.homeFeeKHR : Math.round(((typeof r.homeFeeUSD === 'number') ? r.homeFeeUSD : ((r.feeUSD || 1.5) + 0.5)) * 4000)
    })) : DEFAULT_SHIPPING_SETTINGS.ratesByLocation;

    return {
      ...DEFAULT_SHIPPING_SETTINGS,
      ...parsed,
      ratesByLocation: mergedRates
    };
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULT_SHIPPING_SETTINGS));
  }
}

function updateAdminShippingQuickBadge() {
  const settings = getShippingSettings();
  const badgeEl = document.getElementById('admin-shipping-quick-badge');
  if (badgeEl) {
    const usd = (typeof settings.baseFeeUSD === 'number') ? settings.baseFeeUSD : 1.50;
    const homeUsd = (typeof settings.homeDeliveryFeeUSD === 'number') ? settings.homeDeliveryFeeUSD : 2.00;
    if (settings.homeDeliveryEnabled) {
      badgeEl.textContent = `$${usd.toFixed(2)} | 🏠 $${homeUsd.toFixed(2)}`;
    } else {
      const khr = (typeof settings.baseFeeKHR === 'number') ? settings.baseFeeKHR : 6000;
      badgeEl.textContent = `$${usd.toFixed(2)} (${khr.toLocaleString()} ៛)`;
    }
  }
}

function onShippingUsdInput(val) {
  const usd = parseFloat(val) || 0;
  const khrEl = document.getElementById('admin-shipping-base-khr');
  if (khrEl) khrEl.value = Math.round(usd * 4000);
}

function onShippingKhrInput(val) {
  const khr = parseInt(val, 10) || 0;
  const usdEl = document.getElementById('admin-shipping-base-usd');
  if (usdEl) usdEl.value = (khr / 4000).toFixed(2);
}

function onHomeShippingUsdInput(val) {
  const usd = parseFloat(val) || 0;
  const khrEl = document.getElementById('admin-shipping-home-khr');
  if (khrEl) khrEl.value = Math.round(usd * 4000);
}

function onHomeShippingKhrInput(val) {
  const khr = parseInt(val, 10) || 0;
  const usdEl = document.getElementById('admin-shipping-home-usd');
  if (usdEl) usdEl.value = (khr / 4000).toFixed(2);
}

function toggleAdminHomeDeliveryInputs(enabled) {
  const fields = document.getElementById('admin-shipping-home-fields');
  if (!fields) return;
  if (enabled) {
    fields.classList.remove('opacity-40', 'pointer-events-none');
  } else {
    fields.classList.add('opacity-40', 'pointer-events-none');
  }
}

function onShippingFreeUsdInput(val) {
  const usd = parseFloat(val) || 0;
  const khrEl = document.getElementById('admin-shipping-free-min-khr');
  if (khrEl) khrEl.value = Math.round(usd * 4000);
}

function onShippingFreeKhrInput(val) {
  const khr = parseInt(val, 10) || 0;
  const usdEl = document.getElementById('admin-shipping-free-min-usd');
  if (usdEl) usdEl.value = (khr / 4000).toFixed(2);
}

function openShippingSettingsModal() {
  const modal = document.getElementById('admin-shipping-settings-modal');
  if (!modal) return;

  const settings = getShippingSettings();

  const baseUsdEl = document.getElementById('admin-shipping-base-usd');
  const baseKhrEl = document.getElementById('admin-shipping-base-khr');
  const estEl = document.getElementById('admin-shipping-delivery-estimate');
  const partEl = document.getElementById('admin-shipping-delivery-partners');

  const homeEnEl = document.getElementById('admin-shipping-home-enabled');
  const homeUsdEl = document.getElementById('admin-shipping-home-usd');
  const homeKhrEl = document.getElementById('admin-shipping-home-khr');
  const homeEstEl = document.getElementById('admin-shipping-home-estimate');
  const homePartEl = document.getElementById('admin-shipping-home-partners');
  const homeNoteEl = document.getElementById('admin-shipping-home-notes');

  const freeEnEl = document.getElementById('admin-shipping-free-enabled');
  const freeUsdEl = document.getElementById('admin-shipping-free-min-usd');
  const freeKhrEl = document.getElementById('admin-shipping-free-min-khr');
  const schoolFreeEl = document.getElementById('admin-shipping-school-free');

  if (baseUsdEl) baseUsdEl.value = settings.baseFeeUSD ?? 1.50;
  if (baseKhrEl) baseKhrEl.value = settings.baseFeeKHR ?? 6000;
  if (estEl) estEl.value = settings.deliveryEstimate || '១ ទៅ ២ ថ្ងៃ (24h - 48h)';
  if (partEl) partEl.value = settings.deliveryPartners || 'វីរៈប៊ុនថាំ (VET), ជេ&ធី (J&T), ឡានឈ្នួល';

  const isHomeEnabled = settings.homeDeliveryEnabled !== false;
  if (homeEnEl) homeEnEl.checked = isHomeEnabled;
  if (homeUsdEl) homeUsdEl.value = settings.homeDeliveryFeeUSD ?? 2.00;
  if (homeKhrEl) homeKhrEl.value = settings.homeDeliveryFeeKHR ?? 8000;
  if (homeEstEl) homeEstEl.value = settings.homeDeliveryEstimate || '២៤ម៉ោង - ៤៨ម៉ោង (ដឹកដល់មាត់ទ្វារ)';
  if (homePartEl) homePartEl.value = settings.homeDeliveryPartners || 'Grab Express, J&T Doorstep, ភ្នាក់ងារដឹកផ្ទាល់';
  if (homeNoteEl) homeNoteEl.value = settings.homeDeliveryNotes || 'ដឹកជូនដល់មុខផ្ទះ ឬមុខសាលារៀនផ្ទាល់ (Doorstep Delivery)';
  toggleAdminHomeDeliveryInputs(isHomeEnabled);

  if (freeEnEl) freeEnEl.checked = settings.freeShippingEnabled !== false;
  if (freeUsdEl) freeUsdEl.value = settings.freeShippingMinUSD ?? 20.00;
  if (freeKhrEl) freeKhrEl.value = settings.freeShippingMinKHR ?? 80000;
  if (schoolFreeEl) schoolFreeEl.checked = settings.freeShippingForSchool !== false;

  currentEditingShippingRates = JSON.parse(JSON.stringify(settings.ratesByLocation || []));
  renderShippingRegionsTable();

  modal.classList.remove('hidden');
}

function closeShippingSettingsModal() {
  const modal = document.getElementById('admin-shipping-settings-modal');
  if (!modal) return;
  modal.classList.add('hidden');
}

function renderShippingRegionsTable() {
  const tbody = document.getElementById('admin-shipping-regions-table-body');
  if (!tbody) return;

  if (currentEditingShippingRates.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="py-3 px-3 text-center text-slate-400">
          មិនទាន់មានតំបន់កំណត់ជាក់លាក់ទេ (ប្រើប្រាស់តម្លៃគោលទូទៅ)
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = currentEditingShippingRates.map((r, idx) => `
    <tr class="hover:bg-slate-50">
      <td class="py-1.5 px-3">
        <input 
          type="text" 
          value="${r.location || ''}" 
          oninput="updateShippingRegionField(${idx}, 'location', this.value)"
          placeholder="ឈ្មោះតំបន់/ខេត្ត..." 
          class="w-full px-2.5 py-1 text-xs font-semibold bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-amber-500"
        >
      </td>
      <td class="py-1.5 px-2 text-right">
        <div class="relative inline-block w-24">
          <input 
            type="number" 
            step="0.05"
            min="0"
            value="${r.feeUSD ?? 1.50}" 
            oninput="updateShippingRegionFee(${idx}, 'feeUSD', this.value)"
            class="w-full pl-2 pr-4 py-1 text-xs font-bold text-slate-900 text-right bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-amber-500"
          >
          <span class="absolute right-1.5 top-1 text-[10px] text-slate-400 font-bold">$</span>
        </div>
        <div class="text-[9.5px] text-slate-500 font-mono">${(r.feeKHR ?? Math.round((r.feeUSD ?? 1.5) * 4000)).toLocaleString()} ៛</div>
      </td>
      <td class="py-1.5 px-2 text-right">
        <div class="relative inline-block w-24">
          <input 
            type="number" 
            step="0.05"
            min="0"
            value="${r.homeFeeUSD ?? (r.feeUSD ? parseFloat((r.feeUSD + 0.50).toFixed(2)) : 2.00)}" 
            oninput="updateShippingRegionFee(${idx}, 'homeFeeUSD', this.value)"
            class="w-full pl-2 pr-4 py-1 text-xs font-bold text-amber-800 text-right bg-white border border-amber-300 rounded-lg focus:ring-1 focus:ring-amber-500"
          >
          <span class="absolute right-1.5 top-1 text-[10px] text-amber-600 font-bold">$</span>
        </div>
        <div class="text-[9.5px] text-amber-700 font-mono">${(r.homeFeeKHR ?? Math.round((r.homeFeeUSD ?? 2.0) * 4000)).toLocaleString()} ៛</div>
      </td>
      <td class="py-1.5 px-3">
        <input 
          type="text" 
          value="${r.note || ''}" 
          oninput="updateShippingRegionField(${idx}, 'note', this.value)"
          placeholder="សម្គាល់ (ឧ. ផ្ញើតាមឡាន...)" 
          class="w-full px-2.5 py-1 text-xs text-slate-600 bg-white border border-slate-300 rounded-lg focus:ring-1 focus:ring-amber-500"
        >
      </td>
      <td class="py-1.5 px-2 text-center">
        <button 
          type="button" 
          onclick="removeShippingRegionRow(${idx})" 
          class="text-rose-500 hover:text-rose-700 p-1 text-sm font-bold cursor-pointer"
          title="លុបតំបន់នេះ">
          ✕
        </button>
      </td>
    </tr>
  `).join('');
}

function addShippingRegionRow() {
  currentEditingShippingRates.push({
    id: 'loc-' + Date.now(),
    location: '',
    feeUSD: 1.50,
    feeKHR: 6000,
    homeFeeUSD: 2.00,
    homeFeeKHR: 8000,
    note: ''
  });
  renderShippingRegionsTable();
}

function removeShippingRegionRow(idx) {
  currentEditingShippingRates.splice(idx, 1);
  renderShippingRegionsTable();
}

function updateShippingRegionField(idx, field, val) {
  if (currentEditingShippingRates[idx]) {
    currentEditingShippingRates[idx][field] = val;
  }
}

function updateShippingRegionFee(idx, field, val) {
  if (!currentEditingShippingRates[idx]) return;
  if (field === 'feeUSD') {
    const usd = parseFloat(val) || 0;
    currentEditingShippingRates[idx].feeUSD = usd;
    currentEditingShippingRates[idx].feeKHR = Math.round(usd * 4000);
    renderShippingRegionsTable();
  } else if (field === 'feeKHR') {
    const khr = parseInt(val, 10) || 0;
    currentEditingShippingRates[idx].feeKHR = khr;
    currentEditingShippingRates[idx].feeUSD = parseFloat((khr / 4000).toFixed(2));
    renderShippingRegionsTable();
  } else if (field === 'homeFeeUSD') {
    const usd = parseFloat(val) || 0;
    currentEditingShippingRates[idx].homeFeeUSD = usd;
    currentEditingShippingRates[idx].homeFeeKHR = Math.round(usd * 4000);
    renderShippingRegionsTable();
  } else if (field === 'homeFeeKHR') {
    const khr = parseInt(val, 10) || 0;
    currentEditingShippingRates[idx].homeFeeKHR = khr;
    currentEditingShippingRates[idx].homeFeeUSD = parseFloat((khr / 4000).toFixed(2));
    renderShippingRegionsTable();
  }
}

function saveShippingSettings(e) {
  if (e) e.preventDefault();

  const baseUsd = parseFloat(document.getElementById('admin-shipping-base-usd')?.value) || 1.50;
  const baseKhr = parseInt(document.getElementById('admin-shipping-base-khr')?.value, 10) || Math.round(baseUsd * 4000);
  const estimate = document.getElementById('admin-shipping-delivery-estimate')?.value.trim() || '១ ទៅ ២ ថ្ងៃ (24h - 48h)';
  const partners = document.getElementById('admin-shipping-delivery-partners')?.value.trim() || 'វីរៈប៊ុនថាំ (VET), ជេ&ធី (J&T), ឡានឈ្នួល';

  // Home Delivery Fields
  const homeEnabled = document.getElementById('admin-shipping-home-enabled')?.checked ?? true;
  const homeUsd = parseFloat(document.getElementById('admin-shipping-home-usd')?.value) || 2.00;
  const homeKhr = parseInt(document.getElementById('admin-shipping-home-khr')?.value, 10) || Math.round(homeUsd * 4000);
  const homeEstimate = document.getElementById('admin-shipping-home-estimate')?.value.trim() || '២៤ម៉ោង - ៤៨ម៉ោង (ដឹកដល់មាត់ទ្វារ)';
  const homePartners = document.getElementById('admin-shipping-home-partners')?.value.trim() || 'Grab Express, J&T Doorstep, ភ្នាក់ងារដឹកផ្ទាល់';
  const homeNotes = document.getElementById('admin-shipping-home-notes')?.value.trim() || 'ដឹកជូនដល់មុខផ្ទះ ឬមុខសាលារៀនផ្ទាល់ (Doorstep Delivery)';

  const freeEnabled = document.getElementById('admin-shipping-free-enabled')?.checked ?? true;
  const freeMinUsd = parseFloat(document.getElementById('admin-shipping-free-min-usd')?.value) || 20.00;
  const freeMinKhr = parseInt(document.getElementById('admin-shipping-free-min-khr')?.value, 10) || Math.round(freeMinUsd * 4000);
  const schoolFree = document.getElementById('admin-shipping-school-free')?.checked ?? true;

  const validRates = (currentEditingShippingRates || []).filter(r => (r.location || '').trim().length > 0);

  const newSettings = {
    baseFeeUSD: baseUsd,
    baseFeeKHR: baseKhr,
    deliveryEstimate: estimate,
    deliveryPartners: partners,
    homeDeliveryEnabled: homeEnabled,
    homeDeliveryFeeUSD: homeUsd,
    homeDeliveryFeeKHR: homeKhr,
    homeDeliveryEstimate: homeEstimate,
    homeDeliveryPartners: homePartners,
    homeDeliveryNotes: homeNotes,
    freeShippingEnabled: freeEnabled,
    freeShippingMinUSD: freeMinUsd,
    freeShippingMinKHR: freeMinKhr,
    freeShippingForSchool: schoolFree,
    ratesByLocation: validRates.length > 0 ? validRates : DEFAULT_SHIPPING_SETTINGS.ratesByLocation,
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem(SHIPPING_STORAGE_KEY, JSON.stringify(newSettings));
  updateAdminShippingQuickBadge();
  closeShippingSettingsModal();
  showToast("🚚 បានរក្សាទុកការកំណត់តម្លៃសេវាផ្ញើទំនិញជោគជ័យ!", "emerald");
}

function resetShippingSettingsToDefault() {
  if (!confirm("តើអ្នកពិតជាចង់កំណត់តម្លៃសេវាផ្ញើទៅតម្លៃដើម (Default) វិញមែនទេ?")) {
    return;
  }
  localStorage.setItem(SHIPPING_STORAGE_KEY, JSON.stringify(DEFAULT_SHIPPING_SETTINGS));
  updateAdminShippingQuickBadge();
  openShippingSettingsModal();
  showToast("🔄 បានកំណត់តម្លៃសេវាផ្ញើទៅតម្លៃដើមជោគជ័យ!", "emerald");
}

// =========================================================================
// ================= ADMIN WEBSITE QR CODE ENGINE ==========================
// =========================================================================

function getAdminWebsiteUrl() {
  const custom = localStorage.getItem('edushop_website_url');
  if (custom && custom.trim()) {
    return custom.trim();
  }
  if (typeof window !== 'undefined' && window.location) {
    if (window.location.protocol.startsWith('http')) {
      const u = new URL(window.location.href);
      let path = u.pathname;
      if (path.endsWith('admin.html')) {
        path = path.replace('admin.html', 'index.html');
      }
      return `${u.origin}${path}`;
    }
  }
  return 'https://edushop-cambodia.com';
}

function getAdminWebsiteQrDataUrl(url, cellSize = 7, margin = 3) {
  if (typeof qrcode !== 'undefined' && url) {
    try {
      const qr = qrcode(0, 'M');
      qr.addData(url);
      qr.make();
      return qr.createDataURL(cellSize, margin);
    } catch (e) {
      console.warn('qrcode error for website URL:', e);
    }
  }
  return `https://api.qrserver.com/v1/create-qr-code/?size=450x450&margin=12&data=${encodeURIComponent(url || 'https://edushop-cambodia.com')}`;
}

function updateAdminWebsiteQrDisplay() {
  const url = getAdminWebsiteUrl();
  const dataUrl = getAdminWebsiteQrDataUrl(url);

  const img = document.getElementById('admin-website-qr-img');
  if (img) img.src = dataUrl;

  const input = document.getElementById('admin-website-qr-url-input');
  if (input && document.activeElement !== input) {
    input.value = url;
  }
}

function openAdminWebsiteQrModal() {
  updateAdminWebsiteQrDisplay();
  const modal = document.getElementById('admin-website-qr-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeAdminWebsiteQrModal() {
  const modal = document.getElementById('admin-website-qr-modal');
  if (modal) modal.classList.add('hidden');
}

function handleAdminWebsiteQrUrlInput(val) {
  const trimmed = val.trim();
  if (trimmed) {
    localStorage.setItem('edushop_website_url', trimmed);
  } else {
    localStorage.removeItem('edushop_website_url');
  }
  updateAdminWebsiteQrDisplay();
}

function resetAdminWebsiteUrl() {
  localStorage.removeItem('edushop_website_url');
  updateAdminWebsiteQrDisplay();
  showToast('✓ បានកំណត់តំណភ្ជាប់ទៅកាន់ទំព័របច្ចុប្បន្នវិញ');
}

function copyAdminWebsiteUrl() {
  const url = getAdminWebsiteUrl();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('✓ បានចម្លងតំណភ្ជាប់វេបសាយជោគជ័យ!');
    });
  } else {
    showToast('✓ បានចម្លងតំណភ្ជាប់៖ ' + url);
  }
}

function downloadAdminWebsiteQrCard() {
  const url = getAdminWebsiteUrl();
  const qrDataUrl = getAdminWebsiteQrDataUrl(url, 9, 2);

  const canvas = document.createElement('canvas');
  canvas.width = 750;
  canvas.height = 1050;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#0284c7';
  ctx.lineWidth = 10;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3;
  ctx.strokeRect(32, 32, canvas.width - 64, canvas.height - 64);

  const grad = ctx.createLinearGradient(45, 45, canvas.width - 90, 200);
  grad.addColorStop(0, '#0284c7');
  grad.addColorStop(0.5, '#2563eb');
  grad.addColorStop(1, '#4f46e5');
  ctx.fillStyle = grad;

  ctx.beginPath();
  const r = 24, x = 45, y = 45, w = canvas.width - 90, h = 185;
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.font = 'bold 42px "Kantumruy Pro", "Siemreap", sans-serif';
  ctx.fillText('📚 EduShop Cambodia', canvas.width / 2, 108);

  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 21px "Kantumruy Pro", "Siemreap", sans-serif';
  ctx.fillText('ហាងលក់សម្ភារឧបទេសសិក្សា & តុបតែងថ្នាក់រៀនបែបខ្មែរ', canvas.width / 2, 150);

  ctx.fillStyle = '#e0f2fe';
  ctx.font = 'bold 16px "Kantumruy Pro", "Siemreap", sans-serif';
  ctx.fillText('✨ OFFICIAL ONLINE STORE • កុម្ម៉ង់ទិញអនឡាញ ✨', canvas.width / 2, 186);

  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 27px "Kantumruy Pro", "Siemreap", sans-serif';
  ctx.fillText('📲 ស្កេន QR Code ដើម្បីចូលទស្សនាហាង', canvas.width / 2, 275);

  ctx.fillStyle = '#64748b';
  ctx.font = '17px "Kantumruy Pro", "Siemreap", sans-serif';
  ctx.fillText('បើកកាមេរ៉ាទូរស័ព្ទ (Camera) ឬ App ស្កេន QR ដើម្បីបើកទំព័រភ្លាមៗ', canvas.width / 2, 310);

  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(150, 340, 450, 450);
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 3;
  ctx.strokeRect(150, 340, 450, 450);

  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 185, 375, 380, 380);

    ctx.fillStyle = '#0284c7';
    ctx.font = 'bold 20px monospace';
    ctx.fillText(url, canvas.width / 2, 825);

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(60, 855);
    ctx.lineTo(canvas.width - 60, 855);
    ctx.stroke();

    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 22px "Kantumruy Pro", "Siemreap", sans-serif';
    ctx.fillText('👑 ម្ចាស់ហាង (Telegram/ទូរស័ព្ទ)៖ 031 97 11 333  |  096 436 1201', canvas.width / 2, 905);

    ctx.fillStyle = '#475569';
    ctx.font = 'bold 18px "Kantumruy Pro", "Siemreap", sans-serif';
    ctx.fillText('🚚 សេវាដឹកជញ្ជូនរហ័ស ២៥ ខេត្ត-ក្រុង  •  💧 ការពារទឹក ១០០%', canvas.width / 2, 948);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px "Kantumruy Pro", "Siemreap", sans-serif';
    ctx.fillText('📍 ស្រុកក្រគរ ខេត្តពោធិ៍សាត់', canvas.width / 2, 988);

    canvas.toBlob((blob) => {
      if (blob) {
        if (typeof downloadBlob === 'function') {
          downloadBlob(blob, 'edushop_website_qr_stand.png');
        } else {
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'edushop_website_qr_stand.png';
          a.click();
        }
        showToast('✓ បានទាញយកផ្ទាំង QR Code ជោគជ័យ!');
      }
    }, 'image/png');
  };
  img.src = qrDataUrl;
}

// =========================================================================
// SECTION 13: LOW STOCK ALERT NOTIFICATION BANNER & QUICK RESTOCK
// =========================================================================
let isLowStockBannerDismissed = false;

function updateLowStockAlerts() {
  const lowStockItems = (adminProducts || []).filter(p => (p.inStock === false) || (typeof p.stockQty === 'number' && p.stockQty <= 5));
  const navBadge = document.getElementById('admin-low-stock-nav-badge');
  const bannerContainer = document.getElementById('admin-low-stock-banner');

  if (navBadge) {
    if (lowStockItems.length > 0) {
      navBadge.textContent = `⚠️ ${lowStockItems.length} ជិតអស់`;
      navBadge.className = 'bg-rose-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold animate-pulse inline-block';
    } else {
      navBadge.className = 'hidden';
    }
  }

  if (!bannerContainer) return;

  if (lowStockItems.length === 0 || isLowStockBannerDismissed) {
    bannerContainer.className = 'hidden';
    bannerContainer.innerHTML = '';
    return;
  }

  bannerContainer.className = 'bg-gradient-to-r from-amber-50 via-rose-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 animate-fade-in block';
  bannerContainer.innerHTML = `
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-200/80 pb-3">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-xs">
          ⚠️
        </div>
        <div>
          <h4 class="font-extrabold text-amber-950 text-sm sm:text-base flex items-center gap-2">
            <span>ការជូនដំណឹងទំនិញជិតអស់ពីស្តុក (Low Stock Alerts)</span>
            <span class="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">${lowStockItems.length} មុខ</span>
          </h4>
          <p class="text-xs text-amber-900 font-medium mt-0.5">
            ទំនិញខាងក្រោមនេះមានចំនួនក្នុងស្តុកតិចជាង ឬស្មើ <strong>5 គ្រឿង</strong> ឬអស់ពីស្តុក។ ចុចប៊ូតុងខាងក្រោមដើម្បីបន្ថែមស្តុករហ័ស (+10, +20, +50)៖
          </p>
        </div>
      </div>
      <button onclick="dismissLowStockBanner()" class="text-xs text-amber-800 hover:text-amber-950 font-bold underline cursor-pointer whitespace-nowrap">
        ✕ បិទផ្ទាំងបណ្តោះអាសន្ន
      </button>
    </div>

    <!-- Low stock items cards list -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
      ${lowStockItems.map(item => {
        const qty = typeof item.stockQty === 'number' ? item.stockQty : 0;
        const isOut = item.inStock === false || qty === 0;
        return `
          <div class="bg-white p-3 rounded-xl border border-amber-200 shadow-2xs flex items-center justify-between gap-3">
            <div class="flex items-center gap-2.5 min-w-0">
              ${item.imageUrl 
                ? `<img src="${item.imageUrl}" class="w-11 h-11 object-cover rounded-lg border border-slate-200 shrink-0">` 
                : `<div class="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center text-xl shrink-0 border border-slate-200">${item.iconEmoji || '📦'}</div>`}
              <div class="min-w-0">
                <div class="font-bold text-slate-900 text-xs truncate" title="${item.name}">${item.name}</div>
                <div class="flex items-center gap-1.5 mt-0.5">
                  <span class="text-[11px] font-semibold ${isOut ? 'text-rose-600' : 'text-amber-700'}">
                    ${isOut ? '❌ អស់ពីស្តុក' : `⚠️ នៅសល់: <strong>${qty}</strong> គ្រឿង`}
                  </span>
                  <span class="text-[10px] text-slate-400">(${item.size || 'ស្តង់ដារ'})</span>
                </div>
              </div>
            </div>

            <!-- Quick Restock Actions -->
            <div class="flex items-center gap-1 shrink-0">
              <button 
                onclick="quickRestockProduct(${item.id}, 10)" 
                title="បន្ថែម 10 គ្រឿង" 
                class="px-2 py-1 bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 rounded-lg text-xs font-bold transition cursor-pointer active:scale-95">
                +10
              </button>
              <button 
                onclick="quickRestockProduct(${item.id}, 20)" 
                title="បន្ថែម 20 គ្រឿង" 
                class="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold transition cursor-pointer active:scale-95">
                +20
              </button>
              <button 
                onclick="quickRestockProduct(${item.id}, 50)" 
                title="បន្ថែម 50 គ្រឿង" 
                class="px-2 py-1 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded-lg text-xs font-bold transition cursor-pointer active:scale-95">
                +50
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function dismissLowStockBanner() {
  isLowStockBannerDismissed = true;
  const bannerContainer = document.getElementById('admin-low-stock-banner');
  if (bannerContainer) {
    bannerContainer.className = 'hidden';
    bannerContainer.innerHTML = '';
  }
}

function quickRestockProduct(productId, addQty) {
  const item = adminProducts.find(p => p.id === productId);
  if (!item) return;

  const current = typeof item.stockQty === 'number' ? item.stockQty : 0;
  item.stockQty = Math.max(0, current + addQty);
  if (item.stockQty > 0) {
    item.inStock = true;
  }
  isLowStockBannerDismissed = false;
  saveProducts();
  renderAdminTable();
  showToast(`🎉 បានបន្ថែមស្តុក «${item.name.slice(0, 18)}...» +${addQty} គ្រឿង! (ស្តុកសរុប៖ ${item.stockQty})`, 'emerald');
}

function promptQuickRestock(productId) {
  const item = adminProducts.find(p => p.id === productId);
  if (!item) return;
  const val = prompt(`បញ្ចូលចំនួនដែលអ្នកចង់បន្ថែមក្នុងស្តុកសម្រាប់ «${item.name}»៖`, "30");
  if (!val) return;
  const num = parseInt(val, 10);
  if (isNaN(num) || num <= 0) {
    alert("សូមបញ្ចូលចំនួនលេខវិជ្ជមានត្រឹមត្រូវ!");
    return;
  }
  quickRestockProduct(productId, num);
}

// =========================================================================
// SECTION 14: COURIER / DELIVERY TRACKING & TELEGRAM NOTIFICATION
// =========================================================================
let currentTrackingOrderId = null;

function openOrderTrackingModal(orderId) {
  const order = (adminOrders || []).find(o => o.id === orderId);
  if (!order) {
    showToast("រកមិនឃើញព័ត៌មានការបញ្ជាទិញនេះទេ!", "rose");
    return;
  }

  currentTrackingOrderId = orderId;
  const modal = document.getElementById('order-tracking-modal');
  if (!modal) return;

  // Header and Customer details
  const badgeEl = document.getElementById('tracking-modal-order-badge');
  const custNameEl = document.getElementById('tracking-modal-cust-name');
  const custPhoneEl = document.getElementById('tracking-modal-cust-phone');
  const custPhoneLink = document.getElementById('tracking-modal-cust-phone-link');
  const custAddressEl = document.getElementById('tracking-modal-cust-address');
  const totalPriceEl = document.getElementById('tracking-modal-total-price');
  const hiddenId = document.getElementById('tracking-modal-order-id');

  if (badgeEl) badgeEl.textContent = `#${order.invoiceNo || order.id || '0000'}`;
  if (custNameEl) custNameEl.textContent = order.customerName || '-';
  if (custPhoneEl) custPhoneEl.textContent = order.customerPhone || '-';
  if (custPhoneLink) {
    const cleanPh = (order.customerPhone || '').replace(/\D/g, '');
    custPhoneLink.href = cleanPh ? `tel:${cleanPh}` : '#';
  }
  if (custAddressEl) custAddressEl.textContent = order.customerAddress || '-';
  if (totalPriceEl) totalPriceEl.textContent = formatUSD(order.totalUSD || 0);
  if (hiddenId) hiddenId.value = order.id;

  // Courier Selector
  const courierSelect = document.getElementById('tracking-courier-select');
  const customCourierInput = document.getElementById('tracking-custom-courier-input');
  const customCourierContainer = document.getElementById('tracking-custom-courier-container');
  const waybillInput = document.getElementById('tracking-waybill-input');
  const dateInput = document.getElementById('tracking-date-input');
  const branchInput = document.getElementById('tracking-branch-input');
  const noteInput = document.getElementById('tracking-note-input');
  const statusSelect = document.getElementById('tracking-status-select');

  const knownCouriers = [
    "វិរៈប៊ុនថាំ (VET Express)",
    "J&T Express",
    "កាពីតូល (Capitol Express)",
    "ហ្វាយវ៍ស្តារ (Five Star Express)",
    "ឡានឈ្នួល / តាក់ស៊ី (Taxi / Local Bus)",
    "ដឹកជញ្ជូនផ្ទាល់ (Direct Delivery / Grab)"
  ];

  if (courierSelect) {
    if (order.courierName && knownCouriers.includes(order.courierName)) {
      courierSelect.value = order.courierName;
      if (customCourierContainer) customCourierContainer.classList.add('hidden');
    } else if (order.courierName) {
      courierSelect.value = "ផ្សេងៗ (Other)";
      if (customCourierContainer) customCourierContainer.classList.remove('hidden');
      if (customCourierInput) customCourierInput.value = order.courierName;
    } else {
      courierSelect.value = "វិរៈប៊ុនថាំ (VET Express)";
      if (customCourierContainer) customCourierContainer.classList.add('hidden');
      if (customCourierInput) customCourierInput.value = '';
    }
  }

  if (waybillInput) waybillInput.value = order.waybillNo || order.trackingNumber || '';
  if (dateInput) {
    dateInput.value = order.dispatchedAt ? order.dispatchedAt.slice(0, 10) : new Date().toISOString().slice(0, 10);
  }
  if (branchInput) branchInput.value = order.deliveryBranch || '';
  if (noteInput) noteInput.value = order.deliveryNote || '';
  if (statusSelect) {
    statusSelect.value = (order.status === 'completed' || order.status === 'processing') ? order.status : 'processing';
  }

  updateTrackingTelegramPreview();

  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeOrderTrackingModal() {
  const modal = document.getElementById('order-tracking-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  currentTrackingOrderId = null;
}

function onCourierSelectChange(val) {
  const customContainer = document.getElementById('tracking-custom-courier-container');
  if (customContainer) {
    if (val === "ផ្សេងៗ (Other)") {
      customContainer.classList.remove('hidden');
    } else {
      customContainer.classList.add('hidden');
    }
  }
  updateTrackingTelegramPreview();
}

function getSelectedCourierName() {
  const sel = document.getElementById('tracking-courier-select');
  if (!sel) return 'វិរៈប៊ុនថាំ (VET Express)';
  if (sel.value === "ផ្សេងៗ (Other)") {
    const custom = document.getElementById('tracking-custom-courier-input');
    return (custom && custom.value.trim()) ? custom.value.trim() : 'ក្រុមហ៊ុនដឹកជញ្ជូន';
  }
  return sel.value;
}

function updateTrackingTelegramPreview() {
  const previewBox = document.getElementById('tracking-telegram-preview');
  if (!previewBox || !currentTrackingOrderId) return;

  const order = (adminOrders || []).find(o => o.id === currentTrackingOrderId);
  if (!order) return;

  const courierName = getSelectedCourierName();
  const waybill = (document.getElementById('tracking-waybill-input')?.value || '').trim() || 'កំពុងដំណើរការ';
  const branch = (document.getElementById('tracking-branch-input')?.value || '').trim();
  const note = (document.getElementById('tracking-note-input')?.value || '').trim();

  const previewOrder = {
    ...order,
    courierName: courierName,
    waybillNo: waybill,
    deliveryBranch: branch,
    deliveryNote: note
  };

  previewBox.textContent = formatCustomerDeliveryMessage(previewOrder);
}

function formatCustomerDeliveryMessage(order) {
  const invNo = order.invoiceNo || order.id || '0001';
  const courier = order.courierName || 'ក្រុមហ៊ុនដឹកជញ្ជូន';
  const waybill = order.waybillNo || order.trackingNumber || 'មិនទាន់មាន';
  const branch = order.deliveryBranch ? `\n🏢 សាខា/គោលដៅ៖ ${order.deliveryBranch}` : '';
  const note = order.deliveryNote ? `\n📝 ចំណាំ៖ ${order.deliveryNote}` : '';

  return `📦 សួស្ដី ${order.customerName || 'អតិថិជន'}! កញ្ចប់ទំនិញរបស់អ្នកពី EduShop Cambodia ត្រូវបានផ្ញើរួចរាល់ហើយ៖\n\n🔖 លេខវិក្កយបត្រ៖ #${invNo}\n🚚 ក្រុមហ៊ុនដឹកជញ្ជូន៖ ${courier}\n🧾 លេខកូដបញ្ញើ (Tracking No)៖ ${waybill}${branch}${note}\n📍 អាសយដ្ឋានទទួល៖ ${order.customerAddress || '-'}\n💰 តម្លៃសរុប៖ ${formatUSD(order.totalUSD)} (${formatKHR(order.totalKHR)})\n💳 វិធីទូទាត់៖ ${order.paymentMethod || 'ទូទាត់រួចរាល់'}\n\nសូមរក្សាទូរស័ព្ទដើម្បីអ្នកដឹកជញ្ជូនងាយស្រួលទាក់ទងជូន។\nសូមអរគុណច្រើនសម្រាប់ការជាវសម្ភារៈអប់រំពី EduShop! 🌟`;
}

function copyTrackingTelegramMessage() {
  const previewBox = document.getElementById('tracking-telegram-preview');
  if (!previewBox) return;
  const text = previewBox.textContent || '';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("📋 បានចម្លងសារដំណឹងដឹកជញ្ជូនរួចរាល់!", "emerald");
    }).catch(() => {
      prompt("ចម្លងសារខាងក្រោម៖", text);
    });
  } else {
    prompt("ចម្លងសារខាងក្រោម៖", text);
  }
}

function saveOrderTrackingInfo() {
  if (!currentTrackingOrderId) return;
  const order = (adminOrders || []).find(o => o.id === currentTrackingOrderId);
  if (!order) return;

  const courierName = getSelectedCourierName();
  const waybill = (document.getElementById('tracking-waybill-input')?.value || '').trim();
  const dateVal = document.getElementById('tracking-date-input')?.value || '';
  const branchVal = (document.getElementById('tracking-branch-input')?.value || '').trim();
  const noteVal = (document.getElementById('tracking-note-input')?.value || '').trim();
  const newStatus = document.getElementById('tracking-status-select')?.value || 'processing';

  order.courierName = courierName;
  order.waybillNo = waybill;
  order.trackingNumber = waybill;
  order.dispatchedAt = dateVal ? new Date(dateVal).toISOString() : new Date().toISOString();
  order.deliveryBranch = branchVal;
  order.deliveryNote = noteVal;
  order.status = newStatus;

  saveAdminOrders();
  renderAdminOrdersTable();
  closeOrderTrackingModal();

  showToast(`💾 បានរក្សាទុកព័ត៌មានដឹកជញ្ជូនសម្រាប់វិក្កយបត្រ #${order.invoiceNo || order.id} រួចរាល់!`, "emerald");
}

function sendCustomerTrackingTelegram() {
  if (!currentTrackingOrderId) return;
  const order = (adminOrders || []).find(o => o.id === currentTrackingOrderId);
  if (!order) return;

  // Save current values first
  const courierName = getSelectedCourierName();
  const waybill = (document.getElementById('tracking-waybill-input')?.value || '').trim();
  const dateVal = document.getElementById('tracking-date-input')?.value || '';
  const branchVal = (document.getElementById('tracking-branch-input')?.value || '').trim();
  const noteVal = (document.getElementById('tracking-note-input')?.value || '').trim();
  const newStatus = document.getElementById('tracking-status-select')?.value || 'processing';

  order.courierName = courierName;
  order.waybillNo = waybill;
  order.trackingNumber = waybill;
  order.dispatchedAt = dateVal ? new Date(dateVal).toISOString() : new Date().toISOString();
  order.deliveryBranch = branchVal;
  order.deliveryNote = noteVal;
  order.status = newStatus;

  saveAdminOrders();
  renderAdminOrdersTable();
  closeOrderTrackingModal();

  notifyCustomerDeliveryTelegram(order.id);
}

function notifyCustomerDeliveryTelegram(orderId) {
  const order = (adminOrders || []).find(o => o.id === orderId);
  if (!order) return;

  const msg = formatCustomerDeliveryMessage(order);
  const cleanPhone = (order.customerPhone || '').replace(/\D/g, '');
  let intlPhone = cleanPhone;
  if (intlPhone.startsWith('0')) {
    intlPhone = '855' + intlPhone.slice(1);
  } else if (!intlPhone.startsWith('855') && intlPhone.length >= 8) {
    intlPhone = '855' + intlPhone;
  }

  // Copy to clipboard for easy pasting
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(msg).catch(() => {});
  }

  const tgUrl = intlPhone ? `https://t.me/+${intlPhone}?text=${encodeURIComponent(msg)}` : `https://t.me/share/url?url=&text=${encodeURIComponent(msg)}`;
  window.open(tgUrl, '_blank');
  showToast("📲 បានបើក Telegram ផ្ញើដំណឹងដឹកជញ្ជូន និងចម្លងសាររួចរាល់!", "emerald");
}

// ==============================================================================
// WEB AUDIO API REAL-TIME ORDER NOTIFICATION CHIME & LIVE ALERT BANNER
// ==============================================================================
let adminAudioCtx = null;
const ADMIN_SOUND_STORAGE_KEY = 'edushop_admin_order_sound_enabled';

function isOrderAlertSoundEnabled() {
  const val = localStorage.getItem(ADMIN_SOUND_STORAGE_KEY);
  return val === null ? true : val === 'true'; // default enabled
}

function toggleOrderAlertSound() {
  const current = isOrderAlertSoundEnabled();
  const next = !current;
  localStorage.setItem(ADMIN_SOUND_STORAGE_KEY, String(next));
  updateAdminSoundToggleUI();
  if (next) {
    testOrderNotificationSound();
    showToast("🔊 បានបើកសំឡេងរោទ៍ជូនដំណឹងកុម្ម៉ង់!", "sky");
  } else {
    showToast("🔇 បានបិទសំឡេងរោទ៍ជូនដំណឹង", "slate");
  }
}

function updateAdminSoundToggleUI() {
  const icon = document.getElementById('admin-sound-toggle-icon');
  const text = document.getElementById('admin-sound-toggle-text');
  const btn = document.getElementById('btn-admin-sound-toggle');
  const enabled = isOrderAlertSoundEnabled();
  if (icon) icon.textContent = enabled ? '🔊' : '🔇';
  if (text) text.textContent = enabled ? 'សំឡេងកុម្ម៉ង់: បើក' : 'សំឡេងកុម្ម៉ង់: បិទ';
  if (btn) {
    if (enabled) {
      btn.classList.add('bg-slate-700', 'text-slate-200');
      btn.classList.remove('bg-rose-900/60', 'text-rose-200');
    } else {
      btn.classList.remove('bg-slate-700', 'text-slate-200');
      btn.classList.add('bg-rose-900/60', 'text-rose-200');
    }
  }
}

function getAdminAudioContext() {
  if (!adminAudioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      adminAudioCtx = new AudioContextClass();
    }
  }
  if (adminAudioCtx && adminAudioCtx.state === 'suspended') {
    adminAudioCtx.resume().catch(() => {});
  }
  return adminAudioCtx;
}

function playOrderNotificationChime() {
  if (!isOrderAlertSoundEnabled()) return;
  try {
    const ctx = getAdminAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // First tone: E5 (659.25 Hz)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, now);
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.45);

    // Second tone: B5 (987.77 Hz)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(987.77, now + 0.15);
    gain2.gain.setValueAtTime(0.35, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.75);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.75);
  } catch (err) {
    console.warn("Audio chime error:", err);
  }
}

function testOrderNotificationSound() {
  playOrderNotificationChime();
  showToast("🔔 បានបន្លឺសំឡេងរោទ៍សាកល្បង!", "amber");
}

function showLiveOrderAlertBanner(order) {
  const banner = document.getElementById('admin-live-order-alert-banner');
  const desc = document.getElementById('admin-live-order-alert-desc');
  if (!banner) return;
  if (desc && order) {
    const name = order.customerName || 'អតិថិជន';
    const phone = order.customerPhone ? ` (${order.customerPhone})` : '';
    const total = order.totalUSD ? ` • សរុប $${Number(order.totalUSD).toFixed(2)}` : '';
    desc.textContent = `ការកុម្ម៉ង់ថ្មី៖ ${name}${phone}${total}។ សូមពិនិត្យមើលបញ្ជីកុម្ម៉ង់!`;
  }
  banner.classList.remove('hidden');
}

function dismissLiveOrderAlert() {
  const banner = document.getElementById('admin-live-order-alert-banner');
  if (banner) banner.classList.add('hidden');
}

// ==============================================================================
// ADMIN PROGRESSIVE WEB APP (PWA) INTEGRATION
// ==============================================================================
let deferredAdminPwaPrompt = null;

function initAdminPwa() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredAdminPwaPrompt = e;
    const btn = document.getElementById('btn-admin-pwa-install');
    if (btn) btn.classList.remove('hidden');
  });

  window.addEventListener('appinstalled', () => {
    deferredAdminPwaPrompt = null;
    showToast("🎉 EduShop Admin Dashboard ត្រូវបានដំឡើងរួចរាល់!", "emerald");
  });
}

function promptAdminPwaInstall() {
  if (deferredAdminPwaPrompt) {
    deferredAdminPwaPrompt.prompt();
    deferredAdminPwaPrompt.userChoice.then((choice) => {
      if (choice && choice.outcome === 'accepted') {
        showToast("✓ EduShop Admin App ត្រូវបានដំឡើង!", "emerald");
      }
      deferredAdminPwaPrompt = null;
    });
  } else {
    showToast("📲 លោកអ្នកអាច Add to Home Screen ឬ Install App តាម Browser Menu (⋮)", "sky");
  }
}

if (typeof window !== 'undefined') {
  window.notifyCustomerDeliveryTelegram = notifyCustomerDeliveryTelegram;
}


