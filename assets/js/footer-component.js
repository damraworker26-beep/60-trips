/**
 * 60 TRIPS - Shared Footer Component
 * This script injects a consistent, high-fidelity footer and partners bar into any page.
 * Usage: <div id="shared-footer-container"></div>
 *        <script src="../assets/js/footer-component.js"></script>
 */

(function () {
    const isRoot = !window.location.pathname.includes('/articles/');
    const basePath = isRoot ? '' : '../';
    const assetsPath = basePath + 'assets/';
    const logoPath = assetsPath + 'images/logos/logo.png';

    const partnersBarHTML = `
    <div class="partners-bar">
        <div class="partners-container">
            <div class="partners-track">
                <i class="fas fa-parachute-box"></i>
                <i class="fas fa-hotel"></i>
                <i class="fas fa-plane"></i>
                <i class="fas fa-map-marked-alt"></i>
                <i class="fas fa-concierge-bell"></i>
            </div>
        </div>
    </div>
    `;

    const footerHTML = `
    ${partnersBarHTML}

    <footer id="main-footer">
        <div class="footer-container">
            <div class="footer-grid">
                <!-- Column 1: Brand -->
                <div class="footer-column brand-col">
                    <div class="brand-wrapper">
                        <img src="${logoPath}" alt="60 Trips Logo" class="footer-logo-img">
                        <p class="footer-desc" data-i18n="footer_about">
                            Welcome to 60trips.com, your all-in-one global hub for smarter travel. We are a premier travel affiliate platform dedicated to simplifying the way the world travels. By partnering with leading international airlines, world-class hotel chains, and top-tier car rental agencies, we provide a seamless experience to plan your entire trip in one place. Our mission is to empower global travelers with transparency and the best deals, ensuring every journey is as affordable as it is unforgettable.
                        </p>
                    </div>
                </div>

                <!-- Column 2: Explore -->
                <div class="footer-column explore-col">
                    <h4 data-i18n="footer_explore">Explore</h4>
                    <ul>
                        <li><a href="${basePath}index.html?view=top-dest" data-i18n="nav_dest">Destinations</a></li>
                        <li><a href="${basePath}index.html?view=activities" data-i18n="nav_resorts">Resorts</a></li>
                        <li><a href="${basePath}index.html?view=experiences" data-i18n="nav_experiences">Experiences</a></li>
                        <li><a href="${basePath}index.html?view=about" data-i18n="nav_about">About Us</a></li>
                        <li><a href="${basePath}index.html?view=services" data-i18n="nav_services">Services</a></li>
                    </ul>
                </div>

                <!-- Column 3: Connect -->
                <div class="footer-column connect-col">
                    <h4 data-i18n="footer_contact_h4">Connect</h4>
                    <p class="footer-desc sub-text" data-i18n="news_p">Email subscription to your email</p>
                    <form class="footer-subscribe">
                        <input type="email" placeholder="Email" data-i18n-placeholder="news_placeholder">
                        <button type="submit" data-i18n="news_btn">SUBSCRIBE</button>
                    </form>
                    <div class="connect-actions">
                        <div class="footer-connect-group">
                            <div class="footer-socials">
                                <a href="https://www.linkedin.com/in/ibrahim-damra-8727113a5" class="li-link" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/roojha_?igsh=ZjRhOHJzN2VsMWls" class="ig-link" title="Instagram"><i class="fab fa-instagram"></i></a>
                                <a href="https://youtube.com/@roojhahas?si=398-EqWmnbNlrFXe" class="yt-link" title="YouTube"><i class="fab fa-youtube"></i></a>
                                <a href="https://x.com/roojhahas" class="x-link" title="X (Twitter)"><i class="fab fa-x-twitter"></i></a>
                                <a href="https://web.facebook.com/people/Ibrahim-Damra/pfbid0i6uVKfJaePuSu42fif9hMMdGiiVW5akKjAUREt3reoXY2K3fZaJQkZ1uVLSucQJml/" class="fb-link" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="wc-link" title="WeChat QR Code" onclick="document.getElementById('wc-qr-modal').style.display='flex'; return false;"><i class="fab fa-weixin"></i></a>
                                <a href="https://xhslink.com/m/A3r8kUoYOMV" class="rn-link" title="Rednote (Xiaohongshu)">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972.794.794 0 0 0-.884-.618.795.795 0 0 0-.692.794c0 .101-.002.666.001.777zm-11.509 4.808c-.203.001-1.353.004-1.685.003a2.528 2.528 0 0 1-.766-.126.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124.66.01 1.32.002 1.981 0 .01 0 .02-.006.023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01a.834.834 0 0 0-.01.08c-.027.397-.038.495-.234 3.06-.012.24-.034.389-.135.607-.026.057-.033.042.003.112.046.092.681 1.523.787 1.74.008.015.011.02.017.02.008 0 .033-.026.047-.044.147-.187.268-.391.371-.606.306-.635.44-1.325.486-1.706.014-.11.021-.22.03-.33l.204-2.616.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.427 1.427 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.443.443 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293c.076.982.153 1.964.233 2.946.05.4.186 1.085.487 1.706.103.215.223.419.37.606.015.018.037.051.048.049.02-.003.742-1.642.804-1.765.036-.07.03-.055.003-.112zm3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56c-.01 0-.02.006-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.534.534 0 0 0-.02.191.46.46 0 0 0 .23.378.981.981 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.53.53 0 0 0-.023.172.465.465 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001c.01 0 .02-.006.023-.015l.575-1.28a.025.025 0 0 0-.024-.035zm-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829 0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047.001.037.465 1.064.555 1.263.01.02.03.033.051.033.157.003.767.009.938-.014.153-.02.3-.06.438-.132.3-.156.49-.419.595-.765.052-.172.075-.353.075-.533.002-2.33 0-4.66-.007-6.991a.032.032 0 0 0-.032-.032zm11.784 6.896c0-.014-.01-.021-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084-.37 0-1.11-.002-1.304 0-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036c.006.01.013.008.058.008 1.748.003 3.495.002 5.243.002.03-.001.034-.006.035-.033v-1.539zm4.177-3.43c0 .013-.007.023-.02.024-.346.006-.692.004-1.037.004-.014-.002-.022-.01-.022-.024-.005-.434-.007-.869-.01-1.303 0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015.093.025.16.107.165.204.006.431.002 1.153.001 1.153zm2.67.244a1.953 1.953 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21c0-.132-.007-.263-.025-.394a1.823 1.823 0 0 0-.153-.53 1.533 1.533 0 0 0-.677-.71 2.167 2.167 0 0 0-1-.258c-.153-.003-.567 0-.72 0-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007c-.006.006-.008.012-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128V11.19s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003c.098 0 .191.02.28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185 0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033.184.437.374.871.57 1.303a.045.045 0 0 0 .04.026c.17.005.34.002.51.003.15-.002.517.004.666-.01a2.03 2.03 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981c0-.128-.01-.254-.034-.38 0 .078-.029-.641-.724-.998z"/></svg>
                                </a>
                            </div>
                            <a href="#" class="google-play-btn">
                                <svg class="google-play-logo" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.5 37.3c-2.8 2.1-4.5 5.5-4.5 9.4v418.6c0 3.9 1.7 7.3 4.5 9.4l.7.7L265.6 256 33.2 36.6l-.7.7z" fill="#ea4335"/>
                                    <path d="M392.2 153.3l-58.4-33.8L265.6 256l68.2 136.5 58.4-33.8c16.6-9.6 27.8-27.4 27.8-47.7V199.3c0-18.6-11.2-36.4-27.8-46z" fill="#fbbc04"/>
                                    <path d="M32.5 474.7c2.8 2.1 4.5 5.5 4.5 9.4v-418.6c0-3.9-1.7-7.3-4.5-9.4l-.7-.7L265.6 256 32.5 474.7z" fill="#4285f4" fill-opacity=".1"/>
                                    <path d="M333.8 392.5L265.6 256 32.5 474.7c4.2 3.1 9.4 4.8 15.1 4.8 7.3 0 14.1-2.9 19.3-7.7l266.9-154.5v155.2z" fill="#34a853"/>
                                    <path d="M333.8 119.5L66.9 34.7c-5.2-4.8-12-7.7-19.3-7.7-5.7 0-10.9 1.7-15.1 4.8L265.6 256l68.2-136.5z" fill="#4285f4"/>
                                </svg>
                                <div class="btn-text">
                                    <span class="small" data-i18n="app_get_it">GET IT ON</span>
                                    <span class="large" data-i18n="app_google_play">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container footer-bottom-flex">
                <div class="footer-legal">
                    <a href="${basePath}index.html?view=terms" data-i18n="footer_terms">Terms of Service</a> |
                    <a href="${basePath}index.html?view=privacy" data-i18n="footer_privacy">Privacy Policy</a>
                </div>
                <div class="footer-contact-info">
                    <span><a href="mailto:contact@60trips.com" style="color: inherit; text-decoration: none;"><i class="fas fa-envelope"></i> contact@60trips.com</a></span>
                    <span><a href="tel:+962799193132" style="color: inherit; text-decoration: none;"><i class="fas fa-phone-alt"></i> +962 79 919 3132</a></span>
                    <span><i class="fas fa-map-marker-alt"></i> Zarqa, Jordan</span>
                </div>
                <div class="footer-copy-text">
                    <span data-i18n="footer_copy">&copy; 2026 60 Trips. All rights reserved.</span>
                </div>
            </div>
        </div>
    </footer>

    <!-- WeChat QR Modal -->
    <div id="wc-qr-modal" class="wc-modal">
        <div class="wc-modal-content">
            <span class="wc-modal-close" onclick="document.getElementById('wc-qr-modal').style.display='none'">&times;</span>
            <img src="${assetsPath}images/wechat-qr.png" alt="WeChat QR Code" style="width: 100%; border-radius: 10px; margin-bottom: 15px;">
            <p style="text-align: center; color: #000; margin: 0; font-weight: 600; font-size: 15px;">Scan to connect on WeChat<br><span style="color: var(--primary-gold); font-size: 16px;">ID: Roojha</span></p>
        </div>
    </div>

    <style>
        :root {
            --primary-gold: #C49A27;
            --dark-navy: #0a0a0a;
            --solid-border: rgba(255, 255, 255, 0.1);
            --transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        #shared-footer-container {
            display: block;
            width: 100%;
            background-color: #0a0a0a; /* Matches sections above to prevent white horizontal cut */
            margin: 0;
            padding: 0;
        }

        .partners-bar {
            padding: 10px 0;
            background: var(--primary-gold);
            border-top: none;
            width: 100%;
            overflow: hidden;
            margin-top: 0 !important;
        }

        .partners-bar .container {
            padding: 0;
        }

        .partners-track {
            display: flex;
            justify-content: space-around;
            align-items: center;
            opacity: 0.9;
            flex-wrap: wrap;
            gap: 20px;
            color: #000;
        }

        .partners-track i {
            font-size: 28px;
            color: #000;
        }

        #main-footer {
            padding: 5px 0 0;
            background: #000;
            border-top: 1px solid var(--solid-border);
            color: white;
            direction: ltr !important;
            font-family: 'Outfit', 'Noto Sans Arabic', sans-serif !important;
            font-size: 16px;
        }

        /* --- Premium Trust & Testimonials --- */
        .trust-section {
            padding: 80px 0 20px 0;
            background: #000000;
            text-align: center;
            border-top: none;
        }
        .trust-section h2 {
            margin: 0 0 40px 0;
            font-size: 3rem;
            color: #ffffff;
            font-weight: 700;
        }
        .trust-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .trust-item {
            padding: 30px;
            text-align: center;
            transition: var(--transition);
        }
        .trust-item i {
            font-size: 2.5rem;
            color: var(--primary-gold);
            margin-bottom: 20px;
            display: block;
        }
        .trust-item h4 {
            font-size: 1.4rem;
            margin-bottom: 15px;
            color: #ffffff;
            font-weight: 600;
        }
        .trust-item p {
            font-size: 1rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.7);
        }
        .testimonials {
            padding: 60px 0 100px 0;
            background: #000000;
            text-align: center;
        }
        .testimonials h2 {
            font-size: 2.8rem;
            color: #ffffff;
            margin: 0 0 40px 0;
            font-weight: 700;
        }
        .testimonial-card {
            background: rgba(255, 255, 255, 0.03);
            padding: 50px 40px;
            border-radius: 20px;
            border: 1px solid rgba(197, 160, 89, 0.15);
            max-width: 900px;
            margin: 0 auto;
            position: relative;
            backdrop-filter: blur(10px);
        }
        .testimonial-card i.fa-quote-left {
            color: var(--primary-gold);
            font-size: 2rem;
            margin-bottom: 25px;
            display: block;
        }
        .testimonial-card p {
            font-size: 1.5rem;
            font-style: italic;
            color: #ffffff !important;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .testimonial-author {
            color: var(--primary-gold);
            font-weight: 700;
            font-size: 1.2rem;
            margin-top: 20px;
        }
        .testimonial-origin {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.5);
            margin-top: 5px;
        }
        .section-tag {
            color: var(--primary-gold);
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 0.8rem;
            font-weight: 700;
            display: block;
            margin-bottom: 15px;
        }

        #main-footer .container {
            padding: 0;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: 1.8fr 0.8fr 1fr;
            gap: 30px;
            margin-bottom: 0px;
            align-items: start;
            direction: ltr !important;
            padding: 5px 0 15px;
        }

        .footer-column h4 {
            color: var(--primary-gold);
            margin-top: 0;
            margin-bottom: 20px;
            font-size: 18px;
            text-transform: capitalize;
            font-weight: 600;
        }

        .footer-desc {
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
            margin-bottom: 0px;
            max-width: 400px;
            font-weight: 300;
            font-size: 16px;
            margin-top: 5px; /* Slight top adjustment for visual balance */
        }

        .brand-wrapper {
            display: flex;
            gap: 20px; /* Added some gap for better spacing */
            align-items: center;
        }

        .footer-logo-img {
            max-width: 180px;
            height: auto;
            display: block;
            flex-shrink: 0;
        }

        .footer-column ul {
            list-style: none;
            padding: 0;
        }

        .footer-column ul li {
            margin-bottom: 8px;
        }

        .footer-column ul li a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            transition: var(--transition);
            display: inline-block;
            font-size: 15px;
            font-weight: 300;
        }

        .footer-column ul li a:hover {
            color: var(--primary-gold);
            padding-left: 5px;
        }

        .explore-col {
            align-self: start !important;
            padding-bottom: 0; 
            padding-top: 20px; /* Aligned with .footer-desc margin-top */
            margin-top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .explore-col ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 180px; /* Fixed height — links spaced evenly without growing the column */
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .explore-col ul li {
            margin-bottom: 0; /* No margin — spacing handled by justify-content */
        }

        .connect-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding-top: 20px; /* Aligned with Explore and Logo text */
            margin-top: 0;
            margin-left: 0;
        }

        .footer-desc.sub-text {
            margin-top: 0; /* Reducing distance below the 'Connect' heading */
        }

        .footer-subscribe {
            display: flex;
            width: 100%;
            max-width: 350px;
            margin-bottom: 14px;
        }

        .footer-subscribe input {
            flex: 1;
            padding: 16px 15px;
            border: none;
            border-radius: 4px 0 0 4px;
            background: #fff;
            color: #333;
            font-size: 14px;
        }

        .footer-subscribe button {
            padding: 17px 25px;
            background: #D4AF37 !important;
            color: #000 !important;
            border: none;
            border-radius: 0 4px 4px 0;
            font-weight: 600;
            cursor: pointer;
            transition: 0.3s;
            white-space: nowrap;
        }

        .footer-subscribe button:hover {
            background: #b8962e;
        }

        .connect-actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .footer-connect-group {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .footer-socials {
            display: flex;
            gap: 10px;
            margin-bottom: 0px;
            margin-top: 0px;
        }

        .footer-socials a {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff !important;
            text-decoration: none;
            transition: var(--transition);
        }

        /* Official Solid Brand Colors */
        .footer-socials a.li-link { background: #0077b5; }
        .footer-socials a.ig-link { background: #E1306C; }
        .footer-socials a.yt-link { background: #FF0000; }
        .footer-socials a.x-link { background: #000000; border: 1px solid rgba(255,255,255,0.2); }
        .footer-socials a.fb-link { background: #1877F2; }
        .footer-socials a.wc-link { background: #07C160; }
        .footer-socials a.rn-link { background: #ff2442; }

        .footer-socials a:hover {
            opacity: 0.85;
            transform: translateY(-3px);
        }
        
        .footer-socials a.rn-link svg {
            width: 24px;
            height: 24px;
            fill: #fff;
        }

        .google-play-btn {
            background: #000;
            border: 1px solid var(--primary-gold);
            padding: 8px 15px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            color: #fff;
            transition: 0.3s;
            margin-top: 14px; /* Matches footer-subscribe bottom margin */
            margin-bottom: 5px;
            box-sizing: border-box;
        }

        .google-play-btn:hover {
            background: var(--primary-gold);
            color: #000;
            border-color: #000;
        }

        .google-play-btn svg.google-play-logo {
            width: 25px;
            height: 25px;
        }

        .google-play-btn .btn-text { display: flex; flex-direction: column; line-height: 1.2; text-align: left; }
        .google-play-btn .small { font-size: 10px; opacity: 0.7; font-weight: 300; }
        .google-play-btn .large { font-size: 16px; font-weight: 600; }

        .footer-bottom {
            background: var(--primary-gold);
            padding: 10px 0;
            text-align: center;
            color: #000;
            font-weight: 500;
            direction: ltr !important;
        }

        .footer-bottom-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-legal a { color: #000; text-decoration: none; margin: 0 5px; }
        .footer-contact-info { display: flex; gap: 20px; font-size: 14px; color: #000; }
        .footer-contact-info span { display: flex; align-items: center; gap: 6px; }
        .footer-copy-text { color: #000; font-size: 14px; }

        @media (max-width: 1024px) {
            .footer-grid { grid-template-columns: 1fr; }
            .brand-col { grid-column: span 1; text-align: center; }
            .brand-wrapper { flex-direction: column; gap: 15px; align-items: center; }
            .footer-column h4 { text-align: center; }
            .explore-col { align-items: center; text-align: center; }
            .connect-col { align-items: center; text-align: center; }
            .footer-subscribe { margin-left: auto; margin-right: auto; }
            .footer-bottom-flex { flex-direction: column; gap: 15px; text-align: center; }
            .footer-contact-info { flex-direction: column; gap: 10px; }
            .footer-column ul { text-align: center; }
            .footer-socials { justify-content: center; }
        }

        /* RTL Adjustments */
        html[dir="rtl"] #main-footer { text-align: right; }
        html[dir="rtl"] .footer-column h4 { margin-bottom: 25px; }
        html[dir="rtl"] .connect-col { align-items: center; text-align: center; }
        html[dir="rtl"] .footer-subscribe { flex-direction: row-reverse; }
        html[dir="rtl"] .footer-subscribe input { border-radius: 0 4px 4px 0; }
        html[dir="rtl"] .footer-subscribe button { border-radius: 4px 0 0 4px; }
        html[dir="rtl"] .footer-column ul li a:hover { transform: translateX(-5px); }
        html[dir="rtl"] .google-play-btn { flex-direction: row-reverse; }
        /* WeChat Modal Styles */
        .wc-modal { display: none; position: fixed; z-index: 99999; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); align-items: center; justify-content: center; backdrop-filter: blur(5px); }
        .wc-modal-content { background-color: #fff; padding: 25px; border-radius: 15px; width: 90%; max-width: 320px; position: relative; border: 2px solid var(--primary-gold); animation: wcFadeIn 0.3s; }
        .wc-modal-close { position: absolute; top: 10px; right: 15px; color: #888; font-size: 28px; font-weight: bold; cursor: pointer; line-height: 1; transition: 0.2s; }
        .wc-modal-close:hover { color: #000; }
        @keyframes wcFadeIn { from {opacity: 0; transform: scale(0.9);} to {opacity: 1; transform: scale(1);} }
    </style>
    `;

    // Inject the footer on ALL pages
    const container = document.getElementById('shared-footer-container');
    if (container) {
        container.innerHTML = footerHTML;

        // Initial translation check
        if (typeof translate === 'function') {
            const currentLang = document.documentElement.lang || 'en';
            translate(currentLang);
        }
    }
})();
