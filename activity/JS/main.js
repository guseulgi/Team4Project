// SWIPER
const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disabledinInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    prevEl: ".swiper .swiper-button-prev",
    nextEl: ".swiper .swiper-button-next",
  },
});

// AutoPlay 컨트롤
function controlAutoPlay() {
  if (swiper.autoplay.running === false) {
    swiper.autoplay.start();
  } else {
    swiper.autoplay.stop();
  }
}

// Y축 전체길이 확인
window.addEventListener('scroll', function () {
  console.log(window.scrollX)
});