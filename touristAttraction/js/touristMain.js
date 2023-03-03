//import AOS
AOS.init();

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
const swiper = new Swiper(".contents .seaContent .swiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  touchRatio: 0,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//type animation

//contents toggle
// const imgBox = document.querySelectorAll(".introDiv");
// const testContent = document.querySelectorAll(".contents");

// for (let i = 0; i < imgBox.length; i += 1) {
//   imgBox[i].addEventListener("click", function () {
//     if (testContent[i].classList.contains("hide")) {
//       testContent[i].classList.remove("hide");
//       imgBox[i].classList.add("show");
//       //scroll smooth
//       const scrollMountain = document.querySelector(".mountainContent");
//       const firstTop = scrollMountain.offsetTop;
//       const scrollSea = document.querySelector(".seaContent");
//       const secondTop = scrollSea.offsetTop;
//       const scrollMuseum = document.querySelector(".museumContent");
//       const thirdTop = scrollMuseum.offsetTop;

//       if (i === 0) {
//         window.scroll({ top: firstTop, behavior: "smooth" });
//       } else if (i === 1) {
//         window.scroll({ top: secondTop, behavior: "smooth" });
//       } else if (i === 2) {
//         window.scroll({ top: thirdTop, behavior: "smooth" });
//       } else {
//         console.log("error");
//       }
//     } else {
//       imgBox[i].classList.remove("show");
//       testContent[i].classList.add("hide");
//     }
//   });
// }

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
//typeit
const typingText1 = document.querySelector(".type-h2-1");
const typingText1height = typingText1.getBoundingClientRect().height;

const typingText2 = document.querySelector(".type-h2-2");
const typeLi2 = document.querySelector(".type-li2");
const typeLi2height = typeLi2.getBoundingClientRect().height;

// const typingText3 = document.querySelector(".type-h2-3");
const typeLi3 = document.querySelector(".type-li3");
const typeLi3height = typeLi3.offsetTop;

const typing1 = new TypeIt(".type-h2-1", {
  speed: 100,
  startDelay: 700,
  afterComplete: function (instance) {
    instance.destroy();
  },
});
const typing2 = new TypeIt(".type-h2-2", {
  speed: 100,
  startDelay: 700,
});
const typing3 = new TypeIt(".type-h2-3", {
  speed: 100,
  startDelay: 700,
});

let interval = 400;
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > typingText1height) {
    typing1.go();
  }
  if (window.scrollY > typeLi2height) {
    typing2.go();
  }
  console.log(typeLi3height);
  if (window.scrollY > typeLi3height - interval) {
    typing3.go();
  }
});
// window.addEventListener("scroll", function () {
//   if (window.scrollY > typeLi2height) {
//     typing2.go();
//   }
// });

// window.addEventListener("scroll", function () {
//   if (window.scrollY > typeLi3height) {
//     typing3.go();
//   }
// });

// Return to Top
const returnToTop = document.querySelector(".returnToTop");
returnToTop.addEventListener("click", function () {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: document.body.offsetTop,
  });
});
