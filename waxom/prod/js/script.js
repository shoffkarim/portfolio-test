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
let tabs = document.querySelectorAll('.tabs__item');
tabs.forEach(tab => tab.addEventListener('click', function(e){
  e.preventDefault();
  tabs.forEach(i => i.classList.remove('active'))
  tab.classList.add('active');
  let dataNum = tab.getAttribute('data-num-tab')
  let projects = document.querySelectorAll('.projects-item');
  projects.forEach(function(item) {
    if(dataNum === "1") {
      item.style.transition = "all 0.4s";
      item.style.opacity = 0;
      item.style.visibility = "visible";
      setTimeout(() => {
        item.style.display = "flex";
        item.style.opacity = 1;
      }, 400);
    } else if(item.getAttribute('data-num-project') === dataNum){
      item.style.transition = "all 0.4s";
      item.style.opacity = 0;
      item.style.visibility = "visible";
      setTimeout(() => {
        item.style.display = "flex";
        item.style.opacity = 1;
      }, 400);
    } else {
      item.style.transition = "all 0.4s";
      item.style.opacity = 0;
      item.style.visibility = "hidden";
      setTimeout(() => {
        item.style.display = "none";
      }, 400);
    }
  })
}))
