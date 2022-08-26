const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("header").style.background = "rgba(45,99,211,0.71)";
    } else {
        document.getElementById("header").style.background = "rgba(255, 255, 255, 0.09)";
    }
}

