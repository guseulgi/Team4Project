const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  //touchRatio: 0,

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
const imgBtn = document.querySelectorAll("img");
const descriptContent = document.querySelectorAll(".description-content");
const firstTop = descriptContent[0].offsetTop;
const secondTop = descriptContent[1].offsetTop;
const thirdTop = descriptContent[2].offsetTop;
const fourthTop = descriptContent[3].offsetTop;
const fifthTop = descriptContent[4].offsetTop;

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
