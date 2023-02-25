// -----------------------------

//   js index
/* =================== */
/*  
    preloader
    mobile menu
    sticky
    scroll-up
    counter
    smooth scroll
    countdown
    slick carousel

*/
// -----------------------------


(function($) {
    "use strict";



    /*---------------------
    preloader
    --------------------- */

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });

	/*---------------------
    mobile menu
    --------------------- */
    jQuery('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 960,
        position: 'right',
        phoneBtn: '18009997788',
        locationBtn: 'https://www.google.com/maps'
    });

    /*-----------------
    sticky
    -----------------*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 85) {
            $('header').addClass('navbar-fixed-top');
        } else {
            $('header').removeClass('navbar-fixed-top');
        }
    });

    /*-----------------
    scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });

    /*------------------------------
    counter
    ------------------------------ */
    $('.counter-up').counterUp();

    /*---------------------
    smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 1200);
    });

    /*---------------------
    countdown
    --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });

    /*---------------------
    slick carousel
    --------------------- */
    $('.slick-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<i class="slick-next zmdi zmdi-long-arrow-right"></i>',
        prevArrow: '<i class="slick-prev zmdi zmdi-long-arrow-left"></i>',
        fade: false,
        asNavFor: '.slick-nav'
    });
    $('.slick-nav').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        asNavFor: '.slick-carousel',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });


}(jQuery));
