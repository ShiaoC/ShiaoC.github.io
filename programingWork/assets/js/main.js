(function ($) {
	'use strict';
    // Preloader
    jQuery(window).on("load", function() {
        $(".preloader").fadeOut()
    });

    // Sticky header
    $(window).on("scroll", function() {
        $(this).scrollTop() > 120 ? $(".navbar-area").addClass("is-sticky") : $(".navbar-area").removeClass("is-sticky");
    });

    $(".mean-menu").meanmenu({
        meanScreenWidth: "991"
     });

      // Counter Up
    $(".odometer").appear(function(e) {
	    $(".odometer").each(function() {
	        var e = $(this).attr("data-count");
	        $(this).html(e)
	    })
     });
     // mixItUp FIlter
    $("#Container").mixItUp();

     // Testimonial slides
    $(".testimonial-slides").owlCarousel({
        loop: !0,
        dots: !0,
        smartSpeed: 2e3,
        margin: 30,
        nav: true,
        active: !0,
        autoplayHoverPause: !0,
        autoplay: !0,
        navText:['<span class="testimonial-slider-nav"><i class="fas fa-arrow-left"></i></span>','<span class="testimonial-slider-nav"><i class="fas fa-arrow-right"></i></span>'],
        responsive: {
            0: {
                items: 1,
                nav:false
            },
            576: {
                items: 1
            },
            768: {
                items: 2,
                nav: true
            },
            1200: {
                items: 2
            }
        }
     }), 
	// Partner SLider
    $(".partner-slider").owlCarousel({
        loop: !0,
        nav: !1,
        dots: !1,
        smartSpeed: 2e3,
        margin: 30,
        autoplayHoverPause: !0,
        autoplay: !1,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
   // Back to to
    $(window).on("scroll", function() {
        var e = $(window).scrollTop();
        e > 600 && $(".go-top").addClass("active"), e < 600 && $(".go-top").removeClass("active");
    });
    $(".go-top").on("click", function() {
        $("html, body").animate({
            scrollTop: "0"
        }, 500)
    });
})(jQuery);