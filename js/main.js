const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-navbar');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    mobileNav.classList.toggle('mobile-navbar--show');
}
hamburger.addEventListener('click', handleClick);

//slickJS
$(document).ready(function () {
    $('.projects-carousel').slick({
        // setting - name: setting - value
        autoplay: true,
        arrows: false,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 1600,
                settings: {
                    arrows: true,
                    slidesToShow: 4 
                }
            }
        ]
    });
});