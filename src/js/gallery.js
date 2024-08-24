const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,
  autoplay: {
    //autoplay
    delay: 2000,
  },
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    1440: {
      // When the window width is 600 or more
      slidesPerView: 4,
    },
  },
});
