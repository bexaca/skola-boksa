jQuery(document).ready(function () {

    $('a[href*=\\#].scroll').on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000, "swing");
    });
});
