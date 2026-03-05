<?php
/**
 * Trips Engine Offers Logic
 * Handles sorting, filtering, and offer management.
 */

if (!defined('ABSPATH')) exit;

class Trips_Engine_Offers {
    
    /**
     * Get Best Offers
     */
    public static function get_best_offers($results) {
        // Logic to filter the 'Best', 'Cheapest', and 'Fastest'
        usort($results, function($a, $b) {
            return $a['price'] - $b['price'];
        });
        return $results;
    }
}
