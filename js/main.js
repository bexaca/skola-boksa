jQuery(document).ready(function () {

    $('a[href*=\\#].scroll').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000, "swing");
    });

    $('a[href*=\\#].scroll-top').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000, "swing");
    });

    var $header = $('header nav'),
        scrollClass = 'on-scroll',
        activateAtY = 20;

    function deactivateHeader() {
        if (!$header.hasClass(scrollClass)) {
            $header.addClass(scrollClass);
        }
    }

    function activateHeader() {
        if ($header.hasClass(scrollClass)) {
            $header.removeClass(scrollClass);
        }
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > activateAtY) {
            deactivateHeader();
            $('.top').addClass('show');
        } else {
            activateHeader();
            $('.top').removeClass('show');
        }
    });

    var oNama = $("#o-nama").offset().top - 280;
    var treneri = $("#treneri").offset().top - 280;
    var treninzi = $("#treninzi").offset().top - 280;
    var galerija = $("#galerija").offset().top - 280;
    var kontakt = $("#kontakt").offset().top - 280;

    $(window).scroll(function () {
        if ($(window).scrollTop() > oNama && $(window).scrollTop() < treneri) {
            $('nav ul li a[href*=\\#o-nama]').addClass('hover');
            $('nav ul li a').not('nav ul li a[href*=\\#o-nama]').removeClass('hover');
        } else if ($(window).scrollTop() > treneri && $(window).scrollTop() < treninzi) {
            $('nav ul li a[href*=\\#treneri]').addClass('hover');
            $('nav ul li a').not('nav ul li a[href*=\\#treneri]').removeClass('hover');
        } else if ($(window).scrollTop() > treninzi && $(window).scrollTop() < galerija) {
            $('nav ul li a[href*=\\#treninzi]').addClass('hover');
            $('nav ul li a').not('nav ul li a[href*=\\#treninzi]').removeClass('hover');
        } else if ($(window).scrollTop() > galerija && $(window).scrollTop() < kontakt) {
            $('nav ul li a[href*=\\#galerija]').addClass('hover');
            $('nav ul li a').not('nav ul li a[href*=\\#galerija]').removeClass('hover');
        } else if ($(window).scrollTop() > kontakt) {
            $('nav ul li a[href*=\\#kontakt]').addClass('hover');
            $('nav ul li a').not('nav ul li a[href*=\\#kontakt]').removeClass('hover');
        } else {
            $('nav ul li a').removeClass('hover');
        }
    });

    
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$("html, body, #wrapper").css({
    height: $(window).height()
});