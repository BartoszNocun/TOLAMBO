const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-navbar');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    mobileNav.classList.toggle('mobile-navbar--show');
}
hamburger.addEventListener('click', handleClick)