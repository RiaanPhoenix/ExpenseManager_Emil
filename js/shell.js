// ===========================
// PENINGUR — App Shell
// Navigation & shared UI
// ===========================

const NAV_ITEMS = [
  { id: "dashboard",    label: "Yfirlit",        icon: "⬡", href: "/index.html" },
  { id: "transactions", label: "Færslur",         icon: "↕", href: "/pages/transactions.html" },
  { id: "categories",   label: "Flokkar",         icon: "◈", href: "/pages/categories.html" },
  { id: "merchants",    label: "Verslanir",        icon: "◉", href: "/pages/merchants.html" },
  { id: "recurring",    label: "Áskriftir",        icon: "↺", href: "/pages/recurring.html" },
  { id: "budgets",      label: "Fjárhagsáætlun",   icon: "◎", href: "/pages/budgets.html" },
  { id: "report",       label: "Mánaðarskýrsla",   icon: "▦", href: "/pages/report.html" },
];

function buildSidebar(activePage) {
  return `
<aside class="sidebar" id="sidebar">
  <div class="sidebar-logo">
    <div class="logo-mark">
      <div class="logo-icon">P</div>
      <div>
        <div class="logo-text">Peningur</div>
        <div class="logo-sub">Persónulegar fjármálagreiningar</div>
      </div>
    </div>
  </div>

  <nav class="sidebar-nav">
    <div class="nav-section-label">Aðalvalmynd</div>
    ${NAV_ITEMS.map(item => `
      <a href="${item.href}" class="nav-item${activePage === item.id ? ' active' : ''}">
        <span class="nav-icon" style="font-size:16px">${item.icon}</span>
        <span>${item.label}</span>
      </a>
    `).join('')}
  </nav>

  <div class="sidebar-footer">
    <div class="user-chip">
      <div class="user-avatar">${APP_DATA.user.initials}</div>
      <div class="user-info">
        <div class="user-name">${APP_DATA.user.name}</div>
        <div class="user-plan">${APP_DATA.user.plan} · ${APP_DATA.user.memberSince}</div>
      </div>
    </div>
  </div>
</aside>`;
}

function buildTopbar(title, subtitle) {
  return `
<header class="topbar">
  <div style="display:flex;align-items:center;gap:12px">
    <button class="btn btn-ghost btn-sm" id="sidebarToggle" onclick="document.getElementById('sidebar').classList.toggle('open')" style="display:none;padding:6px">
      &#9776;
    </button>
    <div>
      <div style="font-size:15px;font-weight:600;color:var(--text-primary)">${title}</div>
      ${subtitle ? `<div style="font-size:12px;color:var(--text-muted)">${subtitle}</div>` : ''}
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:12px">
    <button class="btn btn-secondary btn-sm" onclick="alert('Tenging við banka kæmi hér — Open Banking PSD2')">
      + Bæta við reikningi
    </button>
    <div class="user-avatar" style="width:36px;height:36px;font-size:14px;cursor:pointer">${APP_DATA.user.initials}</div>
  </div>
</header>
<script>
  (function(){
    var t = document.getElementById('sidebarToggle');
    if(window.innerWidth <= 900 && t) t.style.display = 'flex';
    window.addEventListener('resize', function(){
      if(t) t.style.display = window.innerWidth <= 900 ? 'flex' : 'none';
    });
  })();
<\/script>`;
}

function injectShell(pageId, title, subtitle) {
  const shell = document.getElementById('app-shell');
  if (!shell) return;

  shell.innerHTML = buildSidebar(pageId) + `
  <div class="main-content">
    ${buildTopbar(title, subtitle)}
    <div class="page-content" id="page-root"></div>
  </div>`;
}
