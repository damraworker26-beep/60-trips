/**
 * 60 TRIPS - Shared Header Component
 * This script injects a consistent, high-fidelity header into any page.
 * Usage: <div id="shared-header-container"></div>
 *        <script src="../assets/js/header-component.js"></script>
 */

(function () {
    const isRoot = !window.location.pathname.includes('/articles/');
    const basePath = isRoot ? '' : '../';
    const assetsPath = basePath + 'assets/';
    const logoPath = assetsPath + 'images/logos/logo.png';
    const homePath = basePath + 'index.html';

    // Inject Cinzel font if not present
    if (!document.querySelector('link[href*="Cinzel"]')) {
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;800&display=swap';
        document.head.appendChild(fontLink);
    }

    const backToHomeHTML = isRoot ? '' : `
    <a href="${homePath}?view=blog#blog-view" class="back-to-home-btn" id="external-back-btn">
        ←
    </a>
    `;

    const headerHTML = `
    ${backToHomeHTML}
    <header id="main-header">
        <a href="${homePath}" class="logo">
            <img src="${logoPath}" alt="60 Trips Logo">
            <span class="logo-text">60 Trips</span>
        </a>
        <nav>
            <ul id="nav-links">
                <li><a href="${homePath}?view=home" data-i18n="nav_home">HOME</a></li>
                <li><a href="${homePath}?view=activities" data-i18n="nav_resorts">TRAVELER ACTIVITIES</a></li>
                <li><a href="${isRoot ? 'articles/' : ''}travel-tips.html" data-i18n="nav_exp">TRAVEL TIPS</a></li>
                <li><a href="${homePath}?view=blog" data-i18n="nav_blog">BLOG</a></li>
                <li><a href="${homePath}?view=cars" data-i18n="nav_cars">PREMIUM CARS</a></li>
                <li><a href="${homePath}?view=large-cars" data-i18n="nav_large_cars">SUV / 4WD</a></li>
            </ul>
        </nav>
        <div class="header-actions">
            <div class="lang-btn-container">
                <i class="fas fa-globe" style="color: #000;"></i>
                <select class="lang-select" id="lang-switcher">
                    <option value="en" selected>(EN)</option>
                    <option value="ar">(AR)</option>
                </select>
            </div>
            <div class="menu-toggle" id="mobile-menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>

    <style>
        .back-to-home-btn {
            position: fixed;
            top: 140px;
            left: 30px;
            background: #C49A27 !important;
            color: #000 !important;
            padding: 10px 15px !important;
            border-radius: 50px !important;
            font-size: 1.2rem !important;
            font-weight: 700 !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            text-decoration: none !important;
            border: 1px solid #C49A27 !important;
            transition: var(--transition) !important;
            cursor: pointer !important;
            z-index: 999;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .back-to-home-btn:hover {
            background: #d4ae6a !important;
            color: #000 !important;
            transform: translateY(-3px) !important;
            box-shadow: 0 6px 20px rgba(197, 160, 89, 0.4) !important;
            opacity: 1 !important;
        }

        .back-arrow-svg {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .back-arrow-svg svg {
            transition: transform 0.4s ease;
        }


        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px; /* Matched to main page */
            padding: 0 5%; /* Matched to main page */
            background: rgba(25, 25, 25, 0.55); /* Sharp transparent grey from main page */
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            font-family: 'Outfit', sans-serif;
            box-sizing: border-box;
            direction: ltr !important; 
        }

        /* Strict Reset for Header Components */
        #main-header, #main-header * {
            box-sizing: border-box;
        }

        .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            flex-shrink: 0;
            height: 100%;
        }

        .logo img {
            height: 92px !important; /* Managed size to look centered */
            width: auto !important;
            max-width: 550px !important;
            object-fit: contain !important;
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        .logo-text {
            background: linear-gradient(to bottom, #f0e2b6 0%, #d4b88b 50%, #a68b4d 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: 'Cinzel', serif !important;
            font-weight: 700;
            font-size: 1.3rem;
            margin-left: 12px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            display: inline-flex;
            align-items: center;
            vertical-align: middle;
        }

        #main-header nav {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
        }

        #main-header nav ul {
            background-color: var(--primary-gold);
            border-radius: 50px;
            padding: 8px 40px;
            display: flex;
            gap: 30px;
            list-style: none;
            margin: 0;
            border: 1px solid rgba(0, 0, 0, 0.1);
            direction: ltr !important;
        }

        #main-header nav ul li a,
        #main-header nav ul li a:hover,
        #main-header nav ul li a:active,
        #main-header nav ul li a:focus {
            display: inline-block;
            font-size: 0.9rem !important;
            font-weight: 800 !important;
            color: #000 !important;
            letter-spacing: 1px;
            text-transform: uppercase !important; 
            text-decoration: none !important;
            padding: 0 !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
        }

        #main-header nav ul li a:hover {
            opacity: 0.7;
            transform: translateY(-1px);
        }

        #main-header .header-actions {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-shrink: 0;
        }

        #main-header .lang-btn-container {
            background: #C49A27;
            border-radius: 50px;
            padding: 11px 25px;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            cursor: pointer;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }

        #main-header .lang-btn-container:hover {
            background: #d4ae6a;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(197, 160, 89, 0.3);
        }

        #main-header .lang-select {
            background: transparent;
            border: none;
            color: #000;
            font-size: 0.9rem;
            font-weight: 800;
            cursor: pointer;
            outline: none;
            font-family: inherit;
            appearance: none;
            -webkit-appearance: none;
            text-align: center;
            width: auto;
            padding: 0 5px;
            margin: 0;
        }

        #main-header .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
        }

        #main-header .menu-toggle span {
            width: 25px;
            height: 2px;
            background: #C49A27;
        }
    </style>
    `;

    const container = document.getElementById('shared-header-container');
    if (container) {
        container.innerHTML = headerHTML;
    }

    // Mobile Menu Functionality
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');

        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuBtn.classList.toggle('open');
            });

            // Close menu when a link is clicked
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuBtn.classList.remove('open');
                });
            });
        }
    }

    // Initialize mobile menu immediately and on DOMContentLoaded
    initMobileMenu();
    document.addEventListener('DOMContentLoaded', initMobileMenu);

    // Translation mapping for header-only elements:
    const headerTranslations = {
        en: {
            nav_back_home: '←'
        },
        ar: {
            nav_back_home: '←'
        }
    };

    // Robust language switcher integration (initialize immediately and on DOMContentLoaded):
    function initLangSwitcher() {
        const switcher = document.getElementById('lang-switcher');
        if (!switcher) return;
        const saved = localStorage.getItem('selectedLang') || 'en';
        switcher.value = saved;

        const updateLocalTranslations = (lang) => {
            // Text is now just ←, no dynamic translation needed for text but we keep the structure just in case
        };

        // Call translate immediately if available
        Promise.resolve().then(() => {
            if (typeof window.translate === 'function') {
                try { window.translate(saved); } catch (e) { /* ignore */ }
            }
            updateLocalTranslations(saved);
        });

        // avoid attaching duplicate listeners
        if (!switcher._lv_initialized) {
            switcher.addEventListener('change', (e) => {
                const lang = e.target.value;
                localStorage.setItem('selectedLang', lang);

                // Immediate execution for first-click responsiveness
                if (typeof window.translate === 'function') {
                    window.translate(lang);
                }
                updateLocalTranslations(lang);
                document.dispatchEvent(new CustomEvent('language-changed', { detail: { lang } }));

                // Optional: Sync with other instances if any
                console.log('Language switched to:', lang);
            });
            switcher._lv_initialized = true;
        }
    }

    try { initLangSwitcher(); } catch (e) { /* ignore */ }
    document.addEventListener('DOMContentLoaded', initLangSwitcher);
})();
