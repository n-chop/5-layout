const burgerMenu = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar-collapse');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
});
navbar.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
});

$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function() {
    function handleResize() {
        var screenWidth = $(window).width();

        if (screenWidth > 767) {
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').removeClass('open');
        }
    }

    handleResize();

    $(window).resize(function() {
        handleResize();
    });
});

