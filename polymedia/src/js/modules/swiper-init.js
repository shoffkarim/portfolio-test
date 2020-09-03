/* eslint-disable no-unused-vars */
import Swiper, { Navigation, Autoplay, Lazy } from 'swiper';

Swiper.use([Navigation, Autoplay, Lazy]);

const headerSwiper = new Swiper('.header-slider', {
  loop: true,
  lazy: {
    loadPrevNext: true
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
