$(document).ready(function () {
    // ------------------------ costum scroll -------------------------
    $(".scroll").mCustomScrollbar({
        axis: "y",
    });


    // ------------------------ Timeline     -------------------------
    $('.slider-for').slick({
        centerMode: true,
        centerPadding: '30px',
        // autoplay: true,
        dotsClass: 'my-dots',
        autoplaySpeed: 6000,
        speed: 1500,
        slidesToShow: 3,
        asNavFor: '.slider-nav',
        prevArrow: '<button class="button-arrow slick-prev"><svg width="31" height="97" viewBox="0 0 31 97" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<line y1="-0.5" x2="55.9302" y2="-0.5" transform="matrix(-0.518503 0.855076 0.855076 0.518503 30 1)" stroke="#EFEBE4"/>\n' +
            '<line x1="1.42754" y1="48.5653" x2="30.4275" y2="96.3899" stroke="#EFEBE4"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="button-arrow slick-next"><svg width="31" height="97" viewBox="0 0 31 97" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<line x1="1.42754" y1="0.916163" x2="30.4275" y2="48.7407" stroke="#EFEBE4"/>\n' +
            '<line y1="-0.5" x2="55.9302" y2="-0.5" transform="matrix(-0.518503 0.855076 0.855075 0.518503 30 49)" stroke="#EFEBE4"/>\n' +
            '</svg>\n</button>',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,

                },
                breakpoint: 720,
                settings: {
                    centerMode: false,
                    centerPadding: '0px',
                    arrows: false,
                    slidesToShow: 1,
                    dots: true,

                },
            },
        ]
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        speed: 1500,
        focusOnSelect: true,
        prevArrow: '<button class="button-arrow slick-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M9.01101 0.499441C9.14184 0.633387 9.21509 0.8132 9.21509 1.00044C9.21509 1.18768 9.14184 1.36749 9.01101 1.50144L1.70151 8.99994L9.01101 16.4969C9.14184 16.6309 9.21509 16.8107 9.21509 16.9979C9.21509 17.1852 9.14184 17.365 9.01101 17.4989C8.94741 17.5643 8.87138 17.6162 8.78739 17.6516C8.70341 17.6871 8.61317 17.7053 8.52201 17.7053C8.43085 17.7053 8.34061 17.6871 8.25662 17.6516C8.17264 17.6162 8.0966 17.5643 8.03301 17.4989L0.26001 9.52344C0.123488 9.38338 0.0470819 9.19553 0.0470819 8.99994C0.0470819 8.80435 0.123488 8.6165 0.26001 8.47644L8.03301 0.500941C8.0966 0.435626 8.17264 0.383712 8.25662 0.348265C8.34061 0.312818 8.43085 0.294556 8.52201 0.294556C8.61317 0.294556 8.70341 0.312818 8.78739 0.348265C8.87138 0.383712 8.94741 0.435626 9.01101 0.500941V0.499441Z" fill="#EFEBE4"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="button-arrow slick-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.988992 0.499441C0.858158 0.633387 0.784912 0.8132 0.784912 1.00044C0.784912 1.18768 0.858158 1.36749 0.988992 1.50144L8.29849 8.99994L0.988992 16.4969C0.858158 16.6309 0.784912 16.8107 0.784912 16.9979C0.784912 17.1852 0.858158 17.365 0.988992 17.4989C1.05259 17.5643 1.12862 17.6162 1.21261 17.6516C1.29659 17.6871 1.38683 17.7053 1.47799 17.7053C1.56915 17.7053 1.65939 17.6871 1.74338 17.6516C1.82736 17.6162 1.9034 17.5643 1.96699 17.4989L9.73999 9.52344C9.87651 9.38338 9.95292 9.19553 9.95292 8.99994C9.95292 8.80435 9.87651 8.6165 9.73999 8.47644L1.96699 0.500941C1.9034 0.435626 1.82736 0.383712 1.74338 0.348265C1.65939 0.312818 1.56915 0.294556 1.47799 0.294556C1.38683 0.294556 1.29659 0.312818 1.21261 0.348265C1.12862 0.383712 1.05259 0.435626 0.988992 0.500941V0.499441Z" fill="#EFEBE4"/>\n' +
            '</svg>\n</button>',
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },

        ]
    });

    // ------------------------ story  -------------------------
    $('.story-slider-for').slick({
        dotsClass: 'my-dots',
        slidesToShow: 1,
        asNavFor: '.story-slider-nav',
        fade: true,
        dots: true,
        speed: 1500,
        prevArrow: '<button class="button-arrow slick-prev"><svg width="31" height="97" viewBox="0 0 31 97" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<line y1="-0.5" x2="55.9302" y2="-0.5" transform="matrix(-0.518503 0.855076 0.855076 0.518503 30 1)" stroke="#EFEBE4"/>\n' +
            '<line x1="1.42754" y1="48.5653" x2="30.4275" y2="96.3899" stroke="#EFEBE4"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="button-arrow slick-next"><svg width="31" height="97" viewBox="0 0 31 97" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<line x1="1.42754" y1="0.916163" x2="30.4275" y2="48.7407" stroke="#EFEBE4"/>\n' +
            '<line y1="-0.5" x2="55.9302" y2="-0.5" transform="matrix(-0.518503 0.855076 0.855075 0.518503 30 49)" stroke="#EFEBE4"/>\n' +
            '</svg>\n</button>',


    });
    $('.story-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.story-slider-for',
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button class="button-arrow slick-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M9.01101 0.499441C9.14184 0.633387 9.21509 0.8132 9.21509 1.00044C9.21509 1.18768 9.14184 1.36749 9.01101 1.50144L1.70151 8.99994L9.01101 16.4969C9.14184 16.6309 9.21509 16.8107 9.21509 16.9979C9.21509 17.1852 9.14184 17.365 9.01101 17.4989C8.94741 17.5643 8.87138 17.6162 8.78739 17.6516C8.70341 17.6871 8.61317 17.7053 8.52201 17.7053C8.43085 17.7053 8.34061 17.6871 8.25662 17.6516C8.17264 17.6162 8.0966 17.5643 8.03301 17.4989L0.26001 9.52344C0.123488 9.38338 0.0470819 9.19553 0.0470819 8.99994C0.0470819 8.80435 0.123488 8.6165 0.26001 8.47644L8.03301 0.500941C8.0966 0.435626 8.17264 0.383712 8.25662 0.348265C8.34061 0.312818 8.43085 0.294556 8.52201 0.294556C8.61317 0.294556 8.70341 0.312818 8.78739 0.348265C8.87138 0.383712 8.94741 0.435626 9.01101 0.500941V0.499441Z" fill="#EFEBE4"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="button-arrow slick-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.988992 0.499441C0.858158 0.633387 0.784912 0.8132 0.784912 1.00044C0.784912 1.18768 0.858158 1.36749 0.988992 1.50144L8.29849 8.99994L0.988992 16.4969C0.858158 16.6309 0.784912 16.8107 0.784912 16.9979C0.784912 17.1852 0.858158 17.365 0.988992 17.4989C1.05259 17.5643 1.12862 17.6162 1.21261 17.6516C1.29659 17.6871 1.38683 17.7053 1.47799 17.7053C1.56915 17.7053 1.65939 17.6871 1.74338 17.6516C1.82736 17.6162 1.9034 17.5643 1.96699 17.4989L9.73999 9.52344C9.87651 9.38338 9.95292 9.19553 9.95292 8.99994C9.95292 8.80435 9.87651 8.6165 9.73999 8.47644L1.96699 0.500941C1.9034 0.435626 1.82736 0.383712 1.74338 0.348265C1.65939 0.312818 1.56915 0.294556 1.47799 0.294556C1.38683 0.294556 1.29659 0.312818 1.21261 0.348265C1.12862 0.383712 1.05259 0.435626 0.988992 0.500941V0.499441Z" fill="#EFEBE4"/>\n' +
            '</svg>\n</button>',
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },

        ]
    });

    // ------------------------ fixed menu -------------------------

    let header = $("#header")
    let firstScreen = $(".first-screen")
    let firstScreenH
    let scrollPos = $(window).scrollTop

    $(window).on("scroll load resize", function () {
        firstScreenH = firstScreen.innerHeight();
        scrollPos = $(this).scrollTop()

        console.log(firstScreenH)

        if (scrollPos > firstScreenH) {
            header.addClass('fixed')
        } else {
            header.removeClass("fixed")
        }
    })


    // ------------------------ MOBILE NAV -------------------------
    const mobileNavButton = document.querySelector('.mobile-nav-button')
    const mobileNavIcon = document.querySelector('.mobile-nav-button__icon')
    const mobileNav = document.querySelector('.nav-menu')

    mobileNavButton.addEventListener('click', function () {
        mobileNavIcon.classList.toggle('active');
        mobileNav.classList.toggle('active')
        document.body.classList.toggle('no-scroll')

    })


    $(".nav-menu__link").on("click", function (event) {

        $(mobileNavIcon).toggleClass("active");
        $(mobileNav).toggleClass("active");
        document.body.classList.remove('no-scroll')
    });

    // ------------------------  smooth scroll   -------------------------
    $(".nav-menu ul a").on("click", function (e) {
        // 1
        // e.preventDefault();
        // 2
        const href = $(this).attr("href");
        // 3
        $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
    });


    //  video/photo slider 
    let elemCount = $('.videoblock > div').length;


    // slider
    $('.sliderphoto-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sliderphoto-nav'
    });
    $('.sliderphoto-nav').slick({
        draggeble: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.sliderphoto-for',
        centerMode: true,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    draggeble: false,
                    slidesToShow: elemCount,
                    slidesToScroll: 1,
                    asNavFor: '.sliderphoto-for',
                    centerMode: true,
                    arrows: false,
                    focusOnSelect: true,
                },
                breakpoint: 320,
                settings: {
                    draggeble: false,
                    slidesToShow: elemCount,
                    slidesToScroll: 1,
                    asNavFor: '.sliderphoto-for',
                    centerMode: true,
                    arrows: false,
                    focusOnSelect: true,
                },
            },


        ]
    });



});





