<?php
/**
 * Luxe Voyages Customizer Settings
 */
function luxe_voyages_customize_register( $wp_customize ) {
    
    // Footer Section
    $wp_customize->add_section( 'luxe_footer_section' , array(
        'title'      => __( 'Footer Settings', 'luxe-voyages' ),
        'priority'   => 160,
    ) );

    // Footer Logo Text
    $wp_customize->add_setting( 'footer_logo_text' , array(
        'default'   => 'LUXE VOYAGES',
        'transport' => 'refresh',
    ) );
    $wp_customize->add_control( 'footer_logo_text', array(
        'label'    => __( 'Footer Logo Text', 'luxe-voyages' ),
        'section'  => 'luxe_footer_section',
        'type'     => 'text',
    ) );

    // Contact Panel
    $wp_customize->add_section( 'luxe_contact_section' , array(
        'title'      => __( 'Contact Information', 'luxe-voyages' ),
        'priority'   => 170,
    ) );

    $settings = array(
        'contact_address' => 'Dubai, UAE',
        'contact_email'   => 'info@luxevoyages.com',
        'contact_phone'   => '+971 4 000 000',
        'social_instagram' => '',
        'social_facebook'  => '',
        'social_twitter'   => '',
    );

    foreach ( $settings as $id => $default ) {
        $wp_customize->add_setting( $id , array(
            'default'   => $default,
            'transport' => 'refresh',
        ) );
        $wp_customize->add_control( $id, array(
            'label'    => ucwords( str_replace( '_', ' ', $id ) ),
            'section'  => 'luxe_contact_section',
            'type'     => 'text',
        ) );
    }
}
add_action( 'customize_register', 'luxe_voyages_customize_register' );
