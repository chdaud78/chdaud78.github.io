$(function () {
    $('.nav-close').click(function (e) {
        e.preventDefault();
        $('.aside-nav').css('display', 'none');
        $('.aside-nav-menu').css('opacity', '1');
    });
    $('.aside-nav-menu').click(function (e) {
        e.preventDefault();
        $('.aside-nav').css('display', 'block');
        $('.aside-nav-menu').css('opacity', '0');
    });
});