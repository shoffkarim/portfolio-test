var swiper = new Swiper('.slider', {
  speed: 600,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper = new Swiper('.posts-slider', {
  speed: 600,
  loop: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.posts-button-next',
    prevEl: '.posts-button-prev',
  },
});
