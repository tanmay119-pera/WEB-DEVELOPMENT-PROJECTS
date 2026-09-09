/**
 * ==============================================================================
 * FRIDAY-FRAMEWORK: GLOBAL "ANTI-FRAMEWORK" CONTROLLER (INDIA • UK • JAPAN)
 * ==============================================================================
 * 
 * High-performance, zero-dependency vanilla JS engine featuring:
 * - Multi-region Random User Generators (India 🇮🇳, United Kingdom 🇬🇧, Japan 🇯🇵)
 * - Buttery-smooth Scroll Navigation & Floating Quick Dock
 * - Reactive HTML5 <dialog> with 1-Click Presets & Live Preview Card
 * - Spotlight Cursor Glow & Physics-Based Spring Hover Motion
 * - Real-Time Search, Filtering, and Shard Syncing
 * ==============================================================================
 */

// REGIONAL DATASETS & GENERATORS (INDIA, UK, JAPAN)
const REGIONAL_POOLS = {
  india: {
    country: 'India',
    flag: '🇮🇳',
    code: 'in',
    names: [
      'Aarav Sharma', 'Priya Patel', 'Rohan Gupta', 'Ananya Iyer', 
      'Vikram Malhotra', 'Sneha Kulkarni', 'Devendra Singh', 'Kavya Nair', 
      'Ishaan Joshi', 'Pooja Reddy', 'Rajesh Kumar', 'Arjun Kapoor'
    ],
    datacenters: [
      'ap-south-1 (Mumbai Tier-4)',
      'blr-dc-02 (Bengaluru Tech Park)',
      'del-edge-01 (Delhi NCR)',
      'ap-south-2 (Hyderabad Hub)',
      'pnq-zone-a (Pune Edge)',
      'maa-dc-01 (Chennai Coastal)'
    ],
    roles: [
      'Lead Database Administrator',
      'Platform Reliability Engineer',
      'Vector Search Specialist',
      'High-Concurrency Cache Lead',
      'Distributed Storage Architect'
    ],
    shardPrefixes: ['bom', 'blr', 'del', 'hyd', 'pnq', 'maa']
  },
  uk: {
    country: 'United Kingdom',
    flag: '🇬🇧',
    code: 'uk',
    names: [
      'Oliver Smith', 'Emma Watson', 'Arthur Pendelton', 'Charlotte Davies',
      'George Clark', 'Liam Harris', 'Sophie Taylor', 'Harry Evans',
      'Alistair Finch', 'Poppy Hughes'
    ],
    datacenters: [
      'eu-west-2 (London Docklands)',
      'uk-man-01 (Manchester Edge)',
      'uk-edi-02 (Edinburgh Tech Hub)',
      'uk-bri-01 (Bristol Tier-3)'
    ],
    roles: [
      'Principal Distributed Systems Lead',
      'Low-Latency OLAP Architect',
      'Database Reliability Engineer',
      'Cloud Infrastructure Lead',
      'PostgreSQL Core Contributor'
    ],
    shardPrefixes: ['lon', 'man', 'edi', 'bri']
  },
  japan: {
    country: 'Japan',
    flag: '🇯🇵',
    code: 'jp',
    names: [
      'Kenji Sato', 'Haruto Takahashi', 'Yui Tanaka', 'Ren Watanabe',
      'Sakura Ito', 'Daiki Suzuki', 'Aoi Nakamura', 'Kaito Kobayashi',
      'Hinata Yamamoto', 'Takumi Fujimoto'
    ],
    datacenters: [
      'ap-northeast-1 (Tokyo Equinix TY3)',
      'ap-northeast-3 (Osaka Cloud Hub)',
      'jp-ngo-01 (Nagoya Cloud Zone)',
      'jp-fuk-02 (Fukuoka Edge)'
    ],
    roles: [
      'High-Speed Memory Architect',
      'Vector & LLM Embeddings DBA',
      'Kernel & Storage Specialist',
      'Distributed Consensus Engineer',
      'Real-Time Cluster Lead'
    ],
    shardPrefixes: ['tyo', 'osa', 'ngo', 'fuk']
  }
};

const ENGINES = [
  'PostgreSQL 16',
  'Redis 7.2 Memory',
  'Qdrant Vector DB',
  'ClickHouse OLAP',
  'ScyllaDB NoSQL'
];

// INITIAL GLOBAL TEAM ROSTER
let globalTeamMembers = [
  { name: 'Tanmay', country: 'india', flag: '🇮🇳', role: 'Super Admin & Lead Architect', avatarClass: 'avatar-in', shards: 6, engine: 'PostgreSQL 16', latency: '1.2ms', status: 'Online' },
  { name: 'Aarav Sharma', country: 'india', flag: '🇮🇳', role: 'Mumbai Lead DBA', avatarClass: 'avatar-in', shards: 3, engine: 'PostgreSQL 16', latency: '2.1ms', status: 'Online' },
  { name: 'Oliver Smith', country: 'uk', flag: '🇬🇧', role: 'London Distributed Lead', avatarClass: 'avatar-uk', shards: 2, engine: 'PostgreSQL 16', latency: '1.5ms', status: 'Online' },
  { name: 'Kenji Sato', country: 'japan', flag: '🇯🇵', role: 'Tokyo High-Speed Cache DBA', avatarClass: 'avatar-jp', shards: 2, engine: 'Redis 7.2 Memory', latency: '0.4ms', status: 'Online' },
  { name: 'Priya Patel', country: 'india', flag: '🇮🇳', role: 'Bengaluru Cache Specialist', avatarClass: 'avatar-in', shards: 2, engine: 'Redis 7.2 Memory', latency: '0.7ms', status: 'Online' },
  { name: 'Emma Watson', country: 'uk', flag: '🇬🇧', role: 'Manchester OLAP Architect', avatarClass: 'avatar-uk', shards: 2, engine: 'ClickHouse OLAP', latency: '2.8ms', status: 'Online' },
  { name: 'Haruto Takahashi', country: 'japan', flag: '🇯🇵', role: 'Osaka Vector Search Lead', avatarClass: 'avatar-jp', shards: 1, engine: 'Qdrant Vector DB', latency: '3.2ms', status: 'Online' },
  { name: 'Rohan Gupta', country: 'india', flag: '🇮🇳', role: 'Delhi Edge Reliability Lead', avatarClass: 'avatar-in', shards: 2, engine: 'MySQL 8.4', latency: '3.4ms', status: 'Online' },
  { name: 'Ananya Iyer', country: 'india', flag: '🇮🇳', role: 'Hyderabad Systems Lead', avatarClass: 'avatar-in', shards: 1, engine: 'Qdrant Vector DB', latency: '4.6ms', status: 'Online' },
  { name: 'Yui Tanaka', country: 'japan', flag: '🇯🇵', role: 'Kyoto Storage Lead', avatarClass: 'avatar-jp', shards: 1, engine: 'ScyllaDB NoSQL', latency: '1.9ms', status: 'Online' },
  { name: 'Arthur Pendelton', country: 'uk', flag: '🇬🇧', role: 'Edinburgh Infrastructure DBA', avatarClass: 'avatar-uk', shards: 1, engine: 'PostgreSQL 16', latency: '2.4ms', status: 'Online' },
  { name: 'Vikram Malhotra', country: 'india', flag: '🇮🇳', role: 'Pune Analytics Engineer', avatarClass: 'avatar-in', shards: 1, engine: 'ClickHouse OLAP', latency: '14.8ms', status: 'Online' }
];

document.addEventListener('DOMContentLoaded', () => {
  console.log('%cfriday-framework%c Global Cloud Grid • India 🇮🇳 • UK 🇬🇧 • Japan 🇯🇵 • Admin: Tanmay', 
    'background: #6366f1; color: #fff; font-weight: bold; padding: 3px 8px; border-radius: 4px;',
    'color: #10b981; font-weight: bold; padding-left: 4px;'
  );

  // Initialize interactive components
  initTopLoader();
  initSidebar();
  initMetricCounters();
  initSyncAction();
  initTableFilters();
  initRegionTabs();
  initGlobalSearch();
  initRandomCountryButtons();
  initDeployModal();
  initTeamRoster();
  initQuickScrollDock();
  initScrollSpyAndReveal();
  initSpotlightMotion();
  initNotificationDropdown();
  initKeyboardShortcuts();
  updateShardCounts();
});

/* ==============================================================================
   1. TOP PROGRESS / LOADING BAR MODULE
   ==============================================================================
*/
const TopLoader = {
  element: document.getElementById('top-loader'),
  progress: 0,
  timer: null,

  start() {
    if (!this.element) return;
    this.progress = 15;
    this.element.classList.add('loading');
    this.element.style.width = `${this.progress}%`;

    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.progress < 85) {
        const step = Math.random() * 15 + 5;
        this.progress = Math.min(85, this.progress + step);
        this.element.style.width = `${this.progress}%`;
      }
    }, 90);
  },

  done() {
    if (!this.element) return;
    clearInterval(this.timer);
    this.progress = 100;
    this.element.style.width = '100%';

    setTimeout(() => {
      this.element.classList.remove('loading');
      setTimeout(() => {
        this.element.style.width = '0%';
        this.progress = 0;
      }, 250);
    }, 200);
  }
};

function initTopLoader() {
  TopLoader.start();
  setTimeout(() => TopLoader.done(), 450);
}

/* ==============================================================================
   2. TOAST NOTIFICATION SYSTEM
   ==============================================================================
*/
const Toast = {
  container: document.getElementById('toast-container'),

  show(message, type = 'info', duration = 3200) {
    if (!this.container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    let iconChar = 'ℹ';
    if (type === 'success') iconChar = '✓';
    if (type === 'warning') iconChar = '⚡';

    toast.innerHTML = `
      <div class="toast-icon toast-${type}">${iconChar}</div>
      <div class="toast-message">${message}</div>
    `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-hiding');
      toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, duration);
  }
};

/* ==============================================================================
   3. ANIMATED METRIC COUNTERS
   ==============================================================================
*/
function animateCounters() {
  const counterElements = document.querySelectorAll('.counter-value');

  counterElements.forEach(el => {
    const target = parseFloat(el.dataset.target);
    const format = el.dataset.format || 'integer';
    const duration = 750;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = target * easeProgress;

      if (format === 'decimal') {
        el.textContent = currentVal.toFixed(1);
      } else {
        el.textContent = Math.round(currentVal).toLocaleString();
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        if (format === 'decimal') el.textContent = target.toFixed(1);
        else el.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

function initMetricCounters() {
  animateCounters();
}

/* ==============================================================================
   4. SIDEBAR NAVIGATION CONTROLLER
   ==============================================================================
*/
function initSidebar() {
  const layout = document.getElementById('app-layout');
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const backdrop = document.getElementById('sidebar-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const breadcrumbCurrent = document.getElementById('current-page-crumb');

  if (toggleBtn && layout) {
    toggleBtn.addEventListener('click', () => {
      layout.classList.toggle('sidebar-is-collapsed');
      const isCollapsed = layout.classList.contains('sidebar-is-collapsed');
      localStorage.setItem('friday_sidebar_collapsed', isCollapsed ? 'true' : 'false');
    });

    if (localStorage.getItem('friday_sidebar_collapsed') === 'true') {
      layout.classList.add('sidebar-is-collapsed');
    }
  }

  if (mobileMenuBtn && sidebar && backdrop) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.add('mobile-open');
      backdrop.classList.add('active');
    });

    backdrop.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      backdrop.classList.remove('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
      link.closest('.nav-item').classList.add('active');

      const routeName = link.querySelector('.nav-label')?.textContent || 'Database Nodes';
      const routeKey = link.dataset.route;
      if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = routeName;
      }

      if (sidebar) sidebar.classList.remove('mobile-open');
      if (backdrop) backdrop.classList.remove('active');

      // Smooth scroll target based on route
      if (routeKey === 'database') {
        smoothScrollTo('database-section');
      } else if (routeKey === 'analytics') {
        smoothScrollTo('metrics-section');
      } else if (routeKey === 'users') {
        smoothScrollTo('team-section');
      } else if (routeKey === 'deployments') {
        openModal();
      } else {
        smoothScrollTo('overview-section');
      }

      Toast.show(`Navigated to ${routeName}`, 'info', 1600);
    });
  });

  const userMenuBtn = document.getElementById('user-menu-btn');
  if (userMenuBtn) {
    userMenuBtn.addEventListener('click', () => {
      Toast.show('Lead Admin: Tanmay • Global Cloud Root Access', 'info', 2500);
    });
  }
}

/* ==============================================================================
   5. SYNC / REFRESH METRICS BUTTON ACTION
   ==============================================================================
*/
function initSyncAction() {
  const syncBtn = document.getElementById('refresh-metrics-btn');
  if (!syncBtn) return;

  syncBtn.addEventListener('click', () => {
    const icon = syncBtn.querySelector('.spin-target');
    if (icon) icon.classList.add('is-spinning');
    syncBtn.disabled = true;

    TopLoader.start();

    setTimeout(() => {
      const recordsEl = document.querySelector('[data-card="revenue"] .counter-value');
      const qpsEl = document.querySelector('[data-card="conversion"] .counter-value');
      const latencyEl = document.querySelector('[data-card="latency"] .counter-value');

      if (recordsEl) {
        const newRecords = 14298000 + Math.floor(Math.random() * 4500);
        recordsEl.dataset.target = newRecords;
      }
      if (qpsEl) {
        const newQps = 94000 + Math.floor(Math.random() * 2100);
        qpsEl.dataset.target = newQps;
      }
      if (latencyEl) {
        const newLat = (1.8 + Math.random() * 0.9).toFixed(1);
        latencyEl.dataset.target = newLat;
      }

      animateCounters();
      TopLoader.done();
      if (icon) icon.classList.remove('is-spinning');
      syncBtn.disabled = false;

      Toast.show('Global telemetry synchronized across India, UK, and Japan!', 'success', 2800);
    }, 600);
  });
}

/* ==============================================================================
   6. TABLE FILTERING (Status: All, Primary, Replica, Syncing)
   ==============================================================================
*/
function initTableFilters() {
  const filterPills = document.querySelectorAll('.database-panel .filter-pill');
  const emptyState = document.getElementById('table-empty-state');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const selectedFilter = pill.dataset.filter;
      const tableRows = document.querySelectorAll('#table-body tr');
      let visibleCount = 0;

      tableRows.forEach(row => {
        const rowStatus = row.dataset.status;
        const matches = (selectedFilter === 'all' || rowStatus === selectedFilter);

        if (matches) {
          row.style.display = '';
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.classList.toggle('hidden', visibleCount > 0);
      }
    });
  });
}

/* ==============================================================================
   7. REGION SELECTOR TABS (India, UK, Japan, Mumbai, London, Tokyo, All)
   ==============================================================================
*/
function initRegionTabs() {
  const regionTabs = document.querySelectorAll('.time-tab');
  const emptyState = document.getElementById('table-empty-state');

  regionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      regionTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const regionKey = tab.dataset.period;
      const tableRows = document.querySelectorAll('#table-body tr');
      let count = 0;

      tableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        const rowCountry = row.dataset.country || (rowText.includes('london') || rowText.includes('uk') ? 'uk' : (rowText.includes('tokyo') || rowText.includes('japan') || rowText.includes('osaka') ? 'japan' : 'india'));
        let matches = true;

        if (regionKey === 'india') matches = rowCountry === 'india' || rowText.includes('mumbai') || rowText.includes('bengaluru') || rowText.includes('delhi') || rowText.includes('india');
        else if (regionKey === 'uk') matches = rowCountry === 'uk' || rowText.includes('london') || rowText.includes('manchester') || rowText.includes('uk');
        else if (regionKey === 'japan') matches = rowCountry === 'japan' || rowText.includes('tokyo') || rowText.includes('osaka') || rowText.includes('japan');
        else if (regionKey === 'mumbai') matches = rowText.includes('mumbai');
        else if (regionKey === 'london') matches = rowText.includes('london');
        else if (regionKey === 'tokyo') matches = rowText.includes('tokyo');

        if (matches) {
          row.style.display = '';
          count++;
        } else {
          row.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.classList.toggle('hidden', count > 0);
      }

      Toast.show(`Showing ${tab.textContent.trim()}: ${count} active shards`, 'info', 1800);
    });
  });
}

/* ==============================================================================
   8. REAL-TIME SEARCH (Indian, UK, Japan Names, Shards, Engines)
   ==============================================================================
*/
function initGlobalSearch() {
  const searchInput = document.getElementById('global-search-input');
  const emptyState = document.getElementById('table-empty-state');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const tableRows = document.querySelectorAll('#table-body tr');
    let visibleCount = 0;

    tableRows.forEach(row => {
      const rowText = row.textContent.toLowerCase();
      const matches = rowText.includes(query);

      if (matches) {
        row.style.display = '';
        visibleCount++;
      } else {
        row.style.display = 'none';
      }
    });

    if (emptyState) {
      emptyState.classList.toggle('hidden', visibleCount > 0);
    }

    // Also filter team roster
    const teamCards = document.querySelectorAll('.engineer-card');
    teamCards.forEach(card => {
      const cardText = card.textContent.toLowerCase();
      card.style.display = cardText.includes(query) ? '' : 'none';
    });
  });
}

/* ==============================================================================
   9. RANDOM USER GENERATOR BUTTONS (INDIAN, UK, JAPAN)
   ==============================================================================
*/
function initRandomCountryButtons() {
  const btnIndian = document.getElementById('btn-random-indian');
  const btnUk = document.getElementById('btn-random-uk');
  const btnJapan = document.getElementById('btn-random-japan');

  if (btnIndian) btnIndian.addEventListener('click', () => spawnRandomUser('india'));
  if (btnUk) btnUk.addEventListener('click', () => spawnRandomUser('uk'));
  if (btnJapan) btnJapan.addEventListener('click', () => spawnRandomUser('japan'));

  // Quick Add User buttons
  const addButtons = [
    document.getElementById('open-user-modal-btn'),
    document.getElementById('quick-add-user-btn'),
    document.getElementById('team-add-user-btn'),
    document.getElementById('dock-add-user-btn'),
    document.getElementById('open-deploy-modal-btn')
  ];

  addButtons.forEach(btn => {
    if (btn) btn.addEventListener('click', () => openModal());
  });
}

function spawnRandomUser(countryKey) {
  const pool = REGIONAL_POOLS[countryKey];
  if (!pool) return;

  TopLoader.start();

  // Pick random details
  const randomName = pool.names[Math.floor(Math.random() * pool.names.length)];
  const randomRole = pool.roles[Math.floor(Math.random() * pool.roles.length)];
  const randomDc = pool.datacenters[Math.floor(Math.random() * pool.datacenters.length)];
  const randomEngine = ENGINES[Math.floor(Math.random() * ENGINES.length)];
  const prefix = pool.shardPrefixes[Math.floor(Math.random() * pool.shardPrefixes.length)];
  const shardId = `#${prefix}-${countryKey.slice(0, 2)}-${Math.floor(100 + Math.random() * 900)}`;
  const shardName = `${randomEngine.split(' ')[0].toLowerCase()}_cluster_${prefix}_${Math.floor(10 + Math.random() * 90)}`;
  const latencyVal = (0.5 + Math.random() * 3.5).toFixed(1) + 'ms';
  const initials = randomName.split(' ').map(n => n[0]).join('').substring(0, 2);

  setTimeout(() => {
    TopLoader.done();

    // 1. Prepend to table body
    const tableBody = document.getElementById('table-body');
    if (tableBody) {
      const newRow = document.createElement('tr');
      newRow.dataset.status = 'primary';
      newRow.dataset.country = countryKey;
      newRow.className = 'db-row row-highlight-new';

      let avatarClass = 'avatar-in';
      let iconColor = 'icon-emerald';
      if (countryKey === 'uk') { avatarClass = 'avatar-uk'; iconColor = 'icon-blue'; }
      if (countryKey === 'japan') { avatarClass = 'avatar-jp'; iconColor = 'icon-red'; }

      newRow.innerHTML = `
        <td>
          <div class="resource-cell">
            <div class="resource-icon ${iconColor}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
            </div>
            <div>
              <div class="resource-name">${shardName}</div>
              <div class="resource-id">shard-id: ${shardId}</div>
            </div>
          </div>
        </td>
        <td><span class="engine-badge engine-postgres">${randomEngine}</span></td>
        <td>
          <div class="engineer-tag">
            <span class="engineer-avatar ${avatarClass}">${initials}</span>
            <span class="engineer-name">${randomName} <span class="country-flag">${pool.flag}</span></span>
          </div>
        </td>
        <td><span class="region-pill">${randomDc}</span></td>
        <td><span class="status-pill status-success"><span class="dot animate-pulse"></span>Active Synced</span></td>
        <td>
          <div class="table-storage-bar">
            <div class="storage-meta"><span>${Math.floor(200 + Math.random() * 800)} GB / 2 TB</span><span>35%</span></div>
            <div class="progress-track"><div class="progress-fill fill-emerald" style="width: 35%;"></div></div>
          </div>
        </td>
        <td><span class="mono-text latency-fast">${latencyVal}</span></td>
        <td class="text-right">
          <button class="table-action-btn btn-action-glow" onclick="queryNode('${shardName}')">Query</button>
        </td>
      `;

      tableBody.prepend(newRow);
    }

    // 2. Add to team roster
    globalTeamMembers.unshift({
      name: randomName,
      country: countryKey,
      flag: pool.flag,
      role: randomRole,
      avatarClass: countryKey === 'uk' ? 'avatar-uk' : (countryKey === 'japan' ? 'avatar-jp' : 'avatar-in'),
      shards: 1,
      engine: randomEngine,
      latency: latencyVal,
      status: 'Online'
    });
    renderTeamGrid('all');

    // 3. Update counter & footer
    updateShardCounts();

    // 4. Toast notification
    Toast.show(`🎉 Added ${pool.flag} ${randomName} (${pool.country}) on shard ${shardName}!`, 'success', 3600);

    // 5. Smooth scroll down to table
    smoothScrollTo('database-section');
  }, 400);
}

/* ==============================================================================
   10. TEAM ROSTER MODULE & GRID RENDERER
   ==============================================================================
*/
function initTeamRoster() {
  renderTeamGrid('all');

  const teamPills = document.querySelectorAll('.team-filter-group .filter-pill');
  teamPills.forEach(pill => {
    pill.addEventListener('click', () => {
      teamPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderTeamGrid(pill.dataset.teamFilter || 'all');
    });
  });
}

function renderTeamGrid(filter = 'all') {
  const grid = document.getElementById('team-grid');
  const countBadge = document.getElementById('team-count-badge');
  if (!grid) return;

  const filtered = globalTeamMembers.filter(m => filter === 'all' || m.country === filter);

  if (countBadge) {
    countBadge.textContent = globalTeamMembers.length;
  }

  grid.innerHTML = filtered.map(member => {
    const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    return `
      <div class="engineer-card" data-country="${member.country}">
        <div class="engineer-card-header">
          <div class="card-avatar ${member.avatarClass}">${initials}</div>
          <div class="engineer-card-title">
            <div class="card-name-row">
              <span class="card-name">${member.name}</span>
              <span class="country-flag">${member.flag}</span>
            </div>
            <span class="card-role">${member.role}</span>
          </div>
          <span class="country-badge-pill">${member.country.toUpperCase()}</span>
        </div>

        <div class="engineer-card-body">
          <div class="card-metric-row">
            <span class="card-metric-label">Managed Engine:</span>
            <span class="card-metric-val">${member.engine}</span>
          </div>
          <div class="card-metric-row">
            <span class="card-metric-label">Assigned Shards:</span>
            <span class="card-metric-val">${member.shards} active node(s)</span>
          </div>
          <div class="card-metric-row">
            <span class="card-metric-label">Network Latency:</span>
            <span class="card-metric-val mono-text latency-fast">${member.latency}</span>
          </div>
        </div>

        <div class="engineer-card-footer">
          <button class="card-action-btn btn-ping" onclick="pingEngineer('${member.name}')">⚡ Ping Node</button>
          <button class="card-action-btn" onclick="inspectEngineer('${member.name}')">Inspect</button>
        </div>
      </div>
    `;
  }).join('');
}

window.pingEngineer = function(name) {
  TopLoader.start();
  setTimeout(() => {
    TopLoader.done();
    Toast.show(`Telemetry ping to ${name}: 0% packet loss • 200 OK`, 'success', 2400);
  }, 300);
};

window.inspectEngineer = function(name) {
  Toast.show(`Viewing engineer profile & IAM security credentials for ${name}`, 'info', 2200);
};

/* ==============================================================================
   11. FLOATING QUICK-SCROLL DOCK & SMOOTH SCROLLING
   ==============================================================================
*/
function smoothScrollTo(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initQuickScrollDock() {
  const dockButtons = document.querySelectorAll('.dock-btn[data-scroll-to]');
  dockButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.scrollTo;
      smoothScrollTo(targetId);

      dockButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function initScrollSpyAndReveal() {
  // Intersection Observer for scroll reveal animations
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .panel-card');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Intersection Observer for Quick Dock active state
  const sections = [
    document.getElementById('overview-section'),
    document.getElementById('metrics-section'),
    document.getElementById('database-section'),
    document.getElementById('team-section')
  ].filter(Boolean);

  const dockObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const matchingBtn = document.querySelector(`.dock-btn[data-scroll-to="${id}"]`);
        if (matchingBtn) {
          document.querySelectorAll('.dock-btn[data-scroll-to]').forEach(b => b.classList.remove('active'));
          matchingBtn.classList.add('active');
        }
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(sec => dockObserver.observe(sec));
}

/* ==============================================================================
   12. SPOTLIGHT MOUSE MOTION
   ==============================================================================
*/
function initSpotlightMotion() {
  const cards = document.querySelectorAll('.metric-card, .engineer-card, .panel-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==============================================================================
   13. DYNAMIC MODAL (<dialog>) & 1-CLICK PRESETS
   ==============================================================================
*/
function openModal() {
  const modal = document.getElementById('deploy-modal');
  if (modal) modal.showModal();
}

function closeModal() {
  const modal = document.getElementById('deploy-modal');
  if (modal) modal.close();
}

function initDeployModal() {
  const modal = document.getElementById('deploy-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const cancelBtn = document.getElementById('cancel-deploy-btn');
  const form = document.getElementById('deploy-form');

  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // 1-Click preset buttons inside modal
  const presetIn = document.getElementById('preset-indian-btn');
  const presetUk = document.getElementById('preset-uk-btn');
  const presetJp = document.getElementById('preset-japan-btn');

  function fillPreset(countryKey) {
    const pool = REGIONAL_POOLS[countryKey];
    if (!pool) return;
    const name = pool.names[Math.floor(Math.random() * pool.names.length)];
    const role = pool.roles[Math.floor(Math.random() * pool.roles.length)];
    const dc = pool.datacenters[Math.floor(Math.random() * pool.datacenters.length)];
    const engine = ENGINES[Math.floor(Math.random() * ENGINES.length)];
    const prefix = pool.shardPrefixes[Math.floor(Math.random() * pool.shardPrefixes.length)];
    const shard = `${engine.split(' ')[0].toLowerCase()}_${prefix}_${Math.floor(100 + Math.random() * 900)}`;

    document.getElementById('deploy-engineer-name').value = name;
    document.getElementById('deploy-country').value = countryKey;
    document.getElementById('deploy-role').value = role;
    document.getElementById('deploy-engine').value = engine;
    document.getElementById('deploy-service').value = shard;
    document.getElementById('deploy-env').value = dc;

    updateModalPreview();
  }

  if (presetIn) presetIn.addEventListener('click', () => fillPreset('india'));
  if (presetUk) presetUk.addEventListener('click', () => fillPreset('uk'));
  if (presetJp) presetJp.addEventListener('click', () => fillPreset('japan'));

  // Dynamic preview update on input
  ['deploy-engineer-name', 'deploy-country', 'deploy-role', 'deploy-engine', 'deploy-service'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateModalPreview);
      el.addEventListener('change', updateModalPreview);
    }
  });

  // Form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const engineerName = document.getElementById('deploy-engineer-name').value;
      const countryKey = document.getElementById('deploy-country').value;
      const role = document.getElementById('deploy-role').value;
      const engine = document.getElementById('deploy-engine').value;
      const shardName = document.getElementById('deploy-service').value;
      const datacenter = document.getElementById('deploy-env').value;

      closeModal();
      TopLoader.start();

      setTimeout(() => {
        TopLoader.done();
        const pool = REGIONAL_POOLS[countryKey] || REGIONAL_POOLS.india;
        const initials = engineerName.split(' ').map(n => n[0]).join('').substring(0, 2);
        const prefix = pool.shardPrefixes[0];
        const shardId = `#${prefix}-${countryKey.slice(0, 2)}-${Math.floor(100 + Math.random() * 900)}`;

        let avatarClass = 'avatar-in';
        let iconColor = 'icon-emerald';
        if (countryKey === 'uk') { avatarClass = 'avatar-uk'; iconColor = 'icon-blue'; }
        if (countryKey === 'japan') { avatarClass = 'avatar-jp'; iconColor = 'icon-red'; }

        // Prepend to table
        const tableBody = document.getElementById('table-body');
        if (tableBody) {
          const newRow = document.createElement('tr');
          newRow.dataset.status = 'primary';
          newRow.dataset.country = countryKey;
          newRow.className = 'db-row row-highlight-new';
          newRow.innerHTML = `
            <td>
              <div class="resource-cell">
                <div class="resource-icon ${iconColor}">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
                <div>
                  <div class="resource-name">${shardName}</div>
                  <div class="resource-id">shard-id: ${shardId}</div>
                </div>
              </div>
            </td>
            <td><span class="engine-badge engine-postgres">${engine}</span></td>
            <td>
              <div class="engineer-tag">
                <span class="engineer-avatar ${avatarClass}">${initials}</span>
                <span class="engineer-name">${engineerName} <span class="country-flag">${pool.flag}</span></span>
              </div>
            </td>
            <td><span class="region-pill">${datacenter}</span></td>
            <td><span class="status-pill status-success"><span class="dot animate-pulse"></span>Active Provisioned</span></td>
            <td>
              <div class="table-storage-bar">
                <div class="storage-meta"><span>12 GB / 2 TB</span><span>1%</span></div>
                <div class="progress-track"><div class="progress-fill fill-emerald" style="width: 1%;"></div></div>
              </div>
            </td>
            <td><span class="mono-text latency-fast">1.1ms</span></td>
            <td class="text-right">
              <button class="table-action-btn btn-action-glow" onclick="queryNode('${shardName}')">Query</button>
            </td>
          `;
          tableBody.prepend(newRow);
        }

        // Add to team
        globalTeamMembers.unshift({
          name: engineerName,
          country: countryKey,
          flag: pool.flag,
          role: role,
          avatarClass: avatarClass,
          shards: 1,
          engine: engine,
          latency: '1.1ms',
          status: 'Online'
        });
        renderTeamGrid('all');
        updateShardCounts();

        form.reset();
        Toast.show(`Successfully added ${engineerName} and provisioned ${shardName}!`, 'success', 3500);
        smoothScrollTo('database-section');
      }, 500);
    });
  }
}

function updateModalPreview() {
  const name = document.getElementById('deploy-engineer-name')?.value || 'Aarav Sharma';
  const countryKey = document.getElementById('deploy-country')?.value || 'india';
  const role = document.getElementById('deploy-role')?.value || 'Lead Database Administrator';
  const engine = document.getElementById('deploy-engine')?.value || 'PostgreSQL 16';
  const shard = document.getElementById('deploy-service')?.value || 'pg_orders_mumbai_03';

  const pool = REGIONAL_POOLS[countryKey] || REGIONAL_POOLS.india;
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2) || 'AS';

  const avatarEl = document.getElementById('preview-avatar');
  const nameEl = document.getElementById('preview-name');
  const badgeEl = document.getElementById('preview-country-badge');
  const roleEl = document.getElementById('preview-role');
  const shardEl = document.getElementById('preview-shard');
  const engineEl = document.getElementById('preview-engine');

  if (avatarEl) {
    avatarEl.textContent = initials;
    avatarEl.className = `preview-avatar ${countryKey === 'uk' ? 'avatar-uk' : (countryKey === 'japan' ? 'avatar-jp' : 'avatar-in')}`;
  }
  if (nameEl) nameEl.textContent = name;
  if (badgeEl) badgeEl.textContent = `${pool.flag} ${pool.country}`;
  if (roleEl) roleEl.textContent = role;
  if (shardEl) shardEl.textContent = shard;
  if (engineEl) engineEl.textContent = engine;
}

function updateShardCounts() {
  const tableRows = document.querySelectorAll('#table-body tr');
  const pillCount = document.getElementById('shards-count-pill');
  const footerCount = document.getElementById('active-shards-footer');
  const shardsCounter = document.querySelector('[data-card="sessions"] .counter-value');

  const count = tableRows.length;
  if (pillCount) pillCount.textContent = count;
  if (footerCount) footerCount.textContent = count;
  if (shardsCounter) {
    shardsCounter.dataset.target = count;
    animateCounters();
  }
}

/* ==============================================================================
   14. NOTIFICATIONS DROPDOWN
   ==============================================================================
*/
function initNotificationDropdown() {
  const notifBtn = document.getElementById('notifications-btn');
  const notifDropdown = document.getElementById('notifications-dropdown');
  const clearBtn = document.getElementById('mark-read-btn');
  const badge = document.getElementById('notif-badge');

  if (!notifBtn || !notifDropdown) return;

  notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!notifDropdown.contains(e.target) && e.target !== notifBtn) {
      notifDropdown.classList.remove('active');
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      document.querySelectorAll('.notif-item.unread').forEach(item => {
        item.classList.remove('unread');
      });
      if (badge) badge.style.display = 'none';
      Toast.show('All notifications cleared', 'info', 2000);
    });
  }
}

/* ==============================================================================
   15. KEYBOARD SHORTCUTS
   ==============================================================================
*/
function initKeyboardShortcuts() {
  const searchInput = document.getElementById('global-search-input');
  const toggleBtn = document.getElementById('sidebar-toggle-btn');

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput?.focus();
    }
    if (e.ctrlKey && e.key.toLowerCase() === 'b') {
      e.preventDefault();
      toggleBtn?.click();
    }
  });
}

/* ==============================================================================
   16. GLOBAL TABLE ROW ACTIONS
   ==============================================================================
*/
window.queryNode = function(nodeName) {
  TopLoader.start();
  setTimeout(() => {
    TopLoader.done();
    Toast.show(`Connected SQL Console to ${nodeName} (Response: 200 OK)`, 'success', 2600);
  }, 300);
};

window.syncShard = function(nodeName) {
  TopLoader.start();
  Toast.show(`Initiating WAL catchup for ${nodeName}...`, 'warning', 2200);

  setTimeout(() => {
    TopLoader.done();
    const rows = document.querySelectorAll('#table-body tr');
    rows.forEach(row => {
      if (row.textContent.includes(nodeName)) {
        row.dataset.status = 'replica';
        const pill = row.querySelector('.status-pill');
        if (pill) {
          pill.className = 'status-pill status-replica';
          pill.innerHTML = '<span class="dot"></span>Replica (Synced)';
        }
        const latency = row.querySelector('.latency-warn');
        if (latency) {
          latency.className = 'mono-text latency-fast';
          latency.textContent = '2.4ms';
        }
        const actionBtn = row.querySelector('.btn-retry');
        if (actionBtn) {
          actionBtn.className = 'table-action-btn';
          actionBtn.textContent = 'Metrics';
          actionBtn.onclick = () => queryNode(nodeName);
        }
      }
    });
    Toast.show(`Shard ${nodeName} fully synchronized!`, 'success', 3200);
  }, 900);
};
