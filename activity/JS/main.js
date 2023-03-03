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

// 제목 클릭해서 스크롤 이동



// ARROW 클릭해서 스크롤 페이지 이동
const park981 = document.querySelector('.park981');
const runfarm = document.querySelector('.letsrunfarm');
const kitesurfing = document.querySelector('.kitesurfing');
const blueone = document.querySelector('.blueone');
const bouncesuper = document.querySelector('.bouncesuper');

const park981Height = 1066;
const runfarmHeight = 2958;
const kitesurfHeight = 5172;
const blueHeight = 7418;
const bounceHeight = 9739;

const firstarrow = document.querySelector('.firstarrow')
const secondarrow = document.querySelector('.secondarrow')
const thirdarrow = document.querySelector('.thirdarrow')
const fourtharrow = document.querySelector('.fourtharrow')
const fiftharrow = document.querySelector('.fiftharrow')


let firstarrowClick = function () {
  window.scroll({
    behavior: "smooth",
    top: park981Height,
    left: 0
  })
}

let secondarrowClick = function () {
  window.scroll({
    behavior: "smooth",
    top: runfarmHeight,
    left: 0
  })
}

let thirdarrowClick = function () {
  window.scroll({
    behavior: "smooth",
    top: kitesurfHeight,
    left: 0
  })
}

let fourtharrowClick = function () {
  window.scroll({
    behavior: "smooth",
    top: blueHeight,
    left: 0
  })
}

let fiftharrowClick = function () {
  window.scroll({
    behavior: "smooth",
    top: bounceHeight,
    left: 0
  })
}

firstarrow.addEventListener("click", firstarrowClick)
secondarrow.addEventListener("click", secondarrowClick)
thirdarrow.addEventListener("click", thirdarrowClick)
fourtharrow.addEventListener("click", fourtharrowClick)
fiftharrow.addEventListener("click", fiftharrowClick)

const firstmainbtn = document.querySelector('.firstmainbtn')
const secondmainbtn = document.querySelector('.secondmainbtn')
const thirdmainbtn = document.querySelector('.thirdmainbtn')
const fourthmainbtn = document.querySelector('.fourthmainbtn')
const fifthmainbtn = document.querySelector('.fifthmainbtn')


let firstmainClick = function () {
  window.scroll({
    behavior: "smooth",
    top: park981Height,
    left: 0
  })
}

let secondmainClick = function () {
  window.scroll({
    behavior: "smooth",
    top: runfarmHeight,
    left: 0
  })
}

let thirdmainClick = function () {
  window.scroll({
    behavior: "smooth",
    top: kitesurfHeight,
    left: 0
  })
}

let fourthmainClick = function () {
  window.scroll({
    behavior: "smooth",
    top: blueHeight,
    left: 0
  })
}

let fifthmainClick = function () {
  window.scroll({
    behavior: "smooth",
    top: bounceHeight,
    left: 0
  })
}

firstmainbtn.addEventListener("click", firstmainClick)
secondmainbtn.addEventListener("click", secondmainClick)
thirdmainbtn.addEventListener("click", thirdmainClick)
fourthmainbtn.addEventListener("click", fourthmainClick)
fifthmainbtn.addEventListener("click", fifthmainClick)





