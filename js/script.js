$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:5,
        autoWidth: false,
        autoHeight: false,
        dot: false,
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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var ovals = document.getElementsByClassName("ovals");
if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < ovals.length; i++) {
    ovals[i].className = ovals[i].className.replace(" active-slide", "");
    }
slides[slideIndex-1].style.display = "block";
ovals[slideIndex-1].className += " active-slide";
}