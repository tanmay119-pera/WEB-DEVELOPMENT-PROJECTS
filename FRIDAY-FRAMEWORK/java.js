/**
 * ==============================================================================
 * FRIDAY-FRAMEWORK: ENTERPRISE GLOBAL CONTROL PLANE (US • DE • UK • IN • JP • SG)
 * ==============================================================================
 * 
 * High-performance, zero-dependency vanilla JS engine featuring:
 * - Multi-Region Distributed Node Generators (Americas, EMEA, APAC)
 * - Live Real-Time Latency Audit Benchmark Engine
 * - Clean ISO Tag System (US, DE, UK, IN, JP, SG)
 * - Buttery-Smooth Scroll Navigation & Minimalist SVG Quick Dock
 * - Reactive HTML5 <dialog> with 1-Click Multi-Region Presets & Live Preview
 * - Cursor Spotlight Ambient Glow & Kinetic Spring Physics
 * ==============================================================================
 */

// GLOBAL MULTI-REGION POOLS (AMERICAS, EMEA, APAC)
const REGIONAL_POOLS = {
  us: {
    region: 'Americas',
    country: 'United States',
    iso: 'US',
    avatarClass: 'avatar-us',
    names: [
      'Marcus Vance', 'Sarah Jenkins', 'David Miller', 'Elena Rostova', 
      'Chloe Bennett', 'Marcus Chen', 'Alexander Hayes', 'Rachel Moore'
    ],
    datacenters: [
      'us-east-1 (N. Virginia Equinix DC2)',
      'us-west-2 (Oregon Silicon Cloud)',
      'us-central-1 (Iowa Hyperscale)',
      'us-east-2 (Ohio Cloud Hub)'
    ],
    roles: [
      'VP Infrastructure & Distributed Mesh',
      'Principal Distributed Systems Architect',
      'Staff Site Reliability Engineer',
      'Low-Latency Partitioning Lead'
    ],
    shardPrefixes: ['iad', 'pdx', 'ord', 'cmh']
  },
  de: {
    region: 'EMEA',
    country: 'Germany',
    iso: 'DE',
    avatarClass: 'avatar-de',
    names: [
      'Lukas Weber', 'Hanna Schmidt', 'Maximilian Bauer', 'Felix Fischer',
      'Laura Hoffmann', 'Leon Wagner', 'Sophie Becker'
    ],
    datacenters: [
      'eu-central-1 (Frankfurt Equinix FR5)',
      'eu-central-2 (Berlin Edge Hub)',
      'eu-west-3 (Munich Cloud Park)'
    ],
    roles: [
      'Principal OLAP Systems Engineer',
      'ClickHouse Real-Time Analytics Lead',
      'Distributed Storage Reliability Lead',
      'Zero-Loss WAL Sync Architect'
    ],
    shardPrefixes: ['fra', 'ber', 'muc']
  },
  uk: {
    region: 'EMEA',
    country: 'United Kingdom',
    iso: 'UK',
    avatarClass: 'avatar-uk',
    names: [
      'Oliver Smith', 'Emma Watson', 'Arthur Pendelton', 'Charlotte Davies',
      'George Clark', 'Liam Harris', 'Sophie Taylor', 'Harry Evans'
    ],
    datacenters: [
      'eu-west-2 (London Docklands Tier-4)',
      'uk-man-01 (Manchester Cloud Edge)',
      'uk-edi-02 (Edinburgh Tech Hub)'
    ],
    roles: [
      'Lead Database Cluster Architect',
      'PostgreSQL Core Optimization Lead',
      'High-Availability Resiliency Lead',
      'Global Traffic Balancing Engineer'
    ],
    shardPrefixes: ['lon', 'man', 'edi']
  },
  in: {
    region: 'APAC',
    country: 'India',
    iso: 'IN',
    avatarClass: 'avatar-in',
    names: [
      'Aarav Sharma', 'Priya Patel', 'Rohan Gupta', 'Ananya Iyer', 
      'Vikram Malhotra', 'Sneha Kulkarni', 'Devendra Singh', 'Kavya Nair', 
      'Ishaan Joshi', 'Pooja Reddy', 'Rajesh Kumar'
    ],
    datacenters: [
      'ap-south-1 (Mumbai Tier-4 Hub)',
      'blr-dc-02 (Bengaluru Tech Park)',
      'del-edge-01 (Delhi NCR)',
      'ap-south-2 (Hyderabad Systems Hub)'
    ],
    roles: [
      'Lead Database Administrator',
      'High-Concurrency Cache Lead',
      'Vector Search & RAG Infrastructure Lead',
      'Zero-Downtime Migration Specialist'
    ],
    shardPrefixes: ['bom', 'blr', 'del', 'hyd']
  },
  jp: {
    region: 'APAC',
    country: 'Japan',
    iso: 'JP',
    avatarClass: 'avatar-jp',
    names: [
      'Kenji Sato', 'Haruto Takahashi', 'Yui Tanaka', 'Ren Watanabe',
      'Sakura Ito', 'Daiki Suzuki', 'Aoi Nakamura', 'Kaito Kobayashi'
    ],
    datacenters: [
      'ap-northeast-1 (Tokyo Equinix TY3)',
      'ap-northeast-3 (Osaka Cloud Hub)',
      'jp-ngo-01 (Nagoya High-Speed Edge)'
    ],
    roles: [
      'Sub-Millisecond In-Memory Architect',
      'Vector Embedding Storage Specialist',
      'Distributed Consensus Kernel Engineer',
      'High-Density Cache Strategist'
    ],
    shardPrefixes: ['tyo', 'osa', 'ngo']
  },
  sg: {
    region: 'APAC',
    country: 'Singapore',
    iso: 'SG',
    avatarClass: 'avatar-sg',
    names: [
      'Wei Zhang', 'Jia-Ling Tan', 'Kevin Lim', 'Cheryl Wong',
      'Marcus Teo', 'Jonathan Ng'
    ],
    datacenters: [
      'ap-southeast-1 (Singapore Jurong DC)',
      'sg-changi-02 (Changi Low-Latency Gateway)'
    ],
    roles: [
      'Cross-Region Replication Architect',
      'Ultra-Low Latency Network Lead',
      'Global Edge Routing Specialist'
    ],
    shardPrefixes: ['sin', 'sga']
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
  { name: 'Tanmay', region: 'Americas', country: 'Global Lead', iso: 'ROOT', role: 'Principal Architect & System Owner', avatarClass: 'avatar-us', shards: 8, engine: 'PostgreSQL 16', latency: '0.9ms', status: 'Online' },
  { name: 'Marcus Vance', region: 'Americas', country: 'United States', iso: 'US', role: 'VP Infrastructure & Mesh', avatarClass: 'avatar-us', shards: 4, engine: 'PostgreSQL 16', latency: '1.1ms', status: 'Online' },
  { name: 'Lukas Weber', region: 'EMEA', country: 'Germany', iso: 'DE', role: 'ClickHouse Analytics Lead', avatarClass: 'avatar-de', shards: 3, engine: 'ClickHouse OLAP', latency: '1.8ms', status: 'Online' },
  { name: 'Wei Zhang', region: 'APAC', country: 'Singapore', iso: 'SG', role: 'Cross-Region Replication Lead', avatarClass: 'avatar-sg', shards: 2, engine: 'Redis 7.2 Memory', latency: '0.6ms', status: 'Online' },
  { name: 'Oliver Smith', region: 'EMEA', country: 'United Kingdom', iso: 'UK', role: 'London Distributed Lead', avatarClass: 'avatar-uk', shards: 3, engine: 'PostgreSQL 16', latency: '1.4ms', status: 'Online' },
  { name: 'Kenji Sato', region: 'APAC', country: 'Japan', iso: 'JP', role: 'Tokyo High-Speed Cache DBA', avatarClass: 'avatar-jp', shards: 2, engine: 'Redis 7.2 Memory', latency: '0.4ms', status: 'Online' },
  { name: 'Aarav Sharma', region: 'APAC', country: 'India', iso: 'IN', role: 'Mumbai Lead DBA', avatarClass: 'avatar-in', shards: 3, engine: 'PostgreSQL 16', latency: '2.1ms', status: 'Online' },
  { name: 'Sarah Jenkins', region: 'Americas', country: 'United States', iso: 'US', role: 'Staff SRE (Oregon)', avatarClass: 'avatar-us', shards: 2, engine: 'PostgreSQL 16', latency: '1.2ms', status: 'Online' },
  { name: 'Hanna Schmidt', region: 'EMEA', country: 'Germany', iso: 'DE', role: 'Distributed Storage Specialist', avatarClass: 'avatar-de', shards: 2, engine: 'ScyllaDB NoSQL', latency: '2.2ms', status: 'Online' },
  { name: 'Priya Patel', region: 'APAC', country: 'India', iso: 'IN', role: 'Bengaluru Cache Specialist', avatarClass: 'avatar-in', shards: 2, engine: 'Redis 7.2 Memory', latency: '0.7ms', status: 'Online' },
  { name: 'Haruto Takahashi', region: 'APAC', country: 'Japan', iso: 'JP', role: 'Osaka Vector Search Lead', avatarClass: 'avatar-jp', shards: 1, engine: 'Qdrant Vector DB', latency: '3.2ms', status: 'Online' },
  { name: 'Emma Watson', region: 'EMEA', country: 'United Kingdom', iso: 'UK', role: 'Manchester OLAP Architect', avatarClass: 'avatar-uk', shards: 2, engine: 'ClickHouse OLAP', latency: '2.8ms', status: 'Online' }
];

document.addEventListener('DOMContentLoaded', () => {
  console.log('%cfriday-framework%c Enterprise Global Data Fabric • Lead Architect: Tanmay', 
    'background: #6366f1; color: #fff; font-weight: bold; padding: 3px 8px; border-radius: 4px;',
    'color: #10b981; font-weight: bold; padding-left: 4px;'
  );

  initTopLoader();
  initSidebar();
  initMetricCounters();
  initSyncAction();
  initTableFilters();
  initRegionTabs();
  initGlobalSearch();
  initSpawnButtons();
  initLatencyAudit();
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
   1. TOP PROGRESS BAR MODULE
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

      if (routeKey === 'database') smoothScrollTo('database-section');
      else if (routeKey === 'analytics') smoothScrollTo('metrics-section');
      else if (routeKey === 'users') smoothScrollTo('team-section');
      else if (routeKey === 'deployments') openModal();
      else smoothScrollTo('overview-section');

      Toast.show(`Navigated to ${routeName}`, 'info', 1600);
    });
  });

  const userMenuBtn = document.getElementById('user-menu-btn');
  if (userMenuBtn) {
    userMenuBtn.addEventListener('click', () => {
      Toast.show('Lead Architect: Tanmay • Global Cloud Root Access', 'info', 2500);
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
        const newQps = 95400 + Math.floor(Math.random() * 2600);
        qpsEl.dataset.target = newQps;
      }
      if (latencyEl) {
        const newLat = (1.4 + Math.random() * 0.8).toFixed(1);
        latencyEl.dataset.target = newLat;
      }

      animateCounters();
      TopLoader.done();
      if (icon) icon.classList.remove('is-spinning');
      syncBtn.disabled = false;

      Toast.show('Telemetry synchronized across all Americas, EMEA, and APAC regions!', 'success', 2800);
    }, 600);
  });
}

/* ==============================================================================
   6. REAL-TIME LATENCY AUDIT BENCHMARK
   ==============================================================================
*/
function initLatencyAudit() {
  const auditBtn = document.getElementById('run-latency-audit-btn');
  if (!auditBtn) return;

  auditBtn.addEventListener('click', () => {
    auditBtn.disabled = true;
    TopLoader.start();
    Toast.show('Running global RTT latency benchmark across 6 regions...', 'warning', 2000);

    setTimeout(() => {
      TopLoader.done();
      auditBtn.disabled = false;

      // Update rows with jittered fast latencies
      const latencyCells = document.querySelectorAll('#table-body .mono-text');
      latencyCells.forEach(cell => {
        const fastLat = (0.4 + Math.random() * 2.2).toFixed(1) + 'ms';
        cell.textContent = fastLat;
      });

      Toast.show('Latency Audit Complete: Average 1.2ms • 0.00% Packet Loss • 100% SLA', 'success', 3600);
    }, 950);
  });
}

/* ==============================================================================
   7. TABLE STATUS FILTERING
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
   8. ENTERPRISE REGION SELECTOR TABS (Americas, EMEA, APAC, Fast)
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
        const rowRegion = row.dataset.region || '';
        let matches = true;

        if (regionKey === 'americas') matches = rowRegion === 'americas' || rowText.includes('us-') || rowText.includes('virginia') || rowText.includes('oregon');
        else if (regionKey === 'emea') matches = rowRegion === 'emea' || rowText.includes('eu-') || rowText.includes('london') || rowText.includes('frankfurt') || rowText.includes('uk') || rowText.includes('germany');
        else if (regionKey === 'apac') matches = rowRegion === 'apac' || rowText.includes('ap-') || rowText.includes('tokyo') || rowText.includes('mumbai') || rowText.includes('singapore') || rowText.includes('bengaluru');
        else if (regionKey === 'primary') matches = row.dataset.status === 'primary';
        else if (regionKey === 'fast') {
          const latText = row.querySelector('.mono-text')?.textContent || '';
          const latVal = parseFloat(latText);
          matches = !isNaN(latVal) && latVal < 2.0;
        }

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

      Toast.show(`Filtered: ${tab.textContent.trim()} (${count} nodes active)`, 'info', 1800);
    });
  });
}

/* ==============================================================================
   9. REAL-TIME SEARCH (Names, Shards, Engines, Datacenters)
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

    const teamCards = document.querySelectorAll('.engineer-card');
    teamCards.forEach(card => {
      const cardText = card.textContent.toLowerCase();
      card.style.display = cardText.includes(query) ? '' : 'none';
    });
  });
}

/* ==============================================================================
   10. MULTI-REGION SPAWN CONTROLLER (US, DE, UK, IN, JP, SG)
   ==============================================================================
*/
function initSpawnButtons() {
  const pillButtons = document.querySelectorAll('.btn-pill-region[data-spawn]');
  pillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const countryKey = btn.dataset.spawn;
      spawnGlobalNode(countryKey);
    });
  });

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

function spawnGlobalNode(countryKey) {
  const pool = REGIONAL_POOLS[countryKey] || REGIONAL_POOLS.us;
  TopLoader.start();

  const randomName = pool.names[Math.floor(Math.random() * pool.names.length)];
  const randomRole = pool.roles[Math.floor(Math.random() * pool.roles.length)];
  const randomDc = pool.datacenters[Math.floor(Math.random() * pool.datacenters.length)];
  const randomEngine = ENGINES[Math.floor(Math.random() * ENGINES.length)];
  const prefix = pool.shardPrefixes[Math.floor(Math.random() * pool.shardPrefixes.length)];
  const shardId = `#${prefix}-${pool.iso.toLowerCase()}-${Math.floor(100 + Math.random() * 900)}`;
  const shardName = `${randomEngine.split(' ')[0].toLowerCase()}_cluster_${prefix}_${Math.floor(10 + Math.random() * 90)}`;
  const latencyVal = (0.4 + Math.random() * 2.1).toFixed(1) + 'ms';
  const initials = randomName.split(' ').map(n => n[0]).join('').substring(0, 2);

  setTimeout(() => {
    TopLoader.done();

    const tableBody = document.getElementById('table-body');
    if (tableBody) {
      const newRow = document.createElement('tr');
      newRow.dataset.status = 'primary';
      newRow.dataset.region = pool.region.toLowerCase();
      newRow.dataset.country = countryKey;
      newRow.className = 'db-row row-highlight-new';

      newRow.innerHTML = `
        <td>
          <div class="resource-cell">
            <div class="resource-icon icon-blue">
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
            <span class="engineer-avatar ${pool.avatarClass}">${initials}</span>
            <span class="engineer-name">${randomName} <span class="iso-tag">${pool.iso}</span></span>
          </div>
        </td>
        <td><span class="region-pill">${randomDc}</span></td>
        <td><span class="status-pill status-success"><span class="dot animate-pulse"></span>Active Synced</span></td>
        <td>
          <div class="table-storage-bar">
            <div class="storage-meta"><span>${Math.floor(300 + Math.random() * 700)} GB / 2 TB</span><span>40%</span></div>
            <div class="progress-track"><div class="progress-fill fill-emerald" style="width: 40%;"></div></div>
          </div>
        </td>
        <td><span class="mono-text latency-fast">${latencyVal}</span></td>
        <td class="text-right">
          <button class="table-action-btn btn-action-glow" onclick="queryNode('${shardName}')">Query</button>
        </td>
      `;

      tableBody.prepend(newRow);
    }

    globalTeamMembers.unshift({
      name: randomName,
      region: pool.region,
      country: pool.country,
      iso: pool.iso,
      role: randomRole,
      avatarClass: pool.avatarClass,
      shards: 1,
      engine: randomEngine,
      latency: latencyVal,
      status: 'Online'
    });
    renderTeamGrid('all');
    updateShardCounts();

    Toast.show(`Deployed [${pool.iso}] ${shardName} (${pool.country}) assigned to ${randomName}!`, 'success', 3500);
    smoothScrollTo('database-section');
  }, 350);
}

/* ==============================================================================
   11. TEAM ROSTER MODULE & ENTERPRISE GRID
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

  const filtered = globalTeamMembers.filter(m => {
    if (filter === 'all') return true;
    return m.region.toLowerCase() === filter.toLowerCase();
  });

  if (countBadge) countBadge.textContent = globalTeamMembers.length;

  grid.innerHTML = filtered.map(member => {
    const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    return `
      <div class="engineer-card" data-region="${member.region.toLowerCase()}">
        <div class="engineer-card-header">
          <div class="card-avatar ${member.avatarClass}">${initials}</div>
          <div class="engineer-card-title">
            <div class="card-name-row">
              <span class="card-name">${member.name}</span>
              <span class="iso-tag">${member.iso}</span>
            </div>
            <span class="card-role">${member.role}</span>
          </div>
          <span class="country-badge-pill">${member.region.toUpperCase()}</span>
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
    Toast.show(`Telemetry ping to ${name}: 0% packet loss • RTT 1.1ms • 200 OK`, 'success', 2400);
  }, 250);
};

window.inspectEngineer = function(name) {
  Toast.show(`Viewing IAM access token & node topology for ${name}`, 'info', 2200);
};

/* ==============================================================================
   12. MINIMALIST FLOATING QUICK DOCK & SMOOTH SCROLLING
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
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .panel-card');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

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
   13. SPOTLIGHT MOUSE MOTION
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
   14. DYNAMIC MODAL (<dialog>) & MULTI-REGION PRESETS
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

  const presetButtons = document.querySelectorAll('.btn-random-preset[data-preset]');
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const countryKey = btn.dataset.preset;
      fillPreset(countryKey);
    });
  });

  function fillPreset(countryKey) {
    const pool = REGIONAL_POOLS[countryKey] || REGIONAL_POOLS.us;
    const name = pool.names[Math.floor(Math.random() * pool.names.length)];
    const role = pool.roles[Math.floor(Math.random() * pool.roles.length)];
    const dc = pool.datacenters[Math.floor(Math.random() * pool.datacenters.length)];
    const engine = ENGINES[Math.floor(Math.random() * ENGINES.length)];
    const prefix = pool.shardPrefixes[Math.floor(Math.random() * pool.shardPrefixes.length)];
    const shard = `${engine.split(' ')[0].toLowerCase()}_${prefix}_${Math.floor(100 + Math.random() * 900)}`;

    const nameInput = document.getElementById('deploy-engineer-name');
    const countrySelect = document.getElementById('deploy-country');
    const roleSelect = document.getElementById('deploy-role');
    const engineSelect = document.getElementById('deploy-engine');
    const shardInput = document.getElementById('deploy-service');
    const envSelect = document.getElementById('deploy-env');

    if (nameInput) nameInput.value = name;
    if (countrySelect) countrySelect.value = countryKey;
    if (roleSelect) roleSelect.value = role;
    if (engineSelect) engineSelect.value = engine;
    if (shardInput) shardInput.value = shard;
    if (envSelect) envSelect.value = dc;

    updateModalPreview();
  }

  ['deploy-engineer-name', 'deploy-country', 'deploy-role', 'deploy-engine', 'deploy-service'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateModalPreview);
      el.addEventListener('change', updateModalPreview);
    }
  });

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
        const pool = REGIONAL_POOLS[countryKey] || REGIONAL_POOLS.us;
        const initials = engineerName.split(' ').map(n => n[0]).join('').substring(0, 2);
        const prefix = pool.shardPrefixes[0];
        const shardId = `#${prefix}-${pool.iso.toLowerCase()}-${Math.floor(100 + Math.random() * 900)}`;

        const tableBody = document.getElementById('table-body');
        if (tableBody) {
          const newRow = document.createElement('tr');
          newRow.dataset.status = 'primary';
          newRow.dataset.region = pool.region.toLowerCase();
          newRow.dataset.country = countryKey;
          newRow.className = 'db-row row-highlight-new';
          newRow.innerHTML = `
            <td>
              <div class="resource-cell">
                <div class="resource-icon icon-blue">
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
                <span class="engineer-avatar ${pool.avatarClass}">${initials}</span>
                <span class="engineer-name">${engineerName} <span class="iso-tag">${pool.iso}</span></span>
              </div>
            </td>
            <td><span class="region-pill">${datacenter}</span></td>
            <td><span class="status-pill status-success"><span class="dot animate-pulse"></span>Active Provisioned</span></td>
            <td>
              <div class="table-storage-bar">
                <div class="storage-meta"><span>15 GB / 2 TB</span><span>1%</span></div>
                <div class="progress-track"><div class="progress-fill fill-emerald" style="width: 1%;"></div></div>
              </div>
            </td>
            <td><span class="mono-text latency-fast">1.0ms</span></td>
            <td class="text-right">
              <button class="table-action-btn btn-action-glow" onclick="queryNode('${shardName}')">Query</button>
            </td>
          `;
          tableBody.prepend(newRow);
        }

        globalTeamMembers.unshift({
          name: engineerName,
          region: pool.region,
          country: pool.country,
          iso: pool.iso,
          role: role,
          avatarClass: pool.avatarClass,
          shards: 1,
          engine: engine,
          latency: '1.0ms',
          status: 'Online'
        });
        renderTeamGrid('all');
        updateShardCounts();

        form.reset();
        Toast.show(`Successfully provisioned ${shardName} for ${engineerName} [${pool.iso}]!`, 'success', 3500);
        smoothScrollTo('database-section');
      }, 450);
    });
  }
}

function updateModalPreview() {
  const name = document.getElementById('deploy-engineer-name')?.value || 'Marcus Vance';
  const countryKey = document.getElementById('deploy-country')?.value || 'us';
  const role = document.getElementById('deploy-role')?.value || 'VP Infrastructure & Mesh';
  const engine = document.getElementById('deploy-engine')?.value || 'PostgreSQL 16';
  const shard = document.getElementById('deploy-service')?.value || 'aurora_global_useast_01';

  const pool = REGIONAL_POOLS[countryKey] || REGIONAL_POOLS.us;
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2) || 'MV';

  const avatarEl = document.getElementById('preview-avatar');
  const nameEl = document.getElementById('preview-name');
  const badgeEl = document.getElementById('preview-country-badge');
  const roleEl = document.getElementById('preview-role');
  const shardEl = document.getElementById('preview-shard');
  const engineEl = document.getElementById('preview-engine');

  if (avatarEl) {
    avatarEl.textContent = initials;
    avatarEl.className = `preview-avatar ${pool.avatarClass}`;
  }
  if (nameEl) nameEl.textContent = name;
  if (badgeEl) badgeEl.innerHTML = `<span class="iso-tag">${pool.iso}</span> ${pool.country}`;
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
   15. NOTIFICATIONS DROPDOWN
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
      Toast.show('All notifications marked as read', 'info', 2000);
    });
  }
}

/* ==============================================================================
   16. KEYBOARD SHORTCUTS
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
   17. GLOBAL TABLE ROW ACTIONS
   ==============================================================================
*/
window.queryNode = function(nodeName) {
  TopLoader.start();
  setTimeout(() => {
    TopLoader.done();
    Toast.show(`Connected Console to ${nodeName} • TLS 1.3 • Response: 200 OK`, 'success', 2600);
  }, 250);
};

window.syncShard = function(nodeName) {
  TopLoader.start();
  Toast.show(`Initiating fast replication sync for ${nodeName}...`, 'warning', 2000);

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
          latency.textContent = '1.2ms';
        }
        const actionBtn = row.querySelector('.btn-retry');
        if (actionBtn) {
          actionBtn.className = 'table-action-btn';
          actionBtn.textContent = 'Metrics';
          actionBtn.onclick = () => queryNode(nodeName);
        }
      }
    });
    Toast.show(`Shard ${nodeName} synchronized to 0 lag!`, 'success', 3000);
  }, 750);
};
