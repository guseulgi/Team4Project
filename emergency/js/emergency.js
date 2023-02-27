const emgSithationSwiper = new Swiper('.emgSituation .swiper-container', {
  direction : 'horizontal',
  slidesPerView : 2,
  spaceBetween : 30,
  centeredSlides : true,
  loop : true,
  autoplay : {
    delay: 9000,
    disableOnInteraction : false,
  },
  observer: true,
  observeParents: true,
});