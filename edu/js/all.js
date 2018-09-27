$(document).foundation();

// Header hide
$(window).scroll(function () {
    if ($(window).scrollTop() > 135) {
        $('.header__top').addClass('header__hide');
        $('.header').addClass('header__movetop').removeClass('header__movebtm');
        $('.site__logo--sticky').addClass('site__logo--sticky-show');
    } else {
        $('.header__top').removeClass('header__hide').addClass('header__show');
        $('.header').addClass('header__movebtm').removeClass('header__movetop');
        $('.site__logo--sticky').removeClass('site__logo--sticky-show');
    }
});


//Navi toggle
$(document).ready(function () {
    $('.navi__btn').click(function () {
        $(".navi__wrap").slideToggle(900);
        $(".navi__wrap").toggleClass("navi__wrap--open");
    });
});

//owl-notice
$(document).ready(function () {
    $(".owl-notice").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        margin:10,
        navText: ['<i class="fa fa-angle-left notice__prev"></i>', '<i class="fa fa-angle-right notice__nxt"></i>'],
    });
});

// Sticky scrolling
var stick = function () {
    var sideBarHeight = $('#sidebar').outerHeight();
    var mainContentHeight = $('#content').outerHeight();
    if (mainContentHeight < sideBarHeight) {
        $("#content").stick_in_parent();
    } else {
        $("#sidebar").stick_in_parent();
    }
}
$(document).ready(function (e) {
    var w = $(window).width();
    console.log(w);
    if (w >= 768) {
        stick();
    } else {
        $("#content").trigger("sticky_kit:detach");
        $("#sidebar").trigger("sticky_kit:detach");
    }

});

//Number Animation
var a = 0;
$(window).scroll(function () {
    var oTop = $('.numbers__wrap').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.numbers__no').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 4000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
        });
        a = 1;
    }
});

// Scroll To Top
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $('.scrollToTop').show();
        } else {
            $('.scrollToTop').hide();
        }
    });
    $(window).on('load', function () {
        $(this).trigger('scroll');
    });
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
});