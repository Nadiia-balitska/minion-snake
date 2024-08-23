const swiper = new Swiper('.horisontal-swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  // Navigation arrows
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
  allowTouchMove: true,
});
