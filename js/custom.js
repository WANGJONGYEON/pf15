
$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }

    })
});
$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        speed: 2000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".main_visual .arrows .next",
            prevEl: ".main_visual .arrows .prev",
        },
    })
});

$(function () {
    const mct = new Swiper('.main_content_slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            enabled: false,
        },
        loop: true,
        breakpoints: {
            769: {
                speed: 3000,
                slidesPerView: 4,
                autoplay: {
                    enabled: true,
                    delay: 0,
                    disableOnInteraction: false,

                },
            },
        },
        navigation: {
            nextEl: ".main_content .arrows .next",
            prevEl: ".main_content .arrows .prev",
        },

    })
})

$(function () {
    const mvs = new Swiper('.main_store_slide', {
        loop: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".main_store .arrows .next",
            prevEl: ".main_store .arrows .prev",
        },
    })
});

$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('is-active');
        $('.header .gnb').toggleClass('on');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown()

        }
    })

    $(window).on('resize', function () {
        $('.header .mbtn').removeClass('is-active')
        $('.header .gnb').removeClass('on')
        $('.header .gnb>ul ul').removeAttr('style')
    });


    $('.header .gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    })
})


