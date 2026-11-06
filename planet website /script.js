/**
 * ==============================================================================
 * The Living Archive — Master Cinematic Engine
 * Conceived, Designed & Architected by Tanmay (Adesh Srivastava)
 *
 * Capabilities:
 * - Lenis Inertia Smooth Scrolling + GSAP ScrollTrigger Integration
 * - Browser Audio Context Gateway ("Enter the Archive" with Audio Fade-In/Out)
 * - Hardware-accelerated Full HD Video Observatory with smart viewport management
 * - Floating Navbar Video Preview Tooltip (Video Loop on Link Hover)
 * - Single-Color Scroll Progress & Auto-Hiding Slim Glass Header
 * - Chapter Navigation (Vertical Dot Rail, Keyboard Arrow Keys, URL Hash Updates)
 * - Dual-Layer Outline Display Titles & 3 Key Stat Chips
 * - Animated Numeric Telemetry Counters
 * - Horizontal Drag/Scroll Mission Timelines & 3D Interactive Flip Cards
 * - Upgraded Quiz Engine (Circular SVG Timer, Streak Counter, Dynamic Colors, Confetti)
 * ==============================================================================
 */

(function () {
  'use strict';

  /* ============================================================================
     1. GLOBAL ENGINE STATE & CONFIGURATION
     ============================================================================ */
  const state = {
    isAudioUnlocked: true,
    isMuted: true,
    heroAudioVolume: 1.0,
    activeChapterId: 'hero',
    quizMode: 'kids',
    quizQuestions: [],
    quizIndex: 0,
    quizScore: 0,
    quizStreak: 0,
    quizTimerInterval: null,
    quizTimeRemaining: 20,
    quizAnswered: false,
    lenisInstance: null,
    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,
  };

  /* ============================================================================
     2. LENIS SMOOTH INERTIA SCROLLING + GSAP INTEGRATION
     ============================================================================ */
  function initLenis() {
    if (typeof Lenis !== 'undefined') {
      state.lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });

      // Synchronize Lenis with GSAP ScrollTrigger if available
      if (typeof ScrollTrigger !== 'undefined') {
        state.lenisInstance.on('scroll', ScrollTrigger.update);
        if (typeof gsap !== 'undefined') {
          gsap.ticker.add((time) => {
            state.lenisInstance.raf(time * 1000);
          });
          gsap.ticker.lagSmoothing(0);
        }
      } else {
        function raf(time) {
          state.lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    }
  }

  /* ============================================================================
     3. HERO VIDEO PLAYBACK & AUDIO CONTROLLER
     ============================================================================ */
  function initHeroMediaAndAudio() {
    const heroVideo = document.getElementById('hero-video');
    const audioToggle = document.getElementById('hero-audio-toggle');
    const audioLabel = document.getElementById('audio-label');

    // Immediate Autoplay Muted
    if (heroVideo) {
      heroVideo.muted = true;
      heroVideo.play().catch(() => {});
    }

    // Floating Audio Toggle Button
    if (audioToggle && heroVideo) {
      audioToggle.addEventListener('click', () => {
        state.isMuted = !state.isMuted;
        heroVideo.muted = state.isMuted;
        audioToggle.classList.toggle('is-muted', state.isMuted);
        if (audioLabel) {
          audioLabel.textContent = state.isMuted ? 'Sound Off' : 'Sound On';
        }
        if (!state.isMuted) {
          fadeAudio(heroVideo, 0, 1, 800);
        }
      });
    }

    // Fade hero audio out when scrolling away, fade in when returning
    window.addEventListener('scroll', () => {
      if (!heroVideo || heroVideo.muted) return;
      const heroRect = heroVideo.getBoundingClientRect();
      const heroHeight = heroRect.height || window.innerHeight;

      if (heroRect.bottom <= 0) {
        // Hero is completely out of view
        heroVideo.volume = 0;
      } else if (heroRect.bottom < heroHeight) {
        // Proportionally fade volume based on visible ratio
        const visibleRatio = Math.max(0, Math.min(1, heroRect.bottom / heroHeight));
        heroVideo.volume = visibleRatio;
      } else {
        heroVideo.volume = 1;
      }
    }, { passive: true });
  }

  // Smooth audio fader helper
  function fadeAudio(mediaElement, fromVol, toVol, durationMs) {
    const steps = 30;
    const stepTime = durationMs / steps;
    const volDelta = (toVol - fromVol) / steps;
    let currentStep = 0;

    mediaElement.volume = fromVol;
    const fader = setInterval(() => {
      currentStep++;
      const newVol = Math.max(0, Math.min(1, mediaElement.volume + volDelta));
      mediaElement.volume = newVol;

      if (currentStep >= steps || (volDelta > 0 && newVol >= toVol) || (volDelta < 0 && newVol <= toVol)) {
        mediaElement.volume = toVol;
        clearInterval(fader);
      }
    }, stepTime);
  }

  /* ============================================================================
     4. CUSTOM CURSOR & MAGNETIC BUTTONS
     ============================================================================ */
  function initCursorAndMagnets() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const ring = document.getElementById('custom-cursor');
    const dot = document.getElementById('cursor-dot');
    if (!ring || !dot) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let dotX = ringX;
    let dotY = ringY;

    window.addEventListener('mousemove', (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;
    }, { passive: true });

    function lerpCursor() {
      ringX += (dotX - ringX) * 0.18;
      ringY += (dotY - ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(lerpCursor);
    }
    requestAnimationFrame(lerpCursor);

    // Expand cursor over interactive items
    const interactiveSel = 'a, button, .stat-card, .flip-card-wrapper, .mission-card, .option-btn';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSel)) {
        ring.style.width = '48px';
        ring.style.height = '48px';
        ring.style.borderColor = 'rgba(255, 255, 255, 0.9)';
        ring.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSel)) {
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        ring.style.backgroundColor = 'transparent';
      }
    });

    // Magnetic Button Effect
    document.querySelectorAll('.magnetic-btn').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  /* ============================================================================
     5. SCROLL PROGRESS
     ============================================================================ */
  function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0;
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    }, { passive: true });
  }

  /* ============================================================================
     7. DEDICATED CHAPTER GENERATOR (FROM data/planets.js)
     ============================================================================ */
  function renderPlanetChapters() {
    const container = document.getElementById('chapters-container');
    if (!container || !window.PLANETS_DATA) return;

    const chaptersHtml = window.PLANETS_DATA.map((planet) => {
      // 1. Key Stat Chips (Intro)
      const chipsHtml = (planet.keyChips || []).map(chip => `
        <div class="chip-item">
          <span class="chip-label">${chip.label}</span>
          <span class="chip-val">${chip.val}</span>
        </div>
      `).join('');

      // 2. 8 Telemetry Cards (Stats)
      const statsCardsHtml = (planet.quickFacts || []).map(fact => `
        <div class="stat-card" data-tilt>
          <div class="stat-label">${fact.label}</div>
          <div class="stat-value-group">
            <span class="stat-number" data-target="${fact.val}">${fact.val}</span>
            <span class="stat-unit">${fact.unit}</span>
          </div>
          <div class="stat-display">${fact.display}</div>
        </div>
      `).join('');

      // 3. Missions Timeline Cards (Horizontal Scroll)
      const missionsHtml = (planet.missions || []).map((m, idx) => `
        <div class="mission-card" data-tilt>
          <span class="mission-step-counter">0${idx + 1}</span>
          <span class="mission-year-badge">${m.year}</span>
          <h4 class="mission-card-title">${m.name}</h4>
          <p class="mission-card-role">${m.role}</p>
        </div>
      `).join('');

      // 4. Interactive "Did You Know?" 3D Flip Cards (3 cards)
      const flipCardsHtml = (planet.flipFacts || []).map((fact, idx) => `
        <div class="flip-card-wrapper" tabindex="0">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <span class="flip-badge">Phenomenon 0${idx + 1}</span>
              <span class="flip-tag">${fact.tag}</span>
              <h4 class="flip-hook">${fact.hook}</h4>
              <span class="flip-action-hint">Hover / Tap to Flip &orarr;</span>
            </div>
            <div class="flip-card-back">
              <span class="flip-badge">Scientific Discovery</span>
              <p class="flip-fact-text">${fact.fact}</p>
            </div>
          </div>
        </div>
      `).join('');

      // 5. Next Planet Teaser Banner
      const nextTarget = planet.nextPlanet ? planet.nextPlanet.id : 'quiz';
      const nextName = planet.nextPlanet ? planet.nextPlanet.name : 'Odyssey Quiz';

      return `
        <section 
          class="planet-chapter" 
          id="${planet.id}" 
          data-chapter="${planet.id}"
          style="--accent: ${planet.accentColor}; --glow: ${planet.glowColor};"
          aria-label="${planet.name} Chapter"
        >
          <!-- Part A: 100vh Full-Bleed Video Intro -->
          <div class="chapter-intro">
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

            <div class="chapter-intro-content">
              <span class="chapter-counter-badge">Chapter ${planet.chapter}</span>
              <div class="chapter-title-wrap">
                <span class="giant-outline-text" aria-hidden="true">${planet.name}</span>
                <h2 class="giant-filled-title">${planet.name}</h2>
              </div>
              <p class="chapter-tagline">${planet.tagline}</p>
              <div class="chapter-chips-row">
                ${chipsHtml}
              </div>
              <div class="chapter-scroll-prompt">
                <span>Scroll To Explore</span>
                <span class="prompt-arrow">&darr;</span>
              </div>
            </div>
          </div>

          <!-- Part B: 8 Telemetry Stats Grid with Animated Numbers -->
          <div class="chapter-stats-section">
            <div class="section-subheading">Orbital &amp; Physical Telemetry</div>
            <div class="stats-grid">
              ${statsCardsHtml}
            </div>
          </div>

          <!-- Part C: Storytelling (Sticky Left Heading, Short Paragraphs Right) -->
          <div class="chapter-story-section">
            <div class="story-sticky-col">
              <span class="story-chapter-tag">${planet.name} Dossier</span>
              <h3 class="story-sticky-heading">The Chronicle of ${planet.name}</h3>
              <p class="story-classification">${planet.classification}</p>
            </div>
            <div class="story-paragraphs-col">
              <div class="story-block">
                <h4 class="story-block-title">Cosmic Overview</h4>
                <p class="story-block-text">${planet.story.overview}</p>
              </div>
              <div class="story-block">
                <h4 class="story-block-title">Atmosphere &amp; Climate</h4>
                <p class="story-block-text">${planet.story.atmosphere}</p>
              </div>
              <div class="story-block">
                <h4 class="story-block-title">Internal Architecture</h4>
                <p class="story-block-text">${planet.story.structure}</p>
              </div>
              <div class="story-block">
                <h4 class="story-block-title">Moons &amp; Planetary System</h4>
                <p class="story-block-text">${planet.story.moonsAndRings}</p>
              </div>
            </div>
          </div>

          <!-- Part D: Horizontal Scroll Missions Timeline -->
          <div class="chapter-missions-section">
            <div class="missions-header-row">
              <div class="section-subheading">Exploration Milestones</div>
              <div class="missions-scroll-hint">Drag or Scroll &rarr;</div>
            </div>
            <div class="missions-timeline-container" tabindex="0">
              <div class="missions-track">
                ${missionsHtml}
              </div>
            </div>
          </div>

          <!-- Part E: 3 Interactive "Did You Know?" Flip Cards -->
          <div class="chapter-facts-section">
            <div class="section-subheading">Astrophysical Marvels</div>
            <div class="flip-cards-grid">
              ${flipCardsHtml}
            </div>
          </div>

          <!-- Part F: Next Chapter Teaser -->
          <div class="chapter-next-section">
            <a href="#${nextTarget}" class="next-planet-banner magnetic-btn" data-target="#${nextTarget}">
              <span class="next-eyebrow">Continue Odyssey</span>
              <h3 class="next-title">Next: ${nextName} &rarr;</h3>
              <span class="next-desc">Voyage deeper into our celestial neighborhood</span>
            </a>
          </div>
        </section>
      `;
    }).join('');

    container.innerHTML = chaptersHtml;

    // Attach click listener for flip cards on touch devices
    document.querySelectorAll('.flip-card-wrapper').forEach((card) => {
      card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
    });
  }

  /* ============================================================================
     8. VERTICAL DOT RAIL & SCROLLSPY
     ============================================================================ */
  function initVerticalRailAndScrollSpy() {
    const rail = document.getElementById('vertical-dot-rail');
    if (!rail) return;

    const chapters = [
      { id: 'hero', name: 'Zenith (Hero)' },
      ...(window.PLANETS_DATA || []).map(p => ({ id: p.id, name: p.name })),
      { id: 'quiz', name: 'Odyssey Quiz' }
    ];

    rail.innerHTML = chapters.map(ch => `
      <button class="dot-item" data-chapter="${ch.id}" aria-label="Navigate to ${ch.name}">
        <span class="dot-tooltip">${ch.name}</span>
      </button>
    `).join('');

    // Smooth scroll on dot click
    rail.querySelectorAll('.dot-item').forEach(dot => {
      dot.addEventListener('click', () => {
        const targetId = dot.getAttribute('data-chapter');
        const targetElem = document.getElementById(targetId);
        if (targetElem) {
          if (state.lenisInstance) {
            state.lenisInstance.scrollTo(targetElem);
          } else {
            targetElem.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // ScrollSpy using IntersectionObserver
    const allSections = document.querySelectorAll('section[data-chapter]');
    const dotButtons = rail.querySelectorAll('.dot-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('data-chapter');
          state.activeChapterId = activeId;
          prefetchAdjacentMedia(activeId);
          cullInactiveContexts();

          // Update active dot
          dotButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-chapter') === activeId);
          });

          // Update URL hash without causing a page jump
          if (history.pushState && window.location.hash !== `#${activeId}`) {
            history.pushState(null, '', `#${activeId}`);
          }
        }
      });
    }, {
      rootMargin: '-35% 0px -50% 0px',
      threshold: 0.1
    });

    allSections.forEach(sec => observer.observe(sec));
  }

  /* ============================================================================
     9. KEYBOARD ARROW NAVIGATION BETWEEN CELESTIAL CHAPTERS
     ============================================================================ */
  function initKeyboardNavigation() {
    const chapterIds = [
      'hero',
      ...(window.PLANETS_DATA || []).map(p => p.id),
      'quiz'
    ];

    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const currentIndex = chapterIds.indexOf(state.activeChapterId);
        if (currentIndex < chapterIds.length - 1) {
          const nextId = chapterIds[currentIndex + 1];
          scrollToId(nextId);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const currentIndex = chapterIds.indexOf(state.activeChapterId);
        if (currentIndex > 0) {
          const prevId = chapterIds[currentIndex - 1];
          scrollToId(prevId);
        }
      }
    });

    function scrollToId(id) {
      const el = document.getElementById(id);
      if (el) {
        if (state.lenisInstance) {
          state.lenisInstance.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }

  /* ============================================================================
     10. HARDWARE-ACCELERATED VIDEO LAZY-LOADER & PLAY/PAUSE OBSERVER
     ============================================================================ */
  
  // Predictive Adjacent Media Prefetcher for Terrestrial & Celestial Chapters
  function prefetchAdjacentMedia(currentChapterId) {
    if (!window.PLANETS_DATA) return;
    const ids = window.PLANETS_DATA.map(p => p.id);
    const idx = ids.indexOf(currentChapterId);
    if (idx === -1) return;

    // Prefetch adjacent chapters
    const nextPlanet = ids[idx + 1] ? window.PLANETS_DATA[idx + 1] : null;
    if (nextPlanet && nextPlanet.posterSrc) {
      const img = new Image();
      img.src = nextPlanet.posterSrc;
    }
  }

  
    // Pause offscreen background animation frames and canvas loops for inactive planetary scenes
    function cullInactiveContexts() {
      const activeId = state.activeChapterId;
      const isGiantActive = ['jupiter', 'saturn', 'uranus', 'neptune'].includes(activeId);
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(() => {
          document.body.classList.toggle('outer-giants-view', isGiantActive);
        });
      }
    }

  function initVideoManager() {
    const videos = document.querySelectorAll('.chapter-video-element, .hero-video');

    if (!('IntersectionObserver' in window)) {
      videos.forEach(v => {
        if (v.dataset.src) v.src = v.dataset.src;
        v.play().catch(() => {});
      });
      return;
    }

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          // Lazy-load video source
          if (video.dataset.src && video.src !== video.dataset.src) {
            video.src = video.dataset.src;
            video.load();
          }
          video.play().catch(() => {});
        } else {
          if (!video.paused) {
            video.pause();
          }
          // Reduce GPU memory consumption when far out of viewport
          if (entry.boundingClientRect.top > window.innerHeight * 2.5 || entry.boundingClientRect.bottom < -window.innerHeight * 2.5) {
            video.currentTime = 0;
          }
        }
      });
    }, {
      threshold: [0, 0.2, 0.5]
    });

    videos.forEach(v => videoObserver.observe(v));
  }

  /* ============================================================================
     11. ANIMATED TELEMETRY NUMBERS COUNT-UP
     ============================================================================ */
  function initCountUpNumbers() {
    const numElements = document.querySelectorAll('.stat-number');

    if (!('IntersectionObserver' in window)) return;

    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetStr = el.getAttribute('data-target') || '0';
          const targetNum = parseFloat(targetStr.replace(/,/g, ''));

          if (!isNaN(targetNum)) {
            animateNumber(el, 0, targetNum, 1200);
          }
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    numElements.forEach(el => countObserver.observe(el));

    function animateNumber(element, start, end, duration) {
      let startTime = null;
      const isInteger = Number.isInteger(end);

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = start + (end - start) * easeOutExpo(progress);

        element.textContent = isInteger ? Math.round(current).toLocaleString() : current.toFixed(2);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          element.textContent = isInteger ? end.toLocaleString() : end.toString();
        }
      }
      requestAnimationFrame(step);
    }

    function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }
  }

  /* ============================================================================
     12. UPGRADED INTERACTIVE QUIZ ENGINE
     ============================================================================ */
  function initQuizEngine() {
    const quizData = window.QUIZ_DATA;
    if (!quizData) return;

    // DOM Elements
    const quizChapter = document.getElementById('quiz');
    const questionCard = document.getElementById('quiz-question-card');
    const resultsCard = document.getElementById('quiz-results-card');
    const questionCounter = document.getElementById('quiz-question-counter');
    const streakBadge = document.getElementById('streak-badge');
    const bestScoreDisplay = document.getElementById('best-score-display');
    const scoreCounter = document.getElementById('quiz-score-counter');
    const timerNumber = document.getElementById('timer-number');
    const timerFill = document.getElementById('timer-fill');
    const questionText = document.getElementById('quiz-question-text');
    const optionsGrid = document.getElementById('quiz-options-grid');
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const feedbackStatus = document.getElementById('feedback-status');
    const feedbackText = document.getElementById('feedback-text');
    const nextBtn = document.getElementById('quiz-next-btn');
    const restartBtn = document.getElementById('quiz-restart-btn');
    const modeKidsBtn = document.getElementById('btn-mode-kids');
    const modeAdultsBtn = document.getElementById('btn-mode-adults');

    if (!questionCard || !questionText || !optionsGrid) return;

    // Load Best Score from localStorage
    function getStoredBest(mode) {
      return parseInt(localStorage.getItem(`living_archive_best_${mode}`) || '0', 10);
    }
    function updateStoredBest(mode, score) {
      const current = getStoredBest(mode);
      if (score > current) {
        localStorage.setItem(`living_archive_best_${mode}`, score.toString());
      }
    }

    // Color map for dynamic question lighting
    const planetColors = {
      sun: '#f59e0b',
      moon: '#e2e8f0',
      mercury: '#94a3b8',
      venus: '#f97316',
      earth: '#06b6d4',
      mars: '#ef4444',
      jupiter: '#d97706',
      saturn: '#eab308',
      uranus: '#14b8a6',
      neptune: '#3b82f6',
    };

    function shuffle(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    function startQuiz(mode) {
      state.quizMode = mode;
      state.quizQuestions = shuffle(quizData[mode] || quizData.kids || []);
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizStreak = 0;
      state.quizAnswered = false;

      // Update Mode Buttons
      if (modeKidsBtn && modeAdultsBtn) {
        modeKidsBtn.classList.toggle('active', mode === 'kids');
        modeKidsBtn.setAttribute('aria-selected', String(mode === 'kids'));
        modeAdultsBtn.classList.toggle('active', mode === 'adults');
        modeAdultsBtn.setAttribute('aria-selected', String(mode === 'adults'));
      }

      if (bestScoreDisplay) {
        bestScoreDisplay.textContent = `⭐ Best: ${getStoredBest(mode)} / ${state.quizQuestions.length}`;
      }

      questionCard.style.display = 'block';
      resultsCard.style.display = 'none';

      renderQuestion();
    }

    function renderQuestion() {
      state.quizAnswered = false;
      clearInterval(state.quizTimerInterval);

      const total = state.quizQuestions.length;
      const q = state.quizQuestions[state.quizIndex];
      if (!q) {
        showResults();
        return;
      }

      // Update Dynamic Ambient Chroma based on question's planet
      const ambientChroma = planetColors[q.planet] || '#a855f7';
      if (quizChapter) {
        quizChapter.style.setProperty('--quiz-ambient', ambientChroma);
      }

      // Update HUD
      if (questionCounter) questionCounter.textContent = `Question ${state.quizIndex + 1} of ${total}`;
      if (streakBadge) streakBadge.textContent = `🔥 Streak: ${state.quizStreak}`;
      if (scoreCounter) scoreCounter.textContent = `Score: ${state.quizScore}`;
      if (questionText) questionText.textContent = q.question;

      // Reset Feedback & Next Button
      if (feedbackBox) feedbackBox.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';

      // Options
      optionsGrid.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      q.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn magnetic-btn';
        btn.setAttribute('type', 'button');
        btn.innerHTML = `
          <span class="option-key">${letters[idx] || idx + 1}</span>
          <span class="option-label">${optText}</span>
        `;
        btn.addEventListener('click', () => handleAnswer(idx, btn));
        optionsGrid.appendChild(btn);
      });

      // Start 20s Circular Countdown Timer
      startTimer();
    }

    function startTimer() {
      state.quizTimeRemaining = 20;
      const totalCircumference = 110; // 2 * PI * 17.5

      if (timerNumber) timerNumber.textContent = '20';
      if (timerFill) timerFill.style.strokeDashoffset = '0';

      state.quizTimerInterval = setInterval(() => {
        state.quizTimeRemaining--;

        if (timerNumber) timerNumber.textContent = state.quizTimeRemaining.toString();

        if (timerFill) {
          const offset = totalCircumference * (1 - state.quizTimeRemaining / 20);
          timerFill.style.strokeDashoffset = offset.toString();
        }

        if (state.quizTimeRemaining <= 0) {
          clearInterval(state.quizTimerInterval);
          if (!state.quizAnswered) {
            handleTimeExpired();
          }
        }
      }, 1000);
    }

    function handleTimeExpired() {
      state.quizAnswered = true;
      state.quizStreak = 0;
      if (streakBadge) streakBadge.textContent = `🔥 Streak: 0`;

      const q = state.quizQuestions[state.quizIndex];
      const allButtons = optionsGrid.querySelectorAll('.option-btn');
      allButtons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === q.answer) b.classList.add('is-correct');
      });

      if (feedbackStatus) {
        feedbackStatus.textContent = 'Time Expired • Scientific Observation:';
        feedbackStatus.className = 'feedback-status wrong';
      }
      if (feedbackText) feedbackText.textContent = q.explanation;
      if (feedbackBox) feedbackBox.style.display = 'block';

      showNextButton();
    }

    function handleAnswer(selectedIndex, clickedBtn) {
      if (state.quizAnswered) return;
      state.quizAnswered = true;
      clearInterval(state.quizTimerInterval);

      const q = state.quizQuestions[state.quizIndex];
      const isCorrect = selectedIndex === q.answer;
      const allButtons = optionsGrid.querySelectorAll('.option-btn');

      allButtons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === q.answer) b.classList.add('is-correct');
      });

      if (isCorrect) {
        state.quizScore++;
        state.quizStreak++;
        clickedBtn.classList.add('is-correct');
        if (feedbackStatus) {
          feedbackStatus.textContent = 'Correct! Stellar Knowledge ✦';
          feedbackStatus.className = 'feedback-status correct';
        }
      } else {
        state.quizStreak = 0;
        clickedBtn.classList.add('is-wrong');
        if (feedbackStatus) {
          feedbackStatus.textContent = 'Incorrect • Scientific Fact:';
          feedbackStatus.className = 'feedback-status wrong';
        }
      }

      if (streakBadge) streakBadge.textContent = `🔥 Streak: ${state.quizStreak}`;
      if (scoreCounter) scoreCounter.textContent = `Score: ${state.quizScore}`;
      if (feedbackText) feedbackText.textContent = q.explanation;
      if (feedbackBox) feedbackBox.style.display = 'block';

      showNextButton();
    }

    function showNextButton() {
      const isLast = state.quizIndex === state.quizQuestions.length - 1;
      if (nextBtn) {
        nextBtn.innerHTML = isLast ? 'Complete Odyssey &rarr;' : 'Next Question &rarr;';
        nextBtn.style.display = 'inline-block';
      }
    }

    nextBtn.addEventListener('click', () => {
      state.quizIndex++;
      if (state.quizIndex < state.quizQuestions.length) {
        renderQuestion();
      } else {
        showResults();
      }
    });

    function showResults() {
      clearInterval(state.quizTimerInterval);
      questionCard.style.display = 'none';
      resultsCard.style.display = 'block';

      const total = state.quizQuestions.length;
      const score = state.quizScore;
      const ratio = score / total;

      updateStoredBest(state.quizMode, score);

      const scoreDisplay = document.getElementById('results-score-display');
      const resultsTitle = document.getElementById('results-title');
      const resultsMsg = document.getElementById('results-message');
      const resultsTrophy = document.getElementById('results-trophy');

      if (scoreDisplay) scoreDisplay.textContent = `${score} / ${total}`;

      if (ratio >= 0.75) {
        // High Score Confetti Blast!
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
        if (resultsTrophy) resultsTrophy.textContent = '🏆';
        if (resultsTitle) resultsTitle.textContent = 'Galactic Master!';
        if (resultsMsg) resultsMsg.textContent = 'Phenomenal planetary intellect! You navigated the cosmic archives with astronomical mastery.';
      } else if (ratio >= 0.5) {
        if (resultsTrophy) resultsTrophy.textContent = '🪐';
        if (resultsTitle) resultsTitle.textContent = 'Senior Explorer!';
        if (resultsMsg) resultsMsg.textContent = 'Commendable voyage! You grasp the fundamental astrophysics of the worlds in our solar family.';
      } else {
        if (resultsTrophy) resultsTrophy.textContent = '🔭';
        if (resultsTitle) resultsTitle.textContent = 'Cadet Astronomer!';
        if (resultsMsg) resultsMsg.textContent = 'Every great astronomer begins with a first gaze into the cosmic night. Venture through the chapters and try again!';
      }
    }

    if (restartBtn) restartBtn.addEventListener('click', () => startQuiz(state.quizMode));
    if (modeKidsBtn) modeKidsBtn.addEventListener('click', () => startQuiz('kids'));
    if (modeAdultsBtn) modeAdultsBtn.addEventListener('click', () => startQuiz('adults'));

    // Start with Kids mode
    startQuiz('kids');
  }

  /* ============================================================================
     12. MASTER INITIALIZATION CONTROLLER
     ============================================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initHeroMediaAndAudio();
    initCursorAndMagnets();
    initScrollProgress();
    renderPlanetChapters();
    initVerticalRailAndScrollSpy();
    initKeyboardNavigation();
    initVideoManager();
    initCountUpNumbers();
    initQuizEngine();
  });

})();
