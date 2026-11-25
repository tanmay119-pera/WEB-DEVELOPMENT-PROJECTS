/**
 * ==============================================================================
 * The Living Archive — Swiss-Editorial Tabbed Observatory Engine
 * Conceived, Designed & Architected by Tanmay (Adesh Srivastava)
 *
 * Zero synthetic AI gimmicks: pure 4K video pipeline, clean editorial tab
 * transitions, interactive astrophysics specs, Head-to-Head Compare, and Quiz.
 * ==============================================================================
 */

(function () {
  'use strict';

  const TAB_ORDER = [
    'hero',
    'sun', 'moon', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune',
    'compare', 'quiz'
  ];

  const NUMBER_KEY_MAP = {
    '1': 'sun', '2': 'moon', '3': 'mercury', '4': 'venus', '5': 'earth',
    '6': 'mars', '7': 'jupiter', '8': 'saturn', '9': 'uranus', '0': 'neptune'
  };

  const state = {
    activeTab: 'hero',
    isSoundOn: false,
    lenisInstance: null,
    quizMode: 'kids',
    quizQuestions: [],
    quizIndex: 0,
    quizScore: 0,
    quizStreak: 0,
    quizTimerInterval: null,
    quizTimeRemaining: 20,
    quizAnswered: false,
    vsLeft: 'earth',
    vsRight: 'jupiter',
    activeLabView: 'versus',
  };

  /* ============================================================================
     1. ASTROPHYSICS CALCULATIONS
     ============================================================================ */
  function getPlanetById(id) {
    return (window.PLANETS_DATA || []).find((p) => p.id === id) || null;
  }

  function getCurrentJulianDate() {
    return (Date.now() / 86400000) + 2440587.5;
  }

  function computeOrbitalVelocity(semiMajorAU, eccentricity) {
    if (!semiMajorAU || semiMajorAU <= 0) return '220.00';
    const GM_SUN = 1.32712440018e20;
    const AU_M = 149597870700;
    const a = semiMajorAU * AU_M;
    const r = a * (1 - eccentricity * eccentricity);
    return (Math.sqrt(GM_SUN * ((2 / r) - (1 / a))) / 1000).toFixed(2);
  }

  function computeEscapeVelocity(massKg, radiusKm) {
    const G = 6.67430e-11;
    return (Math.sqrt((2 * G * massKg) / (radiusKm * 1000)) / 1000).toFixed(2);
  }

  function computeSchwarzschild(massKg) {
    const G = 6.67430e-11;
    const C = 299792458;
    const meters = (2 * G * massKg) / (C * C);
    return meters >= 1 ? `${(meters / 1000).toFixed(2)} km` : `${(meters * 1000).toFixed(3)} mm`;
  }

  function formatLightTime(minutes) {
    if (!minutes) return '0s (Origin)';
    if (minutes < 60) {
      const m = Math.floor(minutes);
      const s = Math.round((minutes - m) * 60);
      return `${m}m ${s}s`;
    }
    const h = Math.floor(minutes / 60);
    const remM = Math.round(minutes % 60);
    return `${h}h ${remM}m`;
  }

  /* ============================================================================
     2. NATIVE VIDEO AUDIO CONTROLLER (CLEAN, NO SYNTHETIC BEEPS)
     ============================================================================ */
  function setVideoSoundEnabled(enabled) {
    state.isSoundOn = enabled;
    const btn = document.getElementById('video-sound-toggle');
    const offIcon = document.getElementById('icon-sound-off');
    const onIcon = document.getElementById('icon-sound-on');

    if (btn) btn.classList.toggle('is-active', enabled);
    if (offIcon) offIcon.style.display = enabled ? 'none' : 'block';
    if (onIcon) onIcon.style.display = enabled ? 'block' : 'none';

    syncActiveVideoPlayback(state.activeTab);
  }

  function syncActiveVideoPlayback(activeId) {
    document.querySelectorAll('video').forEach((video) => {
      const panel = video.closest('.tab-panel');
      const isMatch = panel && panel.id === activeId;

      if (isMatch) {
        if (video.dataset.src && video.getAttribute('src') !== video.dataset.src) {
          video.setAttribute('src', video.dataset.src);
          video.load();
        }
        video.muted = !state.isSoundOn;
        video.play().catch(() => {
          // Graceful fallback if browser blocks unmuted autoplay before gesture
          video.muted = true;
          video.play().catch(() => {});
        });
      } else {
        if (!video.paused) video.pause();
      }
    });
  }

  /* ============================================================================
     3. MASTER TAB CONTROLLER
     ============================================================================ */
  function closeMobileDrawer() {
    const sidebar = document.getElementById('planet-sidebar');
    const scrim = document.getElementById('sidebar-mobile-scrim');
    const mobToggle = document.getElementById('mobile-sidebar-toggle');
    sidebar?.classList.remove('mobile-open');
    scrim?.classList.remove('open');
    mobToggle?.setAttribute('aria-expanded', 'false');
  }

  function switchTab(targetId, options = {}) {
    if (!TAB_ORDER.includes(targetId)) targetId = 'hero';
    closeMobileDrawer();
    if (state.activeTab === targetId && !options.force) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    state.activeTab = targetId;

    // 1. Sync active state across right planet sidebar & bounded topbar modes
    document.querySelectorAll('.sidebar-planet-btn, .mode-tab').forEach((btn) => {
      const isActive = btn.getAttribute('data-tab') === targetId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    // Update bounded topbar context label
    const planet = getPlanetById(targetId);
    const ctxEl = document.getElementById('topbar-active-context');
    if (planet) {
      if (ctxEl) ctxEl.textContent = planet.name;
    } else if (targetId === 'compare') {
      if (ctxEl) ctxEl.textContent = 'Comparative Telemetry';
    } else if (targetId === 'quiz') {
      if (ctxEl) ctxEl.textContent = 'Knowledge Assessment';
    } else {
      if (ctxEl) ctxEl.textContent = 'Overview';
    }

    // 2. Toggle visible panel
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      const isTarget = panel.id === targetId;
      panel.classList.toggle('active', isTarget);
      panel.hidden = !isTarget;
    });

    // 3. Synchronize accent color & page title
    const rootStyle = document.documentElement.style;
    if (planet) {
      rootStyle.setProperty('--accent', planet.accentColor);
      document.title = `${planet.name} — The Living Archive`;
    } else if (targetId === 'compare') {
      rootStyle.setProperty('--accent', '#38d9a9');
      document.title = 'Compare Telemetry — The Living Archive';
    } else if (targetId === 'quiz') {
      rootStyle.setProperty('--accent', '#a855f7');
      document.title = 'Solar System Quiz — The Living Archive';
    } else {
      rootStyle.setProperty('--accent', '#e8c37d');
      document.title = 'The Living Archive — Solar System Observatory';
    }

    // 4. Switch active 4K video & reset scroll cleanly
    syncActiveVideoPlayback(targetId);
    window.scrollTo({ top: 0, behavior: 'auto' });
    const progress = document.getElementById('scroll-progress');
    if (progress) progress.style.width = '0%';

    // 5. Screen reader & URL hash update
    const announcer = document.getElementById('aria-live-announcer');
    if (announcer) announcer.textContent = `${planet ? planet.name : targetId} view active`;

    if (!options.skipHash && history.replaceState && window.location.hash !== `#${targetId}`) {
      history.replaceState(null, '', `#${targetId}`);
    }
  }
  window.switchPlanetTab = switchTab;

  /* ============================================================================
     4. HERO FILMSTRIP & PLANET TAB PANELS RENDERER
     ============================================================================ */
  function renderHeroFilmstrip() {
    const grid = document.getElementById('hero-worlds-grid');
    if (!grid || !window.PLANETS_DATA) return;

    grid.innerHTML = window.PLANETS_DATA.map((p, i) => `
      <button type="button" class="world-strip-item tab-trigger" data-tab="${p.id}" style="--card-accent:${p.accentColor};">
        <img src="videos/thumbs/${p.id}_3d_cinema.jpg" alt="${p.name}" class="world-strip-thumb" decoding="async">
        <div class="world-strip-meta">
          <span class="world-strip-name">${p.name.replace('The ', '')}</span>
          <span class="world-strip-num">${String(i + 1).padStart(2, '0')}</span>
        </div>
      </button>
    `).join('');

    const jdBadge = document.getElementById('hero-jd-badge');
    if (jdBadge) {
      jdBadge.textContent = `JD ${getCurrentJulianDate().toFixed(2)} • SOLAR SYSTEM ATLAS • 10 WORLDS`;
    }
  }

  function buildPhysicsGridCells(planet) {
    const pid = planet.id;
    const phys = planet.physics || {};
    const flux = (window.SOLAR_FLUX_TELEMETRY && window.SOLAR_FLUX_TELEMETRY[pid]) || {};
    const orbVel = computeOrbitalVelocity(phys.semiMajorAU, phys.eccentricity || 0);
    const escVel = phys.massKg && phys.radiusKm ? computeEscapeVelocity(phys.massKg, phys.radiusKm) : '617.7';
    const spectra = (window.PLANETARY_SPECTRA && window.PLANETARY_SPECTRA[pid]) ||
      'Thermal blackbody continuum and hydrogen-alpha Balmer lines.';
    const albedo = window.PLANETARY_ALBEDO && window.PLANETARY_ALBEDO[pid];
    const incl = (window.ECLIPTIC_INCLINATIONS && window.ECLIPTIC_INCLINATIONS[pid]) || (pid === 'sun' ? 'System Reference' : '5.14° to Ecliptic');
    const dipole = (window.MAGNETIC_DIPOLES && window.MAGNETIC_DIPOLES[pid]) || 'Solar Dynamo / Induced Magnetosphere';

    let contextTitle = 'Orbit & Magnetosphere';
    let contextBody = `<strong>Inclination:</strong> ${incl}<br><strong>Magnetic Dipole:</strong> ${dipole}`;
    if (pid === 'jupiter' || pid === 'saturn') {
      const moons = (window.OCEAN_MOONS_DATA || []).filter((m) => m.parent.toLowerCase() === pid);
      if (moons.length) {
        contextTitle = 'Ocean Moon Dossiers';
        contextBody = moons.map((m) => `<strong>${m.name}:</strong> ${m.oceanDepth} (${m.oceanVolume})`).join('<br>');
      }
    } else if ((pid === 'sun' || pid === 'earth') && window.LAGRANGE_POINTS) {
      contextTitle = 'Lagrange Equilibrium';
      contextBody = `<strong>L1:</strong> ${window.LAGRANGE_POINTS.L1.use}<br><strong>L2:</strong> ${window.LAGRANGE_POINTS.L2.use}`;
    }

    const albedoHtml = albedo ? `
      <div class="albedo-row">
        <span>Bond Albedo (${(albedo.bond * 100).toFixed(1)}%)</span>
        <div class="albedo-track"><div class="albedo-fill" style="width:${Math.min(100, albedo.bond * 100)}%"></div></div>
      </div>
      <div class="albedo-row">
        <span>Geometric Albedo (${(albedo.geometric * 100).toFixed(1)}%)</span>
        <div class="albedo-track"><div class="albedo-fill" style="width:${Math.min(100, albedo.geometric * 100)}%"></div></div>
      </div>
    ` : `<p>Active self-luminous G2V photosphere emission across full spectrum.</p>`;

    return `
      <div class="physics-cell">
        <h4>Solar Irradiance &amp; Flux</h4>
        <p>${flux.irradiance || '1,361 W/m²'}<br>Radiation Pressure: ${flux.radiationPressure || '4.54 µPa'}</p>
      </div>
      <div class="physics-cell">
        <h4>Orbital Dynamics</h4>
        <p>Velocity: <strong>${orbVel} km/s</strong><br>Escape: <strong>${escVel} km/s</strong> &bull; Light Delay: ${formatLightTime(phys.lightTimeFromSunMin)}</p>
      </div>
      <div class="physics-cell">
        <h4>Absorption Spectroscopy</h4>
        <p>${spectra}</p>
      </div>
      <div class="physics-cell">
        <h4>Optical Reflectivity &amp; Field</h4>
        ${albedoHtml}
        <p style="margin-top:0.75rem;">${contextBody}</p>
      </div>
    `;
  }

  function renderPlanetChapters() {
    const container = document.getElementById('chapters-container');
    const planets = window.PLANETS_DATA || [];
    if (!container || !planets.length) return;

    container.innerHTML = planets.map((planet, index) => {
      const prevTab = index === 0 ? { id: 'hero', name: 'Overview' } : { id: planets[index - 1].id, name: planets[index - 1].name };
      const nextTab = index === planets.length - 1 ? { id: 'compare', name: 'Compare Telemetry' } : { id: planets[index + 1].id, name: planets[index + 1].name };
      const phys = planet.physics || {};
      const earthG = phys.gravityMS2 ? (phys.gravityMS2 / 9.807) : 1.0;
      const schwarz = phys.massKg ? computeSchwarzschild(phys.massKg) : '2.95 km';
      const orbVel = computeOrbitalVelocity(phys.semiMajorAU, phys.eccentricity || 0);

      const ledgerCells = [
        { k: 'Diameter', v: planet.quickFacts?.[0]?.display?.split(' (')[0] || '—' },
        { k: 'Gravity', v: `${phys.gravityMS2} m/s²` },
        { k: 'Orbital Speed', v: `${orbVel} km/s` },
        { k: 'Light Delay', v: formatLightTime(phys.lightTimeFromSunMin) }
      ].map((c) => `
        <div class="ledger-cell">
          <span class="ledger-key">${c.k}</span>
          <span class="ledger-val">${c.v}</span>
        </div>
      `).join('');

      const specRows = (planet.quickFacts || []).map((f) => `
        <div class="spec-row">
          <span class="spec-row-label">${f.label}</span>
          <span class="spec-row-val">${f.display}</span>
        </div>
      `).join('');

      const missionsHtml = (planet.missions || []).map((m) => `
        <div class="mission-row">
          <div class="mission-year">${m.year}</div>
          <div class="mission-body">
            <h4>${m.name}</h4>
            <p>${m.role}</p>
          </div>
        </div>
      `).join('');

      const anomaliesHtml = (planet.flipFacts || []).map((f, i) => `
        <article class="anomaly-col">
          <div class="anomaly-tag">0${i + 1} &bull; ${f.tag}</div>
          <h4>${f.hook}</h4>
          <p>${f.fact}</p>
        </article>
      `).join('');

      return `
        <section
          class="planet-chapter tab-panel"
          id="${planet.id}"
          data-chapter="${planet.id}"
          role="tabpanel"
          hidden
          style="--accent:${planet.accentColor};"
          aria-label="${planet.name}"
        >
          <!-- 1. FULL-BLEED 4K PLANET STAGE -->
          <div class="chapter-stage">
            <div class="chapter-video-bg">
              <video
                class="chapter-video-element"
                data-src="${planet.videoSrc}"
                poster="${planet.posterSrc || ''}"
                loop
                muted
                playsinline
                preload="none"
              ></video>
              <div class="chapter-video-gradient"></div>
            </div>

            <button type="button" class="hud-toggle-btn" data-hud-toggle="${planet.id}">Hide HUD</button>

            <div class="chapter-stage-overlay">
              <div class="stage-title-block">
                <div class="stage-kicker">${planet.chapter} &mdash; ${planet.classification}</div>
                <h2 class="stage-title">${planet.name}</h2>
                <p class="stage-tagline">${planet.tagline}</p>
              </div>
              <div class="stage-ledger">${ledgerCells}</div>
            </div>
          </div>

          <!-- 2. COMPACT EDITORIAL DOSSIER (SPEC SHEET + TABBED REPORT) -->
          <div class="dossier-workspace">
            <aside class="spec-sidebar">
              <div class="spec-sidebar-header">Physical Datasheet</div>
              <div class="spec-table-list">${specRows}</div>
              <div class="weight-calc-box" data-gravity-ratio="${earthG.toFixed(4)}">
                <div class="weight-calc-top">
                  <span>Surface Mass Simulator</span>
                  <span><strong class="earth-kg-readout">70</strong> kg Earth</span>
                </div>
                <div class="weight-calc-readout">
                  <span class="world-kg-readout">${(70 * earthG).toFixed(1)}</span> kg
                </div>
                <input type="range" min="10" max="200" value="70" class="sim-slider weight-slider" aria-label="Simulate your weight on ${planet.name}">
                <div class="weight-calc-foot">${earthG.toFixed(2)}g gravity &bull; Schwarzschild r<sub>s</sub> ${schwarz}</div>
              </div>
            </aside>

            <div class="dossier-main">
              <div class="inner-tabs-bar" role="tablist" aria-label="${planet.name} Dossier Sections">
                <button type="button" class="inner-tab-btn active" role="tab" aria-selected="true" data-inner-target="${planet.id}-chronicle">Chronicle</button>
                <button type="button" class="inner-tab-btn" role="tab" aria-selected="false" data-inner-target="${planet.id}-physics">Physics &amp; Spectra</button>
                <button type="button" class="inner-tab-btn" role="tab" aria-selected="false" data-inner-target="${planet.id}-missions">Missions Log</button>
                <button type="button" class="inner-tab-btn" role="tab" aria-selected="false" data-inner-target="${planet.id}-anomalies">Key Anomalies</button>
              </div>

              <div class="inner-pane active" id="${planet.id}-chronicle" role="tabpanel">
                <div class="chronicle-grid">
                  <article class="chronicle-entry">
                    <h3>Cosmic Overview</h3>
                    <p>${planet.story.overview}</p>
                  </article>
                  <article class="chronicle-entry">
                    <h3>Atmosphere &amp; Climate</h3>
                    <p>${planet.story.atmosphere}</p>
                  </article>
                  <article class="chronicle-entry">
                    <h3>Internal Architecture</h3>
                    <p>${planet.story.structure}</p>
                  </article>
                  <article class="chronicle-entry">
                    <h3>Moons &amp; Rings</h3>
                    <p>${planet.story.moonsAndRings}</p>
                  </article>
                </div>
              </div>

              <div class="inner-pane" id="${planet.id}-physics" role="tabpanel" hidden>
                <div class="physics-grid">${buildPhysicsGridCells(planet)}</div>
              </div>

              <div class="inner-pane" id="${planet.id}-missions" role="tabpanel" hidden>
                <div class="missions-list">${missionsHtml}</div>
              </div>

              <div class="inner-pane" id="${planet.id}-anomalies" role="tabpanel" hidden>
                <div class="anomalies-grid">${anomaliesHtml}</div>
              </div>
            </div>
          </div>

          <!-- 3. PREV / NEXT PLANET TAB DECK -->
          <div class="planet-footer-bar">
            <div class="planet-switcher-deck">
              <button type="button" class="switcher-card prev tab-trigger" data-tab="${prevTab.id}">
                <span class="switcher-dir">&larr; Previous Tab</span>
                <span class="switcher-name">${prevTab.name}</span>
              </button>
              <button type="button" class="switcher-card next tab-trigger" data-tab="${nextTab.id}">
                <span class="switcher-dir">Next Tab &rarr;</span>
                <span class="switcher-name">${nextTab.name}</span>
              </button>
            </div>
          </div>
        </section>
      `;
    }).join('');

    // Inner dossier sub-tab switching
    container.querySelectorAll('.inner-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const main = btn.closest('.dossier-main');
        const targetId = btn.getAttribute('data-inner-target');
        main.querySelectorAll('.inner-tab-btn').forEach((b) => {
          const match = b === btn;
          b.classList.toggle('active', match);
          b.setAttribute('aria-selected', String(match));
        });
        main.querySelectorAll('.inner-pane').forEach((pane) => {
          const match = pane.id === targetId;
          pane.classList.toggle('active', match);
          pane.hidden = !match;
        });
      });
    });

    // HUD hide toggle on 4K stage
    container.querySelectorAll('.hud-toggle-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chapter = btn.closest('.planet-chapter');
        const hidden = chapter.classList.toggle('is-clean-video');
        btn.textContent = hidden ? 'Show HUD' : 'Hide HUD';
      });
    });

    // Weight sliders
    container.querySelectorAll('.weight-calc-box').forEach((box) => {
      const ratio = parseFloat(box.getAttribute('data-gravity-ratio') || '1');
      const slider = box.querySelector('.weight-slider');
      const earthEl = box.querySelector('.earth-kg-readout');
      const worldEl = box.querySelector('.world-kg-readout');
      slider?.addEventListener('input', () => {
        const kg = parseFloat(slider.value);
        earthEl.textContent = kg;
        worldEl.textContent = (kg * ratio).toFixed(1);
      });
    });
  }

  /* ============================================================================
     5. COMPARE LAB (#compare)
     ============================================================================ */
  function renderCompareLabView(viewName) {
    state.activeLabView = viewName;
    const stage = document.getElementById('compare-lab-stage');
    if (!stage) return;

    document.querySelectorAll('#compare .subtab-btn').forEach((btn) => {
      const match = btn.getAttribute('data-lab') === viewName;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', String(match));
    });

    const planets = window.PLANETS_DATA || [];

    if (viewName === 'versus') {
      const leftP = getPlanetById(state.vsLeft) || planets[4];
      const rightP = getPlanetById(state.vsRight) || planets[6];
      const optionsHtml = (selId) => planets.map((p) =>
        `<option value="${p.id}" ${p.id === selId ? 'selected' : ''}>${p.name} — ${p.classification}</option>`
      ).join('');

      const buildVsCard = (p) => {
        const ph = p.physics || {};
        return `
          <div class="vs-card">
            <img src="videos/thumbs/${p.id}_3d_cinema.jpg" alt="${p.name}" class="vs-card-poster" decoding="async">
            <div>
              <span class="lab-card-tag" style="color:${p.accentColor}">${p.chapter} &bull; ${p.classification}</span>
              <h3 style="font-family:var(--font-heading);font-size:2rem;color:#fff;">${p.name}</h3>
            </div>
            <div class="vs-metric-row"><span>Surface Gravity</span><strong>${ph.gravityMS2} m/s² (${(ph.gravityMS2 / 9.807).toFixed(2)}g)</strong></div>
            <div class="vs-metric-row"><span>Mean Radius</span><strong>${(ph.radiusKm || 0).toLocaleString()} km</strong></div>
            <div class="vs-metric-row"><span>Orbital Velocity</span><strong>${computeOrbitalVelocity(ph.semiMajorAU, ph.eccentricity || 0)} km/s</strong></div>
            <div class="vs-metric-row"><span>Escape Velocity</span><strong>${ph.massKg ? computeEscapeVelocity(ph.massKg, ph.radiusKm) : '—'} km/s</strong></div>
            <div class="vs-metric-row"><span>Solar Distance</span><strong>${ph.semiMajorAU} AU (${formatLightTime(ph.lightTimeFromSunMin)})</strong></div>
            <div class="vs-metric-row"><span>Known Moons</span><strong>${ph.moonsCount}</strong></div>
            <button type="button" class="btn-outline tab-trigger" data-tab="${p.id}" style="margin-top:0.5rem;">Open ${p.name} Tab &rarr;</button>
          </div>
        `;
      };

      stage.innerHTML = `
        <div class="vs-controls">
          <select id="vs-select-left" class="vs-select" aria-label="Select left world">${optionsHtml(leftP.id)}</select>
          <span class="vs-badge">VS</span>
          <select id="vs-select-right" class="vs-select" aria-label="Select right world">${optionsHtml(rightP.id)}</select>
        </div>
        <div class="vs-grid">${buildVsCard(leftP)}${buildVsCard(rightP)}</div>
      `;

      document.getElementById('vs-select-left')?.addEventListener('change', (e) => {
        state.vsLeft = e.target.value;
        renderCompareLabView('versus');
      });
      document.getElementById('vs-select-right')?.addEventListener('change', (e) => {
        state.vsRight = e.target.value;
        renderCompareLabView('versus');
      });
      return;
    }

    if (viewName === 'matrices') {
      const terr = window.TERRESTRIAL_COMPARISON || [];
      const giants = window.GIANTS_COMPARISON || [];
      stage.innerHTML = `
        <div class="mono-kicker" style="margin-bottom:0.8rem;">Inner Terrestrial Worlds</div>
        <div class="matrix-table-wrap">
          <table class="matrix-table">
            <thead><tr><th>World</th><th>Mass</th><th>Radius</th><th>Density</th><th>Gravity</th><th>Atmosphere</th><th>Magnetic Field</th></tr></thead>
            <tbody>${terr.map((r) => `<tr><td><strong>${r.name}</strong></td><td>${r.mass}</td><td>${r.radius}</td><td>${r.density}</td><td>${r.gravity}</td><td>${r.atmosphere}</td><td>${r.magneticField}</td></tr>`).join('')}</tbody>
          </table>
        </div>
        <div class="mono-kicker" style="margin-bottom:0.8rem;">Outer Gas &amp; Ice Giants</div>
        <div class="matrix-table-wrap">
          <table class="matrix-table">
            <thead><tr><th>World</th><th>Class</th><th>Mass</th><th>Radius</th><th>Density</th><th>Gravity</th><th>Magnetic Field</th><th>Moons</th></tr></thead>
            <tbody>${giants.map((r) => `<tr><td><strong>${r.name}</strong></td><td>${r.type}</td><td>${r.mass}</td><td>${r.radius}</td><td>${r.density}</td><td>${r.gravity}</td><td>${r.magneticField}</td><td>${r.moons}</td></tr>`).join('')}</tbody>
          </table>
        </div>
      `;
      return;
    }

    if (viewName === 'moons') {
      const moons = window.OCEAN_MOONS_DATA || [];
      const dwarfs = window.DWARF_PLANETS_DATA || [];
      stage.innerHTML = `
        <div class="mono-kicker" style="margin-bottom:0.8rem;">Subsurface Ocean Moons</div>
        <div class="lab-cards-grid">
          ${moons.map((m) => `
            <div class="lab-card">
              <span class="lab-card-tag">${m.parent} System</span>
              <h4>${m.name}</h4>
              <p><strong>Ocean:</strong> ${m.oceanDepth} (${m.oceanVolume})<br><strong>Energy:</strong> ${m.energySource}</p>
            </div>
          `).join('')}
        </div>
        <div class="mono-kicker" style="margin-bottom:0.8rem;">Trans-Neptunian Dwarf Worlds</div>
        <div class="lab-cards-grid">
          ${dwarfs.map((d) => `
            <div class="lab-card">
              <span class="lab-card-tag">${d.semiMajorAU} AU &bull; ${d.diameter}</span>
              <h4>${d.name}</h4>
              <p>${d.anomaly}</p>
            </div>
          `).join('')}
        </div>
      `;
      return;
    }

    if (viewName === 'exoplanets') {
      const exos = window.EXOPLANET_BENCHMARKS || [];
      const probes = window.INTERSTELLAR_TRAJECTORIES || {};
      stage.innerHTML = `
        <div class="lab-card" style="border:1px solid var(--line-subtle);margin-bottom:1.8rem;">
          <span class="lab-card-tag">Habitable Zone Simulator (<span id="hz-lum-readout">1.00</span> L<sub>&odot;</sub>)</span>
          <h4>Circumstellar Liquid-Water Zone Boundaries</h4>
          <input type="range" id="hz-lum-slider" min="0.05" max="4.0" step="0.05" value="1.0" class="sim-slider" style="margin:0.65rem 0;">
          <p id="hz-bounds-output" style="font-family:var(--font-mono);color:#fff;">Habitable Ring: 0.95 AU — 1.37 AU</p>
        </div>
        <div class="mono-kicker" style="margin-bottom:0.8rem;">Habitable Exoplanet Benchmarks</div>
        <div class="lab-cards-grid">
          ${exos.map((e) => `
            <div class="lab-card">
              <span class="lab-card-tag">ESI ${(e.habitabilityIndex * 100).toFixed(0)}% &bull; ${e.hostStar}</span>
              <h4>${e.name}</h4>
              <p>Mass: ${e.mass} &bull; Orbit: ${e.orbitalPeriod} &bull; Eq Temp: ${e.equilibriumTemp}</p>
            </div>
          `).join('')}
        </div>
        <div class="mono-kicker" style="margin-bottom:0.8rem;">Interstellar Probes</div>
        <div class="lab-cards-grid">
          ${Object.entries(probes).map(([k, v]) => {
            const probeTitles = {
              voyager1: 'Voyager 1',
              voyager2: 'Voyager 2',
              newHorizons: 'New Horizons',
              pioneer10: 'Pioneer 10'
            };
            return `
              <div class="lab-card">
                <span class="lab-card-tag">${v.distance} &bull; ${v.velocity}</span>
                <h4>${probeTitles[k] || k}</h4>
                <p>Heading: ${v.heading}<br>Heliopause: ${v.crossedHeliopause}</p>
              </div>
            `;
          }).join('')}
        </div>
      `;

      const hzSlider = document.getElementById('hz-lum-slider');
      hzSlider?.addEventListener('input', () => {
        const lum = parseFloat(hzSlider.value);
        document.getElementById('hz-lum-readout').textContent = lum.toFixed(2);
        document.getElementById('hz-bounds-output').textContent =
          `Habitable Ring: ${Math.sqrt(lum / 1.1).toFixed(2)} AU — ${Math.sqrt(lum / 0.53).toFixed(2)} AU`;
      });
    }
  }

  function downloadFile(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function initCompareLab() {
    document.querySelectorAll('#compare .subtab-btn').forEach((btn) => {
      btn.addEventListener('click', () => renderCompareLabView(btn.getAttribute('data-lab')));
    });
    document.getElementById('export-json-btn')?.addEventListener('click', () => {
      downloadFile('living_archive_solar_system.json', JSON.stringify(window.PLANETS_DATA || [], null, 2), 'application/json');
    });
    document.getElementById('export-csv-btn')?.addEventListener('click', () => {
      const rows = [['Name', 'Classification', 'Distance_AU', 'Gravity_ms2', 'MeanTemp_C', 'Moons']];
      (window.PLANETS_DATA || []).forEach((p) => {
        const ph = p.physics || {};
        rows.push([`"${p.name}"`, `"${p.classification}"`, ph.semiMajorAU, ph.gravityMS2, ph.meanTempC, ph.moonsCount]);
      });
      downloadFile('living_archive_solar_system.csv', rows.map((r) => r.join(',')).join('\n'), 'text/csv');
    });
    renderCompareLabView('versus');
  }

  /* ============================================================================
     6. SEARCH MODAL & QUIZ ENGINE
     ============================================================================ */
  function initSearchModal() {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('archive-search-input');
    const results = document.getElementById('search-results-list');
    if (!modal || !input || !results) return;

    const corpus = [
      ...(window.PLANETS_DATA || []).map((p) => ({
        tab: p.id,
        title: p.name,
        sub: `${p.classification} — ${p.tagline}`,
        blob: `${p.name} ${p.classification} ${p.tagline} ${p.story.overview} ${p.story.atmosphere} ${p.story.structure}`.toLowerCase()
      })),
      { tab: 'compare', title: 'Compare Telemetry Lab', sub: 'Versus Comparator, Ocean Moons, Habitable Zones', blob: 'compare vs matrix europa enceladus titan pluto eris voyager trappist' },
      { tab: 'quiz', title: 'Solar System Quiz', sub: 'Explorer & Astrophysicist Assessments', blob: 'quiz test questions assessment' }
    ];

    function render(q) {
      const term = (q || '').toLowerCase().trim();
      const matched = term ? corpus.filter((item) => item.blob.includes(term)) : corpus.slice(0, 6);
      if (!matched.length) {
        results.innerHTML = `<div style="padding:1.2rem;color:var(--text-muted);text-align:center;">No matches for "${q}"</div>`;
        return;
      }
      results.innerHTML = matched.map((m) => `
        <button type="button" class="search-result-item" data-jump="${m.tab}">
          <div>
            <strong>${m.title}</strong>
            <div class="search-res-sub">${m.sub}</div>
          </div>
          <span class="search-res-cta">Open Tab &rarr;</span>
        </button>
      `).join('');

      results.querySelectorAll('.search-result-item').forEach((btn) => {
        btn.addEventListener('click', () => {
          closeModal();
          switchTab(btn.getAttribute('data-jump'));
        });
      });
    }

    function openModal() {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      input.value = '';
      render('');
      setTimeout(() => input.focus(), 20);
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }

    document.getElementById('open-search-btn')?.addEventListener('click', openModal);
    document.getElementById('close-search-btn')?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    input.addEventListener('input', () => render(input.value));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') results.querySelector('.search-result-item')?.click();
      else if (e.key === 'Escape') closeModal();
    });

    window.openArchiveSearchModal = openModal;
    window.closeArchiveSearchModal = closeModal;
  }

  function initQuizEngine() {
    const quizData = window.QUIZ_DATA;
    if (!quizData) return;

    const qCard = document.getElementById('quiz-question-card');
    const rCard = document.getElementById('quiz-results-card');
    const qCounter = document.getElementById('quiz-question-counter');
    const streakEl = document.getElementById('streak-badge');
    const bestEl = document.getElementById('best-score-display');
    const scoreEl = document.getElementById('quiz-score-counter');
    const timerNum = document.getElementById('timer-number');
    const timerFill = document.getElementById('timer-fill');
    const qText = document.getElementById('quiz-question-text');
    const grid = document.getElementById('quiz-options-grid');
    const fbBox = document.getElementById('quiz-feedback-box');
    const fbStatus = document.getElementById('feedback-status');
    const fbText = document.getElementById('feedback-text');
    const nextBtn = document.getElementById('quiz-next-btn');
    const restartBtn = document.getElementById('quiz-restart-btn');
    const kidsBtn = document.getElementById('btn-mode-kids');
    const adultsBtn = document.getElementById('btn-mode-adults');
    if (!qCard || !grid) return;

    const getBest = (m) => parseInt(localStorage.getItem(`living_archive_best_${m}`) || '0', 10);
    const setBest = (m, s) => { if (s > getBest(m)) localStorage.setItem(`living_archive_best_${m}`, String(s)); };

    function shuffle(arr) {
      const c = [...arr];
      for (let i = c.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [c[i], c[j]] = [c[j], c[i]];
      }
      return c;
    }

    function startQuiz(mode) {
      state.quizMode = mode;
      state.quizQuestions = shuffle(quizData[mode] || quizData.kids || []);
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizStreak = 0;
      state.quizAnswered = false;

      kidsBtn?.classList.toggle('active', mode === 'kids');
      adultsBtn?.classList.toggle('active', mode === 'adults');
      if (bestEl) bestEl.textContent = `Best ${getBest(mode)} / ${state.quizQuestions.length}`;

      qCard.style.display = 'block';
      rCard.style.display = 'none';
      renderQ();
    }

    function renderQ() {
      state.quizAnswered = false;
      clearInterval(state.quizTimerInterval);
      const q = state.quizQuestions[state.quizIndex];
      if (!q) { showResults(); return; }

      qCounter.textContent = `${state.quizIndex + 1} / ${state.quizQuestions.length}`;
      streakEl.textContent = `Streak ${state.quizStreak}`;
      scoreEl.textContent = `Score ${state.quizScore}`;
      qText.textContent = q.question;
      fbBox.style.display = 'none';
      nextBtn.style.display = 'none';

      grid.innerHTML = '';
      ['A', 'B', 'C', 'D'].forEach((letter, idx) => {
        if (q.options[idx] === undefined) return;
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.type = 'button';
        btn.innerHTML = `<span class="option-key">${letter}</span><span>${q.options[idx]}</span>`;
        btn.addEventListener('click', () => handleAns(idx, btn));
        grid.appendChild(btn);
      });

      state.quizTimeRemaining = 20;
      timerNum.textContent = '20';
      timerFill.style.strokeDashoffset = '0';
      state.quizTimerInterval = setInterval(() => {
        if (state.activeTab !== 'quiz') return;
        state.quizTimeRemaining--;
        timerNum.textContent = String(state.quizTimeRemaining);
        timerFill.style.strokeDashoffset = String(110 * (1 - state.quizTimeRemaining / 20));
        if (state.quizTimeRemaining <= 0) {
          clearInterval(state.quizTimerInterval);
          if (!state.quizAnswered) handleAns(-1, null);
        }
      }, 1000);
    }

    function handleAns(selIdx, clickedBtn) {
      if (state.quizAnswered) return;
      state.quizAnswered = true;
      clearInterval(state.quizTimerInterval);

      const q = state.quizQuestions[state.quizIndex];
      const ok = selIdx === q.answer;
      grid.querySelectorAll('.option-btn').forEach((b, idx) => {
        b.disabled = true;
        if (idx === q.answer) b.classList.add('is-correct');
      });

      if (ok) {
        state.quizScore++;
        state.quizStreak++;
        clickedBtn?.classList.add('is-correct');
        fbStatus.textContent = 'Correct';
        fbStatus.className = 'feedback-status correct';
      } else {
        state.quizStreak = 0;
        clickedBtn?.classList.add('is-wrong');
        fbStatus.textContent = selIdx === -1 ? 'Time Expired' : 'Incorrect';
        fbStatus.className = 'feedback-status wrong';
      }

      streakEl.textContent = `Streak ${state.quizStreak}`;
      scoreEl.textContent = `Score ${state.quizScore}`;
      fbText.textContent = q.explanation;
      fbBox.style.display = 'block';
      nextBtn.innerHTML = state.quizIndex === state.quizQuestions.length - 1 ? 'Complete Quiz &rarr;' : 'Next Question &rarr;';
      nextBtn.style.display = 'inline-block';
    }

    function showResults() {
      clearInterval(state.quizTimerInterval);
      qCard.style.display = 'none';
      rCard.style.display = 'block';
      const total = state.quizQuestions.length;
      const ratio = state.quizScore / total;
      setBest(state.quizMode, state.quizScore);
      document.getElementById('results-score-display').textContent = `${state.quizScore} / ${total}`;
      if (ratio >= 0.75 && typeof confetti === 'function') {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      }
      document.getElementById('results-title').textContent =
        ratio >= 0.75 ? 'Galactic Master' : ratio >= 0.5 ? 'Senior Explorer' : 'Cadet Astronomer';
      document.getElementById('results-message').textContent =
        ratio >= 0.75 ? 'Outstanding planetary command across all ten bodies.' : 'Good attempt. Browse the datasheets and try again.';
    }

    nextBtn?.addEventListener('click', () => {
      state.quizIndex++;
      if (state.quizIndex < state.quizQuestions.length) renderQ();
      else showResults();
    });
    restartBtn?.addEventListener('click', () => startQuiz(state.quizMode));
    kidsBtn?.addEventListener('click', () => startQuiz('kids'));
    adultsBtn?.addEventListener('click', () => startQuiz('adults'));

    window.__quizHandleOptionIndex = (i) => {
      const btns = grid.querySelectorAll('.option-btn');
      if (!state.quizAnswered && btns[i]) btns[i].click();
    };
    window.__quizAdvance = () => {
      if (state.quizAnswered && nextBtn.style.display !== 'none') nextBtn.click();
    };

    startQuiz('kids');
  }

  /* ============================================================================
     7. EVENTS, KEYBOARD, TOUCH SWIPE & BOOTSTRAP
     ============================================================================ */
  function initGlobalInteractions() {
    const progress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = `${h > 0 ? (window.scrollY / h) * 100 : 0}%`;
    }, { passive: true });

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.sidebar-planet-btn, .mode-tab, .tab-trigger');
      if (!trigger) return;
      const tab = trigger.getAttribute('data-tab');
      if (tab) {
        e.preventDefault();
        switchTab(tab);
      }
    });

    // Mobile Drawer toggle
    const mobToggle = document.getElementById('mobile-sidebar-toggle');
    const sidebarEl = document.getElementById('planet-sidebar');
    const scrimEl = document.getElementById('sidebar-mobile-scrim');
    const toggleMobileDrawer = (e) => {
      e?.stopPropagation();
      const open = sidebarEl?.classList.toggle('mobile-open');
      scrimEl?.classList.toggle('open', !!open);
      mobToggle?.setAttribute('aria-expanded', String(!!open));
    };
    mobToggle?.addEventListener('click', toggleMobileDrawer);
    scrimEl?.addEventListener('click', closeMobileDrawer);

    document.getElementById('video-sound-toggle')?.addEventListener('click', () => {
      setVideoSoundEnabled(!state.isSoundOn);
    });

    const toggleCinema = () => document.body.classList.toggle('cinema-kiosk-mode');
    document.getElementById('cinema-mode-btn')?.addEventListener('click', toggleCinema);
    document.getElementById('exit-cinema-pill')?.addEventListener('click', () => {
      document.body.classList.remove('cinema-kiosk-mode');
    });

    document.getElementById('back-to-top-btn')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('keydown', (e) => {
      const searchOpen = document.getElementById('search-modal')?.classList.contains('open');
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        window.openArchiveSearchModal?.();
        return;
      }
      if (e.key === 'Escape') {
        if (searchOpen) window.closeArchiveSearchModal?.();
        else {
          document.body.classList.remove('cinema-kiosk-mode');
          closeMobileDrawer();
        }
        return;
      }
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || searchOpen) return;

      if (e.key === '/') {
        e.preventDefault();
        window.openArchiveSearchModal?.();
        return;
      }
      if (e.key.toLowerCase() === 'c') {
        toggleCinema();
        return;
      }
      if (e.key === 'ArrowRight') {
        const i = TAB_ORDER.indexOf(state.activeTab);
        if (i < TAB_ORDER.length - 1) switchTab(TAB_ORDER[i + 1]);
        return;
      }
      if (e.key === 'ArrowLeft') {
        const i = TAB_ORDER.indexOf(state.activeTab);
        if (i > 0) switchTab(TAB_ORDER[i - 1]);
        return;
      }

      if (state.activeTab === 'quiz') {
        if (['1', '2', '3', '4'].includes(e.key)) {
          window.__quizHandleOptionIndex?.(parseInt(e.key, 10) - 1);
          return;
        }
        if (e.key === 'Enter') {
          window.__quizAdvance?.();
          return;
        }
      }

      if (NUMBER_KEY_MAP[e.key]) {
        e.preventDefault();
        switchTab(NUMBER_KEY_MAP[e.key]);
      }
    });

    // Horizontal swipe tab switching on mobile
    let touchX = 0;
    let touchY = 0;
    window.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1 || e.target.closest('#planet-sidebar, .hero-worlds-strip, input')) return;
      touchX = e.touches[0].clientX;
      touchY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (!touchX || e.changedTouches.length !== 1) return;
      const dx = e.changedTouches[0].clientX - touchX;
      const dy = e.changedTouches[0].clientY - touchY;
      touchX = 0;
      if (Math.abs(dx) > 85 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        const i = TAB_ORDER.indexOf(state.activeTab);
        if (dx < 0 && i < TAB_ORDER.length - 1) switchTab(TAB_ORDER[i + 1]);
        else if (dx > 0 && i > 0) switchTab(TAB_ORDER[i - 1]);
      }
    }, { passive: true });

    window.addEventListener('hashchange', () => {
      const h = window.location.hash.replace('#', '').trim().toLowerCase();
      if (TAB_ORDER.includes(h)) switchTab(h);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderHeroFilmstrip();
    renderPlanetChapters();
    initCompareLab();
    initSearchModal();
    initQuizEngine();
    initGlobalInteractions();

    if (typeof Lenis !== 'undefined') {
      state.lenisInstance = new Lenis({ duration: 1.0, smoothWheel: true, smoothTouch: false });
      const raf = (t) => { state.lenisInstance.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }

    const hash = window.location.hash.replace('#', '').trim().toLowerCase();
    const initialTab = TAB_ORDER.includes(hash) ? hash : 'hero';
    switchTab(initialTab, { skipHash: !hash, force: true });
  });
})();
