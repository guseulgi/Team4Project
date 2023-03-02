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

//swiper
//const swiper = new Swiper(".contents .mountainContent .swiper", {
// Optional parameters
// direction: "vertical",
// slidesPerView: 2,
// centeredSlides: true,
// spaceBetween: 10,
// loop: true,
// touchRatio: 0,

// autoplay: {
//   delay: 2000,
//   disableOnInteraction: false,
// },

//If we need pagination
// pagination: {
//   el: ".contents .swiper-pagination",
// },

// Navigation arrows
// navigation: {
//   nextEl: ".contents .swiper-button-next",
//   prevEl: ".contents .swiper-button-prev",
// },

// And if we need scrollbar
// scrollbar: {
//   el: "contents .swiper-scrollbar",
// },
// });
const swiper2 = new Swiper(".contents .seaContent .swiper", {
  // Optional parameters
  // direction: "vertical",
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//scroll
// window.onload = function () {
//   const visualMount = document.querySelector(".mountainContent");
//   visualMount.classList.add("animate");
// };

// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
//   if (window.scrollY > 300) {
//     const mountainAni = document.querySelector(".mountainText");
//     mountainAni.classList.add("animate");
//   }
// });

//contents toggle
const imgBox = document.querySelectorAll(".introDiv");
const testContent = document.querySelectorAll(".contents");

for (let i = 0; i < imgBox.length; i += 1) {
  imgBox[i].addEventListener("click", function () {
    if (testContent[i].classList.contains("hide")) {
      testContent[i].classList.remove("hide");
      imgBox[i].classList.add("show");
      //scroll smooth
      const scrollMountain = document.querySelector(".mountainContent");
      const firstTop = scrollMountain.offsetTop;
      const scrollSea = document.querySelector(".seaContent");
      const secondTop = scrollSea.offsetTop;
      const scrollMuseum = document.querySelector(".museumContent");
      const thirdTop = scrollMuseum.offsetTop;

      if (i === 0) {
        window.scroll({ top: firstTop, behavior: "smooth" });
      } else if (i === 1) {
        window.scroll({ top: secondTop, behavior: "smooth" });
      } else if (i === 2) {
        window.scroll({ top: thirdTop, behavior: "smooth" });
      } else {
        console.log("error");
      }
    } else {
      imgBox[i].classList.remove("show");
      testContent[i].classList.add("hide");
    }
  });
}

//swiper content show
const swiperImg = document.querySelectorAll(".slide");
const textDiv = document.querySelectorAll(".text");
const closeDiv = document.querySelectorAll(".close");

for (let i = 0; i < swiperImg.length; i += 1) {
  swiperImg[i].addEventListener("click", function () {
    if (textDiv[i].classList.contains("off")) {
      textDiv[i].classList.remove("off");
      textDiv[i].classList.add("on");

      closeDiv[i].addEventListener("click", function () {
        if (textDiv[i].classList.contains("on")) {
          textDiv[i].classList.remove("on");
          textDiv[i].classList.add("off");
        }
      });
    } else {
      textDiv[i].classList.remove("on");
      textDiv[i].classList.add("off");
    }
  });
}
