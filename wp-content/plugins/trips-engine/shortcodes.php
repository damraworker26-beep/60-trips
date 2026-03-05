<?php
/**
 * Trips Engine Shortcodes
 * Registers WordPress shortcodes for UI.
 */

if (!defined('ABSPATH')) exit;

add_shortcode('trips_search', 'trips_engine_search_shortcode');
add_shortcode('trips_results', 'trips_engine_results_shortcode');

function trips_engine_search_shortcode($atts) {
    ob_start();
    include plugin_dir_path(__FILE__) . '../../themes/60trips-theme/explore.php';
    return ob_get_clean();
}

function trips_engine_results_shortcode($atts) {
    ob_start();
    include plugin_dir_path(__FILE__) . '../../themes/60trips-theme/cards.php';
    return ob_get_clean();
}
