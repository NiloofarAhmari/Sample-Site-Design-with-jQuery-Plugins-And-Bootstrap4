
// for hover dropdown menu
// $(document).ready(function () {
// jQuery('ul.navbar-nav li.dropdown').hover(function() {
//   jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(200);
// }, function() {
//   jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
// });
// });
/*navbar */
$(document).ready(function () {
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parent("li").toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-menu .show').removeClass("show");
        });

        if (!$parent.parent().hasClass('navbar-nav')) {
            $el.next().css({ "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 });
        }

        return false;
    });
});


new WOW().init();
//counterup
$('.counter').counterUp({
    delay: 30,
    time: 3000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');
//sticky-nav
$(window).scroll(function () {
    if ($(window).scrollTop()) {
        $("#navbar").addClass("nav-sticky");
    } else {
        $("#navbar").removeClass("nav-sticky");
    }
});
$(".testimonials-carousel").owlCarousel({

    center: true,
    autoplay: true,
    dots: true,
    rtl: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 3
        },
        992: {
            items: 3
        }
    }
});

// Blogs carousel
$(".blog-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    rtl:true,
    navText: [
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        '<i class="fa fa-angle-left" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 4
        },
        992: {
            items: 4
        }
    }
});

 // Back to top button
 $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').each(function(){
    $(this).click(function(){ 
      $('html').animate({ scrollTop: 0 }, 'slow'); return true; 
    });
  });
