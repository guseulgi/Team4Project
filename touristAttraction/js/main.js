//스와이퍼
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  touchRatio: 0,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  //If we need pagination
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

//스크롤 이동
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
imgBtn[5].onclick = function () {
  window.scroll({ top: firstTop, behavior: "smooth" });
};
imgBtn[1].onclick = function () {
  window.scroll({ top: secondTop, behavior: "smooth" });
};
imgBtn[6].onclick = function () {
  window.scroll({ top: secondTop, behavior: "smooth" });
};
imgBtn[2].onclick = function () {
  window.scroll({ top: thirdTop, behavior: "smooth" });
};
imgBtn[7].onclick = function () {
  window.scroll({ top: fifthTop, behavior: "smooth" });
};
imgBtn[3].onclick = function () {
  window.scroll({ top: fourthTop, behavior: "smooth" });
};
imgBtn[8].onclick = function () {
  window.scroll({ top: fourthTop, behavior: "smooth" });
};
imgBtn[4].onclick = function () {
  window.scroll({ top: fifthTop, behavior: "smooth" });
};

//weather api
let currentWeather = document.querySelector(".weather");
const getJSON = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    const status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=Jeju&appid=a73ad0577a5fca00fc7189846a3d11bd&units=metric",
  function (err, data) {
    if (err !== null) {
      currentWeather.innerHTML = `예상치 못한 오류 발생. ${err}`;
    } else {
      currentWeather.innerHTML = `현재
      온도 ${data.main.temp}° <br />
      풍속 ${data.wind.speed}m/s
      습도 ${data.main.humidity}%`;
    }
  }
);
