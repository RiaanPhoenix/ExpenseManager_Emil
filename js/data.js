// ===========================
// PENINGUR — Mock Data (ISK)
// Realistic Icelandic spending
// ===========================

const APP_DATA = {
  user: {
    name: "Jón Sigurðsson",
    initials: "JS",
    email: "jon@example.is",
    plan: "Premium",
    memberSince: "Janúar 2025"
  },

  month: {
    name: "Apríl",
    year: "2025",
    totalSpent: 412800,
    lastMonthSpent: 382200,
    income: 680000,
    savings: 267200,
    savingsRate: 39,
    changePercent: 8,
    changeDirection: "up",
    daysLeft: 9,
    daysPassed: 21
  },

  categories: [
    { id: "housing",       name: "Húsnæði",          icon: "🏠", amount: 145000, budget: 145000, lastMonth: 145000, pct: 35, color: "#0EA5B0" },
    { id: "groceries",     name: "Matvörur",          icon: "🛒", amount: 112400, budget: 110000, lastMonth: 98200,  pct: 27, color: "#10B981" },
    { id: "restaurants",   name: "Veitingastaðir",    icon: "🍽️", amount: 58600,  budget: 45000,  lastMonth: 44800,  pct: 14, color: "#F59E0B" },
    { id: "fuel",          name: "Eldsneyti & bíll",  icon: "⛽", amount: 31800,  budget: 35000,  lastMonth: 28400,  pct: 8,  color: "#6366F1" },
    { id: "subscriptions", name: "Áskriftir",         icon: "📱", amount: 27600,  budget: 30000,  lastMonth: 24900,  pct: 7,  color: "#8B5CF6" },
    { id: "shopping",      name: "Verslun",           icon: "🛍️", amount: 21400,  budget: 25000,  lastMonth: 31200,  pct: 5,  color: "#EC4899" },
    { id: "health",        name: "Heilsa & íþróttir", icon: "💪", amount: 9800,   budget: 12000,  lastMonth: 9800,   pct: 2,  color: "#EF4444" },
    { id: "other",         name: "Annað",             icon: "📦", amount: 6200,   budget: 15000,  lastMonth: 8900,   pct: 2,  color: "#94A3B8" }
  ],

  transactions: [
    { id: 1,  date: "2025-04-21", merchant: "Bónus Breiðholt",     category: "groceries",     icon: "🛒", amount: -18400, note: "" },
    { id: 2,  date: "2025-04-21", merchant: "Spotify",             category: "subscriptions", icon: "🎵", amount: -2290,  note: "Mánaðarleg" },
    { id: 3,  date: "2025-04-20", merchant: "Orkan Fossvogsbraut", category: "fuel",          icon: "⛽", amount: -9800,  note: "" },
    { id: 4,  date: "2025-04-20", merchant: "Café Haiti",          category: "restaurants",   icon: "☕", amount: -1950,  note: "" },
    { id: 5,  date: "2025-04-19", merchant: "Netflix",             category: "subscriptions", icon: "🎬", amount: -2490,  note: "Mánaðarleg" },
    { id: 6,  date: "2025-04-19", merchant: "Krónan Mjódd",        category: "groceries",     icon: "🛒", amount: -12200, note: "" },
    { id: 7,  date: "2025-04-18", merchant: "Laun — Vinnustaður",  category: "income",        icon: "💰", amount: 680000, note: "Apríl 2025" },
    { id: 8,  date: "2025-04-18", merchant: "Leiga",               category: "housing",       icon: "🏠", amount: -145000,note: "Mánaðarleg" },
    { id: 9,  date: "2025-04-17", merchant: "Reykjavík Fitnessland",category:"health",         icon: "💪", amount: -9800,  note: "Mánaðarleg" },
    { id: 10, date: "2025-04-17", merchant: "Hlemmur Mathöll",     category: "restaurants",   icon: "🍽️", amount: -4800,  note: "" },
    { id: 11, date: "2025-04-16", merchant: "Apple iCloud+",       category: "subscriptions", icon: "🍎", amount: -1290,  note: "Mánaðarleg" },
    { id: 12, date: "2025-04-16", merchant: "Hagkaup Skeifan",     category: "groceries",     icon: "🛒", amount: -8900,  note: "" },
    { id: 13, date: "2025-04-15", merchant: "N1 Ármúli",           category: "fuel",          icon: "⛽", amount: -7400,  note: "" },
    { id: 14, date: "2025-04-14", merchant: "Zara Iceland",        category: "shopping",      icon: "🛍️", amount: -14900, note: "" },
    { id: 15, date: "2025-04-13", merchant: "Storytel",            category: "subscriptions", icon: "📚", amount: -1990,  note: "Mánaðarleg" },
    { id: 16, date: "2025-04-12", merchant: "Bónus Grafarvogur",   category: "groceries",     icon: "🛒", amount: -16800, note: "" },
    { id: 17, date: "2025-04-11", merchant: "Hornið Restaurant",   category: "restaurants",   icon: "🍽️", amount: -12400, note: "Kvöldmatur" },
    { id: 18, date: "2025-04-10", merchant: "Vodafone Iceland",    category: "subscriptions", icon: "📞", amount: -8990,  note: "Símaáskrift" },
    { id: 19, date: "2025-04-09", merchant: "Krónan Laugarás",     category: "groceries",     icon: "🛒", amount: -9400,  note: "" },
    { id: 20, date: "2025-04-08", merchant: "Íslenski bærinn",     category: "restaurants",   icon: "🍽️", amount: -8200,  note: "" },
    { id: 21, date: "2025-04-07", merchant: "Skólabrú bílastæði",  category: "fuel",          icon: "🅿️", amount: -3200,  note: "" },
    { id: 22, date: "2025-04-06", merchant: "PlayStation Network", category: "subscriptions", icon: "🎮", amount: -3990,  note: "Mánaðarleg" },
    { id: 23, date: "2025-04-05", merchant: "Costco Iceland",      category: "groceries",     icon: "🛒", amount: -22500, note: "" },
    { id: 24, date: "2025-04-04", merchant: "HM Iceland",          category: "shopping",      icon: "🛍️", amount: -6500,  note: "" },
    { id: 25, date: "2025-04-03", merchant: "Atlantsolía Mosfell", category: "fuel",          icon: "⛽", amount: -7800,  note: "" },
    { id: 26, date: "2025-04-02", merchant: "Nettó Grafarvogur",   category: "groceries",     icon: "🛒", amount: -11200, note: "" },
    { id: 27, date: "2025-04-01", merchant: "Google One",          category: "subscriptions", icon: "☁️", amount: -1590,  note: "Mánaðarleg" },
    { id: 28, date: "2025-04-01", merchant: "Síminn leiðsla",      category: "subscriptions", icon: "📶", amount: -6990,  note: "Mánaðarleg" },
    { id: 29, date: "2025-04-01", merchant: "Myndband.is",         category: "subscriptions", icon: "📺", amount: -1990,  note: "Mánaðarleg" }
  ],

  merchants: [
    { name: "Bónus",           category: "groceries",     icon: "🛒", amount: 48200, visits: 8,  change: +12 },
    { name: "Krónan",          category: "groceries",     icon: "🛒", amount: 31400, visits: 6,  change: -4 },
    { name: "Costco Iceland",  category: "groceries",     icon: "🛒", amount: 22500, visits: 2,  change: +8 },
    { name: "Hagkaup",         category: "groceries",     icon: "🛒", amount: 17900, visits: 3,  change: +2 },
    { name: "Vodafone",        category: "subscriptions", icon: "📞", amount: 8990,  visits: 1,  change: 0 },
    { name: "Hornið",          category: "restaurants",   icon: "🍽️", amount: 12400, visits: 2,  change: +31 },
    { name: "Hlemmur Mathöll", category: "restaurants",   icon: "🍽️", amount: 9800,  visits: 4,  change: +18 },
    { name: "Orkan",           category: "fuel",          icon: "⛽", amount: 18200, visits: 4,  change: +6 },
    { name: "N1",              category: "fuel",          icon: "⛽", amount: 13600, visits: 3,  change: 0 }
  ],

  recurring: [
    { name: "Leiga",              icon: "🏠", amount: 145000, freq: "Mánaðarleg", next: "1. maí", category: "housing",       status: "active" },
    { name: "Vodafone Iceland",   icon: "📞", amount: 8990,   freq: "Mánaðarleg", next: "1. maí", category: "subscriptions", status: "active" },
    { name: "Síminn leiðsla",     icon: "📶", amount: 6990,   freq: "Mánaðarleg", next: "1. maí", category: "subscriptions", status: "active" },
    { name: "Reykjavík Fitnessland",icon:"💪",amount: 9800,   freq: "Mánaðarleg", next: "17. maí",category: "health",        status: "active" },
    { name: "Netflix",            icon: "🎬", amount: 2490,   freq: "Mánaðarleg", next: "19. maí",category: "subscriptions", status: "active" },
    { name: "Spotify",            icon: "🎵", amount: 2290,   freq: "Mánaðarleg", next: "21. maí",category: "subscriptions", status: "active" },
    { name: "PlayStation Network",icon: "🎮", amount: 3990,   freq: "Mánaðarleg", next: "6. maí", category: "subscriptions", status: "review" },
    { name: "Storytel",           icon: "📚", amount: 1990,   freq: "Mánaðarleg", next: "13. maí",category: "subscriptions", status: "review" },
    { name: "Apple iCloud+",      icon: "🍎", amount: 1290,   freq: "Mánaðarleg", next: "16. maí",category: "subscriptions", status: "active" },
    { name: "Myndband.is",        icon: "📺", amount: 1990,   freq: "Mánaðarleg", next: "1. maí", category: "subscriptions", status: "review" },
    { name: "Google One",         icon: "☁️", amount: 1590,   freq: "Mánaðarleg", next: "1. maí", category: "subscriptions", status: "active" },
    { name: "Síminn TV",          icon: "📡", amount: 4990,   freq: "Mánaðarleg", next: "5. maí", category: "subscriptions", status: "active" }
  ],

  insights: [
    {
      type: "warning",
      icon: "🍽️",
      title: "Veitingastaðir 31% hærra en í mars",
      text: "Þú hefur eytt 58.600 kr á veitingastöðum í mánuðinum. Meðaltal síðustu þriggja mánaða er 44.800 kr."
    },
    {
      type: "info",
      icon: "📋",
      title: "12 áskriftir – 47.600 kr/mánuðinn",
      text: "Þrjár áskriftir virðast skarast eða notkun er lítil. Þess má gæta við PlayStation, Storytel og Myndband.is."
    },
    {
      type: "positive",
      icon: "💡",
      title: "Mögulegar sparnaðarmöguleikar",
      text: "Ef þú dregur úr veitingastöðum niður í meðaltal gætir þú sparað um 18.500 kr á maí."
    }
  ],

  monthlyTrend: [
    { month: "Nóv", amount: 394000 },
    { month: "Des", amount: 441000 },
    { month: "Jan", amount: 378000 },
    { month: "Feb", amount: 365000 },
    { month: "Mar", amount: 382200 },
    { month: "Apr", amount: 412800 }
  ]
};

// Helpers
function formatISK(amount) {
  const abs = Math.abs(amount);
  const formatted = abs.toLocaleString('is-IS').replace(/,/g, '.') + ' kr';
  return amount < 0 ? '−' + formatted : formatted;
}

function formatISKShort(amount) {
  if (amount >= 1000000) return (amount / 1000000).toFixed(1).replace('.', ',') + ' m.kr';
  if (amount >= 1000) return Math.round(amount / 1000) + ' þ.kr';
  return amount + ' kr';
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const months = ['jan','feb','mar','apr','maí','jún','júl','ágú','sep','okt','nóv','des'];
  return d.getDate() + '. ' + months[d.getMonth()];
}

function pctChange(current, prev) {
  return Math.round(((current - prev) / prev) * 100);
}
