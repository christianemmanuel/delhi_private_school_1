$(document).ready(function () {
    $(".home_slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 5,
        dots:true
    });
    $(".gallery_slider").owlCarousel({
        items: 5,
        loop: false,
        margin: 15
    });
    $('.dropdown-toggle').click(function(e) {
        if ($(document).width() > 768) {
        
            e.preventDefault();

            var url = $(this).attr('href');

            if (url !== '#') {
                window.location.href = url;
            }
        }   
    });
});
