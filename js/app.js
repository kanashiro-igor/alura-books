let swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 40,
    slidesPerView: 3,
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

