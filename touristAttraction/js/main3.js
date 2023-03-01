const swiper = new Swiper(".contents .swiper", {
  // Optional parameters
  // direction: "vertical",
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  // touchRatio: 0,

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },

  //If we need pagination
  pagination: {
    el: ".contents .swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".contents .swiper-button-next",
    prevEl: ".contents .swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: "contents .swiper-scrollbar",
  },
});

//scroll
const imgBtn = document.querySelectorAll(".swiper-img");
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

console.log(imgBtn);
console.log(imgBtn[0]);
console.log(imgBtn[1]);
console.log(imgBtn[2]);
console.log(imgBtn[3]);
console.log(imgBtn[4]);
console.log(imgBtn[5]);
console.log(imgBtn[6]);

// if (test) {
//   for (let i = 0; i <= 6; i++) {
//     imgBtn[i].onclick = function () {
//       window.scroll({ top: firstTop, behavior: "smooth" });
//     };
//   }
// } else {
//   for (let i = 0; i <= 8; i++) {
//     imgBtn[i].onclick = function () {
//       window.scroll({ top: firstTop, behavior: "smooth" });
//     };
//   }
// }

imgBtn[0].onclick = function () {
  window.scroll({ top: secondTop, behavior: "smooth" });
};
imgBtn[1].onclick = function () {
  window.scroll({ top: thirdTop, behavior: "smooth" });
};
imgBtn[2].onclick = function () {
  window.scroll({ top: fourthTop, behavior: "smooth" });
};
imgBtn[3].onclick = function () {
  window.scroll({ top: fifthTop, behavior: "smooth" });
};
imgBtn[4].onclick = function () {
  window.scroll({ top: firstTop, behavior: "smooth" });
};
imgBtn[5].onclick = function () {
  window.scroll({ top: secondTop, behavior: "smooth" });
};
imgBtn[6].onclick = function () {
  window.scroll({ top: thirdTop, behavior: "smooth" });
};

// Weather API
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
  })
  .catch((error) => {
    console.log("Weather API Error : ", error);
  });

//toggle
// const imgBox = document.querySelector(".mountainImg");
// const testContent = document.querySelector(".contents");
// console.log(imgBox);
// console.log(testContent);
// imgBox.addEventListener("click", function () {
//   if (testContent.classList.contains("hide")) {
//     testContent.classList.remove("hide");
//     imgBox.classList.add("show");
//   } else {
//     imgBox.classList.remove("show");
//     testContent.classList.add("hide");
//   }
//   console.log(imgBox);
//   console.log(testContent);
// });
