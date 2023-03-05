// Weather API

AOS.init({
  delay: 500,
});
const weatherIconRef = {
  "01": "fas fa-sun",
  "02": "fas fa-cloud-sun",
  "03": "fas fa-cloud",
  "04": "fas fa-cloud-meatball",
  "09": "fas fa-cloud-sun-rain",
  10: "fas fa-cloud-showers-heavy",
  11: "fas fa-poo-storm",
  13: "far fa-snowflake",
  50: "fas fa-smog",
};

const weatherEngToKR = {
  Thunderstorm: "낙뢰",
  Drizzle: "이슬비",
  Rain: "비",
  Snow: "눈",
  Mist: "옅은 안개",
  Smoke: "짙은 안개",
  Haze: "실안개",
  Dust: "황사",
  Fog: "안개",
  Sand: "짙은 황사",
  Ash: "재",
  Squall: "돌풍",
  Tornado: "회오리",
  Clear: "맑음",
  Clouds: "구름 많음",
};

const weather = document.querySelector(".weather");
const weatherIcon = weather.querySelector(".icon__weather");
const weatherUl = weather.querySelector(".weather > ul");

const API_KEY = "bd8db1f879b1c4ae727fd2582620614c";
//제주도 경도/위도
const lat = 33.431441;
const lon = 126.874237;

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
fetch(weatherUrl)
  .then((response) => response.json())
  .then((data) => {
    const newIcon = document.createElement("i");
    const newLi = document.createElement("li");

    const iconInfo = data.weather[0].icon.substr(0, 2);
    newIcon.classList.add(weatherIconRef[iconInfo].substr(0, 2));
    newIcon.classList.add(weatherIconRef[iconInfo].substr(4));
    newLi.textContent = `${Math.round(data.main.temp)}℃  ${
      weatherEngToKR[data.weather[0].main]
    }`;

    weather.prepend(newIcon);
    weatherUl.appendChild(newLi);
  });

let sea = document.querySelector(".cafe_theme_sea");
let cafe_sea = document.querySelector(".cafe_sea");
let mountain = document.querySelector(".cafe_theme_mountain");
let cafe_mountain = document.querySelector(".cafe_mountain");
let interesting = document.querySelector(".cafe_theme_interesting");
let cafe_interesting = document.querySelector(".cafe_interesting");

sea.addEventListener("click", function () {
  window.scrollBy({
    top: cafe_sea.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

mountain.addEventListener("click", function () {
  window.scrollBy({
    top: cafe_mountain.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

interesting.addEventListener("click", function () {
  window.scrollBy({
    top: cafe_interesting.getBoundingClientRect().top,
    behavior: "smooth",
  });
});
// var swiper2 = new Swiper2(".mySwiper2", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

var swiper = new Swiper(".mySwiper", {
  // spaceBetween: 30,
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
const body = document.querySelector("body");
const cafe_sea_1_text_2_modal_ = document.querySelector(
  ".cafe_sea_1_text_2_modal"
);
const cafe_sea_1_text_2_ = document.querySelector(".cafe_sea_1_text_2");

cafe_sea_1_text_2_.addEventListener("click", () => {
  cafe_sea_1_text_2_modal_.classList.toggle("show");
  if (cafe_sea_1_text_2_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_sea_1_text_2_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_sea_1_text_2_modal_) {
    cafe_sea_1_text_2_modal_.classList.toggle("show");
    if (!cafe_sea_1_text_2_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});

const cafe_sea_1_text_3_modal_ = document.querySelector(
  ".cafe_sea_1_text_3_modal"
);
const cafe_sea_1_text_3_ = document.querySelector(".cafe_sea_1_text_3");

cafe_sea_1_text_3_.addEventListener("click", () => {
  cafe_sea_1_text_3_modal_.classList.toggle("show");
  if (cafe_sea_1_text_3_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_sea_1_text_3_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_sea_1_text_3_modal_) {
    cafe_sea_1_text_3_modal_.classList.toggle("show");
    if (!cafe_sea_1_text_3_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});

const cafe_sea_1_text_4_modal_ = document.querySelector(
  ".cafe_sea_1_text_4_modal"
);
const cafe_sea_1_text_4_ = document.querySelector(".cafe_sea_1_text_4");

cafe_sea_1_text_4_.addEventListener("click", () => {
  cafe_sea_1_text_4_modal_.classList.toggle("show");
  if (cafe_sea_1_text_4_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_sea_1_text_4_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_sea_1_text_4_modal_) {
    cafe_sea_1_text_4_modal_.classList.toggle("show");
    if (!cafe_sea_1_text_4_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});

const cafe_sea_2_text_2_modal_ = document.querySelector(
  ".cafe_sea_2_text_2_modal"
);
const cafe_sea_2_text_2_ = document.querySelector(".cafe_sea_2_text_2");

cafe_sea_2_text_2_.addEventListener("click", () => {
  cafe_sea_2_text_2_modal_.classList.toggle("show");
  if (cafe_sea_2_text_2_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_sea_2_text_2_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_sea_2_text_2_modal_) {
    cafe_sea_2_text_2_modal_.classList.toggle("show");
    if (!cafe_sea_2_text_2_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});

const cafe_sea_2_text_3_modal_ = document.querySelector(
  ".cafe_sea_2_text_3_modal"
);
const cafe_sea_2_text_3_ = document.querySelector(".cafe_sea_2_text_3");

cafe_sea_2_text_3_.addEventListener("click", () => {
  cafe_sea_2_text_3_modal_.classList.toggle("show");
  if (cafe_sea_2_text_3_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_sea_2_text_3_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_sea_2_text_3_modal_) {
    cafe_sea_2_text_3_modal_.classList.toggle("show");
    if (!cafe_sea_2_text_3_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});

const cafe_sea_2_text_4_modal_ = document.querySelector(
  ".cafe_sea_2_text_4_modal"
);
const cafe_sea_2_text_4_ = document.querySelector(".cafe_sea_2_text_4");

cafe_sea_2_text_4_.addEventListener("click", () => {
  cafe_sea_2_text_4_modal_.classList.toggle("show");
  if (cafe_sea_2_text_4_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_sea_2_text_4_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_sea_2_text_4_modal_) {
    cafe_sea_2_text_4_modal_.classList.toggle("show");
    if (!cafe_sea_2_text_4_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});

const cafe_mountain_1_text_2_modal_ = document.querySelector(
  ".cafe_mountain_1_text_2_modal"
);
const cafe_mountain_1_text_2_ = document.querySelector(
  ".cafe_mountain_1_text_2"
);

cafe_mountain_1_text_2_.addEventListener("click", () => {
  cafe_mountain_1_text_2_modal_.classList.toggle("show");
  if (cafe_mountain_1_text_2_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_mountain_1_text_2_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_mountain_1_text_2_modal_) {
    cafe_mountain_1_text_2_modal_.classList.toggle("show");
    if (!cafe_mountain_1_text_2_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});

const cafe_mountain_1_text_3_modal_ = document.querySelector(
  ".cafe_mountain_1_text_3_modal"
);
const cafe_mountain_1_text_3_ = document.querySelector(
  ".cafe_mountain_1_text_3"
);

cafe_mountain_1_text_3_.addEventListener("click", () => {
  cafe_mountain_1_text_3_modal_.classList.toggle("show");
  if (cafe_mountain_1_text_3_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_mountain_1_text_3_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_mountain_1_text_3_modal_) {
    cafe_mountain_1_text_3_modal_.classList.toggle("show");
    if (!cafe_mountain_1_text_3_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});
const cafe_mountain_1_text_4_modal_ = document.querySelector(
  ".cafe_mountain_1_text_4_modal"
);
const cafe_mountain_1_text_4_ = document.querySelector(
  ".cafe_mountain_1_text_4"
);

cafe_mountain_1_text_4_.addEventListener("click", () => {
  cafe_mountain_1_text_4_modal_.classList.toggle("show");
  if (cafe_mountain_1_text_4_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_mountain_1_text_4_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_mountain_1_text_4_modal_) {
    cafe_mountain_1_text_4_modal_.classList.toggle("show");
    if (!cafe_mountain_1_text_4_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});

// mountain 2 2 모달

const cafe_mountain_2_text_2_modal_ = document.querySelector(
  ".cafe_mountain_2_text_2_modal"
);
const cafe_mountain_2_text_2_ = document.querySelector(
  ".cafe_mountain_2_text_2"
);

cafe_mountain_2_text_2_.addEventListener("click", () => {
  cafe_mountain_2_text_2_modal_.classList.toggle("show");
  if (cafe_mountain_2_text_2_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_mountain_2_text_2_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_mountain_2_text_2_modal_) {
    cafe_mountain_2_text_2_modal_.classList.toggle("show");
    if (!cafe_mountain_2_text_2_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});

const cafe_mountain_2_text_3_modal_ = document.querySelector(
  ".cafe_mountain_2_text_3_modal"
);
const cafe_mountain_2_text_3_ = document.querySelector(
  ".cafe_mountain_2_text_3"
);

cafe_mountain_2_text_3_.addEventListener("click", () => {
  cafe_mountain_2_text_3_modal_.classList.toggle("show");
  if (cafe_mountain_2_text_3_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_mountain_2_text_3_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_mountain_2_text_3_modal_) {
    cafe_mountain_2_text_3_modal_.classList.toggle("show");
    if (!cafe_mountain_2_text_3_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});
const cafe_mountain_2_text_4_modal_ = document.querySelector(
  ".cafe_mountain_2_text_4_modal"
);
const cafe_mountain_2_text_4_ = document.querySelector(
  ".cafe_mountain_2_text_4"
);

cafe_mountain_2_text_4_.addEventListener("click", () => {
  cafe_mountain_2_text_4_modal_.classList.toggle("show");
  if (cafe_mountain_2_text_4_modal_.classList.contains("show")) {
    body.style.overflowX = "hidden";
  }
});

cafe_mountain_2_text_4_modal_.addEventListener("click", (event) => {
  if (event.target === cafe_mountain_2_text_4_modal_) {
    cafe_mountain_2_text_4_modal_.classList.toggle("show");
    if (!cafe_mountain_2_text_4_modal_.classList.contains("show")) {
      body.style.overflowY = "auto";
    }
  }
});

// var mHtml = $("html");
// var page = 1;

// mHtml.animate({ scrollTop: 0 }, 10);

// $(window).on("wheel", function (e) {
//   if (mHtml.is(":animated")) return;
//   if (e.originalEvent.deltaY > 0) {
//     if (page == 8) return;
//     page++;
//   } else if (e.originalEvent.deltaY < 0) {
//     if (page == 1) return;
//     page--;
//   }
//   var posTop = (page - 2) * $(window).height();
//   mHtml.animate({ scrollTop: posTop });
// });

// if (modal.style.display === "block") {
//   modal.style.display = "none";
// }

// function seaZoomIn(e) {
//   e.target.style.transform = "scale(1)";
//   e.target.style.filter = "brightness(60%)";
//   e.target.style.transition = "all .6 ease-in-out";
// }
// function seaZoomOut(e) {
//   e.target.style.transform = "scale(1)";
//   e.target.style.filter = "brightness(100%)";
//   e.target.style.transition = "all .6s ease-in-out";
// }
// sea.addEventListener("mouseover", seaZoomIn);
// sea.addEventListener("mouseout", seaZoomOut);
// mountain.addEventListener("mouseover", seaZoomIn);
// mountain.addEventListener("mouseout", seaZoomOut);
// interesting.addEventListener("mouseover", seaZoomIn);
// interesting.addEventListener("mouseout", seaZoomOut);

const header = document.querySelector("#header");
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.setAttribute("style", "background: white;");
    header.style.transition = "all .4s ease-in-out";
  } else {
    header.setAttribute("style", "background: transparent;");
    header.style.transition = "all .4s ease-in-out";
  }
});
// const a = new TypeIt(".cafe_mountain_1_text", {
//   speed: 30,
//   waitUntilVisible: false,
//   // loop: false,
// });

// const mountain_1_type1 = document.querySelector("#mountain_1_type");
// const mountainHeight = mountain_1_type1.offsetTop;
// window.addEventListener("scroll", function () {
//   // console.log(window.scrollY);
//   console.log(mountainHeight);
//   if (window.scrollY > mountainHeight) {
//     a.go();
//   }
// });
// window.addEventListener("load", function () {
//   let aElSection = document.querySelectorAll("section");
//   let curSIdx = 0;

//   let wheelTimer;
//   window.addEventListener("wheel", function (e) {
//     clearTimeout(wheelTimer);
//     wheelTimer = setTimeout(function () {
//       if (e.deltaY < 0) doScroll(++curSIdx);
//       else doScroll(--curSIdx);
//     }, 50);
//   });

//   function doScroll(sidx) {
//     sidx = sidx < 0 ? 0 : sidx;
//     sidx = sidx > aElSection.length - 1 ? aElSection.length - 1 : sidx;

//     curSIdx = sidx;

//     aElSection[curSIdx].scrollIntoView({
//       block: "start",
//       inline: "start",
//       behavior: "smooth",
//     });
//   }
// });

const interestingImg1 = document.querySelector(".cafe_interesting_1_img");
const cafe_interesting_1_img_1 = document.querySelector(
  ".cafe_interesting_1_img_1"
);
const interestingText1 = document.querySelector(".cafe_interesting_1_text");

interestingImg1.addEventListener("click", changeInteresting);
interestingText1.addEventListener("click", changeInteresting);

function changeInteresting() {
  if (interestingText1.classList.contains("off1") == true) {
    interestingText1.classList.remove("off1");
    cafe_interesting_1_img_1.style.filter = "brightness(40%)";
    interestingImg1.classList.add("off1");
    // cafe_interesting_1_img_1.style.filter = "brightness(40%)";
  } else {
    interestingText1.classList.add("off1");
    cafe_interesting_1_img_1.style.filter = "brightness(100%)";
    interestingImg1.classList.remove("off1");
  }
}

const interestingImg2 = document.querySelector(".cafe_interesting_2_img");
const cafe_interesting_2_img_1 = document.querySelector(
  ".cafe_interesting_2_img_1"
);
const interestingText2 = document.querySelector(".cafe_interesting_2_text");

interestingImg2.addEventListener("click", changeInteresting2);
interestingText2.addEventListener("click", changeInteresting2);

function changeInteresting2() {
  if (interestingText2.classList.contains("off2") == true) {
    interestingText2.classList.remove("off2");
    cafe_interesting_2_img_1.style.filter = "brightness(40%)";
    interestingImg2classList.add("off2");
    // cafe_interesting_1_img_1.style.filter = "brightness(40%)";
  } else {
    interestingText2.classList.add("off2");
    cafe_interesting_2_img_1.style.filter = "brightness(100%)";
    interestingImg2.classList.remove("off2");
  }
}
// Return to Top
const returnToTop = document.querySelector(".returnToTop");
returnToTop.addEventListener("click", function () {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: document.body.offsetTop,
  });
});
