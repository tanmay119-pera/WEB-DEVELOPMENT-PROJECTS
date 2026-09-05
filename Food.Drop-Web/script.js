// ===== PRELOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
        document.getElementById('hero-bg-img').classList.add('loaded');
    }, 1200);
});

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
const backToTop = document.getElementById('back-to-top');
const scrollIndicator = document.getElementById('scroll-indicator');

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 50);
    backToTop.classList.toggle('visible', y > 600);

    if (scrollIndicator) {
        scrollIndicator.style.opacity = Math.max(0, 1 - y / 400);
    }
    lastScroll = y;
}, { passive: true });

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

// Close nav on link click (mobile)
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ===== FLOATING EMOJIS =====
const emojiContainer = document.getElementById('floating-emojis');
const foodEmojis = ['🍕', '🍔', '🍣', '🍜', '🍛', '🌮', '🍰', '🧁', '🍩', '🍗', '☕', '🍟', '🥗', '🍝', '🍱', '🥘', '🍤', '🧀'];

function spawnEmoji() {
    const emoji = document.createElement('span');
    emoji.classList.add('floating-emoji');
    emoji.textContent = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.animationDuration = (6 + Math.random() * 6) + 's';
    emoji.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    emojiContainer.appendChild(emoji);

    emoji.addEventListener('animationend', () => emoji.remove());
}

// Spawn one every 2 seconds
setInterval(spawnEmoji, 2000);
// Initial burst
for (let i = 0; i < 5; i++) setTimeout(spawnEmoji, i * 400);

// ===== SEARCH SUGGESTIONS =====
const searchInput = document.getElementById('search-input');
const suggestionsBox = document.getElementById('search-suggestions');

const searchData = [
    { emoji: '🍔', name: 'Burger King', type: 'Restaurant' },
    { emoji: '🍕', name: 'Domino\'s Pizza', type: 'Restaurant' },
    { emoji: '🍛', name: 'Biryani Blues', type: 'Restaurant' },
    { emoji: '🍣', name: 'Sushi Express', type: 'Restaurant' },
    { emoji: '🌮', name: 'Taco Bell', type: 'Restaurant' },
    { emoji: '☕', name: 'Starbucks Coffee', type: 'Café' },
    { emoji: '🍰', name: 'Cheesecake Factory', type: 'Dessert' },
    { emoji: '🍝', name: 'Pasta La Vista', type: 'Italian' },
    { emoji: '🥘', name: 'Butter Chicken', type: 'Dish' },
    { emoji: '🍗', name: 'KFC', type: 'Restaurant' },
    { emoji: '🍜', name: 'Ramen House', type: 'Japanese' },
    { emoji: '🥗', name: 'Green Bowl Salads', type: 'Healthy' },
    { emoji: '🧁', name: 'Cupcake Heaven', type: 'Bakery' },
    { emoji: '🍟', name: 'McDonald\'s', type: 'Restaurant' },
    { emoji: '🥙', name: 'Shawarma Palace', type: 'Street Food' },
];

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
        suggestionsBox.classList.remove('active');
        suggestionsBox.innerHTML = '';
        return;
    }

    const matches = searchData.filter(item =>
        item.name.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)
    ).slice(0, 6);

    if (matches.length === 0) {
        suggestionsBox.classList.remove('active');
        suggestionsBox.innerHTML = '';
        return;
    }

    suggestionsBox.innerHTML = matches.map(item => `
        <div class="suggestion-item">
            <span class="s-emoji">${item.emoji}</span>
            <span>${item.name}</span>
            <span class="s-type">${item.type}</span>
        </div>
    `).join('');
    suggestionsBox.classList.add('active');

    // Click on suggestion
    suggestionsBox.querySelectorAll('.suggestion-item').forEach(el => {
        el.addEventListener('click', () => {
            searchInput.value = el.querySelector('span:nth-child(2)').textContent;
            suggestionsBox.classList.remove('active');
            showToast(`🔍 Searching for "${searchInput.value}"...`);
        });
    });
});

// Close suggestions on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
        suggestionsBox.classList.remove('active');
    }
});

// ===== HERO TAGS =====
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        const val = tag.dataset.search;
        searchInput.value = val;
        searchInput.dispatchEvent(new Event('input'));
        searchInput.focus();
        showToast(`${tag.textContent} — Great choice! 🤤`);
    });
});

// ===== SCROLL ANIMATIONS (Intersection Observer) =====
const animElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, parseInt(delay));
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

animElements.forEach(el => observer.observe(el));

// ===== COUNTER ANIMATION =====
const statNumbers = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            animateCounter(el, target);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(el => counterObserver.observe(el));

function animateCounter(el, target) {
    const duration = 2000;
    const startTime = performance.now();

    function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const current = Math.floor(easedProgress * target);

        if (target >= 1000) {
            el.textContent = current.toLocaleString('en-IN');
        } else {
            el.textContent = current;
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ===== GOLD SPARKLES =====
const sparkleContainer = document.querySelector('.gold-sparkles');
for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 3 + 's';
    sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';
    sparkleContainer.appendChild(sparkle);
}

// ===== GOLD CTA =====
document.getElementById('gold-cta').addEventListener('click', () => {
    showToast('👑 Welcome to Zomato Gold! Enjoy exclusive benefits ✨');
});

// ===== APP SEND LINK =====
document.getElementById('app-send-btn').addEventListener('click', () => {
    const phone = document.getElementById('phone-input').value;
    if (phone.length >= 10) {
        showToast('📱 Download link sent to +91 ' + phone + ' ✅');
    } else {
        showToast('⚠️ Please enter a valid phone number');
    }
});

// ===== STORE BUTTONS =====
document.getElementById('google-play-btn').addEventListener('click', () => {
    showToast('▶️ Redirecting to Google Play Store...');
});
document.getElementById('app-store-btn').addEventListener('click', () => {
    showToast('🍎 Redirecting to App Store...');
});

// ===== TOAST NOTIFICATION =====
const toastEl = document.getElementById('toast');
let toastTimeout;

function showToast(message) {
    clearTimeout(toastTimeout);
    toastEl.textContent = message;
    toastEl.classList.add('show');
    toastTimeout = setTimeout(() => {
        toastEl.classList.remove('show');
    }, 3000);
}

// ===== PARALLAX on Hero =====
if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return;

        const rect = heroContent.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const moveX = (e.clientX - centerX) / 80;
        const moveY = (e.clientY - centerY) / 80;

        heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

// ===== CUISINE CARD TILT =====
document.querySelectorAll('.cuisine-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 12;
        const rotateY = (centerX - x) / 12;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== BENEFIT CARDS — CLICK =====
document.querySelectorAll('.benefit-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h4').textContent;
        showToast(`${card.querySelector('.benefit-emoji').textContent} ${title} — Included with Gold!`);
    });
});

// ===== SMOOTH SCROLL for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
