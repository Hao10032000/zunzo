/**
  * Name: Zunzo
  * Version: 1.0
  * Author: Themesflat
  * Author URI: http://www.themesflat.com
*/

/**
  * isMobile
  * responsiveMenu
  * headerFixed
  * counter
  * swClick
  * flatAnimation
  * goTop
  * retinaLogos
  * removePreloader
*/

; (function ($) {

    'use strict'

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var responsiveMenu = function () {
        var menuType = 'desktop';

        $(window).on('load resize', function () {
            var currMenuType = 'desktop';

            if (matchMedia('only screen and (max-width: 991px)').matches) {
                currMenuType = 'mobile';
            }

            if (currMenuType !== menuType) {
                menuType = currMenuType;

                if (currMenuType === 'mobile') {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function () {
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function (e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerFixed = function () {
        if ($('body').hasClass('header-sticky')) {
            var hd_height = $('#header').height();
            var nav = $("#header");

            if (nav.length) {
                var offsetTop = nav.offset().top,
                    headerHeight = nav.height(),
                    injectSpace = $("<div>", {
                        height: headerHeight,
                    });
                injectSpace.hide();

                if ($("header").hasClass("style-absolute")) {
                    injectSpace.hide();
                } else {
                    injectSpace.insertAfter(nav);
                }
                $(window).on('load scroll', function () {
                    if ($(window).scrollTop() > hd_height + 30) {
                        $('#header').addClass('downscrolled');
                        injectSpace.show();
                    } else {
                        $('#header').removeClass('downscrolled');
                        injectSpace.hide();
                    }
                    if ($(window).scrollTop() > 300) {
                        $('#header').addClass('upscrolled');
                    } else {
                        $('#header').removeClass('upscrolled');
                    }
                })
            }

        }
    }

    var topSearch = function () {

        $(document).on('click', function (e) {
            var clickID = e.target.id; if ((clickID !== 's')) {
                $('.top-search').removeClass('active');
            }
        });
        $(document).on('click', function (e) {
            var clickID = e.target.class; if ((clickID !== 'a111')) {
                $('.show-search').removeClass('active-search');
            }
        });

        $('.show-search').on('click', function (event) {
            event.stopPropagation();
        });
        $('#searchform').on('click', function (event) {
            event.stopPropagation();
        });
        $('.show-search').on('click', function (event) {
            if (!$('.top-search').hasClass("active")) {
                $('.top-search').addClass('active');
                event.preventDefault();
            }
            else
                $('.top-search').removeClass('active');
            event.preventDefault();
            if (!$('.show-search').hasClass("active-search"))
                $('.show-search').addClass('active-search');
            else
                $('.show-search').removeClass('active-search');
        })
            ;
    }//show search


    $('.minicar-overlay').on('click', function () {
        $(this).closest('#header').find('.nav-shop-cart').toggleClass('active');
        $(this).closest('#header').find('.minicar-overlay').toggleClass('active-minicart');
    });
    $('.cart > a').on('click', function () {
        $(this).closest('#header').find('.nav-shop-cart').toggleClass('active');
        $(this).closest('#header').find('.minicar-overlay').toggleClass('active-minicart');
    });
    $('.minicart-close').on('click', function () {
        $(this).closest('#header').find('.nav-shop-cart').toggleClass('active');
        $(this).closest('#header').find('.minicar-overlay').toggleClass('active-minicart');
    });//toogle cart

    $('.minicar-overlay').on('click', function () {
        $(this).closest('#header-v2').find('.nav-shop-cart').toggleClass('active');
        $(this).closest('#header-v2').find('.minicar-overlay').toggleClass('active-minicart');
    });
    $('.cart > a').on('click', function () {
        $(this).closest('#header-v2').find('.nav-shop-cart').toggleClass('active');
        $(this).closest('#header-v2').find('.minicar-overlay').toggleClass('active-minicart');
    });
    $('.minicart-close').on('click', function () {
        $(this).closest('#header-v2').find('.nav-shop-cart').toggleClass('active');
        $(this).closest('#header-v2').find('.minicar-overlay').toggleClass('active-minicart');
    });//toogle cart

    $(document).on("click", ".menu-item-has-children-mobile", function () {
        var args = { duration: 600 };
        if ($(this).hasClass("active")) {
          $(this).children(".sub-menu-sidebar").slideUp(args);
          $(this).removeClass("active");
        } else {
          $(".sub-menu-sidebar").slideUp(args);
          $(this).children(".sub-menu-sidebar").slideDown(args);
          $(".menu-item-has-children-mobile").removeClass("active");
          $(this).addClass("active");
        }
    });

    $('.canvas').on('click', function () {
        $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
      });
      $('.canvas-nav-close').on('click', function () {
          $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
      });
      $('.canvas-nav-wrap .overlay-canvas-nav').on('click', function () {
          $(this).closest('#header_main').find('.canvas-nav-wrap').toggleClass('active');
      });
      
    //Time
    var timeMinutes = 10;
    var timeSeconds = timeMinutes * 60;
    var timer = document.getElementById('timer-sell-out');

    function startTimer() {
        timeSeconds--;
        var minutes = Math.floor(timeSeconds / 60);
        var seconds = timeSeconds % 60;

        if (timeSeconds < 0) {
            timer.textContent = '00:00';
            clearInterval(timerInterval);
            return;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        timer.textContent = minutes + ':' + seconds;
    }

    var timerInterval = setInterval(startTimer, 1000);
    //time

    var swiper = new Swiper(".mySwiper", {
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
    });
    var swiper2 = new Swiper(".swiper-testimonial", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper3 = new Swiper(".image-carousel", {
        slidesPerView: 3,
        spaceBetween: 32,
        loop: true,
    });
    var swiper4 = new Swiper(".testimonial-wrap-v2", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper5 = new Swiper(".tf-slider-product", {
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    $('.sologan-logo').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
    $('.owl-themes').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            },
            1366: {
                items: 2
            }
        }
    })


    var goTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        });

        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    };

    var retinaLogos = function () {
        var retina = window.devicePixelRatio > 1 ? true : false;

        if (retina) {
            $('#a1').attr({ src: 'images/Logo2@', width: '190', height: '42' });
            $('#a2').attr({ src: 'images/logo-footer2@.png', width: '125', height: '43' });

        }
    };
    var video = function(){
        if ($('div').hasClass('benefit-video')) {
          $('.popup-youtube').magnificPopup({
            type: 'iframe'
          });
        }
    };
    var preloader = function () {
        setTimeout(function () {
          $(".preload-container").fadeOut("slow", function () {
              $(this).remove();
          });
        }, 1000);
      };
      const cursor = function () {
        var myCursor = jQuery(".tf-mouse");
        if (myCursor.length) {
          if ($("body")) {
            const e = document.querySelector(".tf-mouse-inner"),
              t = document.querySelector(".tf-mouse-outer");
            let n,
              i = 0,
              o = !1;
            (window.onmousemove = function (s) {
              o ||
                (t.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX);
            }),
              $("body").on(
                "mouseenter",
                "a, .canvas, .progress-wrap",
                function () {
                  e.classList.add("mouse-hover"), t.classList.add("mouse-hover");
                }
              ),
              $("body").on(
                "mouseleave",
                "a, .canvas, .progress-wrap",
                function () {
                  ($(this).is("a") && $(this).closest(".canvas").length) ||
                    (e.classList.remove("mouse-hover"),
                    t.classList.remove("mouse-hover"));
                }
              ),
              (e.style.visibility = "visible"),
              (t.style.visibility = "visible");
          }
        }
      };

    // Dom Ready
    $(function () {
        if (matchMedia('only screen and (min-width: 991px)').matches) {
            headerFixed();
        }
        responsiveMenu();
        goTop();
        retinaLogos();
        topSearch();
        video();
        preloader();
        cursor();
    });

})(jQuery);