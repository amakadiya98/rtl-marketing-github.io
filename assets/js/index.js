// circular progress 

const meter = document.getElementById("progress-circle");

const rangeValue = 75;

meter.style.strokeDashoffset = 100 - rangeValue;

if (rangeValue === "0") {
    meter.style.stroke = "none";
} else {
    meter.style.stroke = "#28411B";
}


// CAROUSEL 

$(document).ready(function () {
    const nextIcon = '<img class="nextIcon" alt="arrow icon" src="./assets/images/slider/left-icon.svg"/>'
    const prewIcon = '<img class="prewIcon" alt="arrow icon" src="./assets/images/slider/right-icon.svg"/>'
    $(".clientSlider").owlCarousel({
        items: 2,
        loop: true,
        margin: 32,
        nav: true,
        autoWidth: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        slideBy: 2,  
        navText: [
            nextIcon, prewIcon
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            830:{
                items: 2
            },
            1000: {
                items: 2,
            }
        }
    })

});
