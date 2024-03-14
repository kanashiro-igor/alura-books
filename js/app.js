const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 10,
    slidesPerView: 1.5,
    centeredSlides: 'true',
    loop: 'true',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});