// Configuration for swiper js
var swiper = new Swiper(".swiper-container", {
    spaceBetween: 10,
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        377: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
    },
});

// Updating visibility of back-to-top button, based on position of scroll
window.onscroll = function () {
    document.getElementById("back-to-top").style.visibility = document.scrollingElement.scrollTop < 10 ? 'hidden' : 'visible'
}