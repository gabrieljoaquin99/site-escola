const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 }
    }
});

const swiperDepo = new Swiper(".depoSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".depoSwiper .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".depoSwiper .swiper-button-next",
        prevEl: ".depoSwiper .swiper-button-prev",
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
    }
});