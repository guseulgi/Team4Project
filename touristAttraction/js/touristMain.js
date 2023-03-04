//새로고침 했을 때 스크롤 맨위로
window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

//import AOS
AOS.init();

// Mouse Cursor
document.body.requestPointerLock();
const cursor = document.querySelector(".cursor");
// 커서를 지정한 아이콘으로 변경하는 함수
let cursorMove = function (e) {
  const cursorX = e.pageX;
  const cursorY = e.pageY;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
};
window.addEventListener("mousemove", cursorMove);

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

const header = document.querySelector("header");
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

//swiper
const swiper = new Swiper(".contents .seaContent .swiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  // touchRatio: 0,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//contents scroll smooth
const imgBox = document.querySelectorAll(".introDiv ul li img");
const smoothContent1 = document.querySelector(".mountainContent");
const firstTop = smoothContent1.offsetTop;
const smoothContent2 = document.querySelector(".seaContent");
const secondTop = smoothContent2.offsetTop;
const smoothContent3 = document.querySelector(".museumContent");
const thirdTop = smoothContent3.offsetTop;

for (let i = 0; i < imgBox.length; i += 1) {
  imgBox[i].addEventListener("click", function () {
    if (i === 0) {
      window.scroll({ top: firstTop, behavior: "smooth" });
    }
    if (i === 1) {
      window.scroll({ top: secondTop, behavior: "smooth" });
    }
    if (i === 2) {
      window.scroll({ top: thirdTop, behavior: "smooth" });
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

//typeit scroll animation
const typingText1 = document.querySelector(".type-h2-1");
const typingText1height = typingText1.getBoundingClientRect().height;

const typeLi2 = document.querySelector(".type-li2");
const typeLi2height = typeLi2.getBoundingClientRect().height;

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
  afterComplete: function (instance) {
    instance.destroy();
  },
});
const typing3 = new TypeIt(".type-h2-3", {
  speed: 100,
  startDelay: 700,
  afterComplete: function (instance) {
    instance.destroy();
  },
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

// Return to Top
const returnToTop = document.querySelector(".returnToTop");
returnToTop.addEventListener("click", function () {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: document.body.offsetTop,
  });
});
