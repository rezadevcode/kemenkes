$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:5,
        autoWidth: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1350:{
                items:4
            }
        }
    });
});