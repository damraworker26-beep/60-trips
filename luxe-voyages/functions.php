<?php

/**
 * Luxe Voyages Theme Functions
 */

if (! function_exists('luxe_voyages_setup')) :
    function luxe_voyages_setup()
    {
        // Theme Support
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));

        // Menus
        register_nav_menus(array(
            'primary' => __('Primary Menu', 'luxe-voyages'),
            'footer-1' => __('Footer Quick Links', 'luxe-voyages'),
            'footer-2' => __('Footer Support', 'luxe-voyages'),
        ));
    }
endif;
add_action('after_setup_theme', 'luxe_voyages_setup');

/**
 * Enqueue scripts and styles
 */
function luxe_voyages_scripts()
{
    // Fonts
    wp_enqueue_style('luxe-fonts', 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Noto+Sans+Arabic:wght@300;400;700&display=swap');
    // Font Awesome
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
    // Main Style
    wp_enqueue_style('luxe-style', get_stylesheet_uri(), array(), '1.0.6');

    // Mobile Specific Style
    wp_enqueue_style('luxe-mobile-style', get_template_directory_uri() . '/mobile/mobile.css', array('luxe-style'), '1.0.0');

    // Scripts
    wp_enqueue_script('luxe-main-js', get_template_directory_uri() . '/js/main.js', array(), '1.0', true);
    
    // Mobile Specific Script
    wp_enqueue_script('luxe-mobile-js', get_template_directory_uri() . '/mobile/mobile-logic.js', array('luxe-main-js'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'luxe_voyages_scripts');

/**
 * Customizer Integration
 */
include_once get_template_directory() . '/inc/customizer.php';
