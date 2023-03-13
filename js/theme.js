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
    // $(window).on('scroll', function() {
    //     if ($(window).scrollTop() > 85) {
    //         $('header').addClass('navbar-fixed-top');
    //     } else {
    //         $('header').removeClass('navbar-fixed-top');
    //     }
    // });

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
    progess
    --------------------- */
    $('.expertise-progess').waypoint(function() {
        $('.progress-bar').addClass('left-anim');
    }, {
        triggerOnce: true,
        offset: '50%'
    });


    /*---------------------
    video popup
    --------------------- */
    $(document).ready(function() {
    // Gets the video src from the data-src on each button
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 
    // document ready  
    });
                

    /*---------------------
    hero carousel
    --------------------- */
    $('.hero-carousel').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });

    /*---------------------
    showcase carousel
    --------------------- */
    $('.showcase-carousel-1').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true
      });
    $('.showcase-carousel-2').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true
      });
    $('.showcase-carousel-3').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true
      });
      
      /*---------------------
      testimonial carousel
      --------------------- */
      $('.testimonial-carousel').slick({
          autoplay: true,
          arrows: false,
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true
        });
      
      /*---------------------
      clients carousel
      --------------------- */
      $('.clients-carousel').slick({
        autoplay: false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true
      });


}(jQuery));
