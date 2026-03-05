    <footer>
        <div class="container border-t">
            <div class="footer-grid">
                <div class="footer-column">
                    <a href="#" class="footer-logo"><?php echo get_theme_mod('footer_logo_text', 'LUXE VOYAGES'); ?></a>
                    <p class="footer-desc"><?php echo get_theme_mod('footer_about_text', 'We strive to offer travel experiences beyond imagination, with a focus on privacy and ultimate luxury in every journey.'); ?></p>
                    <div class="social-links">
                        <?php if(get_theme_mod('social_instagram')): ?><a href="<?php echo esc_url(get_theme_mod('social_instagram')); ?>"><i class="fab fa-instagram"></i></a><?php endif; ?>
                        <?php if(get_theme_mod('social_facebook')): ?><a href="<?php echo esc_url(get_theme_mod('social_facebook')); ?>"><i class="fab fa-facebook-f"></i></a><?php endif; ?>
                        <?php if(get_theme_mod('social_twitter')): ?><a href="<?php echo esc_url(get_theme_mod('social_twitter')); ?>"><i class="fab fa-twitter"></i></a><?php endif; ?>
                    </div>
                </div>
                <!-- Navigation Columns -->
                <div class="footer-column">
                    <h4><?php _e('Quick Links', 'luxe-voyages'); ?></h4>
                    <?php wp_nav_menu(array('theme_location' => 'footer-1', 'container' => false)); ?>
                </div>
                <div class="footer-column">
                    <h4><?php _e('Support', 'luxe-voyages'); ?></h4>
                    <?php wp_nav_menu(array('theme_location' => 'footer-2', 'container' => false)); ?>
                </div>
                <div class="footer-column">
                    <h4><?php _e('Contact Us', 'luxe-voyages'); ?></h4>
                    <p style="color: var(--text-dim); margin-bottom: 10px;"><?php echo get_theme_mod('contact_address'); ?></p>
                    <p style="color: var(--text-dim); margin-bottom: 10px;"><?php echo get_theme_mod('contact_email'); ?></p>
                    <p style="color: var(--primary-gold); font-weight: 700;"><?php echo get_theme_mod('contact_phone'); ?></p>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php _e('All Rights Reserved.', 'luxe-voyages'); ?>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
