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
  });

let sea = document.querySelector(".cafe_theme_sea");
let cafe_sea = document.querySelector(".cafe_sea");
let mountain = document.querySelector(".cafe_theme_mountain");
let interesting = document.querySelector(".cafe_theme_interesting");

sea.addEventListener("click", function () {
  window.scrollBy({
    top: cafe_sea.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

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
window.addEventListener("load", function () {
  let aElSection = document.querySelectorAll("section");
  let curSIdx = 0;

  let wheelTimer;
  window.addEventListener("wheel", function (e) {
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(function () {
      if (e.deltaY < 0) doScroll(++curSIdx);
      else doScroll(--curSIdx);
    }, 50);
  });

  function doScroll(sidx) {
    sidx = sidx < 0 ? 0 : sidx;
    sidx = sidx > aElSection.length - 1 ? aElSection.length - 1 : sidx;

    curSIdx = sidx;

    aElSection[curSIdx].scrollIntoView({
      block: "start",
      inline: "start",
      behavior: "smooth",
    });
  }
});
