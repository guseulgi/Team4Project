const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  touchRatio: 0,

  // autoplay: {
  //delay: 1000,
  // disableOnInteraction: false,
  //  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const imgBtn = document.querySelectorAll(".swiper-content");
const descriptContent1 = document.querySelector(".description-content1");
const descriptContent2 = document.querySelector(".description-content2");
const descriptContent3 = document.querySelector(".description-content3");
const descriptContent4 = document.querySelector(".description-content4");
const descriptContent5 = document.querySelector(".description-content5");

const firstTop = descriptContent1.offsetTop;
const secondTop = descriptContent2.offsetTop;
const thirdTop = descriptContent3.offsetTop;
const fourthTop = descriptContent4.offsetTop;
const fifthTop = descriptContent5.offsetTop;

imgBtn[0].onclick = function () {
  window.scroll({ top: firstTop, behavior: "smooth" });
};
imgBtn[1].onclick = function () {
  window.scroll({ top: secondTop, behavior: "smooth" });
};
imgBtn[2].onclick = function () {
  window.scroll({ top: thirdTop, behavior: "smooth" });
};
imgBtn[3].onclick = function () {
  window.scroll({ top: fourthTop, behavior: "smooth" });
};
imgBtn[4].onclick = function () {
  window.scroll({ top: fifthTop, behavior: "smooth" });
};
