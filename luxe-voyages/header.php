<!DOCTYPE html>
<html <?php language_attributes(); ?> dir="<?php echo (is_rtl() ? 'rtl' : 'ltr'); ?>">

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <div id="preloader">
        <div class="loader-logo">
            <i class="fas fa-compass"></i>
            <h2>LUXE VOYAGES</h2>
        </div>
    </div>

    <header id="main-header">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
            <i class="fas fa-compass"></i> LUXE VOYAGES
        </a>
        <nav>
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_id'        => 'nav-links',
                'fallback_cb'    => '__return_false',
            ));
            ?>
        </nav>
        <div class="header-actions">
            <!-- Language Switcher Placeholder (To be handled by a plugin or custom logic) -->
            <select class="lang-select" id="lang-switcher">
                <option value="en">English (EN)</option>
                <option value="ar">العربية (AR)</option>
                <!-- Add other languages here -->
            </select>
            <a href="#" class="login-btn">Login</a>
            <div class="menu-toggle" id="mobile-menu-btn">
                <span></span><span></span><span></span>
            </div>
        </div>
    </header>