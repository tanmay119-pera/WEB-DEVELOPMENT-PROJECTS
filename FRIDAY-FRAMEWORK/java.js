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
  console.log('%cfriday-framework%c Enterprise Global Data Fabric • Developed by Tanmay (Adesh Srivastava) with love', 
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
  initAudioToggle();
  initSqlConsole();
  initCommandPalette();
  initMeshTopology();
  initTableSorting();
  updateShardCounts();
  initThemeSwitcher();
  initTelemetryCanvas();
  initLogStreamer();
  initNodeDrawer();
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
      Toast.show('Developed by Tanmay (Adesh Srivastava) with love • Global Cloud Root Access', 'info', 2500);
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
          <button class="table-action-btn btn-action-metrics" onclick="openNodeDrawer('${shardName}', '${shardId}')">Metrics</button>
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

/* ==============================================================================
   18. WEB AUDIO API SYNTHESIZER (MICRO-SOUND EFFECTS)
   ==============================================================================
*/
let audioCtx = null;
let soundEnabled = true;

function playTone(freq = 600, type = 'sine', duration = 0.08) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function initAudioToggle() {
  const audioBtn = document.getElementById('audio-toggle-btn');
  const label = document.getElementById('audio-status-label');
  if (!audioBtn) return;

  audioBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (label) label.textContent = soundEnabled ? 'SFX: ON' : 'SFX: OFF';
    playTone(soundEnabled ? 800 : 300, 'sine', 0.1);
    Toast.show(`Synthesized audio feedback ${soundEnabled ? 'enabled' : 'muted'}`, 'info', 1600);
  });
}

/* ==============================================================================
   19. INTERACTIVE SQL TERMINAL CONTROLLER
   ==============================================================================
*/
function initSqlConsole() {
  const modal = document.getElementById('sql-console-modal');
  const closeBtn = document.getElementById('close-console-btn');
  const runBtn = document.getElementById('btn-run-sql');
  const textarea = document.getElementById('sql-query-input');
  const resultsBody = document.getElementById('sql-results-body');
  const execTimeEl = document.getElementById('query-exec-time');
  const rowCountEl = document.getElementById('query-row-count');
  const presetChips = document.querySelectorAll('.preset-chip');

  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener('click', () => modal.close());
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });

  window.openSqlConsole = function(nodeName) {
    const titleEl = document.getElementById('console-node-title');
    const connEl = document.getElementById('console-conn-str');
    if (titleEl) titleEl.textContent = `SQL Terminal: ${nodeName}`;
    if (connEl) connEl.textContent = `Connection: postgres://tanmay@${nodeName.replace(/_/g, '-')}.mesh:5432/production (TLS 1.3 Active)`;
    playTone(520, 'sine', 0.05);
    modal.showModal();
  };

  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const sql = chip.dataset.sql;
      if (textarea) textarea.value = sql;
      executeQuery();
    });
  });

  function executeQuery() {
    playTone(700, 'triangle', 0.06);
    TopLoader.start();

    setTimeout(() => {
      TopLoader.done();
      const execMs = (0.35 + Math.random() * 0.9).toFixed(2);
      if (execTimeEl) execTimeEl.textContent = `Execution: ${execMs}ms`;

      const rows = document.querySelectorAll('#table-body tr');
      const sample = Array.from(rows).slice(0, 5);

      if (resultsBody) {
        resultsBody.innerHTML = sample.map(row => {
          const shardName = row.querySelector('.resource-name')?.textContent || 'node';
          const shardId = row.querySelector('.resource-id')?.textContent.replace('shard-id: ', '') || '#db-101';
          const region = row.querySelector('.region-pill')?.textContent || 'global';
          const latency = row.querySelector('.mono-text')?.textContent || '1.2ms';
          return `
            <tr>
              <td><code>${shardId}</code></td>
              <td>${region}</td>
              <td><span class="text-emerald">${latency}</span></td>
              <td><span class="status-pill status-success">ACTIVE</span></td>
              <td>Zero-Loss Quorum</td>
            </tr>
          `;
        }).join('');
      }

      if (rowCountEl) rowCountEl.textContent = `Rows: ${sample.length} returned`;
      Toast.show(`Query executed successfully in ${execMs}ms!`, 'success', 2200);
    }, 280);
  }

  if (runBtn) runBtn.addEventListener('click', executeQuery);

  if (textarea) {
    textarea.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        executeQuery();
      }
    });
  }
}

// Override queryNode global function to open the SQL console
window.queryNode = function(nodeName) {
  openSqlConsole(nodeName);
};

/* ==============================================================================
   20. SPOTLIGHT COMMAND PALETTE (⌘K / CTRL+K)
   ==============================================================================
*/
function initCommandPalette() {
  const paletteDialog = document.getElementById('command-palette-dialog');
  const paletteInput = document.getElementById('palette-search-input');
  const paletteItems = document.querySelectorAll('.palette-item');
  const searchBarTrigger = document.querySelector('.search-box');

  if (!paletteDialog || !paletteInput) return;

  function openPalette() {
    playTone(650, 'sine', 0.05);
    paletteDialog.showModal();
    paletteInput.value = '';
    filterPalette('');
    paletteInput.focus();
  }

  function closePalette() {
    paletteDialog.close();
  }

  if (searchBarTrigger) {
    searchBarTrigger.addEventListener('click', openPalette);
  }

  paletteDialog.addEventListener('click', (e) => {
    if (e.target === paletteDialog) closePalette();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (paletteDialog.open) closePalette();
      else openPalette();
    }
  });

  function filterPalette(q) {
    const query = q.toLowerCase().trim();
    paletteItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? 'flex' : 'none';
    });
  }

  paletteInput.addEventListener('input', (e) => {
    filterPalette(e.target.value);
  });

  paletteItems.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.dataset.action;
      closePalette();

      if (action === 'new-user') openModal();
      else if (action === 'latency-audit') document.getElementById('run-latency-audit-btn')?.click();
      else if (action === 'chaos-failover') document.getElementById('btn-chaos-test')?.click();
      else if (action === 'export-csv') exportTableAsCSV();
      else if (action.startsWith('spawn-')) spawnGlobalNode(action.replace('spawn-', ''));
    });
  });
}

/* ==============================================================================
   21. GLOBAL MESH TOPOLOGY RADAR & CHAOS SIMULATOR
   ==============================================================================
*/
function initMeshTopology() {
  const pingBtn = document.getElementById('btn-mesh-ping');
  const chaosBtn = document.getElementById('btn-chaos-test');
  const rttEl = document.getElementById('global-rtt-val');

  if (pingBtn) {
    pingBtn.addEventListener('click', () => {
      playTone(850, 'sine', 0.08);
      TopLoader.start();
      Toast.show('Transmitting photon ping packets across all 6 dark fiber cross-links...', 'info', 1800);

      setTimeout(() => {
        TopLoader.done();
        const newRtt = (0.7 + Math.random() * 0.5).toFixed(1) + 'ms';
        if (rttEl) rttEl.textContent = newRtt;
        Toast.show(`Mesh Ping Verified: Round-trip ${newRtt} • 0% Packet Drop across 100Gbps links`, 'success', 3000);
      }, 550);
    });
  }

  if (chaosBtn) {
    chaosBtn.addEventListener('click', () => {
      playTone(320, 'sawtooth', 0.15);
      TopLoader.start();
      Toast.show('🔥 INITIATING CHAOS INJECTION: Simulating partition outage on eu-central-1...', 'warning', 2500);

      setTimeout(() => {
        Toast.show('⚡ Raft Consensus Triggered: Promoting hot replica in eu-west-2 to Primary Master...', 'info', 2200);

        setTimeout(() => {
          TopLoader.done();
          playTone(900, 'triangle', 0.12);
          Toast.show('✓ Chaos Resilience Verified: 0 dropped queries • Auto-failover completed in 420ms!', 'success', 3600);
        }, 800);
      }, 900);
    });
  }
}

/* ==============================================================================
   22. TABLE COLUMN SORTING & CSV/JSON EXPORTERS
   ==============================================================================
*/
function initTableSorting() {
  const headers = document.querySelectorAll('.sortable-th');
  let currentSort = { col: null, asc: true };

  headers.forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort;
      currentSort.asc = currentSort.col === col ? !currentSort.asc : true;
      currentSort.col = col;

      playTone(550, 'sine', 0.04);
      sortTableByColumn(col, currentSort.asc);
    });
  });

  const exportCsvBtn = document.getElementById('btn-export-csv');
  const exportJsonBtn = document.getElementById('btn-export-json');

  if (exportCsvBtn) exportCsvBtn.addEventListener('click', exportTableAsCSV);
  if (exportJsonBtn) exportJsonBtn.addEventListener('click', exportTableAsJSON);
}

function sortTableByColumn(columnKey, ascending) {
  const tableBody = document.getElementById('table-body');
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    let aVal = '', bVal = '';

    if (columnKey === 'name') {
      aVal = a.querySelector('.resource-name')?.textContent || '';
      bVal = b.querySelector('.resource-name')?.textContent || '';
    } else if (columnKey === 'engine') {
      aVal = a.querySelector('.engine-badge')?.textContent || '';
      bVal = b.querySelector('.engine-badge')?.textContent || '';
    } else if (columnKey === 'engineer') {
      aVal = a.querySelector('.engineer-name')?.textContent || '';
      bVal = b.querySelector('.engineer-name')?.textContent || '';
    } else if (columnKey === 'region') {
      aVal = a.querySelector('.region-pill')?.textContent || '';
      bVal = b.querySelector('.region-pill')?.textContent || '';
    } else if (columnKey === 'latency') {
      aVal = parseFloat(a.querySelector('.mono-text')?.textContent) || 0;
      bVal = parseFloat(b.querySelector('.mono-text')?.textContent) || 0;
      return ascending ? aVal - bVal : bVal - aVal;
    }

    return ascending ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  rows.forEach(r => tableBody.appendChild(r));
}

function exportTableAsCSV() {
  playTone(720, 'sine', 0.06);
  const rows = document.querySelectorAll('#table-body tr');
  let csv = 'Shard Name,Shard ID,Engine,Engineer,Datacenter,Status,Latency\n';

  rows.forEach(row => {
    const name = row.querySelector('.resource-name')?.textContent.trim() || '';
    const id = row.querySelector('.resource-id')?.textContent.replace('shard-id: ', '').trim() || '';
    const engine = row.querySelector('.engine-badge')?.textContent.trim() || '';
    const engineer = row.querySelector('.engineer-name')?.textContent.trim() || '';
    const region = row.querySelector('.region-pill')?.textContent.trim() || '';
    const status = row.querySelector('.status-pill')?.textContent.trim() || '';
    const latency = row.querySelector('.mono-text')?.textContent.trim() || '';
    csv += `"${name}","${id}","${engine}","${engineer}","${region}","${status}","${latency}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `friday_cluster_shards_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  Toast.show('Production cluster CSV export downloaded!', 'success', 2500);
}

function exportTableAsJSON() {
  playTone(720, 'sine', 0.06);
  const rows = document.querySelectorAll('#table-body tr');
  const data = [];

  rows.forEach(row => {
    data.push({
      shard_name: row.querySelector('.resource-name')?.textContent.trim() || '',
      shard_id: row.querySelector('.resource-id')?.textContent.replace('shard-id: ', '').trim() || '',
      engine: row.querySelector('.engine-badge')?.textContent.trim() || '',
      engineer: row.querySelector('.engineer-name')?.textContent.trim() || '',
      datacenter: row.querySelector('.region-pill')?.textContent.trim() || '',
      status: row.querySelector('.status-pill')?.textContent.trim() || '',
      latency: row.querySelector('.mono-text')?.textContent.trim() || ''
    });
  });

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `friday_cluster_shards_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  Toast.show('Production cluster JSON export downloaded!', 'success', 2500);
}

/* ==============================================================================
   28. THEME MATRIX SYSTEM (OBSIDIAN, EMERALD, CYAN)
   ==============================================================================
*/
function initThemeSwitcher() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeLabel = document.getElementById('theme-label');
  if (!toggleBtn) return;

  const themes = ['obsidian', 'emerald', 'cyan'];
  const themeDisplayNames = {
    obsidian: 'Obsidian',
    emerald: 'Emerald',
    cyan: 'Cyan'
  };

  let currentTheme = localStorage.getItem('friday_theme') || 'obsidian';
  
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('friday_theme', theme);
    if (themeLabel) {
      themeLabel.textContent = themeDisplayNames[theme] || 'Obsidian';
    }
  }

  applyTheme(currentTheme);

  toggleBtn.addEventListener('click', () => {
    playTone(650, 'sine', 0.05);
    const currentIndex = themes.indexOf(currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    applyTheme(nextTheme);
    Toast.show(`Theme Matrix Active: ${themeDisplayNames[nextTheme]}`, 'info', 2200);
  });
}

/* ==============================================================================
   29. 60FPS REAL-TIME TELEMETRY CANVAS ENGINE
   ==============================================================================
*/
let isCanvasStreaming = true;
let telemetryAnimId = null;

function initTelemetryCanvas() {
  const canvas = document.getElementById('telemetry-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const container = canvas.parentElement;
  const toggleBtn = document.getElementById('btn-toggle-stream');
  const fpsLabel = document.getElementById('stream-fps-label');
  const tooltip = document.getElementById('canvas-tooltip');
  const tooltipTime = document.getElementById('tooltip-time');
  const tooltipQps = document.getElementById('tooltip-qps');
  const tooltipLat = document.getElementById('tooltip-lat');
  const btnAiOptimizer = document.getElementById('btn-run-ai-optimizer');

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const maxPoints = 85;
  const dataQps = [];
  const dataLatency = [];
  let baseQps = 96400;
  let baseLat = 1.15;

  for (let i = 0; i < maxPoints; i++) {
    baseQps += (Math.random() - 0.49) * 1200;
    baseQps = Math.max(82000, Math.min(115000, baseQps));
    baseLat += (Math.random() - 0.49) * 0.12;
    baseLat = Math.max(0.45, Math.min(2.1, baseLat));
    dataQps.push(Math.round(baseQps));
    dataLatency.push(parseFloat(baseLat.toFixed(2)));
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isCanvasStreaming = !isCanvasStreaming;
      playTone(isCanvasStreaming ? 600 : 400, 'sine', 0.05);
      toggleBtn.textContent = isCanvasStreaming ? 'Pause Stream' : 'Resume Stream';
      if (fpsLabel) {
        fpsLabel.textContent = isCanvasStreaming ? '60 FPS Streaming' : 'Stream Paused';
      }
      Toast.show(isCanvasStreaming ? 'Telemetry Stream Resumed' : 'Telemetry Stream Paused', 'info', 1800);
    });
  }

  if (btnAiOptimizer) {
    btnAiOptimizer.addEventListener('click', () => {
      runAiOptimizer();
    });
  }

  let mouseX = -1;
  let mouseY = -1;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    if (tooltip) {
      const idx = Math.min(dataQps.length - 1, Math.max(0, Math.floor((mouseX / rect.width) * dataQps.length)));
      tooltip.style.display = 'flex';
      tooltip.style.left = `${mouseX}px`;
      tooltip.style.top = `${Math.max(30, mouseY)}px`;

      const now = new Date();
      now.setSeconds(now.getSeconds() - (dataQps.length - idx));
      if (tooltipTime) tooltipTime.textContent = now.toTimeString().split(' ')[0];
      if (tooltipQps) tooltipQps.textContent = `${dataQps[idx].toLocaleString()} QPS`;
      if (tooltipLat) tooltipLat.textContent = `${dataLatency[idx]}ms P99 Lag`;
    }
  });

  container.addEventListener('mouseleave', () => {
    mouseX = -1;
    mouseY = -1;
    if (tooltip) tooltip.style.display = 'none';
  });

  let lastSampleTime = 0;
  function updateData(now) {
    if (!isCanvasStreaming) return;
    if (now - lastSampleTime > 65) {
      lastSampleTime = now;
      baseQps += (Math.random() - 0.49) * 1400;
      baseQps = Math.max(82000, Math.min(118000, baseQps));
      baseLat += (Math.random() - 0.49) * 0.14;
      baseLat = Math.max(0.42, Math.min(2.1, baseLat));

      dataQps.push(Math.round(baseQps));
      dataLatency.push(parseFloat(baseLat.toFixed(2)));

      if (dataQps.length > maxPoints) {
        dataQps.shift();
        dataLatency.shift();
      }
    }
  }

  function draw(now) {
    updateData(now);

    const rect = container.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    // Subtle Tech Gridlines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    for (let y = 40; y < h; y += 45) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    for (let x = 60; x < w; x += 100) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    ctx.setLineDash([]);

    if (dataQps.length < 2) {
      telemetryAnimId = requestAnimationFrame(draw);
      return;
    }

    const stepX = w / (dataQps.length - 1);
    const minQps = 75000;
    const maxQps = 125000;
    const qpsRange = maxQps - minQps;

    // 1. QPS Area Gradient
    const qpsGradient = ctx.createLinearGradient(0, 0, 0, h);
    qpsGradient.addColorStop(0, 'rgba(99, 102, 241, 0.35)');
    qpsGradient.addColorStop(1, 'rgba(99, 102, 241, 0.0)');

    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let i = 0; i < dataQps.length; i++) {
      const px = i * stepX;
      const normalized = (dataQps[i] - minQps) / qpsRange;
      const py = h - (normalized * (h - 40) + 20);
      if (i === 0) ctx.lineTo(px, py);
      else {
        const prevX = (i - 1) * stepX;
        const prevNorm = (dataQps[i - 1] - minQps) / qpsRange;
        const prevY = h - (prevNorm * (h - 40) + 20);
        const cpX = (prevX + px) / 2;
        ctx.bezierCurveTo(cpX, prevY, cpX, py, px, py);
      }
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fillStyle = qpsGradient;
    ctx.fill();

    // 2. QPS Glowing Stroke
    ctx.beginPath();
    for (let i = 0; i < dataQps.length; i++) {
      const px = i * stepX;
      const normalized = (dataQps[i] - minQps) / qpsRange;
      const py = h - (normalized * (h - 40) + 20);
      if (i === 0) ctx.moveTo(px, py);
      else {
        const prevX = (i - 1) * stepX;
        const prevNorm = (dataQps[i - 1] - minQps) / qpsRange;
        const prevY = h - (prevNorm * (h - 40) + 20);
        const cpX = (prevX + px) / 2;
        ctx.bezierCurveTo(cpX, prevY, cpX, py, px, py);
      }
    }
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#6366f1';
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 3. Latency Line
    const minLat = 0.2;
    const maxLat = 2.5;
    const latRange = maxLat - minLat;

    ctx.beginPath();
    for (let i = 0; i < dataLatency.length; i++) {
      const px = i * stepX;
      const normalized = (dataLatency[i] - minLat) / latRange;
      const py = h - (normalized * (h - 60) + 15);
      if (i === 0) ctx.moveTo(px, py);
      else {
        const prevX = (i - 1) * stepX;
        const prevNorm = (dataLatency[i - 1] - minLat) / latRange;
        const prevY = h - (prevNorm * (h - 60) + 15);
        const cpX = (prevX + px) / 2;
        ctx.bezierCurveTo(cpX, prevY, cpX, py, px, py);
      }
    }
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.8;
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 6;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 4. Pulsing Leading Dot
    const lastIdx = dataQps.length - 1;
    const lastX = lastIdx * stepX;
    const lastQpsY = h - (((dataQps[lastIdx] - minQps) / qpsRange) * (h - 40) + 20);
    const lastLatY = h - (((dataLatency[lastIdx] - minLat) / latRange) * (h - 60) + 15);

    ctx.fillStyle = '#a5b4fc';
    ctx.beginPath();
    ctx.arc(lastX, lastQpsY, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(lastX, lastLatY, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // 5. Crosshair vertical bar
    if (mouseX >= 0 && mouseX <= w) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(mouseX, 0);
      ctx.lineTo(mouseX, h);
      ctx.stroke();
    }

    telemetryAnimId = requestAnimationFrame(draw);
  }

  telemetryAnimId = requestAnimationFrame(draw);
}

/* ==============================================================================
   30. AUTONOMOUS AI MESH OPTIMIZER
   ==============================================================================
*/
function runAiOptimizer() {
  const btn = document.getElementById('btn-run-ai-optimizer');
  if (!btn || btn.disabled) return;

  btn.disabled = true;
  playTone(880, 'triangle', 0.1);
  TopLoader.start();

  Toast.show('🤖 AI Optimizer: Analyzing partition distribution across US, DE, UK, IN, JP, SG...', 'info', 2000);

  setTimeout(() => {
    playTone(1100, 'sine', 0.08);
    Toast.show('⚡ Re-weighting Raft consensus quorum & flushing warm NVMe buffers...', 'info', 2000);
  }, 1200);

  setTimeout(() => {
    TopLoader.done();
    btn.disabled = false;
    playTone(1320, 'sine', 0.15);

    if (window.appendLogEntry) {
      window.appendLogEntry('consensus', 'AI Auto-Optimizer rebalanced 6 geo-partitions. Consensus RTT cut by 38.4%.');
      window.appendLogEntry('wal', 'Cross-region zero-lag snapshot committed to all replicas.');
    }

    Toast.show('✨ Mesh Optimized: Global latency reduced by 38.4%! (P99: 0.38ms)', 'success', 3500);
  }, 2600);
}

/* ==============================================================================
   31. DISTRIBUTED CLUSTER EVENT & AUDIT LOG STREAMER
   ==============================================================================
*/
const clusterLogTemplates = [
  { cat: 'consensus', msg: 'Raft leader election verified for us-east-1 shard #iad-pg-101. Term: 8842.' },
  { cat: 'wal', msg: 'WAL segment fsync successful on nvme-vol-08 (4.2 MB written in 0.28ms).' },
  { cat: 'security', msg: 'Mutual TLS 1.3 certificate rotation verified between frankfurt and london hubs.' },
  { cat: 'consensus', msg: 'Quorum ACK received (5/5 replicas) across Mumbai, Singapore, and Tokyo.' },
  { cat: 'info', msg: 'Autonomous health probe passed for clickhouse_analytics_pune. IOPS headroom: 88%.' },
  { cat: 'wal', msg: 'Checkpoint completed. Active LSN moved to 0/1F84090 with zero transaction lock.' },
  { cat: 'security', msg: 'Zero-trust token authorized for operator session Tanmay • Scopes: [cluster:admin].' },
  { cat: 'consensus', msg: 'Cross-region vector index synchronization completed for qdrant_vector_hyd.' },
  { cat: 'info', msg: 'BGP Anycast route converged: Average client hop latency reduced to 1.05ms.' }
];

let logStreamInterval = null;
let currentLogFilter = 'all';

function initLogStreamer() {
  const logsContainer = document.getElementById('terminal-logs-content');
  if (!logsContainer) return;

  const filterPills = document.querySelectorAll('.log-pill');
  const btnClear = document.getElementById('btn-clear-logs');
  const btnDownload = document.getElementById('btn-download-logs');

  function getFormattedTime() {
    const now = new Date();
    return now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
  }

  window.appendLogEntry = function(category, message) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.dataset.category = category;
    if (currentLogFilter !== 'all' && currentLogFilter !== category) {
      entry.style.display = 'none';
    }

    entry.innerHTML = `
      <span class="log-time">${getFormattedTime()}</span>
      <span class="log-badge log-badge-${category}">${category.toUpperCase()}</span>
      <span class="log-msg">${message}</span>
    `;

    logsContainer.appendChild(entry);

    if (logsContainer.children.length > 100) {
      logsContainer.removeChild(logsContainer.firstElementChild);
    }

    const windowEl = document.getElementById('terminal-logs-window');
    if (windowEl) {
      windowEl.scrollTop = windowEl.scrollHeight;
    }
  };

  logsContainer.innerHTML = '';
  clusterLogTemplates.slice(0, 6).forEach(tmpl => {
    window.appendLogEntry(tmpl.cat, tmpl.msg);
  });

  if (logStreamInterval) clearInterval(logStreamInterval);
  logStreamInterval = setInterval(() => {
    const tmpl = clusterLogTemplates[Math.floor(Math.random() * clusterLogTemplates.length)];
    window.appendLogEntry(tmpl.cat, tmpl.msg);
  }, 3400);

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      playTone(550, 'sine', 0.04);
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentLogFilter = pill.dataset.logFilter;

      const entries = logsContainer.querySelectorAll('.log-entry');
      entries.forEach(entry => {
        if (currentLogFilter === 'all' || entry.dataset.category === currentLogFilter) {
          entry.style.display = 'flex';
        } else {
          entry.style.display = 'none';
        }
      });
    });
  });

  if (btnClear) {
    btnClear.addEventListener('click', () => {
      playTone(420, 'sine', 0.05);
      logsContainer.innerHTML = '';
      window.appendLogEntry('info', 'Audit stream cleared by operator.');
      Toast.show('Cluster event logs cleared', 'info', 1800);
    });
  }

  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
      playTone(740, 'sine', 0.06);
      const entries = logsContainer.querySelectorAll('.log-entry');
      let text = '=== FRIDAY FRAMEWORK DISTRIBUTED CLUSTER AUDIT LEDGER ===\n';
      text += `Exported: ${new Date().toISOString()}\n`;
      text += `Developed by Tanmay (Adesh Srivastava) with love\n\n`;

      entries.forEach(e => {
        const time = e.querySelector('.log-time')?.textContent || '';
        const badge = e.querySelector('.log-badge')?.textContent || '';
        const msg = e.querySelector('.log-msg')?.textContent || '';
        text += `[${time}] [${badge}] ${msg}\n`;
      });

      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `friday_cluster_audit_${Date.now()}.log`;
      a.click();
      URL.revokeObjectURL(url);
      Toast.show('Audit ledger log exported successfully!', 'success', 2200);
    });
  }
}

/* ==============================================================================
   32. SLIDING NODE DEEP INSPECTOR DRAWER
   ==============================================================================
*/
function initNodeDrawer() {
  const drawer = document.getElementById('node-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');

  if (!drawer || !backdrop) return;

  function closeDrawer() {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  window.closeNodeDrawer = closeDrawer;

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  const btnCheckpoint = document.getElementById('btn-wal-checkpoint');
  const btnRotateKey = document.getElementById('btn-rotate-key');
  const btnSnapshot = document.getElementById('btn-snapshot-node');
  const btnDrain = document.getElementById('btn-drain-traffic');

  if (btnCheckpoint) {
    btnCheckpoint.addEventListener('click', () => {
      playTone(850, 'sine', 0.08);
      TopLoader.start();
      setTimeout(() => {
        TopLoader.done();
        const hex = '0/' + Math.floor(0x1000000 + Math.random() * 0x8FFFFFF).toString(16).toUpperCase();
        const walEl = document.getElementById('drawer-wal-pos');
        if (walEl) walEl.textContent = hex;
        if (window.appendLogEntry) window.appendLogEntry('wal', `Forced checkpoint executed. WAL flushed to ${hex}.`);
        Toast.show('⚡ WAL Checkpoint flushed to persistent NVMe tier!', 'success', 2500);
      }, 500);
    });
  }

  if (btnRotateKey) {
    btnRotateKey.addEventListener('click', () => {
      playTone(950, 'sine', 0.08);
      if (window.appendLogEntry) window.appendLogEntry('security', 'Mutual TLS 1.3 ephemeral keys rotated for node.');
      Toast.show('🔐 TLS 1.3 encryption keys rotated successfully!', 'success', 2500);
    });
  }

  if (btnSnapshot) {
    btnSnapshot.addEventListener('click', () => {
      playTone(680, 'sine', 0.08);
      const snapId = 'snap-' + Math.random().toString(36).substring(2, 9);
      if (window.appendLogEntry) window.appendLogEntry('wal', `Zero-copy snapshot created: ${snapId}`);
      Toast.show(`📦 Point-in-time snapshot created: ${snapId}`, 'success', 2800);
    });
  }

  if (btnDrain) {
    btnDrain.addEventListener('click', () => {
      playTone(380, 'sine', 0.12);
      if (window.appendLogEntry) window.appendLogEntry('consensus', 'Traffic drained from node. Shifted traffic to healthy quorum replicas.');
      Toast.show('🛑 Shard traffic drained. Ready for isolated maintenance.', 'warning', 3000);
    });
  }

  const tableBody = document.getElementById('table-body');
  if (tableBody) {
    tableBody.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      const row = e.target.closest('tr.db-row');
      if (row) {
        const name = row.querySelector('.resource-name')?.textContent.trim() || 'cluster_node';
        const shard = row.querySelector('.resource-id')?.textContent.replace('shard-id: ', '').trim() || '#shard-01';
        window.openNodeDrawer(name, shard);
      }
    });
  }
}

window.openNodeDrawer = function(nodeName, shardId) {
  playTone(780, 'sine', 0.06);

  const drawer = document.getElementById('node-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!drawer || !backdrop) return;

  const nameEl = document.getElementById('drawer-node-name');
  const shardEl = document.getElementById('drawer-shard-id');
  const walEl = document.getElementById('drawer-wal-pos');

  if (nameEl) nameEl.textContent = nodeName || 'aurora_global_useast_01';
  if (shardEl) shardEl.textContent = `shard-id: ${shardId || '#iad-pg-101'}`;

  const cpuPct = Math.floor(32 + Math.random() * 45);
  const ramPct = Math.floor(55 + Math.random() * 32);
  const iopsPct = Math.floor(68 + Math.random() * 26);

  const gaugeCpu = document.getElementById('gauge-cpu');
  const gaugeCpuTxt = document.getElementById('gauge-cpu-txt');
  const gaugeRam = document.getElementById('gauge-ram');
  const gaugeRamTxt = document.getElementById('gauge-ram-txt');
  const gaugeIops = document.getElementById('gauge-iops');
  const gaugeIopsTxt = document.getElementById('gauge-iops-txt');

  if (gaugeCpu) gaugeCpu.setAttribute('stroke-dasharray', `${cpuPct}, 100`);
  if (gaugeCpuTxt) gaugeCpuTxt.textContent = `${cpuPct}%`;
  if (gaugeRam) gaugeRam.setAttribute('stroke-dasharray', `${ramPct}, 100`);
  if (gaugeRamTxt) gaugeRamTxt.textContent = `${ramPct}%`;
  if (gaugeIops) gaugeIops.setAttribute('stroke-dasharray', `${iopsPct}, 100`);
  if (gaugeIopsTxt) gaugeIopsTxt.textContent = `${iopsPct}%`;

  if (walEl) {
    walEl.textContent = '0/' + Math.floor(0x1000000 + Math.random() * 0x8FFFFFF).toString(16).toUpperCase();
  }

  drawer.classList.add('active');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
};
